---
name: probar-el-juego
description: Correr, probar y sacar capturas del juego Química Quest. Usar cuando se pida "probá el juego", "sacá una captura", "levantá el server", "andá a ver si funciona" o al terminar cualquier cambio de código o de contenido.
---

# Probar el juego

Este proyecto no tiene dependencias: no se corre `npm install` (además, en las
sesiones remotas el registro de npm está bloqueado). Todo se prueba con Node y el
Chromium que ya viene instalado.

## 1. Validar el contenido

```bash
node scripts/check.mjs
```

Chequea niveles e ids consecutivos, tipos de pregunta, índices de respuesta,
opciones repetidas, preguntas duplicadas y tolerancias faltantes.

## 2. Prueba de humo en el navegador

```bash
node scripts/smoke.mjs
# con capturas de pantalla:
node scripts/smoke.mjs --shots /tmp/shots
```

Levanta un servidor estático, abre Chromium headless por CDP emulando un celular
(390 × 844), juega el nivel 1 completo respondiendo bien y verifica: carga sin
errores, mapa con todos los niveles, bloqueo/desbloqueo, vidas, 3 estrellas con
todo correcto, persistencia en localStorage y que no haya scroll horizontal.

Termina con código 1 si algo falla. Si se agregaron pantallas o mecánicas nuevas,
agregar la verificación correspondiente en `scripts/smoke.mjs`.

Después de correr con `--shots`, mirar las capturas con la herramienta Read y
mandárselas al usuario con SendUserFile: es la forma de que vea el cambio desde
el celular sin tener que desplegar.

## 3. Probarlo a mano

```bash
node --run serve      # o: python3 -m http.server 8080
```

Los módulos ES no funcionan con `file://`: hay que servirlo por HTTP.

## Notas del entorno

- El binario de Chromium está en `/opt/pw-browsers/chromium` (variable
  `CHROME_PATH` para pisarlo). Playwright **no** está instalado ni se puede
  instalar; `scripts/smoke.mjs` habla CDP directo con `WebSocket`.
- El juego se publica solo en GitHub Pages al pushear a `main`
  (`.github/workflows/deploy.yml`).
- Si se cambian archivos del juego, subir el número de versión de `CACHE` en
  `sw.js`, si no los celulares que ya lo abrieron siguen viendo la versión vieja.
