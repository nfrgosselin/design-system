# Consuming the Design System

This guide explains how to consume the design system in your projects.

## Basic Installation

```bash
npm install @nathangosselin/design-system
# or
yarn add @nathangosselin/design-system
```

## Basic Usage

```tsx
import { Button, Container, Section } from '@nathangosselin/design-system';
import '@nathangosselin/design-system/styles.css';

function App() {
  return (
    <Container>
      <Section>
        <h2>Hello World</h2>
        <Button>Click me</Button>
      </Section>
    </Container>
  );
}
```

## Component Categories

The design system organizes components into the following categories:

- **Forms**: `Button`
- **Layout**: `Container`, `Section`, `Grid`, `Content`
- **Navigation**: `Link`, `InlineLink`, `NavLink`, `UtilityLink`, `ButtonLink`, `MetadataLink`, `BreadcrumbLink`
- **Typography**: `ArticleTitle`, `ArticleSubtitle`, `ArticleHeader`, `ArticleText`, `InlineEmphasis`, `InlineStrong`, `InlineCode`, `UIHeader`, `UILabel`, `UICaption`
- **Utils**: `Icon`, `NamedIcon`

All components are available as direct imports from the package root.

## Setting Up Fonts

The design system includes custom fonts that need to be installed:

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

## Configuring Tailwind

In your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nathangosselin/design-system/dist/**/*.{js,ts,jsx,tsx}',
  ],
  // You can extend the design system's theme
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
  plugins: [],
};
```

## Using the Component Registry

For advanced use cases, you can access component metadata and utility functions:

```tsx
import {
  componentRegistry,
  resolveComponent,
  getComponentsByCategory,
  getComponentCategories,
} from '@nathangosselin/design-system';

// Get info about a component
const buttonInfo = componentRegistry.button;
console.log(buttonInfo);
// {
//   name: 'Button',
//   description: 'Interactive button component with multiple variants, icons, and loading states',
//   category: 'forms',
//   path: '../forms/button'
// }

// Dynamically resolve a component
const Button = await resolveComponent('button');

// Get all components in a category
const layoutComponents = getComponentsByCategory('layout');
// Returns metadata for Container, Section, Grid, and Content

// Get all available categories
const categories = getComponentCategories();
// Returns ['forms', 'layout', 'navigation', 'typography', 'utils']
```

## Examples

### Basic Layout

```tsx
import {
  Container,
  Section,
  ArticleTitle,
  ArticleText,
  Button,
} from '@nathangosselin/design-system';

function HomePage() {
  return (
    <Container>
      <Section>
        <ArticleTitle>Welcome to Our Website</ArticleTitle>
        <ArticleText>This is an example of using the design system components.</ArticleText>
        <Button>Get Started</Button>
      </Section>
    </Container>
  );
}
```

### Navigation

```tsx
import { Container, NavLink, Link } from '@nathangosselin/design-system';

function Navigation() {
  return (
    <Container>
      <nav className="flex gap-4 py-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </nav>
      <Link href="/terms">Terms of Service</Link>
    </Container>
  );
}
```

## Troubleshooting

### CSS Issues

If components appear unstyled:

- Ensure you've imported `@nathangosselin/design-system/styles.css`
- Verify your Tailwind content configuration includes the design system

### Font Issues

If fonts aren't loading:

- Verify the fonts were installed correctly in `public/fonts`
- Check that your application can access the font files
- Try reinstalling fonts with `npx designsystemfonts`

### TypeScript Issues

If you're seeing TypeScript errors:

- Ensure you're using TypeScript ≥ 4.5
- Add types to your tsconfig.json:
  ```json
  {
    "compilerOptions": {
      "types": ["@nathangosselin/design-system"]
    }
  }
  ```

## Testing with Different Versions

For testing against unreleased versions:

```bash
# Install specific versions
npm install @nathangosselin/design-system@1.2.3-beta.1

# Or use local testing with yalc
# In design-system repo:
npm run test-local

# In your app:
yalc add @nathangosselin/design-system
```
