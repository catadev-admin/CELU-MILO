import { LEVELS, TEMAS } from '../data/levels.js';
import { loadProgress, saveLevelResult, resetProgress, totalStars } from './storage.js';
import { sfx } from './sfx.js';

const $ = (sel) => document.querySelector(sel);
const MAX_LIVES = 3;
const MAX_STARS = LEVELS.length * 3;

/* ══════════ Estado de la partida ══════════ */
let progress = loadProgress();
let game = null; // { level, queue, index, lives, score, streak, correct, answered }

/* ══════════ Navegación entre pantallas ══════════ */
function show(name) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('is-active'));
  $(`#screen-${name}`).classList.add('is-active');
  window.scrollTo(0, 0);
}

/* ══════════ Utilidades ══════════ */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function starsRow(n) {
  return [0, 1, 2]
    .map((i) => `<span class="${i < n ? 'on' : 'off'}">★</span>`)
    .join('');
}

function starsFor(correct, total) {
  const pct = correct / total;
  if (pct === 1) return 3;
  if (pct >= 0.8) return 2;
  if (pct >= 0.6) return 1;
  return 0;
}

/* ══════════ Inicio ══════════ */
function renderHome() {
  const stars = totalStars(progress);
  $('#home-stars').textContent = stars;
  $('#home-stars-max').textContent = MAX_STARS;
  $('#home-bar').style.width = `${(stars / MAX_STARS) * 100}%`;
}

/* ══════════ Unidades (carpetas) ══════════ */
// Los niveles de una unidad
const nivelesDe = (tema) =>
  LEVELS.filter((l) => l.id >= tema.desde && l.id <= tema.hasta);

let temaActual = TEMAS[0];

function renderUnits() {
  const cont = $('#units');
  cont.innerHTML = '';
  $('#units-stars').textContent = `${totalStars(progress)} ⭐`;

  TEMAS.forEach((tema) => {
    const niveles = nivelesDe(tema);
    const estrellas = niveles.reduce((n, l) => n + (progress[l.id]?.stars || 0), 0);
    const maximo = niveles.length * 3;
    const completados = niveles.filter((l) => (progress[l.id]?.stars || 0) > 0).length;

    const btn = document.createElement('button');
    btn.className = 'unit';
    btn.style.setProperty('--lvl', tema.color);
    btn.innerHTML = `
      <div class="unit__top">
        <div class="unit__icon" aria-hidden="true">${tema.icon}</div>
        <div class="unit__body">
          <div class="unit__name">${tema.titulo}</div>
          <div class="unit__sub">${tema.subtitulo}</div>
        </div>
      </div>
      <div class="unit__meta">
        <span>${niveles.length} niveles · ${completados} jugados</span>
        <span class="unit__stars">${estrellas} / ${maximo} ⭐</span>
      </div>
      <div class="bar bar--slim"><div class="bar__fill" style="width:${(estrellas / maximo) * 100}%"></div></div>`;
    btn.addEventListener('click', () => {
      sfx.tap();
      abrirUnidad(tema);
    });
    cont.appendChild(btn);
  });
}

function abrirUnidad(tema) {
  temaActual = tema;
  renderMap();
  show('map');
}

/* ══════════ Niveles de la unidad ══════════ */
function renderMap() {
  const cont = $('#levels');
  const niveles = nivelesDe(temaActual);
  cont.innerHTML = '';
  $('#map-title').textContent = temaActual.titulo;
  $('#map-stars').textContent =
    `${niveles.reduce((n, l) => n + (progress[l.id]?.stars || 0), 0)} ⭐`;

  niveles.forEach((lvl) => {
    const stars = progress[lvl.id]?.stars || 0;
    const best = progress[lvl.id]?.best || 0;

    const btn = document.createElement('button');
    btn.className = 'level';
    btn.style.setProperty('--lvl', lvl.color);
    btn.innerHTML = `
      <div class="level__icon" aria-hidden="true">${lvl.icon}</div>
      <div class="level__body">
        <div class="level__name">${lvl.id}. ${lvl.title}</div>
        <div class="level__sub">${lvl.subtitle}</div>
        ${best ? `<div class="level__best">Mejor puntaje: ${best}</div>` : ''}
      </div>
      <div class="level__stars" role="img" aria-label="${stars} de 3 estrellas">${starsRow(stars)}</div>`;
    btn.addEventListener('click', () => {
      sfx.tap();
      startLevel(lvl.id);
    });
    cont.appendChild(btn);
  });
}

