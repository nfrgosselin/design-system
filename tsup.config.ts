import { defineConfig, Format } from 'tsup';
import { copyFile, mkdir } from 'fs/promises';
import { glob } from 'glob';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import fs from 'fs/promises';
import { readFileSync, writeFileSync } from 'fs';
import postcssImport from 'postcss-import';

// Function defined but not used - keep for potential future use
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

// Function defined but not used - keep for potential future use
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function processCss() {
  // Read the source CSS file
  let css = await fs.readFile('src/styles/styles.css', 'utf8');

  // Process with PostCSS (Tailwind + Autoprefixer)
  const result = await postcss([tailwindcss('./tailwind.config.ts'), autoprefixer()]).process(css, {
    from: 'src/styles/styles.css',
    to: 'dist/styles.css',
  });

  // Get the processed CSS
  css = result.css;

  // Ensure dist directory exists
  await mkdir('dist', { recursive: true });

  // Write the processed CSS
  await fs.writeFile('dist/styles.css', css);
}

// Read package.json
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)).toString());

// Shared PostCSS config
const postcssConfig = {
  plugins: [postcssImport(), tailwindcss('./tailwind.config.ts'), autoprefixer()],
};

// Token build configuration
const tokenBuildConfig = {
  entry: ['src/styles/tokens/index.css'],
  outDir: 'dist/styles/tokens',
  sourcemap: true,
  clean: true,
  async onSuccess() {
    // Process tokens with PostCSS
    const css = readFileSync('src/styles/tokens/index.css', 'utf8');
    const result = await postcss(postcssConfig.plugins).process(css, {
      from: 'src/styles/tokens/index.css',
      to: 'dist/styles/tokens/index.css',
      map: { inline: false },
    });

    // Write processed CSS
    writeFileSync('dist/styles/tokens/index.css', result.css);
    if (result.map) {
      writeFileSync('dist/styles/tokens/index.css.map', result.map.toString());
    }
  },
};

// Main component build configuration
const componentBuildConfig = {
  entry: ['src/index.ts'],
  format: ['esm'] as Format[],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
    'react/jsx-runtime',
    'next/dynamic',
    'next/link',
  ],
  esbuildOptions(options) {
    options.jsx = 'automatic';
    options.jsxImportSource = 'react';
    options.target = 'es2020';
    options.platform = 'browser';
    return options;
  },
  banner: {
    js: '"use client";',
  },
  metafile: true,
  treeshake: true,
};

// CSS build configuration
const cssBuildConfig = {
  entry: ['src/styles/styles.css'],
  outDir: 'dist',
  sourcemap: true,
  clean: false,
  async onSuccess() {
    // Process styles with PostCSS
    const css = readFileSync('src/styles/styles.css', 'utf8');
    const result = await postcss(postcssConfig.plugins).process(css, {
      from: 'src/styles/styles.css',
      to: 'dist/styles.css',
      map: { inline: false },
    });

    // Write processed CSS
    writeFileSync('dist/styles.css', result.css);
    if (result.map) {
      writeFileSync('dist/styles.css.map', result.map.toString());
    }
  },
};

// Tailwind config build configuration
const tailwindBuildConfig = {
  entry: ['tailwind.config.ts'],
  outDir: 'dist',
  format: ['cjs'] as Format[],
  dts: false,
  sourcemap: false,
  clean: false,
};

export default defineConfig([
  tokenBuildConfig,
  componentBuildConfig,
  cssBuildConfig,
  tailwindBuildConfig,
]);
