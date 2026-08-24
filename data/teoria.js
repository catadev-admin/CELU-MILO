// Teoría de cada nivel: un repaso en pasos para leer antes de jugar.
//
// Forma de cada paso:
//   { titulo, texto, figura?, dato?, ejemplo? }
//     texto   → HTML simple (<p>, <b>, <ul>, <sup>, <sub>)
//     figura  → nombre de una figura de data/figuras.js
//     dato    → frase para recordar, se muestra destacada
//     ejemplo → { enunciado, pasos: [...], resultado }
//
// La clave del objeto es el id del nivel. Un nivel sin entrada simplemente
// no muestra el botón de teoría.

export const TEORIA = {
  // ══════════════════════════════ NIVEL 1 ══════════════════════════════
  1: [
    {
      titulo: 'La pregunta de fondo',
      texto: `<p>Toda la diversidad química que existe sale de apenas un centenar de
        elementos. Son como las letras del alfabeto: pocas piezas que, combinadas,
        forman una cantidad infinita de palabras.</p>
        <p>Desde la antigüedad se buscó explicar de qué está hecha la materia y por qué
        cambia. La primera respuesta llegó de la filosofía, no del laboratorio.</p>`,
    },
    {
      titulo: 'Los atomistas griegos',
      texto: `<p><b>Leucipo de Mileto</b> (siglo V a.C.) y su discípulo <b>Demócrito de
        Abdera</b> sostuvieron que la materia es discontinua: está formada por partículas
        indivisibles a las que llamaron <b>átomos</b> (ἄτομοι), que justamente significa
        “indivisible”.</p>
        <p>Para ellos los átomos eran además eternos, homogéneos, incompresibles e
        invisibles, y se diferenciaban entre sí por su <b>forma, tamaño, orden y
        posición</b>. Las propiedades de la materia se explicaban por cómo se agrupaban.</p>`,
      figura: 'linea-tiempo',
    },
    {
      titulo: 'Un freno de 1700 años',
      texto: `<p><b>Platón</b> y <b>Aristóteles</b> se opusieron a la idea de una materia
        discontinua y negaron la existencia de los átomos. Como la filosofía aristotélica
        dominó la cultura occidental durante siglos, la idea quedó archivada.</p>
        <p>Hubo otro motivo, más de fondo: la experimentación todavía no se había
        consolidado como método para producir conocimiento, así que la teoría no podía
        apoyarse en pruebas.</p>`,
      dato: 'Una idea sin evidencia experimental no se sostiene, por buena que sea.',
    },
    {
      titulo: 'Dalton pone la teoría en pie',
      texto: `<p>La idea reflota en el siglo XVII con los primeros experimentos con gases,
        pero es <b>John Dalton</b> quien entre 1803 y 1807 formula la <b>Teoría
        Atómica</b>. Sus postulados:</p>
        <ul>
          <li>La materia está formada por átomos, indestructibles e indivisibles.</li>
          <li>Los átomos de un mismo elemento son iguales entre sí: mismas propiedades,
              dimensiones y masa.</li>
          <li>Los átomos de elementos distintos son diferentes entre sí.</li>
          <li>Los compuestos se forman al unirse átomos de dos o más elementos.</li>
          <li>Al combinarse, guardan relaciones simples de números enteros y pequeños.</li>
        </ul>`,
    },
    {
      titulo: 'Qué explicó y qué no',
      texto: `<p>El gran acierto de Dalton fue fundar la <b>estequiometría</b>: el cuarto
        postulado explica la <b>ley de las proporciones constantes</b> y el quinto, la
        <b>ley de las proporciones múltiples</b>.</p>
        <p>Pero el modelo tenía límites. Dalton trató como monoatómicos a gases que hoy
        sabemos biatómicos, y por eso calculó mal masas: escribía el agua como <b>HO</b>.
        Tampoco podía explicar las regularidades de la tabla periódica ni los resultados
        de los rayos catódicos, que mostraban que el átomo <b>sí</b> es divisible.</p>`,
      dato: 'Cada modelo explica un conjunto de hechos; lo que no explica es lo que empuja al modelo siguiente.',
    },
  ],

  // ══════════════════════════════ NIVEL 2 ══════════════════════════════
  2: [
    {
      titulo: 'La materia también es eléctrica',
      texto: `<p>Antes de Thomson ya había pistas de que la materia tiene naturaleza
        eléctrica:</p>
        <ul>
          <li><b>Tales de Mileto</b> y <b>William Gilbert</b>: al frotar muchas sustancias,
              éstas adquieren electricidad (electrización por frotamiento).</li>
          <li><b>Michael Faraday</b>: algunos compuestos se descomponen al pasarles
              corriente eléctrica (electrólisis).</li>
          <li><b>William Crookes</b>: desarrolla el tubo de rayos catódicos.</li>
        </ul>`,
    },
    {
      titulo: 'El descubrimiento del electrón',
      texto: `<p><b>J. J. Thomson</b> usó un tubo de rayos catódicos al vacío. El rayo nace
        en el electrodo negativo (<b>cátodo</b>) y viaja hacia el positivo (<b>ánodo</b>).</p>
        <p>Al someterlo a un campo eléctrico, el rayo se desvía hacia la placa positiva.
        De ahí Thomson concluyó que estaba formado por partículas con <b>carga
        negativa</b>, mucho más pequeñas que un átomo de hidrógeno: los <b>electrones</b>.</p>`,
      figura: 'rayos-catodicos',
    },
    {
      titulo: 'Y el del protón',
      texto: `<p><b>Eugen Goldstein</b> modificó el tubo: usó un cátodo perforado con gas
        adentro. Detrás del cátodo apareció un destello proveniente del ánodo, los
        <b>rayos canales</b> o anódicos.</p>
        <p>Determinó que estaban formados por cargas positivas, a las que llamó
        <b>protones</b>.</p>`,
    },
    {
      titulo: 'Los números que quedaron',
      texto: `<p>De estas experiencias salieron la masa y la carga de ambas partículas:</p>
        <ul>
          <li>Electrón: m = 9,1096 × 10<sup>−28</sup> g, q = −1,6022 × 10<sup>−19</sup> C</li>
          <li>Protón: m = 1,6726 × 10<sup>−24</sup> g, q = +1,6022 × 10<sup>−19</sup> C</li>
        </ul>
        <p>Fijate que la carga es <b>la misma en valor absoluto</b> y sólo cambia el signo,
        mientras que el protón es unas 1836 veces más masivo que el electrón.</p>`,
      dato: 'Misma carga con signo opuesto; masas muy distintas.',
    },
    {
      titulo: 'El budín con pasas',
      texto: `<p>Thomson armó su modelo teniendo en cuenta tres hechos: la materia es
        eléctricamente neutra, sus propiedades eléctricas se manifiestan en ciertas
        condiciones, y los electrones pueden extraerse del átomo pero las cargas positivas
        no.</p>
        <p>Describió un átomo <b>macizo, estático y neutro</b>, con la mayor parte de la
        masa asociada a la carga positiva y los electrones en reposo distribuidos
        uniformemente dentro de esa masa.</p>`,
      figura: 'budin',
      dato: 'Con Thomson cae el postulado de Dalton: el átomo es divisible.',
    },
  ],

  // ══════════════════════════════ NIVEL 3 ══════════════════════════════
  3: [
    {
      titulo: 'Dos descubrimientos que abren la puerta',
      texto: `<p><b>Wilhelm Roentgen</b> (1895) descubre los <b>rayos X</b>: atraviesan
        materiales poco densos como la madera pero no los densos como los metales. Como no
        se desvían con campos eléctricos ni magnéticos, no son partículas: son radiación
        electromagnética.</p>
        <p><b>Henri Becquerel</b> (1896) observa la <b>radiactividad</b>: hay átomos que
        emiten radiaciones espontáneamente.</p>`,
    },
    {
      titulo: 'Los tipos de radiación',
      texto: `<ul>
          <li><b>Alfa (α)</b>: carga positiva, formadas por 2 protones y 2 neutrones
              (núcleos de helio, también llamados heliones).</li>
          <li><b>Beta (β<sup>−</sup>)</b>: haces de electrones a velocidad cercana a la de
              la luz. Los <b>β<sup>+</sup></b> son positrones.</li>
          <li><b>Gamma (γ)</b>: radiación electromagnética, sin masa, con mucha más energía
              que la luz visible.</li>
        </ul>
        <p>Se diferencian por su poder de penetración: las α son las menos penetrantes; las
        γ y las neutrónicas, las que más.</p>`,
      figura: 'radiaciones',
    },
    {
      titulo: 'El experimento de la lámina de oro',
      texto: `<p>En 1911 <b>Rutherford</b> usó partículas alfa para explorar la materia:
        las disparó contra una finísima lámina de oro. Observó que:</p>
        <ul>
          <li>La mayoría atravesaba la lámina sin desviarse.</li>
          <li>Algunas se desviaban.</li>
          <li>Unas pocas rebotaban, invirtiendo por completo su trayectoria.</li>
        </ul>`,
      figura: 'lamina-oro',
    },
    {
      titulo: 'Qué dedujo',
      texto: `<p>Si casi todo pasa de largo, el átomo tiene que estar <b>casi vacío</b>. Y
        si unas pocas rebotan, tiene que haber algo muy chico, muy denso y positivo que las
        repela con fuerza.</p>
        <ul>
          <li>Gran parte del volumen del átomo es espacio vacío.</li>
          <li>Existe un <b>núcleo</b> central, denso y positivo, con cerca del
              <b>99,95 %</b> de la masa.</li>
          <li>Los electrones están en movimiento, a cierta distancia del núcleo, en la
              cantidad necesaria para que el átomo sea neutro.</li>
        </ul>`,
      dato: 'El experimento es el modelo: lo que se observa obliga a una estructura y descarta otras.',
    },
    {
      titulo: 'El problema del colapso',
      texto: `<p>El modelo tenía una inconsistencia seria. Según la Física clásica, un
        electrón girando (una partícula acelerada) debería emitir energía continuamente,
        perderla y terminar chocando contra el núcleo: el <b>colapso atómico</b>.</p>
        <p>Como eso no ocurre, el modelo necesitaba revisión. Mientras tanto se completó el
        cuadro de partículas: <b>Chadwick</b> descubre el <b>neutrón</b> en 1932
        bombardeando berilio con partículas alfa, y <b>Anderson</b>, el <b>positrón</b>, la
        antipartícula del electrón.</p>`,
    },
  ],

  // ══════════════════════════════ NIVEL 4 ══════════════════════════════
  4: [
    {
      titulo: 'Las tres partículas',
      texto: `<p>El átomo se compone de tres partículas subatómicas. Los <b>protones</b> y
        los <b>neutrones</b> se ubican en la región central, formando el <b>núcleo</b>; los
        <b>electrones</b> giran alrededor, en la región extranuclear.</p>`,
      figura: 'atomo',
    },
    {
      titulo: 'Cargas y masas',
      texto: `<table class="tabla">
          <tr><th>Partícula</th><th>Carga</th><th>Masa (g)</th></tr>
          <tr><td>Protón (p⁺)</td><td>+1</td><td>1,6726 × 10<sup>−24</sup></td></tr>
          <tr><td>Neutrón (n⁰)</td><td>0</td><td>1,6750 × 10<sup>−24</sup></td></tr>
          <tr><td>Electrón (e⁻)</td><td>−1</td><td>9,1096 × 10<sup>−28</sup></td></tr>
        </table>
        <p>Protón y neutrón tienen masas casi iguales. El electrón es unas
        <b>1836 veces más liviano</b>.</p>`,
    },
    {
      titulo: 'La unidad de masa atómica',
      texto: `<p>Trabajar con números como 10<sup>−24</sup> g es incómodo, así que se usa la
        <b>unidad de masa atómica (u)</b>:</p>
        <p style="text-align:center"><b>1 u = 1,66054 × 10<sup>−24</sup> g</b></p>
        <p>En esa escala el protón y el neutrón pesan aproximadamente <b>1 u</b> cada uno, y
        el electrón, <b>1/1836 u</b>. Por eso la masa de los electrones se considera
        despreciable y decimos que la masa del átomo está en el núcleo.</p>`,
      dato: 'Los nucleones son los protones y neutrones juntos: son los que aportan la masa.',
    },
    {
      titulo: 'Ejemplo para dimensionarlo',
      texto: `<p>Veamos cuánto pesan los electrones frente al resto del átomo.</p>`,
      ejemplo: {
        enunciado: 'Un átomo de helio tiene 2 protones, 2 neutrones y 2 electrones. ¿Qué fracción de su masa aportan los electrones?',
        pasos: [
          'Masa de los nucleones: 4 × 1 u = 4 u (aproximadamente).',
          'Masa de los electrones: 2 × (1/1836) u ≈ 0,001 u.',
          'Fracción: 0,001 / 4 ≈ 0,00027.',
        ],
        resultado: 'Los electrones aportan menos del 0,03 % de la masa: por eso se desprecian.',
      },
    },
  ],

  // ══════════════════════════════ NIVEL 5 ══════════════════════════════
  5: [
    {
      titulo: 'La energía viene en paquetes',
      texto: `<p>Para resolver el colapso atómico hacía falta una idea nueva, y vino de la
        luz.</p>
        <p><b>Maxwell</b> había explicado la reflexión y la refracción asumiendo que la luz
        es una <b>onda</b> electromagnética. Pero en 1900 <b>Max Planck</b>, estudiando los
        espectros de emisión y absorción, indicó que la radiación se emite o se absorbe en
        cantidades discretas de energía que llamó <b>cuantos</b>. El tamaño de cada cuanto
        es proporcional a la frecuencia de la radiación.</p>`,
    },
    {
      titulo: 'El efecto fotoeléctrico',
      texto: `<p>El <b>efecto fotoeléctrico</b> es la emisión de electrones cuando cierta
        radiación incide sobre una superficie metálica.</p>
        <p><b>Einstein</b> lo explicó en 1905 usando la teoría de Planck: la luz está
        formada por paquetes de energía, los <b>fotones</b>. Interpretó el fenómeno como el
        choque de dos partículas —un fotón y un electrón— donde el electrón sale expulsado
        sólo si el fotón trae suficiente energía. Eso explica por qué la expulsión es
        instantánea y ocurre sólo con ciertos haces de luz.</p>`,
      dato: 'La luz se comporta como onda y como partícula: naturaleza dual onda-partícula.',
    },
    {
      titulo: 'Los postulados de Bohr',
      texto: `<p>En 1913 <b>Niels Bohr</b> aplicó la cuantización de Planck al átomo de
        hidrógeno:</p>
        <ul>
          <li>La energía del átomo está <b>cuantizada</b>: sólo puede tener determinados
              estados de energía.</li>
          <li>Los electrones giran en órbitas circulares <b>sin emitir ni absorber
              energía</b>. Cada órbita es un estado estacionario.</li>
          <li>Al absorber o emitir radiación, el electrón <b>salta</b> de una órbita a
              otra.</li>
        </ul>`,
      figura: 'bohr-saltos',
    },
    {
      titulo: 'Absorber y emitir',
      texto: `<p>Si un electrón <b>absorbe</b> energía pasa a una órbita mayor, más lejos
        del núcleo. Cuando después <b>emite</b> esa energía, baja a un estado menor, más
        cerca. La cantidad de energía para pasar de un nivel a otro está cuantizada.</p>
        <p>Acá está la solución al problema de Rutherford: como existe un nivel de energía
        mínimo, el electrón <b>no puede</b> seguir cayendo. El colapso atómico deja de ser
        posible.</p>`,
    },
    {
      titulo: 'Los límites y Sommerfeld',
      texto: `<p>El modelo resolvió sin ambigüedad los espectros del hidrógeno, pero mostró
        limitaciones con átomos más complejos y no explicaba por qué eran posibles sólo
        ciertas órbitas.</p>
        <p>En 1916 <b>Arnold Sommerfeld</b> lo ajustó: notó que las líneas de los espectros
        estaban compuestas por varias líneas más finas, y propuso que además de órbitas
        circulares existen <b>órbitas elípticas</b>. Con eso quedaron definidos los
        <b>niveles y subniveles</b> de energía.</p>`,
    },
  ],

  // ══════════════════════════════ NIVEL 6 ══════════════════════════════
  6: [
    {
      titulo: 'La materia también es onda',
      texto: `<p>En 1924 <b>Louis de Broglie</b> dio vuelta la idea de Einstein: si la luz
        puede comportarse como partícula, la materia puede comportarse como onda. Propuso
        que <b>toda partícula en movimiento tiene una onda asociada</b>.</p>
        <p>¿Por qué no lo notamos? Porque la longitud de esa onda depende de la masa: sólo
        es apreciable y medible en masas muy pequeñas, como las de las partículas
        subatómicas. Con una pelota o una persona, es imperceptible.</p>`,
    },
    {
      titulo: 'El principio de incertidumbre',
      texto: `<p>Si cada partícula lleva asociada una onda, aparece un límite. En 1927
        <b>Werner Heisenberg</b> enunció que es <b>imposible conocer al mismo tiempo la
        posición y la cantidad de movimiento</b> (la velocidad) de una partícula
        subatómica.</p>
        <p>La razón es concreta: para localizar un electrón hay que hacer rebotar fotones
        sobre él, y esa perturbación le altera la velocidad. Lo que permite ubicarlo
        arruina la medición de su movimiento.</p>`,
      dato: 'A nivel subatómico hay que hablar de probabilidades, no de números absolutos.',
    },
    {
      titulo: 'Schrödinger y el orbital',
      texto: `<p>En 1926 <b>Erwin Schrödinger</b> describió al electrón en términos
        estadísticos: reemplazó la trayectoria definida de Bohr por la <b>probabilidad</b>
        de encontrarlo en una zona del espacio alrededor del núcleo.</p>
        <p>Su ecuación de onda devuelve la <b>función de onda ψ</b>, que contiene toda la
        información que se puede conocer del sistema. Su módulo al cuadrado, |ψ|², es la
        <b>densidad de probabilidad</b>.</p>`,
      figura: 'orbita-vs-orbital',
    },
    {
      titulo: 'La definición que hay que saber',
      texto: `<p style="font-size:19px;text-align:center"><b>“Un orbital es la región del
        espacio donde la probabilidad de encontrar al electrón es máxima”.</b></p>
        <p>Ojo con la diferencia de palabras: la <b>órbita</b> de Bohr es un camino; el
        <b>orbital</b> es una región de probabilidad. El modelo mecánico-cuántico,
        propuesto por Heisenberg y Schrödinger en 1925, es el modelo atómico actual.</p>`,
      dato: 'Órbita ≠ orbital. En el examen, esa palabra cambia toda la respuesta.',
    },
  ],
};

export const tieneTeoria = (id) => Array.isArray(TEORIA[id]) && TEORIA[id].length > 0;
