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

  // Copy font files from public/fonts and preserve directory structure
  const fonts = await glob('public/fonts/**/*.*'); // Only match files with extensions
  await Promise.all(
    fonts.map(async font => {
      // Get the relative path from public/fonts
      const relativePath = path.relative('public/fonts', font);
      // Create the destination path preserving the directory structure
      const destPath = path.join('dist/fonts', relativePath);
      // Ensure the destination directory exists
      await mkdir(path.dirname(destPath), { recursive: true });
      // Copy the file
      await copyFile(font, destPath);
    })
  );
}

async function processCss() {
  // Read the source CSS file
  let css = await fs.readFile('src/styles/globals.css', 'utf8');

  // Process with PostCSS (Tailwind + Autoprefixer)
  const result = await postcss([tailwindcss('./tailwind.config.ts'), autoprefixer()]).process(css, {
    from: 'src/styles/globals.css',
    to: 'dist/globals.css',
  });

  // Get the processed CSS
  css = result.css;

  // Ensure dist directory exists
  await mkdir('dist', { recursive: true });

  // Write the processed CSS
  await fs.writeFile('dist/globals.css', css);
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
