# Consuming the Design System

This guide explains how to consume the design system in your projects.

## Basic Installation

1. Install package

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

## Theming

### ThemeProvider

The design system includes a `ThemeProvider` component that handles theme management. It should be placed at the root of your application:

```tsx
import { ThemeProvider } from '@nathangosselin/design-system';
import '@nathangosselin/design-system/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

### Theme Options

The `ThemeProvider` accepts several props for customization:

```tsx
<ThemeProvider
  theme="light" // Options: 'light', 'dark', 'white', 'system' (default)
  primaryColor="ocean" // Options: 'ocean', 'sunset', 'sun', 'marine'
  customTokens={{
    // Optional custom CSS variables
    '--ds-primary': 'purple',
  }}
>
  {children}
</ThemeProvider>
```

### Primary Color Selection

The design system offers four primary color options that can be configured:

- **ocean** (default): Blue-green (#34b6ac) - Professional tools
- **sunset**: Orange (#ff5f35) - Creative tools
- **sun**: Yellow (#ffd23f) - Publishing tools
- **marine**: Navy (#1b365d) - Technical tools

You can set the primary color in two ways:

1. Using the `primaryColor` prop on the `ThemeProvider`:

```tsx
<ThemeProvider primaryColor="sunset">
  <App />
</ThemeProvider>
```

2. Using the `usePrimaryColor` hook to change it dynamically:

```tsx
import { usePrimaryColor } from '@nathangosselin/design-system';

function ColorSwitcher() {
  const { primaryColor, setPrimaryColor } = usePrimaryColor();

  return (
    <div>
      <p>Current color: {primaryColor}</p>
      <button onClick={() => setPrimaryColor('sun')}>Switch to Sun</button>
    </div>
  );
}
```

The primary color affects all components that use the `--ds-primary` CSS variable, including buttons, links, and accent elements.

### Dark Mode

You can use the `useTheme` hook to check if dark mode is active and to change the theme:

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

## Component Categories

The design system organizes components into the following categories:

- **Forms**: `Button`
- **Layout**: `Container`, `Section`, `Grid`, `Content`
- **Navigation**: `Link`, `InlineLink`, `NavLink`, `UtilityLink`, `ButtonLink`, `MetadataLink`, `BreadcrumbLink`
- **Typography**: `ArticleTitle`, `ArticleSubtitle`, `ArticleHeader`, `ArticleText`, `InlineEmphasis`, `InlineStrong`, `InlineCode`, `UIHeader`, `UILabel`, `UICaption`
- **Utils**: `Icon`, `NamedIcon`

All components are available as direct imports from the package root.

## Setting Up Fonts

### Google Fonts

The design system uses Google Fonts for its typography. We provide a configuration and helper functions to make font setup easy:

```tsx
import { fonts, getGoogleFontsUrl } from '@nathangosselin/design-system/fonts';

// In your app's root layout or entry point:
function RootLayout() {
  return (
    <html>
      <head>
        <link href={getGoogleFontsUrl()} rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

For Next.js applications, you can use the Next.js Font Optimization:

```tsx
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Newsreader } from 'next/font/google';
import { fonts } from '@nathangosselin/design-system/fonts';

// Load fonts with weights from our configuration
const inter = Inter({
  subsets: ['latin'],
  weight: fonts.sans.weights,
  display: fonts.sans.display,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: fonts.mono.weights,
  display: fonts.mono.display,
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: fonts.serif.weights,
  style: fonts.serif.styles,
  display: fonts.serif.display,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jetbrainsMono.className} ${newsreader.className}`}>
        {children}
      </body>
    </html>
  );
}
```

The design system uses these fonts:

- Newsreader (serif) - For article and long-form content
- Inter (sans-serif) - For UI elements and navigation
- JetBrains Mono (monospace) - For code blocks
