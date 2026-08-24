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
};

// Devuelve el SVG o una cadena vacía si el nombre no existe.
export const figura = (nombre) => FIGURAS[nombre] || '';
