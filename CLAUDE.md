# Química Quest

Juego web de niveles (tipo cuestionario) para repasar **estructura y propiedades de la
materia** en sistemas agropecuarios y ciencias ambientales. El contenido sale de la
lámina de la materia: 8 secciones → 8 niveles.

Pensado para usarse **desde el celular**: mobile-first, PWA instalable y jugable sin
conexión.

## Restricciones del entorno (importante)

- **No hay npm.** En las sesiones remotas `registry.npmjs.org` responde 403, así que
  no se pueden instalar dependencias. El proyecto es **cero dependencias** a propósito:
  HTML + CSS + módulos ES nativos. No proponer React, Vite, Tailwind ni librerías.
- **Tampoco hay CDNs** (jsdelivr, unpkg, esm.sh están bloqueados). Todo lo que use el
  juego tiene que estar en el repo.
- No hay build: lo que está en el repo es exactamente lo que se publica.

## Estructura

```
index.html              todas las pantallas (inicio, mapa, juego, resultado)
styles.css              estilos, mobile-first, variables CSS
js/app.js               lógica del juego y navegación entre pantallas
js/storage.js           progreso en localStorage (estrellas, mejor puntaje, desbloqueo)
js/sfx.js               sonidos sintetizados (WebAudio) + vibración
data/levels.js          ⭐ TODO el contenido: niveles y preguntas
sw.js                   service worker (juego offline)
manifest.webmanifest    PWA
scripts/check.mjs       validador del contenido
scripts/smoke.mjs       prueba de humo en Chromium por CDP
scripts/serve.mjs       servidor estático de desarrollo
```

## Comandos

```bash
node --run check     # valida data/levels.js
node --run smoke     # juega el nivel 1 en Chromium headless y verifica
node --run test      # los dos
node --run serve     # http://localhost:8080
```

Correr al menos `check` después de tocar contenido y `smoke` después de tocar código.

## Reglas del juego (por si hay que ajustarlas)

- 3 vidas por nivel; cada error descuenta una.
- Puntaje: 100 por acierto + 20 extra por cada punto de racha.
- Estrellas: 100 % → 3, ≥ 80 % → 2, ≥ 60 % → 1. Con menos de 60 % no se pasa.
- Un nivel se desbloquea cuando el anterior tiene al menos 1 estrella.
- Las preguntas y las opciones se mezclan en cada partida.

## Convenciones

- Todo el texto visible y los comentarios, en español rioplatense.
- Los textos de las preguntas admiten HTML simple (`<b>`, `<sup>`, `<sub>`) y se
  insertan con `innerHTML`: el contenido es estático y lo escribimos nosotros.
- Si se cambian archivos del juego, subir la versión de `CACHE` en `sw.js` para que
  los celulares que ya lo abrieron reciban la versión nueva.
- Skills del proyecto: `agregar-preguntas` (contenido) y `probar-el-juego` (pruebas).

## Deploy

Push a `main` → GitHub Actions publica el repo tal cual en GitHub Pages
(`.github/workflows/deploy.yml`). No hay paso de build.
