# Styling Guide

## CSS Import

To use the design system styles, import the CSS file in your application's entry point:

```tsx
import '@nathangosselin/design-system/styles.css';
```

This will include:

- Base styles and CSS reset
- Tailwind utility classes
- Component-specific styles
- Design tokens and CSS variables

## Font Loading

The design system uses Google Fonts:

- **Newsreader**: Primary serif font for article and long-form content
- **Inter**: Sans-serif font for UI elements
- **JetBrains Mono**: Monospace font for code blocks

### Setting Up Fonts

Import the fonts configuration and add the Google Fonts link to your HTML head:

```tsx
import { getGoogleFontsUrl } from '@nathangosselin/design-system/fonts';

// In your HTML head:
<link href={getGoogleFontsUrl()} rel="stylesheet" />;
```

For Next.js projects, we recommend using the built-in font optimization:

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

## Design Tokens

The design system uses CSS variables for consistent styling. These are available after importing the CSS file:

```css
:root {
  /* Colors */
  --black: 20 14.3% 4.1%;
  --white: 60 33.3% 98.8%;

  /* Product Identity Colors */
  --ocean: 178 54% 44%; /* Professional tools */
  --sunset: 14 100% 60%; /* Creative tools */
  --sun: 45 100% 62%; /* Publishing tools */
  --marine: 217 55% 23%; /* Technical tools */

  /* Layout */
  --container-max: 1280px;
  --container-content: 768px;
  --container-form: 640px;

  /* Spacing Scale */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px - base */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-12: 3rem; /* 48px */
  --space-16: 4rem; /* 64px */

  /* Fonts */
  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### Primary Color System

The design system includes a primary color system that can be configured at runtime. The ThemeProvider handles mapping the selected primary color to these CSS variables:

```css
/* Default (ocean) */
--ds-primary: var(--ds-color-ocean-base);
--ds-ring: var(--ds-color-ocean-base);

/* When primaryColor="sunset" */
--ds-primary: var(--ds-color-sunset-base);
--ds-ring: var(--ds-color-sunset-base);
```

You can customize the primary color by:

1. Using the `ThemeProvider`:

```tsx
<ThemeProvider primaryColor="sunset">
  <App />
</ThemeProvider>
```

2. Using the `customTokens` prop for entirely custom colors:

```tsx
<ThemeProvider
  customTokens={{
    '--ds-primary': 'purple',
    '--ds-ring': 'purple',
  }}
>
  <App />
</ThemeProvider>
```

See the [Consuming Guide](./guides/consuming.md#primary-color-selection) for more details on using the primary color system.

## Tailwind Configuration

The design system uses Tailwind CSS for styling. If you're using Tailwind in your project, extend the design system's configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... your content configuration
    'node_modules/@nathangosselin/design-system/dist/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('@nathangosselin/design-system/dist/tailwind.config.js')],
};
```

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

```

```
