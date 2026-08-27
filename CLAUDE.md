# Química Quest

Juego web de niveles (tipo cuestionario) para repasar **estructura y propiedades de la
materia** en sistemas agropecuarios y ciencias ambientales.

Fuentes del contenido (29 niveles, 240 preguntas), organizadas en dos temas:

- la **lámina** de la materia (las 8 secciones del póster);
- los **apuntes de cátedra del Tema 1** — de ahí sale el orden de los niveles 1 a 15:
  teoría atomista → Dalton → Thomson → Rutherford → Bohr → mecano-cuántico →
  números cuánticos → configuración electrónica → capa de valencia → propiedades →
  isótopos → aplicaciones;
- el **Trabajo Práctico de Aula N° 1**, que da los niveles 16 a 18 (ejercitación);
- los **apuntes del Tema 2** (elementos químicos), que dan los niveles 19 a 26: intentos
  de clasificación → tabla moderna → configuración y ubicación → octeto → bloques y
  familias → propiedades periódicas → elementos esenciales → alimentos y ambiente;
- el **Trabajo Práctico de Aula N° 2**, que da los niveles 27 a 29.

Las unidades se declaran en `TEMAS` (en `data/levels.js`): cada una es una carpeta del
mapa, con su rango de ids (`desde`/`hasta`). Al sumar una unidad nueva hay que agregar
su entrada ahí.

Al agregar contenido nuevo, respetar esa progresión y citar los datos como están en la
fuente (por ejemplo, el apunte asigna p<sub>x</sub> → m = −1, p<sub>y</sub> → 0,
p<sub>z</sub> → +1, y sostiene que Z determina las propiedades químicas y A las físicas).

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
index.html              todas las pantallas (inicio, unidades, niveles, juego, resultado)
styles.css              estilos, mobile-first, variables CSS
js/app.js               lógica del juego y navegación entre pantallas
js/storage.js           progreso en localStorage (estrellas, mejor puntaje, desbloqueo)
js/sfx.js               sonidos sintetizados (WebAudio) + vibración
data/levels.js          ⭐ preguntas de cada nivel
data/teoria.js          ⭐ repaso teórico en pasos, por nivel
data/figuras.js         figuras SVG de la teoría (sin imágenes externas)
sw.js                   service worker (juego offline)
manifest.webmanifest    PWA
scripts/check.mjs       validador del contenido
scripts/smoke.mjs       prueba de humo + auditoría en Chromium por CDP
scripts/serve.mjs       servidor estático de desarrollo
scripts/icons.py        genera los PNG del icono (sin dependencias)
```

## Diseño y accesibilidad (no romper)

- Paleta **agro** definida como variables en `:root`: verdes de cultivo, tierra y
  trigo. Todo par texto/fondo tiene que cumplir contraste AA (≥ 4,5:1).
- El `viewport` **no** lleva `maximum-scale`: bloquear el zoom es una barrera.
- El `apple-touch-icon` tiene que ser **PNG**: iOS ignora los SVG. Si cambia el
  icono, correr `python3 scripts/icons.py`.
- Las preguntas numéricas se responden con el botón **Responder**: el teclado
  numérico del celular no trae tecla de envío.
- Estrellas y vidas llevan `aria-label`, porque son emojis.

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
- **No hay niveles bloqueados**: se entra por carpetas (una por unidad) y desde ahí
  se juega cualquier nivel en el orden que se quiera.
- Una **unidad** entera sí se puede bloquear: se le pone `bloqueada: true` a su
  entrada en `TEMAS`. La carpeta sigue apareciendo, con candado y sin poder
  abrirse. Hoy está así la unidad 1. Para habilitarla, borrar esa línea.
- Las preguntas y las opciones se mezclan en cada partida.

## Convenciones

- Todo el texto visible y los comentarios, en español rioplatense.
- Los textos de las preguntas admiten HTML simple (`<b>`, `<sup>`, `<sub>`) y se
  insertan con `innerHTML`: el contenido es estático y lo escribimos nosotros.
- Si se cambian archivos del juego, subir la versión de `CACHE` en `sw.js` para que
  los celulares que ya lo abrieron reciban la versión nueva.
- Skills del proyecto: `agregar-preguntas` (contenido) y `probar-el-juego` (pruebas).

## Teoría de los niveles

Cada nivel puede tener un repaso en `TEORIA` (`data/teoria.js`), como array de
pasos con `titulo`, `texto` (HTML simple), y opcionalmente `figura`, `dato` y
`ejemplo`. El botón del libro aparece solo si el nivel tiene entrada ahí.

Las figuras van en `data/figuras.js`, escritas a mano en SVG: usan las variables
de la paleta (`var(--accent)`, `var(--txt-dim)`…) y un `viewBox` para escalar.
No se pueden usar imágenes externas —la red bloquea los CDN y el juego tiene que
andar sin conexión—, así que cualquier diagrama nuevo se dibuja acá.

## Deploy

Push a `main` → GitHub Actions publica el repo tal cual en GitHub Pages
(`.github/workflows/deploy.yml`). No hay paso de build.
