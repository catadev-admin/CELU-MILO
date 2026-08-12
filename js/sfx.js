// Sonidos sintetizados con WebAudio (sin archivos) + vibración en el celu.
// El AudioContext se crea recién con el primer toque del usuario, como pide iOS.

let ctx = null;

function ac() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function tone(freq, start, dur, type = 'sine', gain = 0.14) {
  const c = ac();
  if (!c) return;
  const osc = c.createOscillator();
  const g = c.createGain();
  const t0 = c.currentTime + start;
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(gain, t0 + 0.015);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g).connect(c.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

function buzz(pattern) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

export const sfx = {
  unlock() { ac(); },                                   // "despierta" el audio
  tap() { tone(520, 0, 0.07, 'triangle', 0.07); buzz(8); },
  correct() {
    tone(660, 0, 0.12, 'sine', 0.13);
    tone(880, 0.09, 0.18, 'sine', 0.12);
    buzz(18);
  },
  wrong() {
    tone(190, 0, 0.22, 'sawtooth', 0.09);
    buzz([26, 40, 26]);
  },
  win() {
    [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.11, 0.3, 'sine', 0.12));
    buzz([20, 50, 20, 50, 40]);
  },
  lose() {
    [392, 330, 262].forEach((f, i) => tone(f, i * 0.14, 0.32, 'triangle', 0.1));
    buzz([60, 60, 120]);
  },
};
