# Styling Guide

## CSS Import

To use the design system styles, import the CSS file in your application's entry point:

```tsx
import '@nathangosselin/design-system/globals.css';
```

This will include:

- Base styles and CSS reset
- Tailwind utility classes
- Component-specific styles
- Design tokens and CSS variables

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
  --font-serif: 'Freight Text Pro', serif;
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

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

## Font Loading

The design system uses custom fonts that need to be loaded in your application. The fonts are:

- **Freight Text Pro**: Primary serif font for article and long-form content
- **Inter**: Sans-serif font for UI elements
- **JetBrains Mono**: Monospace font for code blocks

These fonts should be loaded via your application's font loading strategy (e.g., Next.js font loading, self-hosted, etc.).

## CSS Integration

### Next.js Projects

```tsx
// app/layout.tsx
import '@nathangosselin/design-system/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Vite/React Projects

```tsx
// src/main.tsx or src/index.tsx
import '@nathangosselin/design-system/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Create React App

```tsx
// src/index.tsx
import '@nathangosselin/design-system/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Important Notes

1. Always import the CSS file before any component imports to ensure styles are loaded first
2. Import the CSS file only once at the root of your application
3. The CSS includes all necessary Tailwind utilities and custom styles
4. No additional configuration is needed - the package handles all CSS processing

### Troubleshooting

If styles are not applying correctly:

1. Verify the CSS import is at the root level of your application
2. Check that your bundler supports CSS imports (most modern bundlers do)
3. Ensure there are no CSS conflicts with other global styles
4. For Next.js, make sure the import is in a Server Component (like layout.tsx)
