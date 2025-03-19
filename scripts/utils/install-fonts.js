#!/usr/bin/env node

/**
 * Design System Font Installer
 *
 * This script copies fonts from the @nathangosselin/design-system package to your project's
 * public directory, making them available for web browsers to load directly.
 *
 * Usage:
 *   npx @nathangosselin/design-system-fonts
 *
 * Or add to your package.json:
 *   "scripts": {
 *     "install-fonts": "design-system-fonts",
 *     "postinstall": "design-system-fonts"
 *   }
 */

const fs = require('fs');
const path = require('path');

// Default target is the public directory
const targetDir = path.join(process.cwd(), 'public', 'fonts');

// Source directory is within the design system package
const findSourceDir = () => {
  try {
    // First check if we're in the design system repo itself (for development)
    const localDir = path.join(process.cwd(), 'dist', 'fonts');
    if (fs.existsSync(localDir)) {
      return localDir;
    }

    // Check for the design system in node_modules
    const moduleDir = path.join(
      process.cwd(),
      'node_modules',
      '@nathangosselin',
      'design-system',
      'dist',
      'fonts'
    );
    if (fs.existsSync(moduleDir)) {
      return moduleDir;
    }

    // If not found, try to look in parent directories (monorepo support)
    const nodeModulesDir = findNodeModules(process.cwd());
    if (nodeModulesDir) {
      const monorepoModuleDir = path.join(
        nodeModulesDir,
        '@nathangosselin',
        'design-system',
        'dist',
        'fonts'
      );
      if (fs.existsSync(monorepoModuleDir)) {
        return monorepoModuleDir;
      }
    }

    throw new Error('Could not find design system fonts directory');
  } catch (err) {
    console.error('❌ Error finding font source directory:', err.message);
    process.exit(1);
  }
};

// Helper to find node_modules in parent directories
function findNodeModules(startDir) {
  let currentDir = startDir;
  while (currentDir !== path.parse(currentDir).root) {
    const nodeModulesPath = path.join(currentDir, 'node_modules');
    if (fs.existsSync(nodeModulesPath)) {
      return nodeModulesPath;
    }
    currentDir = path.dirname(currentDir);
  }
  return null;
}

// Create target directory if it doesn't exist
function ensureDirectory(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
}

// Copy files recursively
function copyFolderSync(from, to) {
  ensureDirectory(to);

  try {
    if (!fs.existsSync(from)) {
      console.error(`❌ Source directory does not exist: ${from}`);
      return 0;
    }

    const items = fs.readdirSync(from);
    console.log(`📂 Found ${items.length} items in source directory`);

    let count = 0;

    items.forEach(item => {
      const sourcePath = path.join(from, item);
      const targetPath = path.join(to, item);

      const stat = fs.statSync(sourcePath);

      if (stat.isFile()) {
        // Check if target already exists and has the same content
        if (fs.existsSync(targetPath)) {
          const sourceBuffer = fs.readFileSync(sourcePath);
          const targetBuffer = fs.readFileSync(targetPath);
          if (sourceBuffer.equals(targetBuffer)) {
            console.log(`⏩ Skipping identical file: ${item}`);
            count++; // Count as copied even though we're skipping
            return;
          }
        }

        fs.copyFileSync(sourcePath, targetPath);
        console.log(`✅ Copied: ${item}`);
        count++;
      } else if (stat.isDirectory()) {
        const subCount = copyFolderSync(sourcePath, targetPath);
        count += subCount;
      }
    });

    return count;
  } catch (err) {
    console.error(`❌ Error copying fonts:`, err.message);
    return 0;
  }
}

// Main execution
function main() {
  console.log('🎨 Design System Font Installer');

  try {
    const sourceDir = findSourceDir();
    console.log(`📁 Font source: ${sourceDir}`);
    console.log(`📁 Target directory: ${targetDir}`);

    ensureDirectory(targetDir);

    const count = copyFolderSync(sourceDir, targetDir);

    if (count > 0) {
      console.log(`✅ Successfully installed ${count} font files to ${targetDir}`);
      console.log('🚀 Your fonts are ready to use!');
    } else {
      console.log('⚠️ No fonts were copied. This might indicate an issue.');
    }

    // Create a helpful .gitkeep file to ensure the directory is tracked in git
    const gitkeepPath = path.join(targetDir, '.gitkeep');
    if (!fs.existsSync(gitkeepPath)) {
      fs.writeFileSync(gitkeepPath, '# This file ensures the fonts directory is tracked in git\n');
    }
  } catch (err) {
    console.error('❌ Font installation failed:', err.message);
    process.exit(1);
  }
}

// Run the script
main();
