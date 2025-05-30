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
- 🧩 Built with a powerful component registry system

## Installation

```bash
npm install @nathangosselin/design-system
# or
yarn add @nathangosselin/design-system
```

## Usage

```tsx
import { Button, Container, Grid, UIHeader } from '@nathangosselin/design-system';
import '@nathangosselin/design-system/styles.css';

// Add ThemeProvider to your app root
import { ThemeProvider } from '@nathangosselin/design-system';

function App() {
  return (
    <ThemeProvider>
      <Container>
        <Grid>
          <UIHeader level={2}>Welcome</UIHeader>
          <Button variant="primary">Click me</Button>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
```

## CSS Usage

The design system includes all necessary styles in a single CSS file. Import it in your application's entry point:

```javascript
// Example in a JavaScript/TypeScript entry file (e.g., main.jsx, _app.js)
import '@nathangosselin/design-system/styles.css';

// Your application code...
```

This import includes:

- Base styles and CSS reset
- Design tokens and CSS variables
- Tailwind utility classes
- Component-specific styles

## Component Registry System

This design system uses a component registry approach to manage components. This provides several benefits:

- **Discoverability**: Easily find available components and their documentation
- **Extensibility**: Extend components with custom functionality
- **Consistency**: Maintain a consistent API across all components
- **Documentation**: Access metadata about each component

### Component Categories

Components are organized into the following categories:

1. **Layout**: Components for page structure

   - `Container`: Main container with max-width constraints
   - `ContentContainer`: Container optimized for content areas
   - `FormContainer`: Container optimized for forms
   - `ModalContainer`: Container for modal dialogs
   - `CardContainer`: Container for card-like elements
   - `MetricContainer`: Container for metric displays
   - `Stack`: Vertical stack layout
   - `Grid`: Flexible grid system
   - `TwoColumnGrid`, `ThreeColumnGrid`, `FourColumnGrid`: Pre-configured grid layouts
   - `ResponsiveGrid`: Responsive grid with breakpoint control

2. **Forms**: Components for user input

   - `Button`: Interactive button component
   - `Input`: Text input field
   - `NewsletterSignup`: Newsletter subscription form

3. **Typography**: Components for text styling

   - Article Components: `ArticleTitle`, `ArticleSubtitle`, `ArticleHeader`, `ArticleText`, `ArticleList`, `ArticleListItem`, `ArticleQuote`
   - Inline Components: `Code`, `ColoredText`, `Emphasis`, `Strong`, `FootnoteText`, `FootnoteItem`
   - UI Components: `UIHeader`, `UIDescription`, `Caption`, `MetaText`, `NavText`, `UIText`

4. **Navigation**: Components for navigation

   - `Link`: Navigation link component

5. **Display**: Utility components
   - `Icon`: Icon component with built-in icon set

### Using Component Metadata

You can access component metadata for your application:

```tsx
import { componentRegistry } from '@nathangosselin/design-system';

// Get information about the Button component
const buttonInfo = componentRegistry.button;

console.log(buttonInfo);
// {
//   name: 'Button',
//   description: 'Interactive button component with multiple variants, icons, and loading states',
//   category: 'forms',
//   path: '../forms/button'
// }
```

### Component Resolver

For advanced use cases, you can use the component resolver:

```tsx
import { resolveComponent, getComponentsByCategory } from '@nathangosselin/design-system';

// Resolve a component by name
const Button = resolveComponent('button');

// Get all components in a specific category
const layoutComponents = getComponentsByCategory('layout');
// Returns metadata for Container, ContentContainer, FormContainer, ModalContainer,
// CardContainer, MetricContainer, Stack, Grid, and other layout components

function App() {
  return <Button>Click me</Button>;
}
```

## Documentation

For full documentation, visit our [Storybook](https://github.com/nfrgosselin/design-system#running-storybook-locally).

### Workflow Guides

We provide comprehensive guides for common workflows:

- [Component Migration Guide](https://github.com/nfrgosselin/design-system/blob/main/docs/guides/component-migration.md) - How to migrate components from another project
- [Publishing Guide](https://github.com/nfrgosselin/design-system/blob/main/docs/guides/publishing.md) - How to publish updates to the NPM package
- [Consuming Guide](https://github.com/nfrgosselin/design-system/blob/main/docs/guides/consuming.md) - How to import and use the design system

For a complete list of guides, see the [Guides Index](https://github.com/nfrgosselin/design-system/blob/main/docs/guides/index.md).

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
```

## Theming

The design system supports multiple themes and primary colors:

```tsx
<ThemeProvider
  theme="light" // 'light' | 'dark' | 'white' | 'system'
  primaryColor="ocean" // 'ocean' | 'sunset' | 'sun' | 'marine'
>
  <App />
</ThemeProvider>
```

Primary colors are defined using HSL values for consistent theming:

- ocean (178 54% 44%): Professional tools
- sunset (14 100% 60%): Creative tools
- sun (45 100% 62%): Publishing tools
- marine (217 55% 23%): Technical tools
