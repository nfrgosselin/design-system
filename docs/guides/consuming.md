# Consuming the Design System

This guide provides step-by-step instructions for setting up the design system in your project.

## Installation Steps

1. Install the package:

```bash
npm install @nathangosselin/design-system
# or
yarn add @nathangosselin/design-system
```

2. Import the design system CSS file in your root layout or entry point:

```tsx
// In _app.tsx, RootLayout.tsx, or similar
import '@nathangosselin/design-system/styles.css';
```

This import includes all necessary styles:

- Design tokens and CSS variables
- Base styles and CSS reset
- Tailwind utility classes
- Component-specific styles

3. Set up your theme:

   - Configure your primary color theme
   - Set up the required fonts

   See the [Styling Guide](./styles.md) for detailed instructions on theme configuration and font setup.

4. Add the ThemeProvider to handle light/dark mode:

```tsx
import { ThemeProvider } from '@nathangosselin/design-system';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

## Using Components

Import and use components directly from the package:

```tsx
import { Button, Container, Section } from '@nathangosselin/design-system';

function MyPage() {
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

### Available Components

Components are organized into these categories:

- **Forms**: `Button`
- **Layout**: `Container`, `Section`, `Grid`, `Content`
- **Navigation**: `Link`, `InlineLink`, `NavLink`, `UtilityLink`, `ButtonLink`, `MetadataLink`, `BreadcrumbLink`
- **Typography**: `ArticleTitle`, `ArticleSubtitle`, `ArticleHeader`, `ArticleText`, `InlineEmphasis`, `InlineStrong`, `InlineCode`, `UIHeader`, `UILabel`, `UICaption`
- **Utils**: `Icon`, `NamedIcon`

All components are available as direct imports from the package root.

## Theme Mode Configuration

The ThemeProvider handles light/dark/white mode settings. Available options:

```tsx
<ThemeProvider
  theme="light" // 'light' | 'dark' | 'white' | 'system' (default)
>
  {children}
</ThemeProvider>
```

You can use the `useTheme` hook to programmatically change themes:

```tsx
import { useTheme } from '@nathangosselin/design-system';

function ThemeSwitcher() {
  const { theme, isDark, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      Toggle theme (currently {theme})
    </button>
  );
}
```

## Additional Resources

- For detailed styling instructions, see the [Styling Guide](./styles.md)
- For contribution guidelines, see [CONTRIBUTING.md](../../CONTRIBUTING.md)
- For versioning information, see [VERSIONING.md](../../VERSIONING.md)
