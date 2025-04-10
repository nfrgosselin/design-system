# Styling Guide

## Quick Start

1. Import the design system CSS:

   ```tsx
   import '@nathangosselin/design-system/styles.css';
   ```

2. Configure your theme colors (see [Primary Color System](#primary-color-system))
3. Set up fonts (see [Font Loading](#font-loading))
4. Optional: Configure Tailwind (see [Tailwind Configuration](#tailwind-configuration))

## Theme Configuration

### Primary Color System

The design system uses CSS variables for primary colors. Choose ONE theme by adding these variables to your `globals.css`:

```css
/* In your globals.css */
:root {
  /* Ocean theme (Professional tools) */
  --ds-primary: 178 54% 44%;
  --ds-primary-hover: 178 54% 40%;
  --ds-primary-active: 178 54% 36%;
  --ds-ring: 178 54% 44%;

  /* OR Sunset theme (Creative tools) */
  /* --ds-primary: 14 100% 60%;
  --ds-primary-hover: 14 100% 56%;
  --ds-primary-active: 14 100% 52%;
  --ds-ring: 14 100% 60%; */

  /* OR Sun theme (Publishing tools) */
  /* --ds-primary: 45 100% 62%;
  --ds-primary-hover: 45 100% 58%; 
  --ds-primary-active: 45 100% 54%;
  --ds-ring: 45 100% 62%; */

  /* OR Marine theme (Technical tools) */
  /* --ds-primary: 217 55% 23%;
  --ds-primary-hover: 217 55% 19%;
  --ds-primary-active: 217 55% 15%;
  --ds-ring: 217 55% 23%; */
}
```

These colors are used throughout the system for:

- Primary actions (buttons, links)
- Focus states
- Interactive elements
- Brand accents

Components use these variables with Tailwind's opacity modifier syntax:

```css
.button {
  background-color: hsl(var(--ds-primary) / 1); /* full opacity */
  border-color: hsl(var(--ds-primary) / 0.2); /* 20% opacity */
}
```

### Light/Dark Mode

The design system includes built-in support for light, dark, and white modes through the ThemeProvider:

```tsx
<ThemeProvider
  theme="light" // 'light' | 'dark' | 'white' | 'system' (default)
>
  {children}
</ThemeProvider>
```

The provider automatically handles:

- Color scheme switching
- System preference detection
- Theme persistence
- CSS variable updates

## Font System

### Required Fonts

The design system uses three carefully selected Google Fonts:

- **Newsreader**: Primary serif font for article and long-form content

  - Used for: Articles, blog posts, documentation
  - Weights: 400, 500, 600
  - Styles: Normal, Italic

- **Inter**: Sans-serif font for UI elements

  - Used for: Navigation, buttons, forms
  - Weights: 400, 500, 600, 700
  - Display: Swap

- **JetBrains Mono**: Monospace font for code
  - Used for: Code blocks, technical content
  - Weights: 400, 500
  - Display: Swap

### Setting Up Fonts

Choose one of these approaches:

#### 1. Next.js Font Optimization (Recommended)

```tsx
// app/layout.tsx
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

#### 2. Standard Google Fonts Loading

For non-Next.js projects:

```tsx
import { getGoogleFontsUrl } from '@nathangosselin/design-system/fonts';

// In your HTML head
<link href={getGoogleFontsUrl()} rel="stylesheet" />;
```

## Tailwind Configuration

If using Tailwind in your project, extend our configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... your content configuration
    'node_modules/@nathangosselin/design-system/dist/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('@nathangosselin/design-system/tailwind.config')],
};
```

This provides access to:

- Custom color palette
- Spacing scale
- Typography scale
- Animation utilities
- Component-specific utilities

## Component Styling

Components can be styled using:

1. **className prop**: For basic customization

   ```tsx
   <Button className="my-4">Custom Margin</Button>
   ```

2. **variant prop**: For predefined variations

   ```tsx
   <Button variant="primary">Primary Button</Button>
   ```

3. **Tailwind classes**: For utility-based styling
   ```tsx
   <Container className="bg-white shadow-md">Content</Container>
   ```

## Design Tokens

The design system includes a comprehensive set of design tokens for:

- Colors (neutral, brand, status)
- Typography (sizes, weights, line heights)
- Spacing (scale, relationships)
- Animation (durations, easings)
- Breakpoints
- Shadows/Elevation

These are available as CSS variables and can be accessed through Tailwind utilities. See the [token reference](../reference/tokens.md) for details.

```

```
