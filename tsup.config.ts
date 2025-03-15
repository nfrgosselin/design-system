import { defineConfig } from 'tsup';
import { copyFile, mkdir } from 'fs/promises';
import { glob } from 'glob';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import fs from 'fs/promises';

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

async function processCss() {
  // Read the source CSS file
  const css = await fs.readFile('src/styles/globals.css', 'utf8');

  // Process with PostCSS (Tailwind + Autoprefixer)
  const result = await postcss([tailwindcss('./tailwind.config.ts'), autoprefixer()]).process(css, {
    from: 'src/styles/globals.css',
    to: 'dist/globals.css',
  });

  // Ensure dist directory exists
  await mkdir('dist', { recursive: true });

  // Write the processed CSS
  await fs.writeFile('dist/globals.css', result.css);
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
  async onSuccess() {
    await Promise.all([copyFonts(), processCss()]);
  },
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
