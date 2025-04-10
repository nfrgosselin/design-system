# Adding Components Guide

This guide explains how to add new components to the design system, whether creating them from scratch or migrating them from other projects.

## Table of Contents

1. [Creating New Components](#creating-new-components)
2. [Migrating Existing Components](#migrating-existing-components)
3. [Component Implementation Guidelines](#component-implementation-guidelines)
4. [Component Checklist](#component-checklist)

## Creating New Components

### 1. Plan the Component

Before writing any code, define:

- Component purpose and functionality
- Props interface and API design
- Visual variants and states
- Accessibility requirements
- Dependencies and composition needs

### 2. Place Component Files

1. Choose the appropriate category:

   Before creating a new category, consider if your component fits into one of our existing categories:

   - **forms**: Input components (buttons, inputs, forms)
   - **layout**: Structural components (containers, grids, sections)
   - **navigation**: Navigation components (links, menus, nav bars)
   - **typography**: Text-related components
   - **utils**: Utility components (icons, portals)
   - **feedback**: Feedback components (alerts, toasts)
   - **data-display**: Data display components (tables, cards)
   - **ui**: General UI components (pills, badges)

   Creating a new category should only be considered when:

   - You have 3 or more related components that form a cohesive group
   - The components don't logically fit into existing categories
   - The grouping will make the component library more intuitive for users

2. Create the component file:

   ```
   src/components/[category]/[component-name].tsx
   ```

3. If needed, create supporting files:
   ```
   src/components/[category]/
   ├── [component-name].tsx          # Main component
   ├── [component-name].types.ts     # Type definitions (optional)
   ├── [component-name].utils.ts     # Utilities (optional)
   └── index.ts                      # Barrel exports
   ```

### 3. Implement the Component

Basic component structure:

```tsx
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

// Define variants
const componentVariants = cva(
  // Base styles
  ['base-styles-here'],
  {
    variants: {
      variant: {
        primary: 'primary-styles',
        secondary: 'secondary-styles',
      },
      // Add other variants
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

// Define props interface
export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  // Add custom props
}

// Implement component
export const Component = forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <element ref={ref} className={cn(componentVariants({ variant }), className)} {...props} />
    );
  }
);

Component.displayName = 'Component';
```

## Migrating Existing Components

### 1. Prepare the Component

1. Copy the component from its source project
2. Remove project-specific dependencies
3. Adapt to design system patterns:
   - Replace hardcoded values with design tokens
   - Use Tailwind utility classes
   - Implement proper TypeScript types
   - Add proper accessibility attributes

### 2. Refactor the Implementation

1. Convert styles to use design system tokens:

   ```tsx
   // Before
   className = 'bg-blue-500 text-white px-4';

   // After
   className = 'bg-primary text-white px-element';
   ```

2. Implement variants using cva:

   ```tsx
   const buttonVariants = cva(['base-classes'], {
     variants: {
       // Define variants matching design system
     },
   });
   ```

3. Add proper TypeScript types and props interface

## Component Implementation Guidelines

### 1. Styling

- Use only Tailwind utility classes
- Follow token-based design system
- Implement responsive variants
- Use cva for component variants
- Use cn utility for className merging

### 2. TypeScript

- Use strict typing
- Export component props interface
- Use generics when needed
- Implement proper event handlers
- Use proper HTML element types

### 3. Accessibility

- Implement proper ARIA attributes
- Support keyboard navigation
- Handle focus management
- Provide proper labeling
- Test with screen readers

### 4. Component Architecture

- Use composition over inheritance
- Keep components focused and single-purpose
- Implement proper prop drilling
- Use context when necessary
- Follow React best practices

## Component Checklist

### Setup & Implementation ✓

- [ ] Component placed in correct category directory
- [ ] Props interface defined and exported
- [ ] Variants implemented with cva
- [ ] Proper ref forwarding implemented
- [ ] DisplayName set
- [ ] JSDoc comments added
- [ ] Accessibility features implemented

### Exports ✓

- [ ] Component exported from category barrel file
- [ ] Component exported from main package entry point
- [ ] Types exported from main package entry point
- [ ] Added to component registry

### Documentation ✓

- [ ] Props documented with JSDoc
- [ ] Usage examples provided
- [ ] Accessibility notes included
- [ ] Variants documented
- [ ] Breaking changes noted (if migrating)

### Testing ✓

- [ ] Unit tests written in `src/__tests__/components/[category]/ComponentName.test.tsx`
- [ ] Integration tests added (if component has complex interactions)
- [ ] Accessibility tests included (using jest-axe)
- [ ] Visual regression tests added (if component has visual states)
- [ ] Test coverage adequate

### Stories ✓

- [ ] Basic story created
- [ ] Variant stories added
- [ ] Interactive examples included
- [ ] Props documented in stories
- [ ] Accessibility tested in Storybook

### Quality Assurance ✓

- [ ] Linting passes
- [ ] Type checking passes
- [ ] All tests pass
- [ ] Bundle size impact checked
- [ ] Browser testing completed
- [ ] Mobile responsiveness verified

### Final Steps ✓

- [ ] PR created
- [ ] Documentation updated
- [ ] Changelog updated
- [ ] Version bump determined
- [ ] Breaking changes documented

### 5. Add Tests and Stories

1. **Create tests** in the `src/__tests__/components/[category]` directory:

   ```
   src/__tests__/components/[category]/ComponentName.test.tsx
   ```

   Ensure tests cover:

   - Basic rendering
   - Component variants
   - Interactive behaviors
   - Accessibility requirements
   - Edge cases and error states

2. **Create Storybook stories** in a `stories` directory within your component category:
   ```
   src/components/[category]/stories/ComponentName.stories.tsx
   ```

## Example Implementation

Here's a complete example of a properly implemented component:

```tsx
// src/components/forms/custom-button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'rounded-md',
    'text-sm font-medium',
    'transition-colors',
    'focus-visible:outline-none focus-visible:ring-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary/90',
        secondary: 'bg-stone-200 text-stone-900 hover:bg-stone-300',
      },
      size: {
        sm: 'h-8 px-4 text-xs',
        md: 'h-10 px-6',
        lg: 'h-12 px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? 'Loading...' : children}
      </button>
    );
  }
);

Button.displayName = 'Button';

// Export variants for composition
export { buttonVariants };
```

Remember to:

1. Follow the checklist for each component
2. Document any deviations or special cases
3. Test thoroughly before releasing
4. Update documentation as needed