/* ══════════ Partida ══════════ */
function startLevel(levelId) {
  const level = LEVELS.find((l) => l.id === levelId);
  game = {
    level,
    queue: shuffle(level.questions),
    index: 0,
    lives: MAX_LIVES,
    score: 0,
    streak: 0,
    correct: 0,
    answered: false,
  };
  $('#play-level').textContent = `Nivel ${level.id} · ${level.title}`;
  show('play');
  renderQuestion();
}

function renderLives() {
  const cont = $('#lives');
  cont.setAttribute('role', 'img');
  cont.setAttribute('aria-label', `${game.lives} de ${MAX_LIVES} vidas`);
  cont.innerHTML = [0, 1, 2]
    .map((i) => `<span class="${i < game.lives ? '' : 'off'}">❤️</span>`)
    .join('');
}

function renderQuestion() {
  const q = game.queue[game.index];
  game.answered = false;

  $('#play-bar').style.width = `${(game.index / game.queue.length) * 100}%`;
  $('#play-count').textContent = `${game.index + 1} / ${game.queue.length}`;
  $('#play-score').textContent = game.score;
  renderLives();

  $('#question').innerHTML = q.q;
  $('#feedback').className = 'feedback';
  $('#screen-play').classList.remove('is-feedback');

  const opts = $('#options');
  const form = $('#numform');
  const input = $('#numinput');
  opts.innerHTML = '';
  opts.classList.remove('is-locked');
  form.classList.remove('is-on');
  input.className = 'numform__input';
  input.value = '';
  $('#btn-check').disabled = true;

  if (q.type === 'num') {
    form.classList.add('is-on');
    $('#numunit').textContent = q.unit || '';
    input.focus({ preventScroll: true });
    return;
  }

  // mc y vf comparten la grilla de opciones
  const raw = q.type === 'vf'
    ? [{ text: 'Verdadero', correct: q.answer === true }, { text: 'Falso', correct: q.answer === false }]
    : q.options.map((text, i) => ({ text, correct: i === q.answer }));

  const list = q.type === 'vf' ? raw : shuffle(raw);
  list.forEach((o) => {
    const b = document.createElement('button');
    b.className = 'option';
    b.type = 'button';
    b.innerHTML = o.text;
    if (o.correct) b.dataset.correct = '1';
    b.addEventListener('click', () => answer(o.correct, b));
    opts.appendChild(b);
  });
}

function answer(isCorrect, el) {
  if (game.answered) return;
  game.answered = true;

  const q = game.queue[game.index];
  const opts = $('#options');
  opts.classList.add('is-locked');

  // marcar la correcta y la elegida
  if (q.type !== 'num') {
    [...opts.children].forEach((b) => {
      if (b.dataset.correct === '1') b.classList.add('is-ok');
      else if (b === el) b.classList.add('is-bad');
      else b.classList.add('is-dim');
    });
  } else {
    $('#numinput').classList.add(isCorrect ? 'is-ok' : 'is-bad');
    $('#numinput').blur();
    $('#btn-check').disabled = true;
  }

  if (isCorrect) {
    game.correct++;
    game.streak++;
    game.score += 100 + (game.streak - 1) * 20;
    sfx.correct();
  } else {
    game.streak = 0;
    game.lives--;
    sfx.wrong();
    renderLives();
  }

  $('#play-score').textContent = game.score;
  showFeedback(isCorrect, q);
}

function correctText(q) {
  if (q.type === 'num') {
    return `Respuesta: <b>${String(q.answer).replace('.', ',')}${q.unit ? ' ' + q.unit : ''}</b>`;
  }
  if (q.type === 'vf') return `Respuesta: <b>${q.answer ? 'Verdadero' : 'Falso'}</b>`;
  return `Respuesta: <b>${q.options[q.answer]}</b>`;
}

function showFeedback(isCorrect, q) {
  const fb = $('#feedback');
  const bonus = game.streak > 1 ? ` · racha ×${game.streak}` : '';
  $('#feedback-head').innerHTML = isCorrect ? `¡Correcto!${bonus}` : 'Incorrecto';
  $('#feedback-why').innerHTML = (isCorrect ? '' : correctText(q) + '<br>') + (q.why || '');
  fb.className = `feedback is-on feedback--${isCorrect ? 'ok' : 'bad'}`;
  $('#screen-play').classList.add('is-feedback');
  $('#btn-next').textContent =
    game.lives <= 0 || game.index === game.queue.length - 1 ? 'Ver resultado' : 'Continuar';
}

