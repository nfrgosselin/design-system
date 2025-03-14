# Design System NPM Package Creation Plan

## Phase 1: Project Setup

_Integration point: Create Maintenance Checklist (Mitigating Strategy #2)_

### 1.1 Initialize New Repository

- Create a new GitHub repository for the design system package
- Set up proper `.gitignore` for a TypeScript/React project
- Add README.md, LICENSE, and CONTRIBUTING.md files

### 1.2 Configure Project Structure

```
design-system/
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── registry/       # Component registry
│   │   │   ├── shadcn/     # Original shadcn components
│   │   │   ├── extended/   # Your extended versions
│   │   │   └── index.ts    # Registry exports
│   │   └── ui/             # Custom components (non-shadcn)
│   ├── styles/             # Global styles and Tailwind config
│   ├── tokens/             # Design tokens (colors, spacing, etc.)
│   ├── hooks/              # Shared hooks
│   ├── utils/              # Utility functions
│   └── index.ts            # Main entry point
├── .storybook/             # Storybook configuration
├── scripts/                # Build and maintenance scripts
├── dist/                   # Compiled output (gitignored)
├── public/                 # Static assets like fonts
├── stories/                # Storybook stories
├── types/                  # TypeScript type definitions
├── package.json            # Package manifest
└── tsconfig.json           # TypeScript configuration
```

### 1.3 Initialize NPM Package

```bash
npm init -y
```

- Edit `package.json` to include:
  - Name (consider scoping: `@yourusername/design-system`)
  - Version (start with `0.1.0`)
  - Description
  - Main entry point (`dist/index.js`)
  - Module entry point (`dist/index.esm.js`)
  - Types (`dist/index.d.ts`)
  - Files to include in the package
  - Peer dependencies (React, React DOM)
  - Repository URL
- Create MAINTENANCE.md with checklist for component changes (Mitigating Strategy #2)
- Create CONTRIBUTING.md with commit message guidelines for semantic versioning (Mitigating Strategy #3)

### 1.4 Set Up Development Environment

- Install TypeScript, React, and React DOM as peer dependencies
- Install development dependencies:
  - Build tools (tsup)
  - Testing libraries (Jest, React Testing Library)
  - ESLint and Prettier
  - Tailwind CSS
  - Storybook
- Configure TypeScript (`tsconfig.json`)
- Configure ESLint and Prettier
- Set up Tailwind CSS configuration
- Set up Storybook:
  ```bash
  npx storybook init
  ```

### 1.5 Configure Build System

- Choose a bundler (recommend tsup for simplicity)
- Set up bundler configuration
- Create build scripts in `package.json`:
  - `build`: Build the package
  - `dev`: Watch mode for development
  - `storybook`: Run Storybook
  - `build-storybook`: Build static Storybook site
  - `lint`: Run ESLint
  - `test`: Run tests
- Set up Yalc for local testing (Mitigating Strategy #4):
  - Add `test-local` and `watch-local` scripts
  - Document local testing workflow in README

## Phase 2: Core Foundation

### 2.1 Set Up Tailwind Integration

- Configure tailwind.config.js with extending capability
- Set up PostCSS configuration
- Create a primary CSS file that users can import
- Decide on CSS bundling strategy (Pre-built CSS approach)

### 2.2 Port Design Tokens

- Port from existing `/styles/tokens` directory
- Create token files for:
  - Colors
  - Typography
  - Spacing
  - Border radius
  - Shadows
  - Animation
- Export tokens as both JavaScript objects and CSS variables
- Document usage

### 2.3 Set Up shadcn/ui Integration

- Implement Component Registry approach:
  - Create a registry structure for shadcn components
  - Set up component mapping system
  - Configure shadcn component installation
  - Create clear extension patterns
- Install core shadcn/ui components in the package
- Adapt shadcn/ui theme to use your design tokens
- Document component extension approach

### 2.4 Set Up Font Handling

- Create a font loading strategy:
  - Option 1: Include fonts in the package
  - Option 2: Document how consumers should load fonts
- Port over your existing font files if going with option 1

### 2.5 Set Up Icon System

- Port icon components from your existing codebase
- Create a clear API for icon usage
- Document icon usage and extension

## Phase 3: Component Migration

### 3.1 Layout Components

- Port over base layout components:
  - Container
  - Grid
  - Section
  - Content
- Create Storybook stories for each component
- Ensure components are configurable through props

### 3.2 Typography Components

- Port over typography components from `/components/ui/typography`
- Create variants for each text style
- Ensure proper consistency with design tokens
- Create Storybook stories

### 3.3 Core UI Components

- Systematically port components from `/components/ui`, prioritizing:
  - Button
  - Link
  - Card
  - Navigation components
  - Image components
- Add Storybook stories for each
- Ensure components use design tokens

### 3.4 Advanced Components

- Port more complex components as needed (blog, newsletter, etc.)
- Create composition patterns for common layouts
- Document component combinations and patterns

## Phase 4: Export and Packaging

_Integration point: Set up Semantic Versioning (Mitigating Strategy #3)_

### 4.1 Main Export Configuration

- Configure the main `index.ts` to export all components and utilities
- Create named exports for logical groups of components
- Ensure TypeScript types are properly exported
- Test that all exports work as expected

### 4.2 Package.json Configuration

- Configure package.json for optimal tree-shaking
- Add metadata, keywords, and documentation links
- Configure sideEffects field properly
- Set up semantic versioning strategy:
  - Create VERSIONING.md with guidelines (Mitigating Strategy #3)
  - Install standard-version for changelog automation
  - Add version scripts to package.json

### 4.3 CSS Handling

- Finalize CSS bundling strategy
- Ensure Tailwind utilities are properly exported
- Test CSS inclusion in consuming projects
- Document CSS import requirements

### 4.4 Types Finalization

- Ensure all TypeScript types are complete and accurate
- Create any necessary type utilities for consumers
- Test type exports

## Phase 5: Testing and Documentation

### 5.1 Component Testing

- Set up testing infrastructure
- Write tests for key component functionality
- Test component composition patterns
- Add accessibility tests

### 5.2 Documentation

- Create comprehensive README with:
  - Installation instructions
  - Basic usage examples
  - Design token overview
  - Component categorization
- Create detailed Storybook documentation:
  - Component props documentation
  - Usage examples
  - Do's and don'ts
  - Integration examples with v0

### 5.3 Integration Examples

- Create example of v0 integration (special documentation section)
- Document how to override or extend components
- Provide theming examples
- Document how to use with Next.js

## Phase 6: Publishing and Maintenance

_Integration point: Set up Automated Publishing (Mitigating Strategy #1)_

### 6.1 Publishing Workflow

- Set up npm publishing workflow:
  - Create `.npmrc` configuration
  - Set up GitHub Actions for automated publishing:
    - Create `.github/workflows/publish.yml` file
    - Configure NPM token in GitHub Secrets
  - Configure version bumping scripts
  - Add release script to package.json
- Document release process

### 6.2 Local Testing

- Configure using yalc for local testing
- Document how to test changes before publishing
- Create a testing checklist

### 6.3 First Release

- Run final checks
- Publish initial version to npm
- Tag release in Git
- Create release notes

### 6.4 Maintenance Plan

- Set up dependency updating strategy (Renovate or similar)
- Create process for addressing issues
- Document version updating workflow
- Plan for future enhancements

## Integration with v0

### v0 Integration Documentation

- Create specific documentation for v0 usage
- Provide example prompts that use the design system
- Document component reference patterns
- Create troubleshooting guide for v0 issues

### v0 Testing Strategy

- Create test cases for v0 integration
- Document expected vs. actual behaviors
- Create feedback loop for improving v0 compatibility

## Appendix: Component Migration Checklist

For each component:

1. **Initial Review**:

   - Review existing implementation
   - Note dependencies and props
   - Identify styling methodology

2. **Migration**:

   - Create component file in new structure
   - Adapt styling to use Tailwind properly
   - Ensure design token usage
   - Check for accessibility issues

3. **Documentation**:

   - Create Storybook story
   - Document props and usage
   - Add examples

4. **Testing**:

   - Create basic rendering test
   - Test prop variations
   - Test interactions where relevant

5. **Export**:
   - Add to appropriate index exports
   - Ensure typing is correct

## Migration Priority Order

1. Design tokens and foundations
2. shadcn/ui integration and component registry
3. Typography system
4. Layout components
5. Button and Link components
6. Icon system
7. Card and container components
8. Navigation components
9. Form components
10. Media components (images, etc.)
11. Special-purpose components

## Component Registry Structure

Create a registry structure that:

1. **Maps Components**: Creates a mapping between your extended components and base shadcn components
2. **Documents Extensions**: Clearly indicates what has been customized
3. **Maintains Typing**: Preserves TypeScript types from shadcn components
4. **Supports Discovery**: Allows easy discovery of available components
5. **Facilitates Updates**: Makes it easier to update when shadcn changes

Example registry organization:

```
src/
  components/
    registry/
      index.ts              # Main export for registry
      registry.types.ts     # Type definitions for registry
      shadcn/               # Original shadcn components
      extended/             # Your extended versions
      mapping.ts            # Maps between shadcn and extended
```
