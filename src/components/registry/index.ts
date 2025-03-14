// Export component registry types
export * from './registry.types';

// Export component mapping
export { componentRegistry } from './mapping';

// Export component resolver
export { resolveComponent } from './component-resolver';

// Export components individually to avoid naming conflicts
// Shadcn components
import { buttonVariants } from './shadcn/button';
export { buttonVariants };

// Extended components (take precedence over shadcn)
import { Button, extendedButtonVariants } from './extended/button';
export { Button, extendedButtonVariants };

// As more components are added, export them here

/**
 * Component registry usage:
 *
 * 1. Import from registry:
 *    import { Button } from '@yourusername/design-system';
 *
 * 2. Accessing registry information:
 *    import { componentRegistry } from '@yourusername/design-system';
 *    const buttonInfo = componentRegistry.button;
 *
 * 3. Extending components:
 *    Add your extended component to /extended directory
 *    and update the mapping in mapping.ts with the extendedPath.
 *
 * 4. Using the component resolver:
 *    import { resolveComponent } from '@yourusername/design-system';
 *    const Button = resolveComponent('button');
 */
