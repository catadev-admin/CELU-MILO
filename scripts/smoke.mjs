#!/usr/bin/env node
/**
 * Prueba de humo del juego: levanta un servidor estático, abre Chromium
 * headless por CDP (emulando un celular), juega el nivel 1 respondiendo bien
 * y verifica que se otorguen 3 estrellas.
 *
 * Uso:  node scripts/smoke.mjs [--shots <carpeta>]
 * No necesita npm install: usa sólo módulos internos de Node.
 */

import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { serve } from './serve.mjs';

const CHROME = process.env.CHROME_PATH || '/opt/pw-browsers/chromium';
const DEBUG_PORT = 9333;
const shotsIdx = process.argv.indexOf('--shots');
const SHOTS = shotsIdx > -1 ? process.argv[shotsIdx + 1] : null;

/* ── cliente CDP mínimo ────────────────────────────────── */
class CDP {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    this.eventos = [];
    ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.method) this.eventos.push(msg);
      const p = this.pending.get(msg.id);
      if (!p) return;
      this.pending.delete(msg.id);
      msg.error ? p.reject(new Error(JSON.stringify(msg.error))) : p.resolve(msg.result);
    });
  }
  send(method, params = {}, sessionId) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params, sessionId }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForDevtools() {
  for (let i = 0; i < 100; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
      if (r.ok) return (await r.json()).webSocketDebuggerUrl;
    } catch { /* todavía no levantó */ }
    await sleep(200);
  }
  throw new Error('Chromium no expuso el puerto de depuración');
}

/* ── prueba ────────────────────────────────────────────── */
const checks = [];
function check(name, ok, extra = '') {
  checks.push({ name, ok, extra });
  console.log(`${ok ? '✅' : '❌'} ${name}${extra ? ` — ${extra}` : ''}`);
}

