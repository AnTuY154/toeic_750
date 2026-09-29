import { readdir, stat, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = fileURLToPath(new URL('../dist/', import.meta.url));
const base = '/toeic_750';
const cacheName = '750-lab-pwa-v1';

async function walk(dir) {
  const entries = await readdir(dir);
  const output = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    const info = await stat(full);
    if (info.isDirectory()) output.push(...(await walk(full)));
    else output.push(full);
  }
  return output;
}

const files = (await walk(distDir))
  .filter((file) => !file.endsWith('.map') && !file.endsWith('sw.js'))
  .map((file) => relative(distDir, file).split(sep).join('/'));

const precache = files.map((file) => base + '/' + file);

const source = [
  'const CACHE = ' + JSON.stringify(cacheName) + ';',
  'const PRECACHE = ' + JSON.stringify(precache, null, 2) + ';',
  'const APP_ROOT = ' + JSON.stringify(base + '/') + ';',
  '',
  "self.addEventListener('install', (event) => {",
  '  event.waitUntil(',
  '    caches.open(CACHE)',
  '      .then((cache) => cache.addAll(PRECACHE))',
  '      .then(() => self.skipWaiting())',
  '  );',
  '});',
  '',
  "self.addEventListener('activate', (event) => {",
  '  event.waitUntil(',
  '    caches.keys()',
  '      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))',
  '      .then(() => self.clients.claim())',
  '  );',
  '});',
  '',
  "self.addEventListener('fetch', (event) => {",
  "  if (event.request.method !== 'GET') return;",
  '  const url = new URL(event.request.url);',
  '  if (url.origin !== self.location.origin) return;',
  '',
  '  event.respondWith(',
  '    caches.match(event.request).then((cached) => {',
  '      if (cached) return cached;',
  '      return fetch(event.request)',
  '        .then((response) => {',
  '          if (response && response.ok) {',
  '            const copy = response.clone();',
  '            caches.open(CACHE).then((cache) => cache.put(event.request, copy));',
  '          }',
  '          return response;',
  '        })',
  '        .catch(() => {',
  "          if (event.request.mode === 'navigate') {",
  "            return caches.match(APP_ROOT + 'index.html');",
  '          }',
  "          throw new Error('Offline resource unavailable');",
  '        });',
  '    })',
  '  );',
  '});',
  ''
].join('\n');

await writeFile(join(distDir, 'sw.js'), source);
console.log('Generated service worker with ' + precache.length + ' precached files.');
