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

  // ══════════════════════════════ NIVEL 7 ══════════════════════════════
  7: [
    {
      titulo: 'Cuatro números para cada electrón',
      texto: `<p>En el modelo mecánico-cuántico, cada electrón de un átomo queda descrito
        por <b>cuatro números cuánticos</b>: <b>n</b>, <b>l</b>, <b>m<sub>l</sub></b> y
        <b>m<sub>s</sub></b>.</p>
        <p>Pensalos como una dirección: el primero dice en qué piso está, el segundo en qué
        departamento, el tercero hacia dónde da y el cuarto, cómo está orientado adentro.
        Dos electrones del mismo átomo nunca tienen los cuatro iguales.</p>`,
    },
    {
      titulo: 'n · el nivel de energía',
      texto: `<p>El número cuántico <b>principal (n)</b> define los niveles de energía. Toma
        valores enteros de <b>1 a 8</b>. A mayor n, mayor energía y mayor distancia media al
        núcleo: nos da idea del <b>tamaño</b> del orbital.</p>
        <p>La cantidad máxima de electrones de un nivel es <b>2 · n²</b>. Además, cada nivel
        tiene una notación espectroscópica:</p>
        <table class="tabla">
          <tr><th>n</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
          <tr><th>letra</th><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td></tr>
        </table>`,
      dato: 'Nivel 1 → 2 e⁻, nivel 2 → 8 e⁻, nivel 3 → 18 e⁻, nivel 4 → 32 e⁻.',
    },
    {
      titulo: 'l · la forma del orbital',
      texto: `<p>El número cuántico <b>secundario o azimutal (l)</b> determina el subnivel y
        la <b>forma</b> del orbital. Sus valores dependen de n: van de <b>0 hasta
        (n − 1)</b>.</p>
        <p>Así, para n = 4, l puede valer 0, 1, 2 y 3. Cada valor tiene su letra:</p>
        <ul>
          <li><b>l = 0 → s</b>, orbital esférico</li>
          <li><b>l = 1 → p</b>, orbital piriforme</li>
          <li><b>l = 2 → d</b> y <b>l = 3 → f</b>, de formas más complejas</li>
        </ul>`,
      figura: 'formas-orbitales',
    },
    {
      titulo: 'mₗ · hacia dónde apunta',
      texto: `<p>El número cuántico <b>magnético (m<sub>l</sub>)</b> define la orientación
        del orbital en el espacio. Para cada l toma todos los valores enteros entre
        <b>−l y +l</b>.</p>
        <p>Si l = 1 hay tres valores (−1, 0, +1): por eso hay <b>tres orbitales p</b>. Según
        el apunte, p<sub>x</sub> corresponde a m = −1, p<sub>y</sub> a m = 0 y
        p<sub>z</sub> a m = +1.</p>
        <p>Con l = 2 hay cinco valores (−2 a +2): cinco orbitales d, con capacidad para
        10 electrones.</p>`,
    },
    {
      titulo: 'mₛ · el espín',
      texto: `<p>El número cuántico de <b>espín (m<sub>s</sub>)</b> describe el sentido de
        giro del electrón. Sólo puede valer <b>+1/2</b> (↑) o <b>−1/2</b> (↓).</p>
        <p>Tiene una particularidad: es el <b>único</b> de los cuatro que no se desprende de
        la ecuación de Schrödinger. Es una propiedad intrínseca de las partículas
        subatómicas. Como toda carga en movimiento genera un campo magnético, los electrones
        se comportan como pequeños imanes.</p>`,
      ejemplo: {
        enunciado: 'Para n = 3, ¿qué subniveles hay y cuántos electrones entran en total?',
        pasos: [
          'l va de 0 a n−1, o sea 0, 1 y 2: los subniveles 3s, 3p y 3d.',
          '3s tiene 1 orbital (2 e⁻); 3p tiene 3 orbitales (6 e⁻); 3d tiene 5 orbitales (10 e⁻).',
          'Total: 2 + 6 + 10 = 18 electrones.',
        ],
        resultado: 'Coincide con la fórmula 2 · n² = 2 · 3² = 18 electrones.',
      },
    },
  ],

  // ══════════════════════════════ NIVEL 8 ══════════════════════════════
  8: [
    {
      titulo: 'Qué es la configuración electrónica',
      texto: `<p>La <b>configuración electrónica (C.E.)</b> es cómo se distribuyen los
        electrones en los niveles y subniveles de un átomo, en su <b>estado fundamental</b>:
        el átomo aislado, en su estado de mínima energía.</p>
        <p>Importa porque de ella dependen gran parte de las propiedades físicas y
        <b>todas</b> las propiedades químicas del elemento.</p>`,
    },
    {
      titulo: 'Aufbau y el diagrama de Moeller',
      texto: `<p>El <b>principio de Aufbau</b> (“construir”) dice que los electrones se van
        sumando de a uno, ocupando primero los orbitales de <b>menor energía</b>.</p>
        <p>El detalle es que a partir del 3p los subniveles se <b>superponen</b>
        energéticamente. Después del 3p no sigue el 3d sino el <b>4s</b>, porque el 3d tiene
        más orbitales y más electrones, y por lo tanto más energía. Para no perderse se usa
        el <b>diagrama de Moeller</b> o regla de las diagonales:</p>`,
      figura: 'moeller',
      dato: 'El orden es 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s…',
    },
    {
      titulo: 'Pauli · dos por orbital',
      texto: `<p>El <b>principio de exclusión de Pauli</b> establece que un orbital no puede
        contener más de <b>dos electrones</b>, y que esos dos deben tener <b>espines
        opuestos</b> (↑↓).</p>
        <p>Dicho de otro modo: en un mismo átomo no puede haber dos electrones con los
        cuatro números cuánticos iguales. Si comparten n, l y m<sub>l</sub>, tienen que
        diferir en m<sub>s</sub>.</p>`,
    },
    {
      titulo: 'Hund · primero uno en cada uno',
      texto: `<p>La <b>regla de Hund</b> o de máxima multiplicidad dice que, dentro de un
        mismo subnivel, los electrones se acomodan de manera que quede el <b>mayor número
        posible de electrones desapareados</b>, todos con el mismo espín.</p>
        <p>Es como sentarse en un colectivo vacío: primero cada uno ocupa un asiento libre,
        y recién cuando no quedan asientos solos, se comparten.</p>`,
      figura: 'regla-hund',
    },
    {
      titulo: 'Cómo se escribe',
      texto: `<p>En la notación <b>2p<sup>4</sup></b>: el número es el <b>nivel</b>, la letra
        es el <b>subnivel</b> y el superíndice es la <b>cantidad de electrones</b> alojados
        ahí.</p>`,
      ejemplo: {
        enunciado: 'Escribí la configuración electrónica del nitrógeno (Z = 7).',
        pasos: [
          'Z = 7 significa 7 protones y, si es neutro, 7 electrones para acomodar.',
          'Siguiendo Moeller: primero 1s, que aloja 2 → 1s².',
          'Siguen 2s, que aloja 2 → 2s². Van 4 electrones.',
          'Quedan 3, que entran en 2p → 2p³.',
        ],
        resultado: '1s² 2s² 2p³. Por Hund, esos 3 electrones de 2p quedan desapareados.',
      },
    },
  ],

  // ══════════════════════════════ NIVEL 9 ══════════════════════════════
  9: [
    {
      titulo: 'C.E. y D.O.: en qué se diferencian',
      texto: `<p>La <b>configuración electrónica</b> resume por subnivel: dice que hay 5
        electrones en 2p, pero no cómo están repartidos.</p>
        <p>El <b>diagrama de orbitales (D.O.)</b> abre cada subnivel en sus orbitales,
        dibujados como casillas, y muestra los espines con flechas. Es la única forma de ver
        qué electrones están <b>apareados</b> y cuáles quedan <b>desapareados</b>.</p>`,
    },
    {
      titulo: 'La convención de las flechas',
      texto: `<p>Por convención, el <b>primer</b> electrón que entra a una casilla se dibuja
        en la parte inferior y tiene espín <b>+1/2</b> (↑). El que se ubica arriba tiene
        espín <b>−1/2</b> (↓).</p>
        <p>Parece un detalle menor, pero define el signo del espín en los ejercicios donde
        piden los cuatro números cuánticos de un electrón determinado.</p>`,
    },
    {
      titulo: 'El flúor, electrón por electrón',
      texto: `<p>El flúor tiene Z = 9, así que hay que ubicar 9 electrones:
        <b>1s² 2s² 2p⁵</b>. Numerándolos en orden de entrada, los tres primeros del subnivel
        2p (e5, e6, e7) entran solos por Hund, y recién los dos últimos (e8, e9) se aparean.</p>`,
      figura: 'do-fluor',
    },
    {
      titulo: 'Leer los cuatro números',
      texto: `<p>Con el diagrama armado se pueden leer los cuatro números cuánticos de
        cualquier electrón. Dos casos del apunte:</p>
        <ul>
          <li><b>Electrón 4</b>: está en 2s → n = 2; subnivel s → l = 0; entonces m = 0. Es
              el segundo de su casilla → s = <b>−1/2</b>.</li>
          <li><b>Electrón 6</b>: está en 2p<sub>y</sub> → n = 2, l = 1, m = 0. Es el primero
              de su casilla → s = <b>+1/2</b>.</li>
        </ul>`,
      ejemplo: {
        enunciado: 'Del diagrama del flúor, indicá: niveles ocupados, orbitales ocupados, pares apareados y electrones desapareados.',
        pasos: [
          'Niveles: aparecen el 1 y el 2 → 2 niveles ocupados.',
          'Orbitales: 1 del 1s + 1 del 2s + 3 del 2p → 5 orbitales.',
          'Apareados: 1s (1 par) + 2s (1 par) + 2px y 2py (2 pares) → 4 pares.',
          'Desapareados: queda solo el de 2pz.',
        ],
        resultado: '2 niveles, 5 orbitales, 4 pares apareados y 1 electrón desapareado.',
      },
    },
  ],

  // ══════════════════════════════ NIVEL 10 ═════════════════════════════
  10: [
    {
      titulo: 'Los electrones que reaccionan',
      texto: `<p>Los electrones de la <b>capa más externa</b> se llaman <b>electrones de
        valencia</b>, y son los que interaccionan para formar los enlaces químicos.</p>
        <p>¿Por qué justo ésos? Porque los electrones internos están más fuertemente unidos
        al núcleo: tienen menor energía, mayor estabilidad, y hace falta mucha más energía
        para arrancarlos.</p>`,
      dato: 'La química de un elemento la deciden sus electrones de valencia.',
    },
    {
      titulo: 'La CEE dice el grupo y el período',
      texto: `<p>La <b>configuración electrónica externa (C.E.E.)</b> es la del último nivel
        ocupado. Con ella se ubica cualquier elemento representativo en la tabla:</p>
        <ul>
          <li>La <b>cantidad</b> de electrones de la CEE = número de <b>grupo</b>.</li>
          <li>El <b>nivel</b> de la CEE = número de <b>período</b>.</li>
        </ul>`,
      figura: 'grupos-cee',
    },
    {
      titulo: 'Los grupos representativos',
      texto: `<table class="tabla">
          <tr><th>Grupo</th><th>CEE</th><th>e⁻ valencia</th></tr>
          <tr><td>I A · alcalinos</td><td>ns<sup>1</sup></td><td>1</td></tr>
          <tr><td>II A · alcalino térreos</td><td>ns<sup>2</sup></td><td>2</td></tr>
          <tr><td>III A</td><td>ns<sup>2</sup> np<sup>1</sup></td><td>3</td></tr>
          <tr><td>IV A</td><td>ns<sup>2</sup> np<sup>2</sup></td><td>4</td></tr>
          <tr><td>V A · nitrogenoideos</td><td>ns<sup>2</sup> np<sup>3</sup></td><td>5</td></tr>
          <tr><td>VI A · calcógenos</td><td>ns<sup>2</sup> np<sup>4</sup></td><td>6</td></tr>
          <tr><td>VII A · halógenos</td><td>ns<sup>2</sup> np<sup>5</sup></td><td>7</td></tr>
          <tr><td>VIII A · gases nobles</td><td>ns<sup>2</sup> np<sup>6</sup></td><td>8</td></tr>
        </table>`,
    },
    {
      titulo: 'Transición y transición interna',
      texto: `<p>Los elementos de <b>transición</b> tienen una CEE que varía entre
        (n−1)d<sup>1</sup> ns<sup>2</sup> y (n−1)d<sup>10</sup> ns<sup>2</sup>, con n ≥ 4.</p>
        <p>Los de <b>transición interna</b> van entre (n−2)f<sup>1</sup> (n−1)d<sup>0-1</sup>
        ns<sup>2</sup> y (n−2)f<sup>14</sup> (n−1)d<sup>1</sup> ns<sup>2</sup>, con n = 6 o 7.</p>`,
      ejemplo: {
        enunciado: 'Un elemento tiene CEE 3s² 3p⁴. ¿De cuál se trata?',
        pasos: [
          'Electrones de valencia: 2 + 4 = 6 → grupo VI A.',
          'Nivel de la CEE: 3 → tercer período.',
          'Cruzando ambos datos en la tabla periódica…',
        ],
        resultado: 'Es el azufre (S).',
      },
    },
  ],

  // ══════════════════════════════ NIVEL 11 ═════════════════════════════
  11: [
    {
      titulo: 'Z y A: la ficha del átomo',
      texto: `<p>El <b>número atómico (Z)</b> es la cantidad de protones. Es lo que
        <b>define la identidad</b> del elemento: si cambia Z, cambia el elemento. En un
        átomo neutro, Z indica también la cantidad de electrones.</p>
        <p>El <b>número másico (A)</b> es la suma de protones y neutrones, es decir los
        <b>nucleones</b>: <b>A = Z + N</b>. Como la masa de los electrones es despreciable,
        A se aproxima mucho a la masa del átomo.</p>`,
      figura: 'notacion-az',
    },
    {
      titulo: 'Cada número manda en algo',
      texto: `<p>Según el apunte de cátedra, hay un reparto claro:</p>
        <ul>
          <li>El <b>número atómico (Z)</b> determina las propiedades <b>químicas</b>.</li>
          <li>El <b>número másico (A)</b> determina las propiedades <b>físicas</b>.</li>
        </ul>
        <p>Esto explica por qué los isótopos —igual Z, distinto A— tienen comportamiento
        químico semejante pero propiedades físicas distintas.</p>`,
      dato: 'Z manda en lo químico, A en lo físico.',
    },
    {
      titulo: 'Cuando cambian los electrones',
      texto: `<p>Si un átomo <b>gana o pierde electrones</b> deja de ser neutro y se
        transforma en un <b>ion</b>:</p>
        <ul>
          <li><b>Gana</b> electrones → carga negativa → <b>anión</b>.</li>
          <li><b>Pierde</b> electrones → carga positiva → <b>catión</b>.</li>
        </ul>
        <p>Lo que nunca cambia es el número de protones. Para contar los electrones de un
        ion: <b>e⁻ = Z − carga</b>.</p>`,
      figura: 'anion-cation',
    },
    {
      titulo: 'Iones isoelectrónicos',
      texto: `<p>Se llaman <b>isoelectrónicos</b> a los iones que tienen <b>igual número de
        electrones</b>, aunque sean de elementos distintos.</p>
        <p>Ejemplo del apunte: el anión <b>Cl⁻</b> (Z = 17, gana 1 → 18 e⁻) y el catión
        <b>Ca²⁺</b> (Z = 20, pierde 2 → 18 e⁻). Los dos terminan con 18 electrones.</p>`,
      ejemplo: {
        enunciado: 'Para el ion ³¹₁₅P³⁻, indicá protones, neutrones y electrones.',
        pasos: [
          'Z = 15 → 15 protones.',
          'N = A − Z = 31 − 15 = 16 neutrones.',
          'e⁻ = Z − carga = 15 − (−3) = 18 electrones.',
        ],
        resultado: '15 p⁺, 16 n⁰ y 18 e⁻. Ganó 3 electrones, por eso su carga es −3.',
      },
    },
  ],

  // ══════════════════════════════ NIVEL 12 ═════════════════════════════
  12: [
    {
      titulo: 'Cuando cambia el número de neutrones',
      texto: `<p>Si cambia el número de <b>neutrones</b>, seguimos con el mismo elemento
        (mismo Z) pero con distinto número másico. Esos nucleídos se llaman
        <b>isótopos</b>.</p>
        <p>El caso más conocido es el del carbono:</p>`,
      figura: 'isotopos-carbono',
    },
    {
      titulo: 'Isótopos, isóbaros e isótonos',
      texto: `<p>Son tres relaciones distintas y conviene no mezclarlas:</p>
        <table class="tabla">
          <tr><th></th><th>Z</th><th>A</th><th>N</th></tr>
          <tr><td><b>Isótopos</b></td><td>igual</td><td>distinto</td><td>distinto</td></tr>
          <tr><td><b>Isóbaros</b></td><td>distinto</td><td>igual</td><td>distinto</td></tr>
          <tr><td><b>Isótonos</b></td><td>distinto</td><td>distinto</td><td>igual</td></tr>
        </table>
        <p>Sólo los <b>isótopos</b> son el mismo elemento. Los isóbaros y los isótonos son
        elementos diferentes que casualmente comparten un número.</p>`,
      dato: 'Isótopos: igual Z. Isóbaros: igual A. Isótonos: igual N.',
    },
    {
      titulo: 'Por qué se parecen químicamente',
      texto: `<p>Las propiedades químicas dependen del número atómico, y los isótopos lo
        comparten. Si además son neutros, tienen la misma distribución de electrones: por
        eso reaccionan de manera semejante.</p>
        <p>Lo que sí cambia es la <b>masa</b>, y con ella algunas propiedades físicas o
        nucleares. El <sup>37</sup>Cl es más pesado que el <sup>35</sup>Cl porque tiene dos
        neutrones más.</p>`,
    },
    {
      titulo: 'Abundancia isotópica',
      texto: `<p>Los isótopos de un elemento aparecen en la naturaleza en proporciones muy
        distintas, y a eso se le llama <b>abundancia isotópica</b>. Hay elementos con una
        sola forma isotópica, como el sodio y el flúor, y otros con varias:</p>
        <table class="tabla">
          <tr><th>Elemento</th><th>Isótopo (A)</th><th>Abundancia</th></tr>
          <tr><td>Hidrógeno</td><td>1</td><td>99,98 %</td></tr>
          <tr><td></td><td>2</td><td>0,016 %</td></tr>
          <tr><td>Oxígeno</td><td>16</td><td>99,76 %</td></tr>
          <tr><td></td><td>18</td><td>0,20 %</td></tr>
          <tr><td>Azufre</td><td>32</td><td>95,91 %</td></tr>
          <tr><td></td><td>34</td><td>4,2 %</td></tr>
        </table>
        <p>Ojo con una confusión frecuente: <b>no todos los isótopos son radiactivos</b>.
        Muchos son perfectamente estables.</p>`,
    },
  ],

  // ══════════════════════════════ NIVEL 13 ═════════════════════════════
  13: [
    {
      titulo: 'Por qué las masas no son enteras',
      texto: `<p>Si mirás una tabla periódica, la masa del cloro es <b>35,45 u</b>. Pero un
        átomo de cloro tiene 17 protones y 18 o 20 neutrones: siempre un número entero de
        partículas. ¿De dónde sale el 0,45?</p>
        <p>De que la tabla no informa la masa de <b>un</b> átomo, sino el promedio de todos
        los átomos de ese elemento que hay en la naturaleza.</p>`,
    },
    {
      titulo: 'Promedio ponderado',
      texto: `<p>La <b>masa atómica promedio</b> es el promedio de las masas de los isótopos
        <b>pesado según su abundancia natural</b>. No es un promedio común: cada isótopo
        pesa en la cuenta según cuán frecuente sea.</p>
        <p style="text-align:center"><b>M̄ = Σ (M<sub>i</sub> × %abundancia<sub>i</sub>) / 100</b></p>`,
      figura: 'masa-promedio',
    },
    {
      titulo: 'El cálculo, paso a paso',
      texto: `<p>Veamos el caso del cloro con los datos de la lámina.</p>`,
      ejemplo: {
        enunciado: 'El cloro tiene ³⁵Cl (34,96885 u; 75,78 %) y ³⁷Cl (36,96590 u; 24,22 %). Calculá su masa atómica promedio.',
        pasos: [
          'Multiplicá cada masa por su abundancia: 34,96885 × 75,78 = 2649,93.',
          'Y el otro isótopo: 36,96590 × 24,22 = 895,32.',
          'Sumá: 2649,93 + 895,32 = 3545,25.',
          'Dividí por 100: 3545,25 / 100 = 35,45.',
        ],
        resultado: 'M̄(Cl) = 35,45 u. Queda cerca de 35 porque el ³⁵Cl es mucho más abundante.',
      },
    },
    {
      titulo: 'Cómo controlar el resultado',
      texto: `<p>Antes de dar por buena la cuenta, hacé esta verificación mental: el
        resultado <b>tiene que caer entre</b> la masa del isótopo más liviano y la del más
        pesado, y <b>más cerca del más abundante</b>.</p>
        <p>Si te da 36,5 para el cloro, algo salió mal: el isótopo dominante es el de 35.</p>`,
      dato: 'La masa atómica promedio se expresa en u, nunca en gramos.',
    },
    {
      titulo: 'Para qué sirve',
      texto: `<p>La masa atómica promedio está relacionada con <b>propiedades físicas</b>
        como la densidad y los puntos de fusión y ebullición, y por eso influye en procesos
        naturales y tecnológicos.</p>
        <p>Es también la base de las diferencias de masa que permiten usar isótopos como
        <b>trazadores</b> en suelos, alimentos y aguas.</p>`,
    },
  ],

  // ══════════════════════════════ NIVEL 14 ═════════════════════════════
  14: [
    {
      titulo: 'Núcleos que no aguantan',
      texto: `<p>Algunos núcleos son <b>inestables</b> y se transforman espontáneamente,
        emitiendo radiación en el proceso. Eso es la <b>radiactividad</b>, el fenómeno que
        observó Becquerel en 1896.</p>
        <p>Es un fenómeno <b>nuclear</b>: no depende de los electrones ni de con qué esté
        combinado el átomo. Por eso no se puede “apagar” con una reacción química.</p>`,
    },
    {
      titulo: 'Los tipos de emisión',
      texto: `<table class="tabla">
          <tr><th>Tipo</th><th>Qué es</th><th>Notación</th></tr>
          <tr><td>α</td><td>2 protones + 2 neutrones (núcleo de helio)</td><td>⁴₂He</td></tr>
          <tr><td>β⁻</td><td>electrón muy veloz</td><td>⁰₋₁e</td></tr>
          <tr><td>β⁺</td><td>positrón (como el electrón, pero +)</td><td>⁰₊₁e</td></tr>
          <tr><td>γ</td><td>fotón de alta energía, sin masa ni carga</td><td>γ</td></tr>
        </table>
        <p>Las α tienen carga positiva y son las más pesadas; las γ no son partículas sino
        radiación electromagnética, con mucha más energía que la luz visible.</p>`,
    },
    {
      titulo: 'Poder de penetración',
      texto: `<p>Cuanto más penetrante es una radiación, más blindaje hace falta. Las
        <b>menos</b> penetrantes son las α: las frena una hoja de papel o la propia piel.
        Las <b>más</b> penetrantes son las γ y las radiaciones neutrónicas, que necesitan
        plomo u hormigón.</p>`,
      figura: 'radiaciones',
      dato: 'α ← papel · β ← aluminio · γ ← plomo u hormigón',
    },
    {
      titulo: 'Qué pasa con el núcleo',
      texto: `<p>En la emisión <b>β⁻</b>, un neutrón del núcleo se transforma en protón. El
        número atómico sube en 1, pero la cantidad total de nucleones no cambia: <b>A se
        mantiene</b>.</p>`,
      figura: 'desintegracion-beta',
    },
    {
      titulo: 'Cómo se evalúa el riesgo',
      texto: `<p>Decir que algo “es radiactivo” no alcanza para saber si es peligroso.
        Hay que considerar:</p>
        <ul>
          <li>el <b>tipo</b> y la <b>energía</b> de la radiación;</li>
          <li>la <b>actividad</b> de la fuente y la <b>cantidad</b> de material;</li>
          <li>el <b>período de semidesintegración</b>;</li>
          <li>la <b>vía de exposición</b> y el <b>tiempo de contacto</b>;</li>
          <li>la posibilidad de que se <b>incorpore al organismo</b>.</li>
        </ul>
        <p>Y hay que distinguir siempre entre un <b>isótopo estable</b>, que no emite nada, y
        un <b>radioisótopo</b>, cuyo núcleo se transforma espontáneamente.</p>`,
    },
  ],

  // ══════════════════════════════ NIVEL 15 ═════════════════════════════
  15: [
    {
      titulo: 'Dos caminos desde el átomo',
      texto: `<p>La estructura atómica se aplica en el agro por dos vías distintas pero
        relacionadas:</p>
        <ul>
          <li>Por el <b>núcleo</b>: identifica al elemento y distingue sus isótopos. De acá
              salen los trazadores y las técnicas con radiación.</li>
          <li>Por los <b>electrones</b>: sobre todo los de valencia, que condicionan la
              formación de iones, los enlaces y la reactividad. De acá sale casi toda la
              química del suelo y de los alimentos.</li>
        </ul>`,
    },
    {
      titulo: 'Las plantas comen iones',
      texto: `<p>Los cultivos no incorporan los elementos como átomos sueltos, sino
        principalmente como <b>iones o moléculas</b> presentes en la solución del suelo: el
        nitrógeno como NO<sub>3</sub><sup>−</sup> o NH<sub>4</sub><sup>+</sup>, el potasio
        como K<sup>+</sup>, el calcio como Ca<sup>2+</sup>.</p>
        <p>Por eso <b>no alcanza</b> con decir que un suelo “tiene hierro” o “tiene
        fósforo”. Hay que preguntar en qué forma química está y bajo qué condiciones puede
        ser retenido, movilizado o absorbido. Intervienen el pH, la humedad, la solubilidad,
        la materia orgánica y los microorganismos.</p>`,
      dato: 'Presencia total no es lo mismo que disponibilidad.',
    },
    {
      titulo: 'Trazadores: seguirle el rastro',
      texto: `<p>Un <b>trazador</b> permite seguir el recorrido de una sustancia dentro de un
        sistema sin cambiar su comportamiento químico.</p>
        <ul>
          <li>El <b>fósforo-32</b> sirve para estudiar cómo se desplaza el fósforo de un
              fertilizante desde el suelo hacia las raíces.</li>
          <li>El <b>nitrógeno-15</b>, que es <b>estable y no radiactivo</b>, permite saber
              qué proporción del fertilizante fue absorbida, cuánta quedó en el suelo y
              cuánta se perdió. También sirve para estudiar la fijación biológica.</li>
        </ul>`,
      figura: 'trazador',
    },
    {
      titulo: 'Radiación aplicada al campo',
      texto: `<ul>
          <li><b>Técnica del insecto estéril</b>: se crían insectos plaga, se los esteriliza
              con una dosis controlada de radiación y se los libera. Al aparearse no dejan
              descendencia. Los insectos liberados <b>no</b> quedan radiactivos.</li>
          <li><b>Mejoramiento vegetal</b>: irradiar semillas produce modificaciones
              <b>al azar</b> en el material genético. La radiación no crea una variedad
              mejor: genera diversidad, y después hay que cultivar, evaluar y seleccionar.</li>
          <li><b>Erosión y sedimentos</b>: algunos radionucleidos ambientales permiten
              estimar el movimiento de partículas del suelo.</li>
        </ul>`,
    },
    {
      titulo: 'Irradiado no es contaminado',
      texto: `<p>La <b>irradiación de alimentos</b> los expone, en condiciones controladas, a
        radiación gamma, rayos X o haces de electrones. Según la dosis puede reducir
        patógenos, controlar insectos, retrasar la maduración y alargar la vida útil.</p>
        <p>Un alimento <b>irradiado</b> recibió energía en un proceso tecnológico. Un
        alimento <b>contaminado</b> tiene radionucleidos incorporados accidentalmente. La
        irradiación bien aplicada <b>no</b> vuelve radiactivo al alimento.</p>`,
      figura: 'irradiado-vs-contaminado',
    },
    {
      titulo: 'Alimentos y ambiente',
      texto: `<p>Las proporciones naturales de <b>isótopos estables</b> funcionan como una
        “huella química”: permiten conocer el origen geográfico de un alimento o detectar
        adulteraciones, sin agregarle nada.</p>
        <p>En ambiente, los isótopos del hidrógeno y del oxígeno del agua informan sobre su
        procedencia, las zonas de recarga de acuíferos y la evaporación; los del carbono y
        el nitrógeno ayudan a estudiar ciclos y contaminantes.</p>`,
      dato: 'No basta con preguntar qué elemento hay: importa en qué forma, en qué cantidad y en qué condiciones.',
    },
  ],

  // ══════════════════════════════ NIVEL 16 ═════════════════════════════
  16: [
    {
      titulo: 'La receta de los tres números',
      texto: `<p>Casi todos los ejercicios del TP arrancan igual: te dan un símbolo con
        números y hay que decir cuántas partículas tiene. Con estos tres pasos salen
        todos.</p>`,
      figura: 'receta-particulas',
    },
    {
      titulo: 'Escribir la notación',
      texto: `<p>Para representar un átomo se usa el símbolo del elemento con el
        <b>número másico arriba</b> a la izquierda y el <b>número atómico abajo</b> a la
        izquierda. Si es un ion, la carga va arriba a la derecha.</p>
        <p>Con el fósforo de masa atómica 31 y número atómico 15 queda
        <b><sup>31</sup><sub>15</sub>P</b>. Un error típico es invertirlos: el número grande
        siempre va arriba, porque incluye protones <b>y</b> neutrones.</p>`,
      ejemplo: {
        enunciado: 'Una especie química X tiene 8 protones, 8 neutrones y 10 electrones. ¿Cuál es?',
        pasos: [
          'Z = protones = 8 → es el oxígeno.',
          'A = protones + neutrones = 8 + 8 = 16.',
          'Tiene 2 electrones más que protones → carga −2.',
        ],
        resultado: 'Es el ion óxido: ¹⁶₈O²⁻.',
      },
    },
    {
      titulo: 'Los tres verdadero/falso clásicos',
      texto: `<ul>
          <li>“El núcleo tiene la mayor parte de la masa <b>y del volumen</b>” → <b>falso</b>.
              La masa sí (≈ 99,95 %), el volumen no: el átomo es casi todo espacio vacío.</li>
          <li>“Todos los átomos de un elemento tienen el mismo número de protones” →
              <b>verdadero</b>. Es lo que define al elemento.</li>
          <li>“El número de electrones es igual al de neutrones” → <b>falso</b>. En un átomo
              neutro es igual al de <b>protones</b>.</li>
        </ul>`,
      dato: 'Cuando un enunciado mezcla masa con volumen, desconfiá.',
    },
  ],

  // ══════════════════════════════ NIVEL 17 ═════════════════════════════
  17: [
    {
      titulo: 'Primero calculá N',
      texto: `<p>Los ejercicios te dan listas de núclidos y piden agruparlos. La forma de no
        equivocarse es siempre la misma: antes de comparar nada, calculá
        <b>N = A − Z</b> para cada uno y anotalo al lado.</p>
        <p>Recién con los tres números a la vista (Z, A y N) se ve qué comparten.</p>`,
      figura: 'clasificar-nuclidos',
    },
    {
      titulo: 'Un ejemplo con la lista del TP',
      texto: `<p>Tomemos <sup>12</sup><sub>7</sub>N, <sup>13</sup><sub>5</sub>B,
        <sup>13</sup><sub>7</sub>N, <sup>14</sup><sub>6</sub>C, <sup>14</sup><sub>7</sub>N y
        <sup>17</sup><sub>9</sub>F.</p>`,
      ejemplo: {
        enunciado: 'Agrupá esos seis núclidos en isótopos, isóbaros e isótonos.',
        pasos: [
          'Calculá N: ¹²N → 5; ¹³B → 8; ¹³N → 6; ¹⁴C → 8; ¹⁴N → 7; ¹⁷F → 8.',
          'Isótopos (igual Z): los tres con Z = 7 → ¹²N, ¹³N y ¹⁴N.',
          'Isóbaros (igual A): ¹³B con ¹³N, y ¹⁴C con ¹⁴N.',
          'Isótonos (igual N): ¹³B, ¹⁴C y ¹⁷F, los tres con 8 neutrones.',
        ],
        resultado: 'Un mismo núclido puede entrar en más de un grupo según con quién se lo compare.',
      },
    },
    {
      titulo: 'Núclidos de uso agronómico',
      texto: `<p>El TP usa núclidos que aparecen en conservación de alimentos y en
        mejoramiento de cultivos. Conviene tener a mano sus Z:</p>
        <table class="tabla">
          <tr><th>Núclido</th><th>Z</th><th>N = A − Z</th></tr>
          <tr><td>Cobalto-60</td><td>27</td><td>33</td></tr>
          <tr><td>Cesio-137</td><td>55</td><td>82</td></tr>
          <tr><td>Fósforo-32</td><td>15</td><td>17</td></tr>
          <tr><td>Yodo-131</td><td>53</td><td>78</td></tr>
          <tr><td>Nitrógeno-15</td><td>7</td><td>8</td></tr>
        </table>`,
    },
    {
      titulo: 'Escribir el símbolo al revés',
      texto: `<p>Otros ejercicios van en sentido inverso: te dan el elemento y una condición,
        y hay que armar el símbolo.</p>
        <ul>
          <li>“El núclido de hafnio con 107 neutrones”: Z = 72, entonces
              A = 72 + 107 = 179 → <sup>179</sup><sub>72</sub>Hf.</li>
          <li>“El núclido de silicio con igual cantidad de protones y neutrones”: Z = 14 y
              N = 14, entonces A = 28 → <sup>28</sup><sub>14</sub>Si.</li>
        </ul>`,
      dato: 'A = Z + N sirve para los dos lados: para contar y para construir.',
    },
  ],

  // ══════════════════════════════ NIVEL 18 ═════════════════════════════
  18: [
    {
      titulo: 'Leer un problema de aplicación',
      texto: `<p>Los problemas del final del TP mezclan química con una situación real. La
        estrategia es separar las dos capas:</p>
        <ul>
          <li>El <b>contexto</b>: qué se quiere lograr y con qué técnica.</li>
          <li>Los <b>datos</b>: los núclidos, sus Z y A, las ecuaciones.</li>
        </ul>
        <p>Casi siempre la pregunta se responde con lo que ya sabés: contar partículas,
        clasificar una relación entre núclidos o explicar por qué algo no se vuelve
        radiactivo.</p>`,
    },
    {
      titulo: 'El caso del cobalto-60',
      texto: `<p>Una planta irradia pimienta con una fuente sellada de cobalto-60. La fuente
        <b>permanece separada</b> del alimento: sólo lo atraviesa la radiación gamma, que
        deposita energía y daña el material genético de insectos y microorganismos.</p>
        <p>El núcleo del <sup>60</sup>Co es inestable y se desintegra emitiendo β⁻, dando
        níquel-60 en estado excitado, que libera el exceso de energía como radiación γ.</p>`,
      figura: 'desintegracion-beta',
      ejemplo: {
        enunciado: '¿Qué relación hay entre el ⁶⁰₂₇Co y el ⁶⁰₂₈Ni?',
        pasos: [
          'Co: Z = 27, A = 60 → N = 33.',
          'Ni: Z = 28, A = 60 → N = 32.',
          'Comparten A pero tienen distinto Z.',
        ],
        resultado: 'Son isóbaros: elementos diferentes con el mismo número másico.',
      },
    },
    {
      titulo: 'El fertilizante marcado',
      texto: `<p>Se aplica a un cultivo un fertilizante enriquecido con <sup>15</sup>N. El
        <sup>14</sup>N y el <sup>15</sup>N son <b>isótopos</b>: mismo Z, misma configuración
        electrónica si son neutros, y por eso participan en reacciones químicas
        semejantes.</p>
        <p>La planta “no los distingue”: el trazador sigue el mismo camino que el nitrógeno
        común. Lo que permite seguirle el rastro es la <b>diferencia de masa</b>, que se mide
        en las muestras de planta y de suelo. El <sup>15</sup>N es estable: no emite
        radiación.</p>`,
      dato: 'Un trazador no tiene por qué ser radiactivo.',
    },
    {
      titulo: 'Isótopos para leer el pasado',
      texto: `<p>El último problema mide la razón <sup>129</sup>Xe/<sup>136</sup>Xe en
        minerales para estudiar la evolución de la Tierra.</p>
        <p>Los dos son xenón (Z = 54), así que tienen las mismas propiedades químicas y la
        misma cantidad de electrones si son neutros. Se diferencian en los neutrones: 75 y
        82 respectivamente, y por lo tanto en la masa del núcleo.</p>`,
    },
  ],
};

export const tieneTeoria = (id) => Array.isArray(TEORIA[id]) && TEORIA[id].length > 0;
