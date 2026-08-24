#!/usr/bin/env node
// Valida el contenido del juego (data/levels.js) sin instalar nada.
// Uso: node scripts/check.mjs

import { LEVELS } from '../data/levels.js';
import { TEORIA } from '../data/teoria.js';
import { FIGURAS } from '../data/figuras.js';

const errors = [];
const warnings = [];
const seen = new Map();

const TYPES = new Set(['mc', 'vf', 'num']);

if (!Array.isArray(LEVELS) || LEVELS.length === 0) {
  errors.push('LEVELS debe ser un array con al menos un nivel.');
}

LEVELS.forEach((lvl, li) => {
  const tag = `nivel ${lvl.id ?? li + 1}`;

  if (lvl.id !== li + 1) errors.push(`${tag}: el id debe ser ${li + 1} (los niveles van en orden).`);
  ['title', 'subtitle', 'icon', 'color'].forEach((k) => {
    if (!lvl[k]) errors.push(`${tag}: falta "${k}".`);
  });
  if (lvl.color && !/^#[0-9a-f]{6}$/i.test(lvl.color)) {
    errors.push(`${tag}: "color" debe ser hexadecimal de 6 dígitos (ej. #38bdf8).`);
  }
  if (!Array.isArray(lvl.questions) || lvl.questions.length < 5) {
    errors.push(`${tag}: necesita al menos 5 preguntas.`);
    return;
  }

  lvl.questions.forEach((q, qi) => {
    const at = `${tag}, pregunta ${qi + 1}`;

    if (!TYPES.has(q.type)) errors.push(`${at}: type inválido ("${q.type}"). Usá mc, vf o num.`);
    if (!q.q || typeof q.q !== 'string') errors.push(`${at}: falta el texto "q".`);
    if (!q.why) warnings.push(`${at}: sin explicación "why" (se muestra al responder).`);

    const key = (q.q || '').replace(/<[^>]+>/g, '').trim().toLowerCase();
    if (key && seen.has(key)) errors.push(`${at}: pregunta repetida (ya está en ${seen.get(key)}).`);
    else if (key) seen.set(key, at);

    if (q.type === 'mc') {
      if (!Array.isArray(q.options) || q.options.length < 3) {
        errors.push(`${at}: mc necesita al menos 3 opciones.`);
      } else {
        if (new Set(q.options).size !== q.options.length) errors.push(`${at}: hay opciones repetidas.`);
        if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) {
          errors.push(`${at}: "answer" debe ser el índice (0-${q.options.length - 1}) de la opción correcta.`);
        }
      }
    }

    if (q.type === 'vf' && typeof q.answer !== 'boolean') {
      errors.push(`${at}: en vf "answer" debe ser true o false.`);
    }

    if (q.type === 'num') {
      if (typeof q.answer !== 'number' || !Number.isFinite(q.answer)) {
        errors.push(`${at}: en num "answer" debe ser un número.`);
      }
      if (q.tol !== undefined && (typeof q.tol !== 'number' || q.tol < 0)) {
        errors.push(`${at}: "tol" debe ser un número positivo.`);
      }
      if (!Number.isInteger(q.answer) && q.tol === undefined) {
        warnings.push(`${at}: respuesta decimal sin "tol"; conviene definir una tolerancia.`);
      }
    }
  });
});

// ── teoría ──
const idsValidos = new Set(LEVELS.map((l) => l.id));
let totalPasos = 0;
for (const [id, pasos] of Object.entries(TEORIA)) {
  const at = `teoría del nivel ${id}`;
  if (!idsValidos.has(Number(id))) errors.push(`${at}: no existe ese nivel.`);
  if (!Array.isArray(pasos) || pasos.length === 0) {
    errors.push(`${at}: tiene que ser un array de pasos.`);
    continue;
  }
  totalPasos += pasos.length;
  pasos.forEach((paso, i) => {
    const donde = `${at}, paso ${i + 1}`;
    if (!paso.titulo) errors.push(`${donde}: falta "titulo".`);
    if (!paso.texto) errors.push(`${donde}: falta "texto".`);
    if (paso.figura && !FIGURAS[paso.figura]) {
      errors.push(`${donde}: la figura "${paso.figura}" no existe en data/figuras.js.`);
    }
    if (paso.ejemplo) {
      const e = paso.ejemplo;
      if (!e.enunciado || !e.resultado || !Array.isArray(e.pasos) || !e.pasos.length) {
        errors.push(`${donde}: el ejemplo necesita "enunciado", "pasos" (array) y "resultado".`);
      }
    }
  });
}

const sinUsar = Object.keys(FIGURAS).filter(
  (f) => !Object.values(TEORIA).flat().some((p) => p.figura === f));
sinUsar.forEach((f) => warnings.push(`la figura "${f}" no la usa ningún paso.`));

const conTeoria = Object.keys(TEORIA).length;
const totalQ = LEVELS.reduce((n, l) => n + (l.questions?.length || 0), 0);

warnings.forEach((w) => console.log(`⚠️  ${w}`));

if (errors.length) {
  errors.forEach((e) => console.error(`❌ ${e}`));
  console.error(`\n${errors.length} error(es) en el contenido.`);
  process.exit(1);
}

console.log(`✅ Contenido OK: ${LEVELS.length} niveles, ${totalQ} preguntas.`);
console.log(`   Teoría: ${conTeoria}/${LEVELS.length} niveles, ${totalPasos} pasos, ` +
  `${Object.keys(FIGURAS).length} figuras.`);
