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
- 🧩 Built on shadcn/ui with a powerful component registry

## Installation

```bash
npm install @nathangosselin/design-system
# or
yarn add @nathangosselin/design-system
```

## Usage

```tsx
import { Button, Card } from '@nathangosselin/design-system';
import '@nathangosselin/design-system/styles.css';

function App() {
  return (
    <div>
      <Card>
        <h2>Hello World</h2>
        <Button>Click me</Button>
      </Card>
    </div>
  );
}
```

## Component Registry System

This design system uses a component registry approach to manage shadcn/ui components. This provides several benefits:

- **Discoverability**: Easily find available components and their documentation
- **Extensibility**: Extend shadcn components with custom functionality
- **Consistency**: Maintain a consistent API across all components
- **Documentation**: Access metadata about each component

### Component Structure

Components are organized into two categories:

1. **Base shadcn/ui components**: Original components from shadcn/ui
2. **Extended components**: Our customized versions with additional features

The component registry automatically selects the extended version when available, falling back to the base shadcn/ui version.

### Using Component Metadata

You can access component metadata for your application:

```tsx
import { componentRegistry } from '@nathangosselin/design-system';

// Get information about the Button component
const buttonInfo = componentRegistry.button;

console.log(buttonInfo);
// {
//   name: 'Button',
//   description: 'Triggers an action or event...',
//   category: 'form',
//   shadcnPath: './shadcn/button',
//   extendedPath: './extended/button',
//   docUrl: 'https://ui.shadcn.com/docs/components/button'
// }
```

### Component Resolver

For advanced use cases, you can use the component resolver:

```tsx
import { resolveComponent } from '@nathangosselin/design-system';

// Resolve a component by name (will return extended version if available)
const Button = resolveComponent('button');

function App() {
  return <Button>Click me</Button>;
}
```

## Documentation

For full documentation, visit our [Storybook](https://github.com/nathangosselin/design-system#running-storybook-locally).

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
yarn install
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

## Font Installation

This design system includes custom fonts that need to be installed in your project. We've made this process as simple as possible:

```bash
# If the package is installed in your project:
npx designsystemfonts

# Or use the full package name:
npx @nathangosselin/design-system designsystemfonts
```

For automatic installation when dependencies change, add to your `package.json`:

```json
"scripts": {
  "postinstall": "designsystemfonts"
}
```

This will copy all necessary font files to your project's `public/fonts` directory.

### Running Storybook Locally

To run the Storybook documentation locally:

```bash
npm run dev
# or
yarn dev
```

This will start the Storybook server at [http://localhost:6006](http://localhost:6006).

### Building

```bash
npm run build
# or
yarn build
```
