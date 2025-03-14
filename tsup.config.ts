import { defineConfig } from 'tsup';
import { copyFile, mkdir } from 'fs/promises';
import { glob } from 'glob';
import path from 'path';

async function copyFonts() {
  // Create fonts directory in dist
  await mkdir('dist/fonts', { recursive: true });

  // Copy font files
  const fonts = await glob('src/fonts/**/*');
  await Promise.all(
    fonts.map(async font => {
      // Copy to root fonts directory to match CSS paths
      const destPath = path.join('dist', 'fonts', path.basename(font));
      await mkdir(path.dirname(destPath), { recursive: true });
      await copyFile(font, destPath);
    })
  );
}

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: true,
  external: ['react', 'react-dom'],
  injectStyle: true,
  async onSuccess() {
    await copyFonts();
  },
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
