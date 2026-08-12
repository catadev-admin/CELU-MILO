---
name: agregar-preguntas
description: Agregar, editar o corregir preguntas y niveles del juego Química Quest. Usar cuando se pida "sumar preguntas", "agregar un nivel", "cambiar una respuesta", "hacer más difícil un nivel" o cargar contenido nuevo de química al cuestionario.
---

# Agregar preguntas y niveles

Todo el contenido del juego vive en un solo archivo: `data/levels.js`.
No hay build ni base de datos: se edita el archivo y listo.

## Formato de una pregunta

Hay tres tipos. **Siempre** incluir `why` (la explicación que se muestra al responder,
es lo que hace que el juego enseñe y no sólo evalúe).

```js
// Opción múltiple: answer es el ÍNDICE (0, 1, 2...) de la opción correcta
{
  type: 'mc',
  q: '¿Qué partícula tiene carga <b>+1</b>?',
  options: ['Electrón', 'Protón', 'Neutrón', 'Positrón'],
  answer: 1,
  why: 'El protón (p<sup>+</sup>) tiene carga +1 y está en el núcleo.',
}

// Verdadero / falso
{ type: 'vf', q: 'El neutrón no tiene carga.', answer: true, why: '…' }

// Numérica: tol es la tolerancia aceptada (obligatoria si la respuesta es decimal)
{ type: 'num', q: '¿Cuántos neutrones tiene el <sup>31</sup><sub>15</sub>P?',
  answer: 16, unit: 'n⁰', why: 'N = A − Z = 31 − 15 = 16.' }
```

Se puede usar HTML simple en `q`, `options` y `why`: `<b>`, `<sup>`, `<sub>`.
Es la forma de escribir <sup>14</sup><sub>6</sub>C, p<sup>+</sup>, 2p<sup>3</sup>, etc.

## Formato de un nivel

```js
{
  id: 9,                        // consecutivo, sin saltos
  title: 'Enlaces',             // corto: entra en la tarjeta del mapa
  subtitle: 'Iónico, covalente y metálico',
  icon: '🔗',                   // un emoji
  color: '#8b5cf6',             // hex de 6 dígitos, se ve en el borde de la tarjeta
  questions: [ /* mínimo 5 */ ],
}
```

## Reglas del contenido

- Mínimo 5 preguntas por nivel; 7 u 8 es lo habitual (con 8, cada error cuesta ~12 %).
- Las opciones incorrectas tienen que ser plausibles, no obviamente absurdas.
- No repetir el texto de una pregunta ya existente (el validador lo detecta).
- Mezclar tipos dentro del nivel: `mc` para conceptos, `num` para cálculos, `vf` para
  desarmar confusiones típicas.
- Escribir en español rioplatense, igual que el resto del juego.
- Los decimales se escriben con coma en los textos (35,45 u) pero el campo `answer`
  de las `num` es un número JS con punto (`35.45`).

## Después de editar, siempre

```bash
node scripts/check.mjs     # valida formato, índices, duplicados
node scripts/smoke.mjs     # juega el nivel 1 en Chromium y verifica que ande
```

Si se agregó un nivel nuevo, no hace falta tocar nada más: el mapa, el total de
estrellas y el desbloqueo se calculan solos a partir de `LEVELS`.
