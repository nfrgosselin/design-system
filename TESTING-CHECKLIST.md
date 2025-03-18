# Design System Testing Checklist

## Development Testing

- [ ] Components render correctly in Storybook
- [ ] All tests pass (`npm run test`)
- [ ] Types are valid (`npm run typecheck`)
- [ ] Build succeeds (`npm run build`)

## Visual & Functional Testing

- [ ] Components display correctly across breakpoints
- [ ] Dark mode works correctly
- [ ] Interactive components work as expected
- [ ] Component compositions render properly
- [ ] No unexpected style conflicts

## Key Quality Checks

- [ ] Color contrast meets accessibility standards
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Bundle size is reasonable
- [ ] Documentation is up-to-date

## Local Integration Testing

- [ ] Run `npm run test-local` to publish to yalc
- [ ] In test project:
  - [ ] Components import correctly
  - [ ] Styles apply properly
  - [ ] No console errors
  - [ ] Build succeeds
  - [ ] v0 integration works as expected

## Release Testing

- [ ] CHANGELOG.md is updated
- [ ] Version follows semver
- [ ] Run `npm run release:dry-run`

## Post-Release Verification

- [ ] Package is available on npm
- [ ] Fresh install works (`npm install @nathangosselin/design-system@latest`)
- [ ] Documentation links work
