#!/usr/bin/env python3
"""Genera los iconos PNG del juego sin dependencias externas.

iOS no acepta SVG como apple-touch-icon, así que hacen falta PNG de verdad.
Uso: python3 scripts/icons.py
"""

import math
import struct
import zlib
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
SALIDA = RAIZ / 'icons'

# Paleta agro
FONDO_ARRIBA = (0x1b, 0x3d, 0x24)
FONDO_ABAJO = (0x0b, 0x1a, 0x10)
HOJA = (0x7b, 0xc0, 0x43)
TRIGO = (0xe0, 0xb1, 0x3a)

MUESTRAS = 3  # supermuestreo por eje (antialiasing)


def mezclar(fondo, color, alfa):
    return tuple(round(f + (c - f) * alfa) for f, c in zip(fondo, color))


def color_en(u, v):
    """Color del icono en coordenadas normalizadas (0..1)."""
    # fondo con degradado vertical
    base = tuple(
        round(a + (b - a) * v) for a, b in zip(FONDO_ARRIBA, FONDO_ABAJO)
    )

    # coordenadas centradas, con la zona segura del maskable (80 %)
    x = (u - 0.5) / 0.40
    y = (v - 0.5) / 0.40

    # tres órbitas elípticas rotadas: el átomo
    for grados in (0, 60, 120):
        t = math.radians(grados)
        xr = x * math.cos(t) + y * math.sin(t)
        yr = -x * math.sin(t) + y * math.cos(t)
        d = math.hypot(xr / 0.92, yr / 0.36)
        if abs(d - 1) < 0.085:
            base = mezclar(base, HOJA, 1.0)

    # electrones sobre las órbitas
    for grados in (0, 120, 240):
        t = math.radians(grados)
        ex, ey = 0.92 * math.cos(t), 0.92 * math.sin(t)
        if math.hypot(x - ex, y - ey) < 0.11:
            base = mezclar(base, HOJA, 1.0)

    # núcleo
    if math.hypot(x, y) < 0.22:
        base = mezclar(base, TRIGO, 1.0)

    return base


def generar(tamano, destino):
    filas = []
    for py in range(tamano):
        fila = bytearray([0])  # filtro 0 (sin filtro)
        for px in range(tamano):
            acum = [0, 0, 0]
            for sy in range(MUESTRAS):
                for sx in range(MUESTRAS):
                    u = (px + (sx + 0.5) / MUESTRAS) / tamano
                    v = (py + (sy + 0.5) / MUESTRAS) / tamano
                    c = color_en(u, v)
                    for i in range(3):
                        acum[i] += c[i]
            total = MUESTRAS * MUESTRAS
            fila.extend(round(c / total) for c in acum)
        filas.append(bytes(fila))

    crudo = b''.join(filas)

    def trozo(tipo, datos):
        return (struct.pack('>I', len(datos)) + tipo + datos
                + struct.pack('>I', zlib.crc32(tipo + datos) & 0xffffffff))

    png = (b'\x89PNG\r\n\x1a\n'
           + trozo(b'IHDR', struct.pack('>IIBBBBB', tamano, tamano, 8, 2, 0, 0, 0))
           + trozo(b'IDAT', zlib.compress(crudo, 9))
           + trozo(b'IEND', b''))
    destino.write_bytes(png)
    print(f'{destino.relative_to(RAIZ)} — {tamano}×{tamano}, {len(png) / 1024:.1f} kB')


if __name__ == '__main__':
    SALIDA.mkdir(exist_ok=True)
    for tamano, nombre in ((180, 'icon-180.png'), (192, 'icon-192.png'), (512, 'icon-512.png')):
        generar(tamano, SALIDA / nombre)
