# Design System Primary Color Implementation Plan

This document outlines the steps to improve our design system's primary color handling to ensure a seamless experience for consuming applications.

## Current Issues

1. CSS variables are being set incorrectly (nested variable references)
2. Tailwind expects HSL values for color functions but receives variable references
3. Base color tokens may not be properly defined in consuming applications
4. Components and utility classes don't consistently apply the primary color

## Implementation Plan

### Phase 1: Fix CSS Variable Structure

1. **Modify the ThemeProvider component**:

   - Update the `primaryColorTokens` to use direct HSL values instead of nested variables
   - Example:

     ```typescript
     // Color mappings - direct HSL values for each primary color option
     const colorValues = {
       ocean: {
         base: '178 54% 44%',
         hover: '178 54% 39%',
         active: '178 54% 34%',
       },
       sunset: {
         base: '13 100% 60%',
         hover: '13 100% 55%',
         active: '13 100% 50%',
       },
       // Add sun and marine color mappings
     };

     const primaryColorTokens = useMemo(
       () => ({
         // Direct HSL values for Tailwind
         '--ds-primary': colorValues[currentPrimaryColor].base,
         '--ds-primary-hover': colorValues[currentPrimaryColor].hover,
         '--ds-primary-active': colorValues[currentPrimaryColor].active,
         '--ds-ring': colorValues[currentPrimaryColor].base,

         // Set Tailwind UI specific variables too
         '--primary': colorValues[currentPrimaryColor].base,
         '--primary-foreground': '0 0% 100%',
       }),
       [currentPrimaryColor]
     );
     ```

2. **Update global styles**:
   - Create a base stylesheet that defines all color tokens
   - Ensure this stylesheet is included in the package's main CSS export

### Phase 2: Update Tailwind Configuration

1. **Modify tailwind.config.ts**:

   - Ensure color definitions correctly use HSL function format
   - Make sure primary colors are properly mapped

2. **Update component styles**:
   - Audit all components that use primary color
   - Ensure consistent use of design tokens
   - Fix any direct color references

### Phase 3: Package and Distribution Updates

1. **Update build process**:

   - Ensure CSS variables are properly exposed in the distributed CSS
   - Include the base color stylesheet in the package

2. **Document in README**:

   - Explain the new approach and expected usage
   - Update installation instructions

3. **Create helper utilities**:
   - Add debugging helpers for theme variables
   - Create testing utilities for theme verification

### Phase 4: Documentation and Examples

1. **Update consuming documentation**:

   - Create clear setup instructions
   - Document all available design tokens
   - Explain the ThemeProvider props in detail

2. **Create example applications**:
   - Minimal example showing proper setup
   - Advanced example showing theme switching
   - Examples of utility class usage

### Phase 5: Testing

1. **Create test suite**:

   - Unit tests for ThemeProvider behavior
   - Integration tests for component styling
   - Visual regression tests for color application

2. **Consuming app tests**:
   - Create test projects using the design system
   - Verify functionality across different frameworks
   - Test with and without Tailwind configured

## Implementation Details

### ThemeProvider Changes

Replace the current variable nesting with direct HSL values:

```typescript
// BEFORE:
const primaryColorTokens = {
  '--ds-primary': `var(--ds-color-${currentPrimaryColor}-base)`,
  // ...
};

// AFTER:
const colorMap = {
  ocean: { base: '178 54% 44%', hover: '178 54% 39%', active: '178 54% 34%' },
  // other colors...
};

const primaryColorTokens = {
  '--ds-primary': colorMap[currentPrimaryColor].base,
  '--ds-primary-hover': colorMap[currentPrimaryColor].hover,
  '--ds-primary-active': colorMap[currentPrimaryColor].active,
  // Also set Tailwind UI compatible variables
  '--primary': colorMap[currentPrimaryColor].base,
  '--primary-foreground': '0 0% 100%',
};
```

### CSS Structure

Ensure our design system exports a CSS file that:

1. Sets default variable values
2. Provides proper fallbacks
3. Is included in the main package export

### Consumer Documentation

Add clear documentation explaining:

1. How to import the CSS
2. How to use the ThemeProvider
3. Available primary color options
4. How to use color tokens in custom components

## Timeline

1. **Week 1**: Implement ThemeProvider changes and update global styles
2. **Week 2**: Update component styles and Tailwind configuration
3. **Week 3**: Create documentation and examples
4. **Week 4**: Testing and refinement

## Compatibility Considerations

- Ensure backward compatibility where possible
- Document breaking changes clearly
- Provide migration guide for existing consumers
