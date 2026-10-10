import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';

test('all eight separate clinic media files match their original sizes', async () => {
  const names = ['dental-clinic.jpg', 'dental-treatment.jpg', 'dental-consultation.jpg', 'dental-care-team.jpg', 'dental-imaging.jpg', 'dental-instruments.jpg', 'dental-care.mp4', 'dental-care.webm'];
  for (const name of names) {
    const pointer = JSON.parse(await readFile(new URL(`../src/assets/${name}.asset.json`, import.meta.url), 'utf8'));
    const file = await stat(new URL(`../public/media/${name}`, import.meta.url));
    assert.equal(file.size, pointer.size, `${name} must be complete for external hosting`);
  }
});

test('runtime media paths are host-local instead of Lovable endpoints', async () => {
  const source = await readFile(new URL('../src/lib/clinic-media.ts', import.meta.url), 'utf8');
  const paths = [...source.matchAll(/url: '([^']+)'/g)].map(match => match[1]);
  assert.equal(paths.length, 8);
  for (const path of paths) assert.match(path, /^\/media\/dental-[a-z-]+\.(jpg|mp4|webm)$/);
});