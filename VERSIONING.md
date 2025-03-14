# Versioning Guidelines

This design system follows [Semantic Versioning](https://semver.org/) (SemVer).

## Version Format

`MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes that require updates to consuming code
- **MINOR**: New features added in a backward-compatible manner
- **PATCH**: Backward-compatible bug fixes

## Development Phase Versioning (0.x.y)

While the design system is in initial development (version 0.x.y):

- **0.x.0**: Notable feature additions or significant changes
- **0.0.x**: Bug fixes and minor changes

The design system will remain in 0.x.y until core components are stable.

## When to Increment

### Patch Version (0.0.x)

Increment for:

- Bug fixes
- Documentation updates
- Non-functional changes (refactoring)
- Minor style adjustments that don't affect layout or functionality

### Minor Version (0.x.0)

Increment for:

- New components
- New features added to existing components
- Design token additions
- New variants or props that don't break existing usage
- Deprecation notices (marking features for removal in next major)

### Major Version (x.0.0)

Increment for:

- Changes that require updates to consuming code
- Removal of previously deprecated features
- Prop name or behavior changes
- Design token value changes that affect appearance
- Changes to layout or spacing defaults
- Changes to component HTML structure that might affect styling