function nextQuestion() {
  $('#feedback').className = 'feedback';
  $('#screen-play').classList.remove('is-feedback');
  if (game.lives <= 0) return finishLevel(true);
  game.index++;
  if (game.index >= game.queue.length) return finishLevel(false);
  renderQuestion();
}

/* ══════════ Resultado ══════════ */
function finishLevel(outOfLives) {
  const total = game.queue.length;
  const stars = outOfLives ? 0 : starsFor(game.correct, total);
  const passed = stars > 0;

  if (passed) progress = saveLevelResult(game.level.id, stars, game.score);

  const cajaEstrellas = $('#result-stars');
  cajaEstrellas.setAttribute('role', 'img');
  cajaEstrellas.setAttribute('aria-label', `${stars} de 3 estrellas`);
  cajaEstrellas.innerHTML = starsRow(stars);
  $('#result-title').textContent = outOfLives
    ? 'Te quedaste sin vidas'
    : passed
      ? ['', '¡Aprobado!', '¡Muy bien!', '¡Perfecto!'][stars]
      : 'Casi…';
  $('#result-sub').textContent = passed
    ? `Nivel ${game.level.id} · ${game.level.title} superado`
    : 'Con 60 % de respuestas correctas ya ganás una estrella. ¡Probá de nuevo!';
  $('#result-correct').textContent = game.correct;
  $('#result-total').textContent = total;
  $('#result-score').textContent = game.score;

  const ultimoDeLaUnidad = game.level.id === temaActual.hasta;
  const mainBtn = $('#btn-result-main');
  mainBtn.textContent = passed
    ? (ultimoDeLaUnidad ? 'Volver a los niveles' : 'Siguiente nivel')
    : 'Reintentar';
  mainBtn.dataset.action = passed ? (ultimoDeLaUnidad ? 'map' : 'next') : 'retry';
  $('#btn-result-retry').style.display = passed ? 'block' : 'none';

  passed ? sfx.win() : sfx.lose();
  show('result');
  renderHome();
}

/* ══════════ Eventos ══════════ */
$('#btn-play').addEventListener('click', () => {
  sfx.unlock();
  sfx.tap();
  renderUnits();
  show('units');
});

$('#btn-reset').addEventListener('click', () => {
  if (!confirm('¿Borrar todo el progreso y las estrellas?')) return;
  resetProgress();
  progress = loadProgress();
  renderHome();
  renderUnits();
});

document.querySelectorAll('[data-go]').forEach((el) => {
  el.addEventListener('click', () => {
    sfx.tap();
    const dest = el.dataset.go;
    if (dest === 'map') renderMap();
    if (dest === 'units') renderUnits();
    if (dest === 'home') renderHome();
    show(dest);
  });
});

$('#btn-quit').addEventListener('click', () => {
  $('#feedback').className = 'feedback';
  $('#screen-play').classList.remove('is-feedback');
  renderMap();
  show('map');
});

$('#btn-next').addEventListener('click', () => {
  sfx.tap();
  nextQuestion();
});

// El teclado numérico del celular no siempre trae tecla de envío:
// el botón "Responder" se habilita apenas hay algo escrito.
$('#numinput').addEventListener('input', () => {
  const value = parseFloat($('#numinput').value.replace(',', '.').trim());
  $('#btn-check').disabled = game?.answered || Number.isNaN(value);
});

$('#numform').addEventListener('submit', (e) => {
  e.preventDefault();
  if (game?.answered) return;
  const q = game.queue[game.index];
  const value = parseFloat($('#numinput').value.replace(',', '.').trim());
  if (Number.isNaN(value)) return;
  const tol = q.tol ?? 0.001;
  answer(Math.abs(value - q.answer) <= tol, null);
});

$('#btn-result-main').addEventListener('click', (e) => {
  sfx.tap();
  const action = e.currentTarget.dataset.action;
  if (action === 'next') return startLevel(game.level.id + 1);
  if (action === 'retry') return startLevel(game.level.id);
  renderMap();
  show('map');
});

$('#btn-result-retry').addEventListener('click', () => {
  sfx.tap();
  startLevel(game.level.id);
});

/* ══════════ Arranque ══════════ */
renderHome();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
