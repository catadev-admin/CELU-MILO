// Figuras de la teoría, dibujadas a mano en SVG.
//
// No hay imágenes externas: la red bloquea los CDN y el juego tiene que andar
// sin conexión. Cada figura usa las variables CSS de la paleta, así que se
// adapta sola si cambian los colores, y escala con el ancho del celular.
//
// Para agregar una: sumá una entrada acá y referenciala desde data/teoria.js
// con `figura: 'nombre'`.

const base = 'font-family="system-ui, sans-serif" fill="var(--txt)"';

export const FIGURAS = {
  // ── Nivel 1: de los griegos a Dalton ────────────────────────────
  'linea-tiempo': `
<svg viewBox="0 0 320 130" role="img" aria-label="Línea de tiempo: Demócrito, Aristóteles y Dalton">
  <line x1="20" y1="70" x2="300" y2="70" stroke="var(--line)" stroke-width="3"/>
  <g ${base} font-size="9" text-anchor="middle">
    <circle cx="55" cy="70" r="7" fill="var(--accent)"/>
    <text x="55" y="52">Demócrito</text>
    <text x="55" y="92" fill="var(--txt-dim)">s. V a.C.</text>
    <text x="55" y="104" fill="var(--txt-dim)">“átomo”</text>

    <circle cx="150" cy="70" r="7" fill="var(--bad)"/>
    <text x="150" y="52">Aristóteles</text>
    <text x="150" y="92" fill="var(--txt-dim)">s. IV a.C.</text>
    <text x="150" y="104" fill="var(--txt-dim)">niega el átomo</text>

    <circle cx="265" cy="70" r="7" fill="var(--accent)"/>
    <text x="265" y="52">Dalton</text>
    <text x="265" y="92" fill="var(--txt-dim)">1803</text>
    <text x="265" y="104" fill="var(--txt-dim)">teoría atómica</text>
  </g>
  <text x="160" y="122" ${base} font-size="8.5" fill="var(--txt-dim)" text-anchor="middle">
    ≈ 1700 años sin base experimental
  </text>
</svg>`,

  // ── Nivel 2: Thomson ────────────────────────────────────────────
  'rayos-catodicos': `
<svg viewBox="0 0 320 150" role="img" aria-label="Tubo de rayos catódicos: el rayo se desvía hacia la placa positiva">
  <rect x="30" y="45" width="250" height="60" rx="30" fill="none" stroke="var(--line)" stroke-width="3"/>
  <rect x="34" y="62" width="10" height="26" fill="var(--bad)"/>
  <rect x="266" y="62" width="10" height="26" fill="var(--accent)"/>
  <line x1="44" y1="75" x2="200" y2="75" stroke="var(--accent-2)" stroke-width="2.5" stroke-dasharray="4 3"/>
  <path d="M200 75 L266 58" stroke="var(--accent-2)" stroke-width="2.5"/>
  <rect x="180" y="30" width="60" height="8" fill="var(--accent)" opacity=".85"/>
  <rect x="180" y="112" width="60" height="8" fill="var(--bad)" opacity=".85"/>
  <g ${base} font-size="9">
    <text x="24" y="120" fill="var(--bad)">cátodo −</text>
    <text x="248" y="120" fill="var(--accent)">ánodo +</text>
    <text x="205" y="26" fill="var(--accent)">placa +</text>
    <text x="205" y="132" fill="var(--bad)">placa −</text>
    <text x="90" y="66" fill="var(--accent-2)">rayo catódico</text>
  </g>
  <text x="160" y="146" ${base} font-size="8.5" fill="var(--txt-dim)" text-anchor="middle">
    Se desvía hacia lo positivo → el rayo tiene carga negativa
  </text>
</svg>`,

  budin: `
<svg viewBox="0 0 320 150" role="img" aria-label="Modelo de Thomson: budín con pasas">
  <circle cx="160" cy="72" r="58" fill="var(--accent)" opacity=".22" stroke="var(--accent)" stroke-width="2"/>
  <g fill="var(--bad)">
    <circle cx="132" cy="52" r="6"/><circle cx="182" cy="46" r="6"/>
    <circle cx="120" cy="88" r="6"/><circle cx="160" cy="76" r="6"/>
    <circle cx="196" cy="90" r="6"/><circle cx="150" cy="108" r="6"/>
  </g>
  <g ${base} font-size="9">
    <text x="222" y="50" fill="var(--accent)">masa con</text>
    <text x="222" y="62" fill="var(--accent)">carga +</text>
    <text x="222" y="96" fill="var(--bad)">electrones</text>
    <text x="222" y="108" fill="var(--bad)">(las pasas)</text>
  </g>
  <text x="160" y="144" ${base} font-size="8.5" fill="var(--txt-dim)" text-anchor="middle">
    Átomo macizo, estático y eléctricamente neutro
  </text>
</svg>`,

  // ── Nivel 3: Rutherford ─────────────────────────────────────────
  'lamina-oro': `
<svg viewBox="0 0 320 160" role="img" aria-label="Experimento de la lámina de oro: casi todas las partículas alfa la atraviesan">
  <rect x="16" y="68" width="34" height="24" rx="4" fill="var(--card-hi)" stroke="var(--line)"/>
  <text x="33" y="106" ${base} font-size="8" text-anchor="middle" fill="var(--txt-dim)">fuente α</text>
  <rect x="150" y="20" width="7" height="120" fill="var(--accent-2)" opacity=".55"/>
  <text x="153" y="152" ${base} font-size="8" text-anchor="middle" fill="var(--accent-2)">lámina de oro</text>
  <g stroke="var(--accent)" stroke-width="2" fill="none">
    <line x1="50" y1="76" x2="300" y2="76"/>
    <line x1="50" y1="84" x2="300" y2="84"/>
  </g>
  <path d="M50 80 L150 66 L250 34" stroke="var(--bad)" stroke-width="2" fill="none"/>
  <path d="M50 80 L152 80 L70 120" stroke="var(--bad)" stroke-width="2" fill="none"/>
  <circle cx="153" cy="80" r="5" fill="var(--bad)"/>
  <g ${base} font-size="8.5">
    <text x="238" y="70" fill="var(--accent)">la mayoría pasa de largo</text>
    <text x="196" y="30" fill="var(--bad)">algunas se desvían</text>
    <text x="60" y="134" fill="var(--bad)">y unas pocas rebotan</text>
  </g>
</svg>`,

  radiaciones: `
<svg viewBox="0 0 320 160" role="img" aria-label="Poder de penetración de las radiaciones alfa, beta y gamma">
  <g stroke-width="10" opacity=".9">
    <rect x="120" y="26" width="7" height="110" fill="#d9c9a3"/>
    <rect x="190" y="26" width="9" height="110" fill="#9aa5ad"/>
    <rect x="258" y="26" width="16" height="110" fill="#6b7076"/>
  </g>
  <g ${base} font-size="8" text-anchor="middle" fill="var(--txt-dim)">
    <text x="123" y="150">papel</text>
    <text x="194" y="150">aluminio</text>
    <text x="266" y="150">plomo</text>
  </g>
  <g stroke-width="3" fill="none">
    <line x1="20" y1="50" x2="118" y2="50" stroke="var(--bad)"/>
    <line x1="20" y1="82" x2="188" y2="82" stroke="var(--accent-2)"/>
    <line x1="20" y1="114" x2="300" y2="114" stroke="var(--accent)"/>
  </g>
  <g ${base} font-size="11" font-weight="700">
    <text x="6" y="54" fill="var(--bad)">α</text>
    <text x="6" y="86" fill="var(--accent-2)">β</text>
    <text x="6" y="118" fill="var(--accent)">γ</text>
  </g>
  <text x="160" y="18" ${base} font-size="8.5" fill="var(--txt-dim)" text-anchor="middle">
    Cuanto más penetra, más blindaje hace falta
  </text>
</svg>`,

  // ── Nivel 4: partículas ─────────────────────────────────────────
  atomo: `
<svg viewBox="0 0 320 180" role="img" aria-label="Partes del átomo: núcleo con protones y neutrones, y electrones en la región extranuclear">
  <circle cx="130" cy="90" r="72" fill="none" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
  <circle cx="130" cy="90" r="46" fill="none" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
  <g>
    <circle cx="118" cy="82" r="9" fill="var(--bad)"/>
    <circle cx="136" cy="84" r="9" fill="var(--txt-dim)"/>
    <circle cx="126" cy="98" r="9" fill="var(--bad)"/>
    <circle cx="143" cy="98" r="9" fill="var(--txt-dim)"/>
  </g>
  <circle cx="130" cy="44" r="6" fill="var(--accent)"/>
  <circle cx="202" cy="90" r="6" fill="var(--accent)"/>
  <circle cx="94" cy="140" r="6" fill="var(--accent)"/>
  <g ${base} font-size="9">
    <line x1="150" y1="70" x2="216" y2="46" stroke="var(--line)"/>
    <text x="220" y="44" fill="var(--bad)">protón (p⁺)</text>
    <text x="220" y="56" fill="var(--txt-dim)" font-size="8">carga +1</text>
    <line x1="152" y1="104" x2="216" y2="122" stroke="var(--line)"/>
    <text x="220" y="126" fill="var(--txt-dim)">neutrón (n⁰)</text>
    <text x="220" y="138" fill="var(--txt-dim)" font-size="8">carga 0</text>
    <text x="196" y="82" fill="var(--accent)">electrón (e⁻)</text>
  </g>
  <text x="130" y="172" ${base} font-size="8.5" fill="var(--txt-dim)" text-anchor="middle">
    El núcleo concentra ≈ 99,95 % de la masa
  </text>
</svg>`,

  // ── Nivel 5: Bohr ───────────────────────────────────────────────
  'bohr-saltos': `
<svg viewBox="0 0 320 170" role="img" aria-label="Modelo de Bohr: el electrón salta de nivel al absorber o emitir energía">
  <circle cx="150" cy="85" r="10" fill="var(--accent-2)"/>
  <g fill="none" stroke="var(--line)" stroke-width="1.5">
    <circle cx="150" cy="85" r="32"/><circle cx="150" cy="85" r="52"/><circle cx="150" cy="85" r="72"/>
  </g>
  <g ${base} font-size="8" fill="var(--txt-dim)">
    <text x="150" y="50" text-anchor="middle">n=1</text>
    <text x="150" y="30" text-anchor="middle">n=2</text>
    <text x="150" y="10" text-anchor="middle">n=3</text>
  </g>
  <circle cx="118" cy="85" r="6" fill="var(--accent)"/>
  <circle cx="78" cy="85" r="6" fill="var(--accent)" opacity=".45"/>
  <path d="M112 95 L84 95" stroke="var(--accent)" stroke-width="2" marker-end="url(#f1)"/>
  <path d="M84 75 L112 75" stroke="var(--accent-2)" stroke-width="2" marker-end="url(#f2)"/>
  <defs>
    <marker id="f1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0 0 L6 3 L0 6 z" fill="var(--accent)"/></marker>
    <marker id="f2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0 0 L6 3 L0 6 z" fill="var(--accent-2)"/></marker>
  </defs>
  <g ${base} font-size="8.5">
    <text x="10" y="112" fill="var(--accent)">absorbe → sube</text>
    <text x="10" y="64" fill="var(--accent-2)">emite → baja</text>
  </g>
  <text x="160" y="162" ${base} font-size="8.5" fill="var(--txt-dim)" text-anchor="middle">
    La energía está cuantizada: sólo ciertas órbitas son posibles
  </text>
</svg>`,

  // ── Nivel 6: modelo mecánico-cuántico ───────────────────────────
  'orbita-vs-orbital': `
<svg viewBox="0 0 320 160" role="img" aria-label="Comparación entre la órbita definida de Bohr y el orbital como nube de probabilidad">
  <g>
    <circle cx="80" cy="70" r="8" fill="var(--accent-2)"/>
    <circle cx="80" cy="70" r="42" fill="none" stroke="var(--line)" stroke-width="2"/>
    <circle cx="122" cy="70" r="6" fill="var(--accent)"/>
    <text x="80" y="130" ${base} font-size="9" text-anchor="middle">Bohr: órbita fija</text>
    <text x="80" y="142" ${base} font-size="8" fill="var(--txt-dim)" text-anchor="middle">trayectoria definida</text>
  </g>
  <line x1="160" y1="24" x2="160" y2="116" stroke="var(--line)" stroke-dasharray="3 3"/>
  <g>
    <radialGradient id="nube">
      <stop offset="0%" stop-color="var(--accent)" stop-opacity=".85"/>
      <stop offset="60%" stop-color="var(--accent)" stop-opacity=".28"/>
      <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>
    </radialGradient>
    <circle cx="240" cy="70" r="48" fill="url(#nube)"/>
    <circle cx="240" cy="70" r="8" fill="var(--accent-2)"/>
    <text x="240" y="130" ${base} font-size="9" text-anchor="middle">Orbital: probabilidad</text>
    <text x="240" y="142" ${base} font-size="8" fill="var(--txt-dim)" text-anchor="middle">zona donde es más probable</text>
  </g>
</svg>`,

  // ── Nivel 7: números cuánticos ──────────────────────────────────
  'formas-orbitales': `
<svg viewBox="0 0 320 190" role="img" aria-label="Formas de los orbitales s, p y d">
  <g ${base} font-size="10" font-weight="700" text-anchor="middle">
    <circle cx="45" cy="55" r="26" fill="var(--accent)" opacity=".55"/>
    <text x="45" y="98">s</text>
    <text x="45" y="112" font-size="8" font-weight="400" fill="var(--txt-dim)">esférico</text>

    <g transform="translate(140 55)">
      <ellipse cx="0" cy="-16" rx="12" ry="20" fill="var(--accent-2)" opacity=".65"/>
      <ellipse cx="0" cy="16" rx="12" ry="20" fill="var(--accent-2)" opacity=".65"/>
    </g>
    <text x="140" y="98">p</text>
    <text x="140" y="112" font-size="8" font-weight="400" fill="var(--txt-dim)">piriforme (2 lóbulos)</text>

    <g transform="translate(250 55)">
      <ellipse cx="-15" cy="-15" rx="10" ry="16" transform="rotate(45 -15 -15)" fill="var(--bad)" opacity=".6"/>
      <ellipse cx="15" cy="-15" rx="10" ry="16" transform="rotate(-45 15 -15)" fill="var(--bad)" opacity=".6"/>
      <ellipse cx="-15" cy="15" rx="10" ry="16" transform="rotate(-45 -15 15)" fill="var(--bad)" opacity=".6"/>
      <ellipse cx="15" cy="15" rx="10" ry="16" transform="rotate(45 15 15)" fill="var(--bad)" opacity=".6"/>
    </g>
    <text x="250" y="98">d</text>
    <text x="250" y="112" font-size="8" font-weight="400" fill="var(--txt-dim)">4 lóbulos</text>
  </g>
  <g ${base} font-size="9" text-anchor="middle">
    <text x="160" y="140" fill="var(--txt-dim)">Los tres orbitales p, según su orientación:</text>
    <text x="80" y="162" fill="var(--accent-2)">p&#8339; · m = −1</text>
    <text x="160" y="162" fill="var(--accent-2)">p&#8341; · m = 0</text>
    <text x="245" y="162" fill="var(--accent-2)">p&#8346; · m = +1</text>
  </g>
</svg>`,

  // ── Nivel 8: orden de llenado ───────────────────────────────────
  moeller: `
<svg viewBox="0 0 320 210" role="img" aria-label="Diagrama de Moeller o regla de las diagonales">
  <g ${base} font-size="12" font-weight="700">
    <text x="30" y="26">1s</text>
    <text x="30" y="52">2s</text><text x="76" y="52">2p</text>
    <text x="30" y="78">3s</text><text x="76" y="78">3p</text><text x="122" y="78">3d</text>
    <text x="30" y="104">4s</text><text x="76" y="104">4p</text><text x="122" y="104">4d</text><text x="168" y="104">4f</text>
    <text x="30" y="130">5s</text><text x="76" y="130">5p</text><text x="122" y="130">5d</text><text x="168" y="130">5f</text>
    <text x="30" y="156">6s</text><text x="76" y="156">6p</text><text x="122" y="156">6d</text>
    <text x="30" y="182">7s</text><text x="76" y="182">7p</text>
  </g>
  <g stroke="var(--accent)" stroke-width="1.6" opacity=".8">
    <line x1="60" y1="44" x2="24" y2="60"/>
    <line x1="106" y1="70" x2="24" y2="112"/>
    <line x1="152" y1="96" x2="24" y2="164"/>
    <line x1="198" y1="122" x2="60" y2="192"/>
  </g>
  <text x="230" y="46" ${base} font-size="9" fill="var(--txt-dim)">Se siguen las</text>
  <text x="230" y="58" ${base} font-size="9" fill="var(--txt-dim)">diagonales, de</text>
  <text x="230" y="70" ${base} font-size="9" fill="var(--txt-dim)">arriba hacia abajo</text>
  <text x="230" y="150" ${base} font-size="9" fill="var(--accent)">4s se llena</text>
  <text x="230" y="162" ${base} font-size="9" fill="var(--accent)">antes que 3d</text>
</svg>`,

  'regla-hund': `
<svg viewBox="0 0 320 150" role="img" aria-label="Regla de Hund: primero uno por orbital, después se aparean">
  <g stroke="var(--line)" stroke-width="1.5" fill="none">
    <rect x="40" y="34" width="26" height="26"/><rect x="66" y="34" width="26" height="26"/><rect x="92" y="34" width="26" height="26"/>
    <rect x="200" y="34" width="26" height="26"/><rect x="226" y="34" width="26" height="26"/><rect x="252" y="34" width="26" height="26"/>
  </g>
  <g ${base} font-size="15" font-weight="700" text-anchor="middle" fill="var(--accent)">
    <text x="53" y="53">↑</text><text x="79" y="53">↑</text><text x="105" y="53">↑</text>
  </g>
  <g ${base} font-size="15" font-weight="700" text-anchor="middle" fill="var(--bad)">
    <text x="213" y="53">↑↓</text><text x="239" y="53">↑</text>
  </g>
  <g ${base} font-size="10" text-anchor="middle">
    <text x="79" y="22" fill="var(--ok)" font-weight="700">CORRECTO</text>
    <text x="239" y="22" fill="var(--bad)" font-weight="700">INCORRECTO</text>
    <text x="79" y="80" font-size="9" fill="var(--txt-dim)">uno por orbital,</text>
    <text x="79" y="92" font-size="9" fill="var(--txt-dim)">espines paralelos</text>
    <text x="239" y="80" font-size="9" fill="var(--txt-dim)">se aparean antes</text>
    <text x="239" y="92" font-size="9" fill="var(--txt-dim)">de tiempo</text>
  </g>
  <text x="160" y="120" ${base} font-size="9" fill="var(--txt-dim)" text-anchor="middle">Ejemplo: los 3 electrones del subnivel 2p del nitrógeno</text>
  <text x="160" y="138" ${base} font-size="9" fill="var(--txt-dim)" text-anchor="middle">Cada casilla es un orbital; caben 2 electrones con espines opuestos</text>
</svg>`,

  // ── Nivel 9: diagrama de orbitales ──────────────────────────────
  'do-fluor': `
<svg viewBox="0 0 320 175" role="img" aria-label="Diagrama de orbitales del flúor con sus nueve electrones numerados">
  <g stroke="var(--line)" stroke-width="1.5" fill="none">
    <rect x="30" y="50" width="30" height="30"/>
    <rect x="100" y="50" width="30" height="30"/>
    <rect x="180" y="50" width="30" height="30"/><rect x="210" y="50" width="30" height="30"/><rect x="240" y="50" width="30" height="30"/>
  </g>
  <g ${base} font-size="14" font-weight="700" text-anchor="middle" fill="var(--accent)">
    <text x="45" y="70">↑↓</text><text x="115" y="70">↑↓</text>
    <text x="195" y="70">↑↓</text><text x="225" y="70">↑↓</text><text x="255" y="70">↑</text>
  </g>
  <g ${base} font-size="11" font-weight="700" text-anchor="middle">
    <text x="45" y="42">1s</text><text x="115" y="42">2s</text>
    <text x="195" y="42">2p&#8339;</text><text x="225" y="42">2p&#8341;</text><text x="255" y="42">2p&#8346;</text>
  </g>
  <g ${base} font-size="8" text-anchor="middle" fill="var(--txt-dim)">
    <text x="45" y="94">e1, e2</text><text x="115" y="94">e3, e4</text>
    <text x="195" y="94">e5, e8</text><text x="225" y="94">e6, e9</text><text x="255" y="94">e7</text>
    <text x="195" y="106">m = −1</text><text x="225" y="106">m = 0</text><text x="255" y="106">m = +1</text>
  </g>
  <circle cx="255" cy="65" r="14" fill="none" stroke="var(--accent-2)" stroke-width="2"/>
  <text x="255" y="128" ${base} font-size="9" fill="var(--accent-2)" text-anchor="middle">el único desapareado</text>
  <text x="160" y="20" ${base} font-size="10" font-weight="700" text-anchor="middle">Flúor (Z = 9): 1s² 2s² 2p⁵</text>
  <text x="160" y="150" ${base} font-size="9" fill="var(--txt-dim)" text-anchor="middle">
    2 niveles ocupados · 5 orbitales · 4 pares apareados · 1 desapareado
  </text>
</svg>`,

  // ── Nivel 10: capa de valencia y tabla ──────────────────────────
  'grupos-cee': `
<svg viewBox="0 0 320 175" role="img" aria-label="La configuración electrónica externa indica el grupo y el período">
  <g ${base} font-size="9">
    <rect x="20" y="24" width="280" height="24" rx="6" fill="var(--card-hi)"/>
    <text x="30" y="40" font-size="12" font-weight="700">3s² 3p⁴</text>
    <text x="120" y="40" fill="var(--txt-dim)">← configuración electrónica externa</text>

    <path d="M52 52 L52 78" stroke="var(--accent-2)" stroke-width="2"/>
    <path d="M110 52 L200 78" stroke="var(--accent)" stroke-width="2"/>

    <rect x="20" y="82" width="120" height="40" rx="8" fill="var(--bg-soft)" stroke="var(--accent-2)"/>
    <text x="32" y="100" fill="var(--accent-2)" font-weight="700">nivel 3</text>
    <text x="32" y="114">→ período 3</text>

    <rect x="164" y="82" width="136" height="40" rx="8" fill="var(--bg-soft)" stroke="var(--accent)"/>
    <text x="176" y="100" fill="var(--accent)" font-weight="700">2 + 4 = 6 e⁻</text>
    <text x="176" y="114">→ grupo VI A</text>
  </g>
  <text x="160" y="146" ${base} font-size="11" font-weight="700" text-anchor="middle">
    Período 3 + grupo VI A = AZUFRE
  </text>
  <text x="160" y="164" ${base} font-size="9" fill="var(--txt-dim)" text-anchor="middle">
    Con la CEE se ubica cualquier elemento representativo
  </text>
</svg>`,

  // ── Nivel 11: notación, iones ───────────────────────────────────
  'notacion-az': `
<svg viewBox="0 0 320 165" role="img" aria-label="Notación con número másico, número atómico y carga">
  <g ${base}>
    <text x="130" y="82" font-size="46" font-weight="700">X</text>
    <text x="104" y="60" font-size="20" font-weight="700" fill="var(--accent-2)">A</text>
    <text x="104" y="94" font-size="20" font-weight="700" fill="var(--accent)">Z</text>
    <text x="168" y="56" font-size="20" font-weight="700" fill="var(--bad)">q</text>
  </g>
  <g stroke="var(--line)" stroke-width="1.2">
    <line x1="100" y1="52" x2="40" y2="34"/>
    <line x1="100" y1="98" x2="40" y2="120"/>
    <line x1="186" y1="50" x2="250" y2="34"/>
  </g>
  <g ${base} font-size="9">
    <text x="14" y="26" fill="var(--accent-2)">número másico</text>
    <text x="14" y="38" fill="var(--txt-dim)">A = Z + N</text>
    <text x="14" y="124" fill="var(--accent)">número atómico</text>
    <text x="14" y="136" fill="var(--txt-dim)">Z = protones</text>
    <text x="238" y="26" fill="var(--bad)">carga iónica</text>
    <text x="238" y="38" fill="var(--txt-dim)">(si es un ion)</text>
  </g>
  <text x="160" y="158" ${base} font-size="10" text-anchor="middle" fill="var(--txt-dim)">
    Ejemplo: <tspan font-weight="700" fill="var(--txt)">³¹₁₅P³⁻</tspan> → 15 p⁺, 16 n⁰ y 18 e⁻
  </text>
</svg>`,

  'anion-cation': `
<svg viewBox="0 0 320 160" role="img" aria-label="Formación de cationes y aniones">
  <g ${base} font-size="9" text-anchor="middle">
    <circle cx="60" cy="60" r="30" fill="var(--card-hi)" stroke="var(--line)"/>
    <text x="60" y="58" font-size="13" font-weight="700">Na</text>
    <text x="60" y="72" font-size="8" fill="var(--txt-dim)">11 p⁺ / 11 e⁻</text>
    <text x="60" y="108">átomo neutro</text>

    <path d="M100 60 L140 60" stroke="var(--accent-2)" stroke-width="2"/>
    <text x="120" y="52" fill="var(--accent-2)">− 1 e⁻</text>

    <circle cx="180" cy="60" r="26" fill="var(--accent-2)" opacity=".25" stroke="var(--accent-2)"/>
    <text x="180" y="58" font-size="13" font-weight="700">Na⁺</text>
    <text x="180" y="72" font-size="8" fill="var(--txt-dim)">11 p⁺ / 10 e⁻</text>
    <text x="180" y="100" fill="var(--accent-2)" font-weight="700">CATIÓN (+)</text>
    <text x="180" y="112" font-size="8" fill="var(--txt-dim)">más chico</text>

    <text x="272" y="46" font-size="8" fill="var(--txt-dim)">si en cambio</text>
    <text x="272" y="58" font-size="8" fill="var(--txt-dim)">gana e⁻:</text>
    <text x="272" y="76" font-weight="700" fill="var(--accent)">ANIÓN (−)</text>
    <text x="272" y="88" font-size="8" fill="var(--txt-dim)">más grande</text>
  </g>
  <text x="160" y="140" ${base} font-size="9" fill="var(--txt-dim)" text-anchor="middle">
    Los protones nunca cambian: si cambian, ya es otro elemento
  </text>
</svg>`,

  // ── Nivel 12: isótopos ──────────────────────────────────────────
  'isotopos-carbono': `
<svg viewBox="0 0 320 165" role="img" aria-label="Los tres isótopos del carbono tienen 6 protones y distinta cantidad de neutrones">
  <g ${base} font-size="9" text-anchor="middle">
    <g transform="translate(58 60)">
      <circle r="30" fill="var(--card-hi)" stroke="var(--line)"/>
      <circle cx="-8" cy="-6" r="7" fill="var(--bad)"/><circle cx="6" cy="-8" r="7" fill="var(--bad)"/>
      <circle cx="-2" cy="6" r="7" fill="var(--bad)"/><circle cx="-12" cy="8" r="7" fill="var(--txt-dim)"/>
      <circle cx="10" cy="6" r="7" fill="var(--txt-dim)"/><circle cx="2" cy="-16" r="7" fill="var(--txt-dim)"/>
      <text y="48" font-size="12" font-weight="700">¹²C</text>
      <text y="62">6 p⁺ · 6 n⁰</text>
      <text y="74" font-size="8" fill="var(--txt-dim)">98,9 %</text>
    </g>
    <g transform="translate(160 60)">
      <circle r="32" fill="var(--card-hi)" stroke="var(--line)"/>
      <circle cx="-8" cy="-6" r="7" fill="var(--bad)"/><circle cx="6" cy="-8" r="7" fill="var(--bad)"/>
      <circle cx="-2" cy="6" r="7" fill="var(--bad)"/><circle cx="-14" cy="8" r="7" fill="var(--txt-dim)"/>
      <circle cx="12" cy="6" r="7" fill="var(--txt-dim)"/><circle cx="2" cy="-18" r="7" fill="var(--txt-dim)"/>
      <circle cx="16" cy="-14" r="7" fill="var(--txt-dim)"/>
      <text y="50" font-size="12" font-weight="700">¹³C</text>
      <text y="64">6 p⁺ · 7 n⁰</text>
      <text y="76" font-size="8" fill="var(--txt-dim)">1,1 %</text>
    </g>
    <g transform="translate(264 60)">
      <circle r="34" fill="var(--card-hi)" stroke="var(--line)"/>
      <circle cx="-8" cy="-6" r="7" fill="var(--bad)"/><circle cx="6" cy="-8" r="7" fill="var(--bad)"/>
      <circle cx="-2" cy="6" r="7" fill="var(--bad)"/><circle cx="-16" cy="8" r="7" fill="var(--txt-dim)"/>
      <circle cx="14" cy="6" r="7" fill="var(--txt-dim)"/><circle cx="2" cy="-20" r="7" fill="var(--txt-dim)"/>
      <circle cx="18" cy="-14" r="7" fill="var(--txt-dim)"/><circle cx="-16" cy="-14" r="7" fill="var(--txt-dim)"/>
      <text y="52" font-size="12" font-weight="700">¹⁴C</text>
      <text y="66">6 p⁺ · 8 n⁰</text>
      <text y="78" font-size="8" fill="var(--txt-dim)">trazas</text>
    </g>
  </g>
  <text x="160" y="158" ${base} font-size="9" fill="var(--txt-dim)" text-anchor="middle">
    Mismo Z (mismo elemento) · distinto N · distinto A
  </text>
</svg>`,

  // ── Nivel 13: masa atómica promedio ─────────────────────────────
  'masa-promedio': `
<svg viewBox="0 0 320 175" role="img" aria-label="La masa atómica promedio es un promedio ponderado según la abundancia">
  <g ${base} font-size="9" text-anchor="middle">
    <rect x="22" y="40" width="118" height="52" rx="8" fill="var(--accent)" opacity=".28" stroke="var(--accent)"/>
    <text x="81" y="60" font-size="13" font-weight="700">³⁵Cl</text>
    <text x="81" y="76">34,96885 u</text>
    <text x="81" y="106" font-size="14" font-weight="700" fill="var(--accent)">75,78 %</text>

    <rect x="180" y="52" width="86" height="40" rx="8" fill="var(--accent-2)" opacity=".28" stroke="var(--accent-2)"/>
    <text x="223" y="68" font-size="13" font-weight="700">³⁷Cl</text>
    <text x="223" y="82">36,96590 u</text>
    <text x="223" y="106" font-size="14" font-weight="700" fill="var(--accent-2)">24,22 %</text>
  </g>
  <path d="M20 122 L300 122" stroke="var(--line)" stroke-width="2"/>
  <polygon points="152,122 144,136 160,136" fill="var(--txt-dim)"/>
  <text x="160" y="158" ${base} font-size="12" font-weight="700" text-anchor="middle">
    M̄ = 35,45 u
  </text>
  <text x="160" y="172" ${base} font-size="8.5" fill="var(--txt-dim)" text-anchor="middle">
    El promedio se corre hacia el isótopo más abundante
  </text>
  <text x="160" y="24" ${base} font-size="9" fill="var(--txt-dim)" text-anchor="middle">
    El tamaño de cada caja representa su peso en el promedio
  </text>
</svg>`,

  // ── Nivel 14 y 18: desintegración ───────────────────────────────
  'desintegracion-beta': `
<svg viewBox="0 0 320 160" role="img" aria-label="Desintegración beta del cobalto-60 en níquel-60">
  <g ${base} font-size="9" text-anchor="middle">
    <circle cx="55" cy="60" r="30" fill="var(--bad)" opacity=".25" stroke="var(--bad)"/>
    <text x="55" y="56" font-size="14" font-weight="700">⁶⁰₂₇Co</text>
    <text x="55" y="72" font-size="8">27 p⁺ · 33 n⁰</text>
    <text x="55" y="106" fill="var(--bad)">núcleo inestable</text>

    <path d="M95 60 L145 60" stroke="var(--accent-2)" stroke-width="2"/>
    <text x="120" y="50" fill="var(--accent-2)">emite β⁻</text>

    <circle cx="200" cy="60" r="30" fill="var(--accent)" opacity=".25" stroke="var(--accent)"/>
    <text x="200" y="56" font-size="14" font-weight="700">⁶⁰₂₈Ni</text>
    <text x="200" y="72" font-size="8">28 p⁺ · 32 n⁰</text>
    <text x="200" y="106" fill="var(--accent)">+ radiación γ</text>

    <path d="M240 60 L280 60" stroke="var(--accent)" stroke-width="2" stroke-dasharray="3 3"/>
    <text x="292" y="64" font-size="16" fill="var(--accent)">γ</text>
  </g>
  <text x="160" y="132" ${base} font-size="9" fill="var(--txt-dim)" text-anchor="middle">
    Un neutrón se transforma en protón: Z sube de 27 a 28
  </text>
  <text x="160" y="148" ${base} font-size="9" fill="var(--txt-dim)" text-anchor="middle">
    A sigue valiendo 60 → Co y Ni son isóbaros
  </text>
</svg>`,

  // ── Nivel 15: trazadores e irradiación ──────────────────────────
  trazador: `
<svg viewBox="0 0 320 170" role="img" aria-label="Un trazador isotópico permite seguir el recorrido del fertilizante">
  <rect x="10" y="110" width="300" height="46" rx="6" fill="#4a3a26"/>
  <text x="26" y="150" ${base} font-size="9" fill="#c8b48f">suelo</text>
  <g stroke="var(--accent)" stroke-width="3" fill="none">
    <path d="M160 110 L160 62"/>
    <path d="M160 78 L136 62"/><path d="M160 78 L184 62"/>
  </g>
  <ellipse cx="132" cy="56" rx="16" ry="9" fill="var(--accent)" transform="rotate(-20 132 56)"/>
  <ellipse cx="188" cy="56" rx="16" ry="9" fill="var(--accent)" transform="rotate(20 188 56)"/>
  <g stroke="var(--accent-2)" stroke-width="2" stroke-dasharray="4 3" fill="none">
    <path d="M60 132 L150 122"/>
    <path d="M158 108 L158 66"/>
  </g>
  <g fill="var(--accent-2)">
    <circle cx="60" cy="132" r="7"/><circle cx="120" cy="126" r="6"/>
    <circle cx="158" cy="96" r="6"/><circle cx="158" cy="70" r="6"/>
  </g>
  <g ${base} font-size="9">
    <text x="30" y="40" font-weight="700" fill="var(--accent-2)">¹⁵N o ³²P</text>
    <text x="30" y="54" fill="var(--txt-dim)">fertilizante</text>
    <text x="30" y="66" fill="var(--txt-dim)">marcado</text>
    <text x="212" y="76" fill="var(--txt-dim)">se mide cuánto</text>
    <text x="212" y="88" fill="var(--txt-dim)">llegó a la planta,</text>
    <text x="212" y="100" fill="var(--txt-dim)">cuánto quedó</text>
    <text x="212" y="112" fill="var(--txt-dim)">y cuánto se perdió</text>
  </g>
</svg>`,

  'irradiado-vs-contaminado': `
<svg viewBox="0 0 320 165" role="img" aria-label="Diferencia entre un alimento irradiado y uno contaminado con material radiactivo">
  <g ${base} font-size="9" text-anchor="middle">
    <rect x="14" y="26" width="136" height="104" rx="10" fill="var(--bg-soft)" stroke="var(--ok)"/>
    <text x="82" y="46" font-weight="700" fill="var(--ok)">IRRADIADO</text>
    <rect x="24" y="58" width="20" height="34" rx="3" fill="var(--accent-2)"/>
    <text x="34" y="104" font-size="8" fill="var(--txt-dim)">fuente</text>
    <g stroke="var(--accent-2)" stroke-width="2" stroke-dasharray="3 3">
      <line x1="48" y1="66" x2="96" y2="66"/><line x1="48" y1="78" x2="96" y2="78"/>
    </g>
    <circle cx="118" cy="72" r="18" fill="var(--accent)" opacity=".5"/>
    <text x="82" y="122" font-size="8" fill="var(--txt-dim)">recibió energía · no queda radiactivo</text>

    <rect x="170" y="26" width="136" height="104" rx="10" fill="var(--bg-soft)" stroke="var(--bad)"/>
    <text x="238" y="46" font-weight="700" fill="var(--bad)">CONTAMINADO</text>
    <circle cx="238" cy="76" r="24" fill="var(--bad)" opacity=".35"/>
    <g fill="var(--bad)">
      <circle cx="230" cy="68" r="4"/><circle cx="246" cy="74" r="4"/><circle cx="236" cy="86" r="4"/>
    </g>
    <text x="238" y="122" font-size="8" fill="var(--txt-dim)">tiene radionucleidos adentro</text>
  </g>
  <text x="160" y="152" ${base} font-size="9" fill="var(--txt-dim)" text-anchor="middle">
    Confundirlos es un error científico, no un matiz
  </text>
</svg>`,

  // ── Nivel 16: receta para contar partículas ─────────────────────
  'receta-particulas': `
<svg viewBox="0 0 320 185" role="img" aria-label="Pasos para contar protones, neutrones y electrones">
  <g ${base} font-size="10">
    <rect x="14" y="14" width="292" height="34" rx="8" fill="var(--card-hi)"/>
    <text x="26" y="30" font-weight="700" fill="var(--accent)">1 · Protones</text>
    <text x="26" y="42" fill="var(--txt-dim)">Son Z, el número de abajo. Nunca cambian.</text>

    <rect x="14" y="54" width="292" height="34" rx="8" fill="var(--card-hi)"/>
    <text x="26" y="70" font-weight="700" fill="var(--accent-2)">2 · Neutrones</text>
    <text x="26" y="82" fill="var(--txt-dim)">N = A − Z (el de arriba menos el de abajo).</text>

    <rect x="14" y="94" width="292" height="34" rx="8" fill="var(--card-hi)"/>
    <text x="26" y="110" font-weight="700" fill="var(--bad)">3 · Electrones</text>
    <text x="26" y="122" fill="var(--txt-dim)">e⁻ = Z − carga. Sin carga, e⁻ = Z.</text>
  </g>
  <text x="160" y="150" ${base} font-size="10" font-weight="700" text-anchor="middle">
    ³¹₁₅P³⁻ → 15 p⁺ · 16 n⁰ · 18 e⁻
  </text>
  <text x="160" y="170" ${base} font-size="8.5" fill="var(--txt-dim)" text-anchor="middle">
    Cuidado con el signo: restar un −3 es sumar 3
  </text>
</svg>`,

  // ── Nivel 17: clasificar núclidos ───────────────────────────────
  'clasificar-nuclidos': `
<svg viewBox="0 0 320 175" role="img" aria-label="Cómo decidir si dos núclidos son isótopos, isóbaros o isótonos">
  <g ${base} font-size="9" text-anchor="middle">
    <rect x="96" y="10" width="128" height="26" rx="8" fill="var(--card-hi)"/>
    <text x="160" y="27" font-weight="700">¿Qué comparten?</text>

    <line x1="160" y1="36" x2="60" y2="60" stroke="var(--line)"/>
    <line x1="160" y1="36" x2="160" y2="60" stroke="var(--line)"/>
    <line x1="160" y1="36" x2="262" y2="60" stroke="var(--line)"/>

    <rect x="12" y="62" width="96" height="56" rx="8" fill="var(--bg-soft)" stroke="var(--accent)"/>
    <text x="60" y="80" font-weight="700" fill="var(--accent)">mismo Z</text>
    <text x="60" y="96">ISÓTOPOS</text>
    <text x="60" y="110" font-size="8" fill="var(--txt-dim)">mismo elemento</text>

    <rect x="112" y="62" width="96" height="56" rx="8" fill="var(--bg-soft)" stroke="var(--accent-2)"/>
    <text x="160" y="80" font-weight="700" fill="var(--accent-2)">mismo A</text>
    <text x="160" y="96">ISÓBAROS</text>
    <text x="160" y="110" font-size="8" fill="var(--txt-dim)">distinto elemento</text>

    <rect x="212" y="62" width="96" height="56" rx="8" fill="var(--bg-soft)" stroke="var(--bad)"/>
    <text x="260" y="80" font-weight="700" fill="var(--bad)">mismo N</text>
    <text x="260" y="96">ISÓTONOS</text>
    <text x="260" y="110" font-size="8" fill="var(--txt-dim)">distinto elemento</text>
  </g>
  <text x="160" y="140" ${base} font-size="9" fill="var(--txt-dim)" text-anchor="middle">
    Truco: calculá siempre N = A − Z antes de comparar.
  </text>
  <text x="160" y="160" ${base} font-size="9" text-anchor="middle">
    ¹³₅B y ¹⁴₆C tienen N = 8 los dos → isótonos
  </text>
</svg>`,
};

// Devuelve el SVG o una cadena vacía si el nombre no existe.
export const figura = (nombre) => FIGURAS[nombre] || '';
