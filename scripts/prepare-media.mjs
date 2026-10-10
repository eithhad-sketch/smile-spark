import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Build-time only: pages serve ordinary files, not Lovable endpoints.
const root = fileURLToPath(new URL('../', import.meta.url));
const sourceOrigin = 'https://id-preview--3d3a4518-130b-4cd6-8338-2f2fc33380d5.lovable.app';
const names = ['dental-clinic.jpg', 'dental-treatment.jpg', 'dental-consultation.jpg', 'dental-care-team.jpg', 'dental-imaging.jpg', 'dental-instruments.jpg', 'dental-care.mp4', 'dental-care.webm'];
await mkdir(path.join(root, 'public/media'), { recursive: true });
for (const name of names) {
  const asset = JSON.parse(await readFile(path.join(root, `src/assets/${name}.asset.json`), 'utf8'));
  const target = path.join(root, 'public/media', name);
  const existing = await stat(target).catch(() => null);
  if (existing?.size === asset.size) continue;
  const response = await fetch(new URL(asset.url, sourceOrigin));
  if (!response.ok) throw new Error(`Cannot prepare ${name}: HTTP ${response.status}. Keep public/media files when moving hosts.`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length !== asset.size) throw new Error(`Incomplete media download: ${name}`);
  await writeFile(target, bytes);
  console.log(`Prepared public/media/${name}`);
}
console.log('All clinic media is ready for standalone hosting.');