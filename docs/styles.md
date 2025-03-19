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

## Font Loading

The design system includes custom fonts that are automatically bundled with the package:

- **Freight Text Pro**: Primary serif font for article and long-form content
- **Inter**: Sans-serif font for UI elements
- **JetBrains Mono**: Monospace font for code blocks

### Easy Font Installation

We provide multiple ways to install fonts:

```bash
# Option 1: Using npx with the full package name
npx @nathangosselin/design-system design-system-fonts

# Option 2: When the package is already installed in your project
npx design-system-fonts

# Option 3: Add it to your scripts in package.json
"scripts": {
  "install-fonts": "design-system-fonts",
  "postinstall": "design-system-fonts"
}
```

Note: The command `npx dsfonts` only works after publishing to npm and is not available yet.

This utility:

1. Copies font files to your project's `public/fonts` directory
2. Works with any project type (Next.js, Vite, Create React App, etc.)
3. Creates minimal files and proper directory structure
4. Provides helpful console output

### Framework-Specific Setup

#### Next.js Projects

For Next.js projects, we recommend:

1. Install fonts to the public directory:

   ```bash
   npx @nathangosselin/design-system design-system-fonts
   ```

2. Add to your `package.json`:

   ```json
   "scripts": {
     "postinstall": "design-system-fonts",
     "dev": "next dev",
     "build": "next build"
   }
   ```

3. Import the CSS in your root layout:

   ```tsx
   // app/layout.tsx
   import '@nathangosselin/design-system/globals.css';

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body>{children}</body>
       </html>
     );
   }
   ```

#### Vite/React Projects

Most bundlers like Vite can handle font imports directly:

```tsx
// src/main.tsx
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

If you encounter issues, use our font installer:

```bash
npx @nathangosselin/design-system design-system-fonts
```

Then add to your `vite.config.js`:

```js
export default defineConfig({
  // ... other config
  publicDir: 'public',
});
```

### Important Notes

1. Always import the CSS file before any component imports
2. Import the CSS file only once at the root of your application
3. The design system handles both relative paths and public paths for maximum compatibility

### Troubleshooting

If fonts aren't loading correctly:

1. Check that fonts are in your `public/fonts` directory
2. Run the font installer: `npx @nathangosselin/design-system design-system-fonts`
3. Verify your CSS is imported at the root level
4. Check browser network tab for 404 errors on font files
5. Clear your browser cache to ensure new font paths are used

### Known Issues

#### "Critical dependency" warnings in Next.js

You may see warnings like:

```
Critical dependency: the request of a dependency is an expression
```

These warnings are caused by dynamic imports in the design system's component registry. They don't affect functionality and can be safely ignored. They're a result of how the component registry resolves components at runtime.

If these warnings bother you, avoid using the dynamic `resolveComponent` function and stick to direct imports:

```tsx
// Instead of:
import { resolveComponent } from '@nathangosselin/design-system';
const DynamicButton = resolveComponent('button');

// Use direct imports:
import { Button } from '@nathangosselin/design-system';
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

```

```
