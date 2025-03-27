# Consuming the Design System

This guide provides step-by-step instructions for setting up the design system in your project.

## Installation Steps

1. Install the package:

```bash
npm install @nathangosselin/design-system
# or
yarn add @nathangosselin/design-system
```

2. Import the design system CSS in your root layout or entry point:

```tsx
// In _app.tsx, RootLayout.tsx, or similar
import '@nathangosselin/design-system/styles.css';
```

3. Configure your primary color by adding ONE of these color configurations to your globals.css:

```css
/* Option 1: Ocean (Professional tools) */
:root {
  --ds-primary: 178 54% 44%;
  --ds-primary-hover: 178 54% 40%;
  --ds-primary-active: 178 54% 36%;
  --ds-ring: 178 54% 44%;
}

/* Option 2: Sunset (Creative tools) */
:root {
  --ds-primary: 14 100% 60%;
  --ds-primary-hover: 14 100% 55%;
  --ds-primary-active: 14 100% 50%;
  --ds-ring: 14 100% 60%;
}

/* Option 3: Sun (Publishing tools) */
:root {
  --ds-primary: 45 100% 62%;
  --ds-primary-hover: 45 100% 58%;
  --ds-primary-active: 45 100% 54%;
  --ds-ring: 45 100% 62%;
}

/* Option 4: Marine (Technical tools) */
:root {
  --ds-primary: 217 55% 23%;
  --ds-primary-hover: 217 55% 19%;
  --ds-primary-active: 217 55% 15%;
  --ds-ring: 217 55% 23%;
}
```

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

5. Set up fonts:

The design system uses three Google Fonts:

- Inter (sans-serif) - For UI elements and navigation
- Newsreader (serif) - For article and long-form content
- JetBrains Mono (monospace) - For code blocks

For Next.js applications:

```tsx
import { Inter, JetBrains_Mono, Newsreader } from 'next/font/google';
import { fonts } from '@nathangosselin/design-system/fonts';

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

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jetbrainsMono.className} ${newsreader.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

For non-Next.js applications:

```tsx
import { getGoogleFontsUrl } from '@nathangosselin/design-system/fonts';

function App() {
  return (
    <html>
      <head>
        <link href={getGoogleFontsUrl()} rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

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
