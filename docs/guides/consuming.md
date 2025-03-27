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
