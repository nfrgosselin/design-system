# Contributing Guidelines

## Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Changes that do not affect the meaning of the code (formatting, etc.)
- **refactor**: Code changes that neither fix a bug nor add a feature
- **perf**: Code changes that improve performance
- **test**: Adding/updating tests
- **chore**: Changes to the build process or auxiliary tools

### Examples

- feat(button): add new variant for call-to-action buttons
- fix(typography): correct heading line height on mobile devices
- docs: update README with v0 integration examples

### Breaking Changes

For breaking changes, add BREAKING CHANGE: in the commit footer:

feat(button): change primary button default size
BREAKING CHANGE: The default button size has increased from 40px to 48px height
