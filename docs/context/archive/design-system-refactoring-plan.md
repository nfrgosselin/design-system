# Design System Refactoring Plan

## Overview

This document outlines a comprehensive plan for refactoring our design system from the current "shadcn extension model" to a simplified "fully customized components" approach. This change will reduce complexity, improve maintainability, and better align with our actual implementation patterns.

## Current Architecture Analysis

### Strengths

- Component registry provides a centralized location for component metadata
- Extended components allow customization of shadcn components
- Clear separation between shadcn originals and customized versions

### Pain Points

- Unnecessary complexity with dual-track (shadcn/extended) component management
- Components like Button are already fully customized rather than extensions
- The registry approach adds overhead for components that don't need it
- Maintaining shadcn compatibility creates constraints on component design

## Proposed Architecture

We'll transition to a fully customized component library that:

1. **Simplifies Component Organization**:

   - Move to a flat component structure in `src/components`
   - Group by functional categories (forms, layout, feedback, etc.)
   - Eliminate the shadcn/extended split

2. **Maintains Component Registry**:

   - Keep the registry for component metadata, but simplify its structure
   - Remove shadcn references and paths
   - Focus on categorization and documentation

3. **Preserves Best Practices**:
   - Keep accessibility patterns from shadcn
   - Maintain consistent component APIs
   - Continue using Tailwind for styling

## Migration Strategy

### Phase 1: Registry Restructuring

1. **Create New Component Structure**:

   ```
   src/
     components/
       forms/         # Form-related components (Button, Input, etc.)
       layout/        # Layout components (Container, Grid, etc.)
       navigation/    # Navigation components (Link, Menu, etc.)
       feedback/      # Feedback components (Alert, Toast, etc.)
       data-display/  # Data display components (Table, List, etc.)
       utils/         # Utility components (Portal, VisuallyHidden, etc.)
   ```

2. **Simplify Registry System**:
   - Create new registry types without shadcn dependencies
   - Simplify component resolver to work with new structure
   - Update component metadata format

### Phase 2: Component Migration

1. **Component-by-Component Migration**:

   - Prioritize components in order of usage frequency
   - Follow consistent migration pattern (detailed below)
   - Run comprehensive tests after each component migration

2. **Component Migration Process**:

   ```
   For each component:
   1. Create new file in appropriate category directory
   2. Copy implementation from extended/ or fully implement if needed
   3. Update imports and paths
   4. Update component documentation
   5. Update tests to point to new location
   6. Update storybook stories
   7. Verify component works as expected
   ```

3. **Update Central Exports**:
   - Maintain backward compatibility
   - Gradually transition to new imports

### Phase 3: Clean Up and Documentation

1. **Remove Legacy Registry**:

   - Once all components are migrated, remove old registry structure
   - Clean up unused files and directories

2. **Update Documentation**:

   - Update component migration guide
   - Update main README
   - Ensure Storybook reflects new structure

3. **Final Testing**:
   - Run comprehensive test suite
   - Test in downstream projects

## Implementation Details

### New Registry Implementation

```typescript
// src/registry/types.ts
export type ComponentCategory =
  | 'forms'
  | 'layout'
  | 'navigation'
  | 'feedback'
  | 'data-display'
  | 'utils';

export type ComponentMetadata = {
  name: string;
  description: string;
  category: ComponentCategory;
  docUrl?: string;
  path: string;
};

export type ComponentRegistry = Record<string, ComponentMetadata>;
```

```typescript
// src/registry/registry.ts
import { ComponentRegistry } from './types';

export const componentRegistry: ComponentRegistry = {
  button: {
    name: 'Button',
    description: 'Interactive button component with multiple variants, icons, and loading states',
    category: 'forms',
    path: '../components/forms/button',
  },
  // Other components...
};
```

### Example Component Migration: Button

From:

```
src/components/registry/extended/button.tsx
```

To:

```
src/components/forms/button.tsx
```

With same implementation but updated imports.

### Export Strategy

We'll maintain backward compatibility by:

1. Creating new exports that point to the new locations
2. Keeping old exports that re-export from new locations
3. Marking old exports as deprecated with JSDoc

## Timeline

| Phase                    | Duration | Start   | End     |
| ------------------------ | -------- | ------- | ------- |
| Planning & Preparation   | 1 week   | Week 1  | Week 1  |
| Registry Restructuring   | 2 weeks  | Week 2  | Week 3  |
| Component Migration      | 6 weeks  | Week 4  | Week 9  |
| Clean Up & Documentation | 2 weeks  | Week 10 | Week 11 |
| Testing & Validation     | 1 week   | Week 12 | Week 12 |

Total duration: 12 weeks

## Migration Priorities

Components will be migrated in this order:

1. **Core Form Components**:

   - Button
   - Input
   - Checkbox
   - Radio
   - Select

2. **Layout Components**:

   - Container
   - Grid
   - Section
   - Content

3. **Navigation Components**:

   - Link
   - Menu
   - Tabs

4. **Feedback Components**:

   - Alert
   - Toast
   - Dialog

5. **Remaining Components**

## Risks and Mitigations

| Risk                               | Mitigation                                                                 |
| ---------------------------------- | -------------------------------------------------------------------------- |
| Breaking changes in component APIs | Maintain backward compatibility through re-exports                         |
| Inconsistent component patterns    | Create and follow a component migration checklist                          |
| Missing accessibility features     | Audit each migrated component for a11y compliance                          |
| Regression in downstream projects  | Test with yalc in real projects after each major component group migration |
| Extended timeline                  | Prioritize most-used components first to deliver value quickly             |

## Success Criteria

1. All components migrated to new structure
2. No shadcn dependencies in component implementations
3. Simplified registry system
4. All tests passing
5. Documentation updated to reflect new architecture
6. No regressions in downstream projects

## Maintenance Strategy

After the refactoring:

1. **Periodic shadcn Audits**:

   - Review shadcn updates quarterly
   - Adopt accessibility improvements and best practices
   - Document influences and departures

2. **Component Evolution**:

   - Focus on evolving components based on our product needs
   - Maintain consistent API patterns
   - Add new variants and features as required

3. **Documentation**:
   - Keep documentation in sync with implementation
   - Add usage examples and patterns
   - Document design decisions

## Conclusion

This refactoring will simplify our design system architecture while preserving the benefits of our current approach. By moving to fully customized components, we'll reduce complexity and maintenance burden while improving our ability to evolve the design system according to our specific needs.

The plan provides a structured approach to migration with minimal disruption to ongoing development, while ensuring we maintain quality and backward compatibility throughout the process.
