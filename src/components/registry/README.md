# Component Registry

This directory contains the component registry system for our design system. The registry provides a structured way to manage and extend shadcn/ui components.

## Structure

```
registry/
├── shadcn/           # Original shadcn/ui components
├── extended/         # Our extended versions of shadcn components
├── index.ts          # Main export for all components
├── mapping.ts        # Component registry mapping
└── registry.types.ts # Type definitions for the registry
```

## How the Registry Works

1. **Component Discovery**: The `mapping.ts` file contains metadata about all available components, including their paths, descriptions, and categories.

2. **Component Extension**: The registry allows for two versions of each component:

   - **Original shadcn/ui component**: Located in the `shadcn/` directory
   - **Extended version**: Located in the `extended/` directory with additional features/styling

3. **Automatic Exports**: The `index.ts` file automatically exports all components, preferring the extended version when available.

## How to Use Components

Import components directly from the design system:

```tsx
import { Button } from '@yourusername/design-system';

// Use the component
<Button>Click me</Button>;
```

## How to Extend a Component

1. **Create the Base Component**: First, copy the original shadcn/ui component to the `shadcn/` directory
2. **Create an Extended Version**: Create your extended component in the `extended/` directory
3. **Update the Registry**: Update `mapping.ts` to include your extended component's path

### Example Extension Pattern

```tsx
// In extended/button.tsx
import { Button as ShadcnButton, ButtonProps as ShadcnButtonProps } from '../shadcn/button';

export interface ExtendedButtonProps extends ShadcnButtonProps {
  // Add new props
  isLoading?: boolean;
}

export const Button = ({ isLoading, children, ...props }: ExtendedButtonProps) => {
  return <ShadcnButton {...props}>{isLoading ? 'Loading...' : children}</ShadcnButton>;
};
```

## Component Mapping

The component mapping in `mapping.ts` provides metadata for each component:

```ts
{
  button: {
    name: 'Button',
    description: 'Triggers an action or event.',
    category: 'form',
    shadcnPath: './shadcn/button',
    extendedPath: './extended/button', // Optional
    docUrl: 'https://ui.shadcn.com/docs/components/button',
  },
}
```

This mapping is used for:

- Documentation generation
- Component discovery
- Automatic importing
- Categorization
