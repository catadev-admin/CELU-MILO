# ⚛️ Química Quest

Juego de niveles para repasar **estructura y propiedades de la materia** en sistemas
agropecuarios y ciencias ambientales. 8 niveles, 61 preguntas, hecho para jugar desde
el celular.

## Cómo se juega

1. **Mapa de niveles**: empezás con el nivel 1 desbloqueado; cada nivel se abre cuando
   ganás al menos una estrella en el anterior.
2. Dentro del nivel tenés **3 vidas** ❤️❤️❤️ y preguntas de opción múltiple,
   verdadero/falso y de cálculo.
3. Cada respuesta muestra **la explicación**, así que se aprende aunque te equivoques.
4. Al terminar ganás estrellas: **60 % → ⭐, 80 % → ⭐⭐, 100 % → ⭐⭐⭐**.
5. El progreso queda guardado en el teléfono.

## Los niveles

| # | Nivel | Tema |
|---|-------|------|
| 1 | El átomo | Partículas subatómicas y núcleo |
| 2 | Z y A | Número atómico y número másico |
| 3 | Isótopos | Isótopos, isóbaros e isótonos |
| 4 | Masa promedio | Masa atómica promedio ponderada |
| 5 | Números cuánticos | Modelo mecánico-cuántico y orbitales |
| 6 | Configuración e⁻ | Aufbau, Pauli y Hund |
| 7 | Radiactividad | Emisiones α, β, γ y penetración |
| 8 | Agro y ambiente | Aplicaciones en alimentos, suelos y ambiente |

## Instalarlo en el celular

Abrí la página publicada y elegí **"Agregar a pantalla de inicio"**. Queda como una app
y funciona sin conexión.

## Para desarrollar

No necesita instalar nada (cero dependencias, sin build):

```bash
node --run serve     # levanta http://localhost:8080
node --run check     # valida el contenido de data/levels.js
node --run smoke     # prueba el juego en Chromium headless
```

Todas las preguntas están en un solo archivo: [`data/levels.js`](data/levels.js).

Al pushear a `main` se publica solo en GitHub Pages.
