# Component Migration Guide

This guide explains how to migrate a component from another project into the design system.

## Prerequisites

- Identify the component to be migrated
- Understand its dependencies and functionality
- Ensure it follows design system patterns

## Migration Steps

### 1. Prepare the Component

1. Copy the component file from the source project
2. Review and adapt the component to use design system tokens:
   - Replace hardcoded colors with token references
   - Ensure typography follows design system patterns
   - Update spacing to use standard tokens

### 2. Place Component in the Correct Directory

1. Identify the appropriate category for your component:

   - **forms**: Input components like buttons, inputs, etc.
   - **layout**: Structural components like containers, grids, etc.
   - **navigation**: Navigation components like links, menus, etc.
   - **typography**: Text-related components
   - **utils**: Utility components like icons
   - **feedback**: Feedback components like alerts, toasts (future)
   - **data-display**: Data display components like tables, cards (future)

2. Create the component file in the appropriate directory:

   ```
   src/components/[category]/[component-name].tsx
   ```

   For example, a new button component would go in:

   ```
   src/components/forms/my-button.tsx
   ```

3. If the component has multiple related components, consider creating a barrel file (index.ts) in the component directory to export them all.

### 3. Register the Component

1. **Add the component to the registry mapping**:

   - Open `src/components/registry/mapping.ts`
   - Add an entry for your component with the following structure:

   ```typescript
   yourComponent: {
     name: 'YourComponent',
     description: 'A detailed description of what the component does',
     category: 'forms', // The appropriate category
     path: '../forms/your-component', // Path relative to registry directory
   },
   ```

2. **Export the component in the registry**:

   - Open `src/components/registry/index.ts`
   - Import your component in the appropriate section:

   ```typescript
   // Add with similar components
   import { YourComponent, type YourComponentProps } from '../forms/your-component';
   ```

   - Export your component in the exports section:

   ```typescript
   export {
     // ... existing exports
     YourComponent,
     // ... existing exports
     // Types
     // ... existing type exports
     type YourComponentProps,
     // ... existing type exports
   };
   ```

### 4. Implement the Component

Your component should follow these implementation guidelines:

1. **Use TypeScript**: Ensure proper TypeScript typing for all props and functions
2. **Use class-variance-authority (cva)** for styling variants:

   ```typescript
   const componentVariants = cva(
     // Base styles as an array of classes
     ['base-class-1', 'base-class-2'],
     {
       variants: {
         // Define variants
         variant: {
           primary: 'primary-class',
           secondary: 'secondary-class',
         },
         size: {
           sm: 'small-class',
           md: 'medium-class',
           lg: 'large-class',
         },
       },
       defaultVariants: {
         variant: 'primary',
         size: 'md',
       },
     }
   );
   ```

3. **Use the `cn` utility** for merging class names:

   ```typescript
   import { cn } from '../../lib/utils';

   // In your component:
   className={cn(
     componentVariants({ variant, size }),
     className
   )}
   ```

4. **Use forwardRef** for component references:

   ```typescript
   const YourComponent = forwardRef<HTMLElementType, YourComponentProps>(
     ({ className, variant, size, ...props }, ref) => {
       return (
         <element
           className={cn(componentVariants({ variant, size }), className)}
           ref={ref}
           {...props}
         />
       );
     }
   );

   YourComponent.displayName = 'YourComponent';
   ```

5. **Add accessibility features**:

   - Proper ARIA attributes
   - Keyboard navigation support
   - Focus management

6. **Add responsive behavior** when applicable

### 5. Add Tests and Stories

1. **Create tests** in the `__tests__` directory within your component category:

   ```
   src/components/[category]/__tests__/[component-name].test.tsx
   ```

2. **Create Storybook stories** in a `stories` directory within your component category:
   ```
   src/components/[category]/stories/[component-name].stories.tsx
   ```

### 6. Document the Component

1. Add JSDoc comments to the component and its props
2. Update component documentation if needed

### 7. Test the Component

1. Test locally using yalc
2. Verify the component works as expected in consuming applications

## Example: Migrating a Button Component

### Original Component:

```tsx
// Original component in source project
function Button({ children, onClick }) {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClick}>
      {children}
    </button>
  );
}
```

### Migrated Component:

```tsx
// src/components/forms/custom-button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const customButtonVariants = cva(
  [
    // Base styles
    'inline-flex items-center justify-center',
    'rounded-md',
    'text-sm font-medium',
    'transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-ds-primary text-white hover:bg-ds-primary/90',
        secondary: 'bg-stone-200 text-stone-900 hover:bg-stone-300',
        outline: 'border border-stone-200 text-stone-900 hover:border-stone-900',
      },
      size: {
        sm: 'h-8 px-4 text-xs',
        md: 'h-10 px-6',
        lg: 'h-12 px-8 text-base',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {
  fullWidth?: boolean;
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant, size, fullWidth, children, ...props }, ref) => {
    return (
      <button
        className={cn(customButtonVariants({ variant, size, fullWidth }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export { CustomButton, customButtonVariants };
```

### Register in Registry:

```typescript
// In src/components/registry/mapping.ts
customButton: {
  name: 'CustomButton',
  description: 'A customized button component with various style variants and sizes',
  category: 'forms',
  path: '../forms/custom-button',
},
```

```typescript
// In src/components/registry/index.ts
// Import the component
import { CustomButton, customButtonVariants, type CustomButtonProps } from '../forms/custom-button';

// Export the component
export {
  // ... existing exports
  CustomButton,
  customButtonVariants,
  // ... existing exports
  // Types
  // ... existing type exports
  type CustomButtonProps,
  // ... existing type exports
};
```
