# Design System Maintenance Checklist

## Before Making Changes

- [ ] Create a new branch from main (`git checkout -b feature/component-name`)
- [ ] Ensure you have the latest dependencies (`npm ci`)
- [ ] Run tests to confirm everything is working (`npm test`)

## When Adding or Modifying a Component

- [ ] Implement the component using design tokens
- [ ] Create/update Storybook stories
- [ ] Ensure the component is responsive
- [ ] Add necessary TypeScript types
- [ ] Add component to the appropriate exports in index.ts
- [ ] Update documentation if needed
- [ ] Add tests for the component
- [ ] Verify component works with Tailwind configuration
- [ ] Test v0 compatibility (if applicable)

## Before Publishing

- [ ] Run the full test suite (`npm test`)
- [ ] Build the package locally (`npm run build`)
- [ ] Check the built files in the dist folder
- [ ] Test locally with yalc:
  ```bash
  yalc publish
  cd ../your-test-project
  yalc add @your-username/design-system
  ```
- [ ] Update CHANGELOG.md with changes
- [ ] Determine the appropriate version increment (patch, minor, major)

## Publishing Process

- [ ] Merge your feature branch to main
- [ ] Pull the latest main
- [ ] Run release script with appropriate version type:

```bash
npm run release patch|minor|major
```

- [ ] Verify the new version appears on npmjs.com
- [ ] Test the published package in a real project
