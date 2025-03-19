# Publishing Guide

This guide explains how to publish updates to the NPM package.

## Publishing Workflow

### 1. Prepare for Release

1. Ensure all changes are merged to main

   ```bash
   git checkout main
   git pull origin main
   ```

2. Install dependencies

   ```bash
   npm ci
   ```

3. Run tests to ensure everything works

   ```bash
   npm test
   ```

4. Build the package locally

   ```bash
   npm run build
   ```

   This builds the following assets:

   - JavaScript modules (ESM and CommonJS)
   - TypeScript declarations
   - Processed CSS file (`styles.css`)
   - Font files bundled in the package

5. Verify that the build includes all necessary files:

   ```bash
   ls -la dist/
   # Should include styles.css, index.mjs, index.js, etc.
   ```

6. Test the build locally using yalc

   ```bash
   npm run test-local
   ```

7. In your test project, verify the correct CSS import path:

   ```tsx
   // This is the correct import path
   import '@nathangosselin/design-system/styles.css';
   ```

8. **Important**: Commit all changes before proceeding with the release.

   ```bash
   git add .
   git commit -m "chore: prepare for release"
   ```

### 2. Determine Version Update

Based on the changes made, determine the appropriate version increment according to [Semantic Versioning](https://semver.org/):

- **Patch (0.0.x)**: Bug fixes, documentation updates
- **Minor (0.x.0)**: New features, non-breaking changes
- **Major (x.0.0)**: Breaking changes

#### Version Impact Guidelines

| Change Type                                | Version Bump | Examples                                       |
| ------------------------------------------ | ------------ | ---------------------------------------------- |
| Documentation updates                      | Patch        | Updating README, correcting JSDoc comments     |
| Bug fixes without API changes              | Patch        | Fixing a visual glitch, resolving an edge case |
| New component additions                    | Minor        | Adding a new Button variant, new icons         |
| CSS/styling changes (non-breaking)         | Minor        | Adding new styling options                     |
| CSS file rename (globals.css → styles.css) | Major        | Changes import path for all consumers          |
| Component API changes                      | Major        | Renaming props, changing component structure   |

See [VERSIONING.md](../../VERSIONING.md) for detailed guidelines.

### 3. Update Version and Create Release

There are two recommended approaches to release the package:

#### Option A: Use standard-version (Recommended)

This approach uses `standard-version` to manage the entire release process in one step:

```bash
# For a minor version bump
npx standard-version --release-as minor

# For other version types
npx standard-version --release-as patch
npx standard-version --release-as major
```

This will:

1. Bump the version in package.json
2. Update the CHANGELOG.md
3. Commit the changes
4. Create a git tag

#### Option B: Manual two-step process

If you prefer more control, use this approach:

1. First, update the changelog and commit those changes:

   ```bash
   npm run changelog
   git add CHANGELOG.md package.json
   git commit -m "chore: update changelog"
   ```

2. Then run npm version to create the tag:
   ```bash
   npm version patch|minor|major
   ```

> **Note**: Using the default `npm run release` script may cause a "Git working directory not clean" error because it tries to run `npm version` right after changing files with `standard-version`.

### 4. Push Release to GitHub

```bash
git push origin main --follow-tags
```

This will trigger the automated GitHub workflow that publishes to NPM.

### 5. Verify Publication

1. Check that the GitHub workflow completed successfully
2. Verify the new version appears on [npmjs.com](https://www.npmjs.com/package/@nathangosselin/design-system)
3. Install and test the published package in a real project:

   ```bash
   # In a test project
   npm install @nathangosselin/design-system@latest
   ```

4. Verify that all imports work correctly:

   ```tsx
   // CSS import
   import '@nathangosselin/design-system/styles.css';

   // Component imports
   import { Button, Container, Section } from '@nathangosselin/design-system';
   ```

## Troubleshooting Common Issues

### "Git working directory not clean" Error

If you see this error during the release process:

```
npm ERR! Git working directory not clean.
```

It means that tools like `npm version` require a clean working directory (no uncommitted or staged changes). The issue often occurs when using automated scripts that modify files right before running `npm version`.

To resolve this:

1. Use Option A or B from section 3 above instead of the default release script
2. Or, modify package.json to create a more reliable release script:

   ```json
   "scripts": {
     "release": "npm run build && npm run test && standard-version"
   }
   ```

### Other Publication Issues

If the automated publish fails:

1. Check GitHub Actions logs for errors
2. Ensure NPM_TOKEN secret is properly set in repository settings
3. If needed, publish manually:
   ```bash
   npm login
   npm publish --access public
   ```

## Breaking Changes

When publishing breaking changes (like renaming CSS files):

1. Update all documentation to reflect the changes
2. Consider adding deprecation warnings in the README
3. For major issues, consider a migration guide
4. Use the major version bump to signal breaking changes to users

## Handling CSS Path Changes

If you've changed the CSS file path (e.g., from `globals.css` to `styles.css`):

1. Make sure to clearly document this in the release notes
2. Consider temporarily supporting both paths by adding to `package.json`:

   ```json
   "exports": {
     "./styles.css": "./dist/styles.css",
     "./globals.css": "./dist/styles.css"  // Legacy support
   }
   ```

3. Add deprecation notes for the old path

## Hotfix Releases

For urgent fixes:

1. Create a hotfix branch from the latest tag

   ```bash
   git checkout -b hotfix/issue-description v1.2.3
   ```

2. Make the necessary changes
3. **Commit all changes** before proceeding with the release process
4. Use Option A from section 3 to create the release
5. After publication, merge the hotfix back to main

## Beta Releases

For pre-release versions:

1. Ensure all changes are committed
2. Run:

```bash
npx standard-version --prerelease beta
# or
npm version prerelease --preid=beta
npm publish --tag beta
```

## Testing Published Package

Always verify that the published package works correctly in a real project:

```bash
# Create a test app or use an existing one
mkdir test-design-system
cd test-design-system
npm init -y
npm install react react-dom @nathangosselin/design-system@latest

# Create a test file
echo "import '@nathangosselin/design-system/styles.css';" > test.js
echo "import { Button } from '@nathangosselin/design-system';" >> test.js
```
