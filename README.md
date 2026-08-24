# ⚛️ Química Quest

Juego de niveles para repasar **química general e inorgánica** en sistemas agropecuarios
y ciencias ambientales. 29 niveles, 240 preguntas, hecho para jugar desde el celular.

El contenido sale de la lámina de la materia, de los **apuntes de cátedra** y de los
**Trabajos Prácticos de Aula** de los temas 1 (estructura de la materia) y 2 (elementos
químicos).

## Cómo se juega

1. **Mapa de niveles**: empezás con el nivel 1 desbloqueado; cada nivel se abre cuando
   ganás al menos una estrella en el anterior.
2. Dentro del nivel tenés **3 vidas** ❤️❤️❤️ y preguntas de opción múltiple,
   verdadero/falso y de cálculo.
3. Cada respuesta muestra **la explicación**, así que se aprende aunque te equivoques.
4. Al terminar ganás estrellas: **60 % → ⭐, 80 % → ⭐⭐, 100 % → ⭐⭐⭐**.
5. El progreso queda guardado en el teléfono.

## Los niveles

### Tema 1 · Estructura de la materia

Siguen el orden del apunte: primero la historia de los modelos atómicos, después la
estructura y sus propiedades, y al final las aplicaciones y la ejercitación del TP.

| # | Nivel | Tema |
|---|-------|------|
| 1 | Los primeros átomos | Teoría atomista y postulados de Dalton |
| 2 | Thomson | Electrización, rayos catódicos, electrón y protón |
| 3 | Rutherford | Radiactividad, rayos X, lámina de oro, neutrón y positrón |
| 4 | Partículas | Protón, neutrón y electrón: masas y cargas |
| 5 | Bohr | Cuantos de Planck, fotones de Einstein, órbitas y Sommerfeld |
| 6 | Mecano-cuántico | De Broglie, Heisenberg, Schrödinger y el orbital |
| 7 | Números cuánticos | n, l, mₗ y mₛ; 2n², formas y orientaciones |
| 8 | Configuración e⁻ | Aufbau, diagrama de Moeller, Pauli y Hund |
| 9 | Diagrama de orbitales | Casillas, espines y los cuatro números por electrón |
| 10 | Capa de valencia | Del electrón de valencia al grupo y período |
| 11 | Z, A e iones | Identidad, masa, aniones, cationes e isoelectrónicos |
| 12 | Isótopos | Isótopos, isóbaros, isótonos y abundancia |
| 13 | Masa promedio | Masa atómica promedio ponderada |
| 14 | Radiactividad | Emisiones α, β, γ, penetración y evaluación de riesgo |
| 15 | Agro y ambiente | Trazadores, irradiación, alimentos y agua |
| 16 | TP · Partículas | Práctica: contar partículas y escribir la notación |
| 17 | TP · Isótopos | Práctica: clasificar núclidos y núclidos de uso agronómico |
| 18 | TP · Problemas | Práctica: cobalto-60, fertilizante con ¹⁵N y xenón |

### Tema 2 · Elementos químicos

| # | Nivel | Tema |
|---|-------|------|
| 19 | Ordenar los elementos | Döbereiner, Newlands, Mendeleiev y Moseley |
| 20 | La tabla moderna | Períodos, grupos y nomenclatura IUPAC |
| 21 | Ubicar en la tabla | De la configuración electrónica al grupo y período |
| 22 | Teoría del octeto | Lewis, iones y carácter metálico |
| 23 | Bloques y familias | Representativos, transición y bloques s, p, d, f |
| 24 | Propiedades periódicas | Radio, electronegatividad, ionización y afinidad |
| 25 | Elementos esenciales | Nutrición vegetal y animal |
| 26 | Alimentos y ambiente | Biodisponibilidad, contaminantes y manejo |
| 27 | TP 2 · Iones | Práctica: cargas y configuraciones |
| 28 | TP 2 · Ubicación | Práctica: grupo, período y bloque |
| 29 | TP 2 · Comparar | Práctica: tendencias periódicas |

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
