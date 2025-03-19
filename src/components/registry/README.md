# Component Registry

This directory contains the component registry system for our design system.

## Overview

The component registry provides:

1. A central location for component metadata
2. Tools for discovering and resolving components
3. Categorization of components
4. Documentation linking

## Structure

The registry consists of:

- **registry.types.ts**: Contains type definitions for the registry
- **mapping.ts**: Maps component names to their metadata
- **component-resolver.ts**: Provides utilities for resolving components
- **index.ts**: Exports everything needed from the registry

## Usage

### Importing Components Directly

The simplest way to use components is to import them directly:

```tsx
import { Button } from '@yourusername/design-system';

function MyComponent() {
  return <Button>Click me</Button>;
}
```

### Accessing Component Metadata

You can access component metadata from the registry:

```tsx
import { componentRegistry } from '@yourusername/design-system';

const buttonInfo = componentRegistry.button;
console.log(buttonInfo.description); // "Interactive button component with multiple variants..."
```

### Getting Components by Category

You can get all components in a specific category:

```tsx
import { getComponentsByCategory } from '@yourusername/design-system';

const formComponents = getComponentsByCategory('forms');
// Returns metadata for Button, Input, Select, etc.
```

### Using the Component Resolver

For dynamic component resolution:

```tsx
import { resolveComponent } from '@yourusername/design-system';

async function MyDynamicComponent() {
  const Button = await resolveComponent('button');
  return <Button>Click me</Button>;
}
```

## Adding New Components

To add a new component to the registry:

1. Create your component in the appropriate category directory (e.g., `src/components/forms/new-component.tsx`)
2. Add an entry to the registry in `mapping.ts`:

```tsx
newComponent: {
  name: 'NewComponent',
  description: 'Description of what the component does',
  category: 'forms',
  path: '../forms/new-component',
},
```

3. Export the component in the main registry `index.ts` file:

```tsx
import { NewComponent } from '../forms/new-component';

export { NewComponent };
```

## Categories

Components are organized into these categories:

- **forms**: Form-related components (Button, Input, etc.)
- **layout**: Layout components (Container, Grid, etc.)
- **navigation**: Navigation components (Link, Menu, etc.)
- **feedback**: Feedback components (Alert, Toast, etc.)
- **data-display**: Data display components (Table, List, etc.)
- **utils**: Utility components (Portal, VisuallyHidden, etc.)
- **typography**: Typography components (Heading, Text, etc.)
