import { copyFile, mkdir, readdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = fileURLToPath(new URL('../dist/', import.meta.url));

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

const htmlFiles = (await walk(distDir)).filter((file) => file.endsWith('.html'));

let created = 0;
for (const file of htmlFiles) {
  const relative = file.slice(distDir.length);
  const basename = relative.split('/').at(-1) ?? '';

  if (basename === 'index.html' || basename.startsWith('+') || basename.startsWith('_')) {
    continue;
  }

  const cleanRouteFile = file.slice(0, -'.html'.length);
  const prettyIndex = join(cleanRouteFile, 'index.html');
  await mkdir(dirname(prettyIndex), { recursive: true });
  await copyFile(file, prettyIndex);
  created += 1;
}

console.log('Generated ' + created + ' clean route directories.');
