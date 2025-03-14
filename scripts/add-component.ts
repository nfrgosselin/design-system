#!/usr/bin/env node

/**
 * Helper script to add new shadcn components to the registry
 *
 * Usage:
 * npm run add-component -- --name=button --category=form
 */

import * as fs from 'fs';
import * as path from 'path';

// Get arguments
const args = process.argv.slice(2);
const nameArg = args.find(arg => arg.startsWith('--name='));
const categoryArg = args.find(arg => arg.startsWith('--category='));

if (!nameArg) {
  console.error('Please provide a component name with --name=');
  process.exit(1);
}

if (!categoryArg) {
  console.error('Please provide a component category with --category=');
  process.exit(1);
}

// Extract values
const componentName = nameArg.replace('--name=', '');
const componentNameCamelCase = componentName.toLowerCase();
const componentNamePascalCase = componentName.charAt(0).toUpperCase() + componentName.slice(1);
const category = categoryArg.replace('--category=', '');

// Paths
const registryDir = path.join(process.cwd(), 'src', 'components', 'registry');
const shadcnDir = path.join(registryDir, 'shadcn');
const mappingFile = path.join(registryDir, 'mapping.ts');
const shadcnIndexFile = path.join(shadcnDir, 'index.ts');
const registryIndexFile = path.join(registryDir, 'index.ts');

// Create the shadcn directory if it doesn't exist
if (!fs.existsSync(shadcnDir)) {
  fs.mkdirSync(shadcnDir, { recursive: true });
}

// Update the component mapping
const addComponentToMapping = () => {
  const mappingContent = fs.readFileSync(mappingFile, 'utf8');

  // Check if the component already exists in the mapping
  if (mappingContent.includes(`${componentNameCamelCase}:`)) {
    console.log(`Component ${componentName} already exists in the mapping.`);
    return;
  }

  // Create the new component entry
  const newComponentEntry = `
  ${componentNameCamelCase}: {
    name: '${componentNamePascalCase}',
    description: '',
    category: '${category}',
    shadcnPath: './shadcn/${componentName}',
    docUrl: 'https://ui.shadcn.com/docs/components/${componentName}',
  },`;

  // Find the location to insert the new entry (before the last closing brace)
  const insertIndex = mappingContent.lastIndexOf('};');

  // Insert the new component entry
  const updatedMappingContent =
    mappingContent.slice(0, insertIndex) + newComponentEntry + mappingContent.slice(insertIndex);

  // Write the updated mapping to the file
  fs.writeFileSync(mappingFile, updatedMappingContent, 'utf8');
  console.log(`Added ${componentName} to component mapping.`);
};

// Update the shadcn index file
const updateShadcnIndex = () => {
  const indexContent = fs.readFileSync(shadcnIndexFile, 'utf8');

  // Check if the component is already exported
  if (indexContent.includes(`export * from './${componentName}'`)) {
    console.log(`Component ${componentName} already exported from shadcn index.`);
    return;
  }

  // Add the export statement
  const exportStatement = `export * from './${componentName}';\n`;

  // Find the position to insert the export (after the last export)
  const lastExportIndex = indexContent.lastIndexOf('export');
  const lastExportLineEndIndex = indexContent.indexOf('\n', lastExportIndex);

  const insertIndex =
    lastExportLineEndIndex !== -1 ? lastExportLineEndIndex + 1 : indexContent.length;

  const updatedIndexContent =
    indexContent.slice(0, insertIndex) + exportStatement + indexContent.slice(insertIndex);

  fs.writeFileSync(shadcnIndexFile, updatedIndexContent, 'utf8');
  console.log(`Updated shadcn index file to export ${componentName}.`);
};

// Update the registry index file
const updateRegistryIndex = () => {
  const indexContent = fs.readFileSync(registryIndexFile, 'utf8');

  // Check if the component is already imported and exported
  if (indexContent.includes(`import { ${componentNamePascalCase}`)) {
    console.log(`Component ${componentName} already managed in registry index.`);
    return;
  }

  // Find where to insert the import and export
  const lastImportIndex = indexContent.lastIndexOf('import');
  const lastImportLineEndIndex = indexContent.indexOf('\n', lastImportIndex);

  // Create import and export statements
  const importExportStatements = `
// ${componentNamePascalCase} component
import { ${componentNamePascalCase} } from './shadcn/${componentName}';
export { ${componentNamePascalCase} };
`;

  const insertIndex =
    lastImportLineEndIndex !== -1 ? lastImportLineEndIndex + 1 : indexContent.length;

  const updatedIndexContent =
    indexContent.slice(0, insertIndex) + importExportStatements + indexContent.slice(insertIndex);

  fs.writeFileSync(registryIndexFile, updatedIndexContent, 'utf8');
  console.log(`Updated registry index file to handle ${componentName}.`);
};

// Run the updates
try {
  addComponentToMapping();
  updateShadcnIndex();
  updateRegistryIndex();
  console.log(`\nComponent ${componentName} has been added to the registry.`);
  console.log(`Next steps:`);
  console.log(`1. Create the component in src/components/registry/shadcn/${componentName}.tsx`);
  console.log(`2. Edit the mapping description in src/components/registry/mapping.ts`);
  console.log(
    `3. Optional: Create an extended version in src/components/registry/extended/${componentName}.tsx`
  );
} catch (error) {
  console.error('Error adding component to registry:', error);
  process.exit(1);
}
