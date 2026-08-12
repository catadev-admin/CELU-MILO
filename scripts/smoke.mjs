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
    ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(ev.data);
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

    // ── mapa ──
    await evaluate('document.querySelector("#btn-play").click()');
    await sleep(400);
    const levels = await evaluate('document.querySelectorAll(".level").length');
    check('el mapa lista todos los niveles', levels === 8, `${levels} niveles`);
    check('nivel 1 desbloqueado', await evaluate('!document.querySelectorAll(".level")[0].disabled'));
    check('nivel 2 bloqueado al empezar', await evaluate('document.querySelectorAll(".level")[1].disabled'));
    await shot('2-mapa');

    // ── jugar el nivel 1 respondiendo todo bien ──
    await evaluate('document.querySelectorAll(".level")[0].click()');
    await sleep(300);
    check('arranca con 3 vidas', await evaluate('document.querySelectorAll("#lives .off").length === 0'));
    await shot('3-pregunta');

    const totalQ = await evaluate(
      `(async()=>{const m=await import('/data/levels.js');return m.LEVELS[0].questions.length})()`, true);

    for (let i = 0; i < totalQ; i++) {
      const answered = await evaluate(`(async () => {
        const m = await import('/data/levels.js');
        const qs = m.LEVELS[0].questions;
        const shown = document.querySelector('#question').innerHTML;
        const q = qs.find(x => x.q === shown);
        if (!q) return 'pregunta no encontrada';
        if (q.type === 'num') {
          const input = document.querySelector('#numinput');
          input.value = String(q.answer);
          document.querySelector('#numform').requestSubmit();
          return 'num';
        }
        const ok = document.querySelector('.option[data-correct="1"]');
        if (!ok) return 'sin opción correcta marcada';
        ok.click();
        return q.type;
      })()`, true);
      if (answered !== 'mc' && answered !== 'vf' && answered !== 'num') {
        check(`responde la pregunta ${i + 1}`, false, answered);
        break;
      }
      await sleep(160);
      if (i === 0) await shot('3b-feedback');
      const fbOn = await evaluate('document.querySelector("#feedback").classList.contains("feedback--ok")');
      if (!fbOn) { check(`la pregunta ${i + 1} se marcó como correcta`, false); break; }
      await evaluate('document.querySelector("#btn-next").click()');
      await sleep(160);
    }

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
    check('guarda el progreso en localStorage',
      await evaluate(`!!JSON.parse(localStorage.getItem('quimica-quest:v1') || '{}')['1']`));
    await evaluate('document.querySelector("#btn-result-main").click()');
    await sleep(300);
    check('avanza al nivel 2',
      (await evaluate('document.querySelector("#play-level").textContent')).includes('Nivel 2'));

    await cdp.send('Page.navigate', { url: base }, S);
    await sleep(700);
    await evaluate('document.querySelector("#btn-play").click()');
    await sleep(300);
    check('el nivel 2 queda desbloqueado tras recargar',
      await evaluate('!document.querySelectorAll(".level")[1].disabled'));
    await shot('5-mapa-progreso');

    // ── sin scroll horizontal ──
    check('no hay scroll horizontal en pantalla de celular',
      await evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1'));

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
