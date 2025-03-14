# Design System

A modern, accessible, and customizable design system for React applications.

## Features

- 🎨 Modern and consistent design language
- ♿️ Accessible components following WCAG guidelines
- 🎯 Fully typed with TypeScript
- 📦 Tree-shakeable and optimized bundle
- 🎭 Storybook documentation
- 🔧 Highly customizable theming
- 📱 Responsive by default

## Installation

```bash
npm install @nathangosselin/design-system
# or
yarn add @nathangosselin/design-system
```

## Usage

```tsx
import { Button, ThemeProvider } from '@your-scope/design-system';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

## Documentation

For full documentation, visit our [Storybook](https://your-storybook-url.com).

## Development

### Prerequisites

- Node.js >= 16
- npm or yarn

### Setup

1. Clone the repository

```bash
git clone https://github.com/nathangosselin/design-system.git
cd design-system
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Start development environment

```bash
npm run dev
# or
yarn dev
```

### Commands

- `npm run dev` - Start Storybook development environment
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run storybook` - Start Storybook
- `npm run lint` - Run linting
- `npm run format` - Format code

### Local Testing

We use [yalc](https://github.com/wclr/yalc) for testing the package locally in other projects. This allows you to test your changes before publishing to npm.

1. Build and publish to local yalc store:

```bash
npm run test-local
```

2. In your test project, add the package:

```bash
yalc add @nathangosselin/design-system
```

3. For development with hot-reload:

```bash
# In design-system project
npm run watch-local

# In your test project
npm run dev # or your development command
```

The `watch-local` command will automatically push updates to all projects using yalc whenever you make changes.

To remove the package from your test project:

```bash
yalc remove @nathangosselin/design-system
npm install # or yarn install to restore original dependencies
```

### Version Control

We use conventional commits to automate versioning and changelog generation. Commit messages should follow this format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Example:

```
feat(button): add size variants to Button component
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