async function main() {
  const server = await serve();
  const base = `http://127.0.0.1:${server.address().port}/`;

  const chrome = spawn(CHROME, [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    `--remote-debugging-port=${DEBUG_PORT}`,
    '--user-data-dir=/tmp/qq-smoke-profile',
    'about:blank',
  ], { stdio: 'ignore' });

  let failed = false;
  try {
    const browserWs = await waitForDevtools();
    const ws = new WebSocket(browserWs);
    await new Promise((ok, err) => {
      ws.addEventListener('open', ok, { once: true });
      ws.addEventListener('error', () => err(new Error('no se pudo conectar a CDP')), { once: true });
    });
    const cdp = new CDP(ws);

    const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
    const S = sessionId;

    await cdp.send('Page.enable', {}, S);
    await cdp.send('Runtime.enable', {}, S);
    await cdp.send('Log.enable', {}, S);
    await cdp.send('Emulation.setDeviceMetricsOverride',
      { width: 390, height: 844, deviceScaleFactor: 2, mobile: true }, S);

    const evaluate = async (expression, awaitPromise = false) => {
      const r = await cdp.send('Runtime.evaluate',
        { expression, awaitPromise, returnByValue: true }, S);
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || 'error en la página');
      return r.result.value;
    };

    const shot = async (name) => {
      if (!SHOTS) return;
      await mkdir(SHOTS, { recursive: true });
      const { data } = await cdp.send('Page.captureScreenshot', { format: 'png' }, S);
      await writeFile(join(SHOTS, `${name}.png`), Buffer.from(data, 'base64'));
    };

    // ── inicio ──
    await cdp.send('Page.navigate', { url: base }, S);
    await sleep(900);
    check('carga sin errores de JS', await evaluate('!!document.querySelector("#btn-play")'));
    check('título visible', (await evaluate('document.querySelector(".home__title").innerText')).includes('Química'));
    await shot('1-inicio');

    // ── unidades (carpetas) ──
    await evaluate('document.querySelector("#btn-play").click()');
    await sleep(400);
    const temas = await evaluate(
      `(async()=>{const m=await import('/data/levels.js');return m.TEMAS.length})()`, true);
    const carpetas = await evaluate('document.querySelectorAll(".unit").length');
    check('el inicio lleva a las carpetas de unidades', carpetas === temas,
      `${carpetas} de ${temas}`);
    await shot('2-unidades');

    // ── niveles de la unidad 1 ──
    const esperados = await evaluate(`(async()=>{
      const m = await import('/data/levels.js');
      const t = m.TEMAS[0];
      return m.LEVELS.filter((l) => l.id >= t.desde && l.id <= t.hasta).length;
    })()`, true);
    await evaluate('document.querySelectorAll(".unit")[0].click()');
    await sleep(400);
    const levels = await evaluate('document.querySelectorAll(".level").length');
    check('la carpeta abre los niveles de esa unidad', levels === esperados,
      `${levels} de ${esperados}`);
    check('ningún nivel queda bloqueado',
      await evaluate('[...document.querySelectorAll(".level__play")].every((b) => !b.disabled)'));
    await shot('2b-mapa');

    // ── teoría del nivel ──
    const pasosTeoria = await evaluate(
      `(async()=>{const m=await import('/data/teoria.js');return (m.TEORIA[1]||[]).length})()`, true);
    check('el nivel 1 tiene teoría cargada', pasosTeoria > 0, `${pasosTeoria} pasos`);

    await evaluate('document.querySelectorAll(".level__theory")[0].click()');
    await sleep(300);
    check('el botón del libro abre la teoría',
      await evaluate('document.querySelector("#screen-theory").classList.contains("is-active")'));
    check('el botón Anterior arranca deshabilitado',
      await evaluate('document.querySelector("#btn-theory-prev").disabled'));

    let conFigura = 0;
    let recorridos = 0;
    for (let i = 0; i < pasosTeoria; i++) {
      recorridos++;
      if (await evaluate('!!document.querySelector(".teoria__figura svg")')) conFigura++;
      const contador = await evaluate('document.querySelector("#theory-count").textContent');
      if (contador !== `${i + 1} / ${pasosTeoria}`) {
        check('el contador de pasos acompaña', false, contador);
        break;
      }
      if (i === 1) await shot('7-teoria');
      if (i < pasosTeoria - 1) {
        await evaluate('document.querySelector("#btn-theory-next").click()');
        await sleep(220);
      }
    }
    check('la teoría recorre todos sus pasos', recorridos === pasosTeoria,
      `${recorridos} de ${pasosTeoria}`);
    check('la teoría incluye figuras', conFigura > 0, `${conFigura} pasos con figura`);
    check('el último paso invita a jugar',
      (await evaluate('document.querySelector("#btn-theory-next").textContent')).includes('Jugar'));

    await evaluate('document.querySelector("#btn-theory-next").click()');
    await sleep(300);
    check('desde la teoría se entra directo al nivel',
      await evaluate('document.querySelector("#screen-play").classList.contains("is-active")'));
    await evaluate('document.querySelector("#btn-quit").click()');
    await sleep(300);

    // ── jugar el nivel 1 respondiendo todo bien ──
    await evaluate('document.querySelectorAll(".level__play")[0].click()');
    await sleep(300);
    check('arranca con 3 vidas', await evaluate('document.querySelectorAll("#lives .off").length === 0'));
    await shot('3-pregunta');

    // Responde bien todas las preguntas del nivel cuyo índice se le pase.
    const jugarNivel = async (indice, capturas = false) => {
      const totalQ = await evaluate(
        `(async()=>{const m=await import('/data/levels.js');return m.LEVELS[${indice}].questions.length})()`, true);

      for (let i = 0; i < totalQ; i++) {
        const answered = await evaluate(`(async () => {
        const m = await import('/data/levels.js');
        const qs = m.LEVELS[${indice}].questions;
        const shown = document.querySelector('#question').innerHTML;
        const q = qs.find(x => x.q === shown);
        if (!q) return 'pregunta no encontrada';
        if (q.type === 'num') {
          // Se responde como en el celular: escribir y tocar "Responder".
          const input = document.querySelector('#numinput');
          input.value = String(q.answer);
          input.dispatchEvent(new Event('input', { bubbles: true }));
          const boton = document.querySelector('#btn-check');
          if (boton.disabled) return 'el botón Responder quedó deshabilitado';
          boton.click();
          return 'num';
        }
        const ok = document.querySelector('.option[data-correct="1"]');
        if (!ok) return 'sin opción correcta marcada';
        ok.click();
        return q.type;
      })()`, true);
        if (answered !== 'mc' && answered !== 'vf' && answered !== 'num') {
          check(`responde la pregunta ${i + 1} del nivel ${indice + 1}`, false, answered);
          break;
        }
        await sleep(160);
        if (capturas && i === 0) await shot('3b-feedback');
        const fbOn = await evaluate('document.querySelector("#feedback").classList.contains("feedback--ok")');
        if (!fbOn) { check(`la pregunta ${i + 1} se marcó como correcta`, false); break; }
        await evaluate('document.querySelector("#btn-next").click()');
        await sleep(160);
      }
    };

    await jugarNivel(0, true);

    check('no perdió vidas respondiendo bien',
      await evaluate('document.querySelectorAll("#lives .off").length === 0'));

    // ── resultado ──
    await sleep(300);
    check('llega a la pantalla de resultado',
      await evaluate('document.querySelector("#screen-result").classList.contains("is-active")'));
    const stars = await evaluate('document.querySelectorAll("#result-stars .on").length');
    check('otorga 3 estrellas con todo correcto', stars === 3, `${stars} estrellas`);
    check('el puntaje es mayor a cero',
      await evaluate('Number(document.querySelector("#result-score").textContent) > 0'));
    await shot('4-resultado');

    // ── desbloqueo y persistencia ──
    check('guarda el progreso en localStorage', await evaluate(`(async()=>{
      const s = await import('/js/storage.js');
      return !!JSON.parse(localStorage.getItem(s.KEY) || '{}')['1'];
    })()`, true));
    await evaluate('document.querySelector("#btn-result-main").click()');
    await sleep(300);
    check('avanza al nivel 2',
      (await evaluate('document.querySelector("#play-level").textContent')).includes('Nivel 2'));

    await cdp.send('Page.navigate', { url: base }, S);
    await sleep(700);
    await evaluate('document.querySelector("#btn-play").click()');
    await sleep(400);
    check('la carpeta muestra el progreso tras recargar',
      (await evaluate('document.querySelector(".unit__stars").textContent')).startsWith('3'));
    await evaluate('document.querySelectorAll(".unit")[0].click()');
    await sleep(400);
    check('el nivel jugado conserva sus estrellas',
      await evaluate('document.querySelectorAll(".level__play")[0].querySelectorAll(".on").length === 3'));
    await shot('5-mapa-progreso');

    // ── sin scroll horizontal ──
    check('no hay scroll horizontal en pantalla de celular',
      await evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1'));

    // ── preguntas de cálculo: se responden con el botón, no con el enter ──
    // (el teclado numérico del celular no siempre trae tecla de envío)
    const nivelNum = await evaluate(`(async()=>{
      const m = await import('/data/levels.js');
      const s = await import('/js/storage.js');
      const progreso = {};
      m.LEVELS.forEach((l) => { progreso[l.id] = { stars: 3, best: 100 }; });
      localStorage.setItem(s.KEY, JSON.stringify(progreso));
      // el nivel con más preguntas de cálculo, ubicado dentro de su unidad
      let mejor = -1, max = 0;
      m.LEVELS.forEach((l, i) => {
        const n = l.questions.filter((q) => q.type === 'num').length;
        if (n > max) { max = n; mejor = i; }
      });
      if (mejor < 0) return null;
      const nivel = m.LEVELS[mejor];
      const tema = m.TEMAS.findIndex((t) => nivel.id >= t.desde && nivel.id <= t.hasta);
      const dentro = m.LEVELS.filter((l) => l.id >= m.TEMAS[tema].desde && l.id <= nivel.id).length - 1;
      return { global: mejor, tema, dentro };
    })()`, true);

    if (!nivelNum) {
      check('hay preguntas numéricas para probar', false);
    } else {
      await cdp.send('Page.navigate', { url: base }, S);
      await sleep(700);
      await evaluate('document.querySelector("#btn-play").click()');
      await sleep(400);
      await evaluate(`document.querySelectorAll('.unit')[${nivelNum.tema}].click()`);
      await sleep(400);
      await evaluate(`document.querySelectorAll('.level__play')[${nivelNum.dentro}].click()`);
      await sleep(300);

      // Busca una pregunta de cálculo y revisa el botón antes de contestarla.
      for (let i = 0; i < 12; i++) {
        if (await evaluate('document.querySelector("#numform").classList.contains("is-on")')) break;
        await evaluate('document.querySelector(".option[data-correct=\\"1\\"]").click()');
        await sleep(140);
        await evaluate('document.querySelector("#btn-next").click()');
        await sleep(140);
      }
      check('el botón Responder se ve en las preguntas de cálculo',
        await evaluate('document.querySelector("#btn-check").offsetParent !== null'));
      check('el botón Responder arranca deshabilitado',
        await evaluate('document.querySelector("#btn-check").disabled'));
      await evaluate(`(() => {
        const i = document.querySelector('#numinput');
        i.value = '7';
        i.dispatchEvent(new Event('input', { bubbles: true }));
      })()`);
      check('el botón Responder se habilita al escribir',
        await evaluate('!document.querySelector("#btn-check").disabled'));
      await shot('6-numerica');

      // Vuelve a empezar el nivel y ahora sí lo juega entero.
      await evaluate('document.querySelector("#btn-quit").click()');
      await sleep(300);
      await evaluate(`document.querySelectorAll('.level__play')[${nivelNum.dentro}].click()`);
      await sleep(300);
      await jugarNivel(nivelNum.global);
      await sleep(300);
      const estrellasNum = await evaluate('document.querySelectorAll("#result-stars .on").length');
      check('se puede completar un nivel entero de cálculo', estrellasNum === 3,
        `${estrellasNum} estrellas`);
    }

    // ── el orden de las preguntas cambia en cada partida ──
    await cdp.send('Page.navigate', { url: base }, S);
    await sleep(700);
    await evaluate('document.querySelector("#btn-play").click()');
    await sleep(400);
    await evaluate('document.querySelectorAll(".unit")[0].click()');
    await sleep(400);
    const primeras = new Set();
    for (let i = 0; i < 6; i++) {
      await evaluate('document.querySelectorAll(".level__play")[0].click()');
      await sleep(220);
      primeras.add(await evaluate('document.querySelector("#question").innerHTML'));
      await evaluate('document.querySelector("#btn-quit").click()');
      await sleep(220);
    }
    check('las preguntas salen mezcladas en cada partida', primeras.size > 1,
      `${primeras.size} primeras preguntas distintas en 6 intentos`);

    const ordenOpciones = new Set();
    for (let i = 0; i < 6; i++) {
      await evaluate('document.querySelectorAll(".level__play")[0].click()');
      await sleep(220);
      ordenOpciones.add(await evaluate(
        '[...document.querySelectorAll(".option")].map((o) => o.textContent).join("|")'));
      await evaluate('document.querySelector("#btn-quit").click()');
      await sleep(220);
    }
    check('las opciones también se mezclan', ordenOpciones.size > 1,
      `${ordenOpciones.size} combinaciones distintas en 6 intentos`);

    // ── auditoría: PWA, metadatos y consola limpia ──
    const meta = await evaluate(`(() => ({
      lang: document.documentElement.lang,
      titulo: !!document.title,
      descripcion: !!document.querySelector('meta[name="description"]'),
      theme: !!document.querySelector('meta[name="theme-color"]'),
      manifest: !!document.querySelector('link[rel="manifest"]'),
      appleIcon: (document.querySelector('link[rel="apple-touch-icon"]') || {}).href || '',
      zoomBloqueado: (document.querySelector('meta[name="viewport"]').content || '').includes('maximum-scale'),
      landmark: !!document.querySelector('main'),
      sinAltFaltante: [...document.images].every((i) => i.alt !== undefined),
    }))()`);
    check('el HTML declara idioma, título y descripción',
      meta.lang === 'es' && meta.titulo && meta.descripcion);
    check('tiene manifest, theme-color y landmark main',
      meta.manifest && meta.theme && meta.landmark);
    check('no bloquea el zoom del navegador', !meta.zoomBloqueado);
    check('el apple-touch-icon es PNG (iOS no acepta SVG)', meta.appleIcon.endsWith('.png'));

    for (const recurso of ['manifest.webmanifest', 'icons/icon-180.png', 'icons/icon-512.png', 'sw.js']) {
      const estado = await evaluate(
        `fetch('${recurso}').then(r => r.status)`, true);
      check(`se sirve ${recurso}`, estado === 200, `HTTP ${estado}`);
    }

    const errores = cdp.eventos
      .filter((e) => e.method === 'Log.entryAdded' && e.params.entry.level === 'error')
      .map((e) => e.params.entry.text);
    check('sin errores en la consola', errores.length === 0, errores.join(' | '));

    failed = checks.some((c) => !c.ok);
  } catch (err) {
    console.error(`❌ ${err.message}`);
    failed = true;
  } finally {
    chrome.kill();
    server.close();
  }

  const ok = checks.filter((c) => c.ok).length;
  console.log(`\n${ok}/${checks.length} verificaciones OK`);
  process.exit(failed ? 1 : 0);
}

main();
