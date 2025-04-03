# Design System v2 Workbench Implementation Plan

This document outlines the practical workflow for implementing the design system v2, focusing on maintaining visibility and control during the refactoring process while managing potential breakages in tests and Storybook.

## One-Time Setup Steps

### 1. Create and Configure v2 Branch

```bash
# Create and switch to v2 branch
git checkout -b feat/design-system-v2
git push -u origin feat/design-system-v2

# Optional: Create a draft PR for visibility
gh pr create --draft --title "feat: design system v2 implementation" --body "Implementing design system v2 following the brief and checklist in docs/context/"
```

### 2. Set Up Workbench Environment

1. Create a new page/route for isolated component development:

```tsx
// src/pages/workbench.tsx (or similar based on your framework)
import React from 'react';
import { Stack } from '../components/atoms/layout/Stack'; // adjust path as needed

export default function Workbench() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Design System v2 Workbench</h1>
      <Stack spacing="large">
        {/* Active component testing area */}
        <div id="active-component-workspace">
          {/* Components being worked on will be imported and rendered here */}
        </div>
      </Stack>
    </div>
  );
}
```

2. Add workbench to `.gitignore` exceptions (if needed):

```
# Allow workbench file to be committed despite any ignores
!src/pages/workbench.tsx
```

3. Update build configuration to exclude workbench from production builds (framework-specific).

### 3. Configure Test Environment

1. Add a test helper for skipping tests systematically:

```typescript
// test/helpers/skipTests.ts
export const SKIP_V2_MIGRATION = process.env.SKIP_V2_TESTS === 'true';

export const describeUnlessSkipped = SKIP_V2_MIGRATION ? describe.skip : describe;
```

2. Add an npm script for running tests with v2 components skipped:

```json
{
  "scripts": {
    "test:skip-v2": "SKIP_V2_TESTS=true jest",
    "test:only-v2": "jest --testPathPattern=src/components/(atoms|molecules|organisms)"
  }
}
```

## Per-Component Workflow

### Phase 1: Component Isolation

1. **Identify Component Dependencies**

   ```bash
   # Find all imports of the component
   grep -r "import.*ComponentName" src/
   # Find all test/story files
   find src/ -name "ComponentName.test.tsx" -o -name "ComponentName.stories.tsx"
   ```

2. **Temporarily Disable Tests**

   - Locate the component's test file
   - Change `describe('ComponentName', ...` to `describe.skip('ComponentName', ...`
   - If using TypeScript, add `// @ts-ignore` if needed

3. **Temporarily Disable Stories**
   ```typescript
   // ComponentName.stories.tsx
   /* Temporarily disabled during v2 migration
   export default {
     title: 'Components/ComponentName',
     component: ComponentName,
   } as Meta
   ...
   */
   ```

### Phase 2: Active Development

1. **Prepare Workbench**

   ```tsx
   // src/pages/workbench.tsx
   import ComponentName from '../components/atoms/category/ComponentName';

   // Add to workspace section:
   <div id="active-component-workspace">
     <h2>ComponentName Examples</h2>
     {/* Add various instances with different props/tokens */}
     <ComponentName variant="primary" />
     <ComponentName variant="secondary" />
   </div>;
   ```

2. **Implement v2 Changes**

   - Convert to token-based styling
   - Update prop types
   - Add data-testid attributes
   - Test variations in workbench
   - Document changes in comments

3. **Save Work-in-Progress**
   ```bash
   # Save changes frequently, even if incomplete
   git add src/components/atoms/category/ComponentName.tsx
   git commit -m "wip(ComponentName): initial v2 implementation"
   ```

### Phase 3: Testing & Documentation

1. **Update Tests**

   ```typescript
   // ComponentName.test.tsx
   import { render, screen } from '@testing-library/react'
   import ComponentName from '../ComponentName'

   describe('ComponentName', () => {
     it('renders with token-based styling', () => {
       render(<ComponentName variant="primary" />)
       const element = screen.getByTestId('component-name')
       // Add expectations for token-based styles
     })
   })
   ```

2. **Update Stories**

   ```typescript
   // ComponentName.stories.tsx
   export default {
     title: 'Atoms/Category/ComponentName', // Update hierarchy
     component: ComponentName,
     argTypes: {
       variant: {
         options: ['primary', 'secondary'],
         control: 'select',
       },
     },
   } as Meta;
   ```

3. **Visual Regression Testing**

   ```bash
   # Update snapshots if using Jest snapshots
   jest -u --testNamePattern=ComponentName

   # If using Chromatic/Percy, review and accept changes
   npm run chromatic
   ```

### Phase 4: Final Review & Commit

1. **Pre-commit Checklist**

   - [ ] Component implements v2 token system
   - [ ] Tests pass and cover new functionality
   - [ ] Stories render correctly
   - [ ] Visual regression tests reviewed/approved
   - [ ] Data-testid attributes added
   - [ ] Props documented
   - [ ] No console errors/warnings

2. **Commit Changes**

   ```bash
   # Stage all related files
   git add src/components/atoms/category/ComponentName.tsx
   git add src/components/atoms/category/ComponentName.test.tsx
   git add src/components/atoms/category/ComponentName.stories.tsx

   # Commit with conventional commit message
   git commit -m "refactor(ComponentName): migrate to v2 token system

   - Convert to use design tokens
   - Update prop types for constrained flexibility
   - Add comprehensive test coverage
   - Update stories with new organization
   "
   ```

3. **Push Changes**
   ```bash
   git push origin feat/design-system-v2
   ```

## Tips for Efficient Development

1. **Keep the Workbench Focused**

   - Work on one component at a time
   - Clear previous component examples when moving to a new one
   - Comment examples thoroughly

2. **Commit Strategy**

   - Use `wip:` prefix for incomplete changes
   - Use `refactor:` prefix for completed v2 migrations
   - Include detailed commit messages for completed work

3. **Managing Dependencies**

   - Start with leaf components (those with fewest dependencies)
   - Work through component hierarchy systematically
   - Document any breaking changes that will affect dependent components

4. **Progress Tracking**
   - Update the implementation checklist as you complete components
   - Mark progress in the PR description
   - Use PR labels to indicate status

## Troubleshooting Common Issues

### Test Failures

- Check that all data-testid attributes are consistent
- Verify token values match expected styles
- Ensure snapshot updates include only expected changes

### Story Rendering Issues

- Verify token imports
- Check story hierarchy matches new structure
- Confirm controls match new prop types

### Visual Regression Differences

- Review token application
- Check responsive behavior
- Verify hover/focus states

## Additional Resources

- [Design System v2 Brief](./design-v2-brief.md)
- [Implementation Checklist](./design-v2-implementation-checklist.md)
