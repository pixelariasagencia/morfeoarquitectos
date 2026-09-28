import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const directory = path.resolve('public/images');
const widths = [320, 640, 960, 1280];
const files = (await readdir(directory)).filter((file) => file.endsWith('.webp') && !/-\d+\.webp$/.test(file));

let originalBytes = 0;
let smallestBytes = 0;

for (const file of files) {
  const input = path.join(directory, file);
  const { width } = await sharp(input).metadata();
  if (!width) throw new Error(`No se pudo leer el ancho de ${file}`);

  originalBytes += (await stat(input)).size;
  for (const targetWidth of widths.filter((size) => size < width)) {
    const output = path.join(directory, file.replace(/\.webp$/, `-${targetWidth}.webp`));
    await sharp(input).resize({ width: targetWidth, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(output);
    if (targetWidth === 640) smallestBytes += (await stat(output)).size;
  }
}

console.log(`${files.length} imágenes optimizadas en WebP.`);
console.log(`Originales: ${(originalBytes / 1024 / 1024).toFixed(2)} MB; versiones de 640 px: ${(smallestBytes / 1024 / 1024).toFixed(2)} MB.`);
