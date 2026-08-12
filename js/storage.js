// Progreso persistente en localStorage.
// Forma: { "1": { stars: 0-3, best: nº }, "2": {...} }

// v2: al reordenar los niveles con el apunte de cátedra cambió el significado
// de cada id, así que el progreso viejo se descarta en vez de quedar mezclado.
export const KEY = 'quimica-quest:v2';

export function loadProgress() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveLevelResult(levelId, stars, score) {
  const p = loadProgress();
  const prev = p[levelId] || { stars: 0, best: 0 };
  p[levelId] = {
    stars: Math.max(prev.stars, stars),
    best: Math.max(prev.best, score),
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* modo privado: el juego sigue andando, solo no persiste */
  }
  return p;
}

export function resetProgress() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignorar */
  }
}

// Un nivel está desbloqueado si es el primero o si el anterior tiene ≥ 1 estrella.
export function isUnlocked(levelId, progress) {
  if (levelId === 1) return true;
  return (progress[levelId - 1]?.stars || 0) > 0;
}

export function totalStars(progress) {
  return Object.values(progress).reduce((sum, l) => sum + (l.stars || 0), 0);
}
