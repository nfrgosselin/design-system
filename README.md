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
npm install @your-scope/design-system
# or
yarn add @your-scope/design-system
```

## Usage

```tsx
import { Button, ThemeProvider } from "@your-scope/design-system";

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
git clone https://github.com/your-username/design-system.git
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

- `npm run dev` - Start development environment
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run storybook` - Start Storybook
- `npm run lint` - Run linting
- `npm run format` - Format code

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
