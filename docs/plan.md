# CSS Variables Implementation Plan

## Overview

This document outlines the plan to improve how our design system exports and manages CSS variables. Based on consumer feedback, we need to make our design system the source of truth for color tokens and other design variables rather than requiring consumers to manually define these variables.

## Current Issues

1. Design system defines CSS variables in `src/styles/styles.css` but doesn't apply them automatically
2. Consumers must manually define all variables in their own CSS files
3. This can lead to inconsistencies, errors, and maintenance overhead
4. There's no clear standard for variable management across applications

## Implementation Checklist

### Phase 1: Restructure CSS Variables Export

- [x] Task 1.1: Modify CSS bundle structure

  - [x] 1.1.1: Separate token variables into a dedicated `tokens.css` file
  - [x] 1.1.2: Ensure variables are applied at `:root` level when imported
  - [x] 1.1.3: Update package.json exports configuration

- [x] Task 1.2: Create variables-only build
  - [x] 1.2.1: Configure build process for variables-only CSS file
  - [x] 1.2.2: Add dark mode variables
  - [x] 1.2.3: Organize variables with comments

### Phase 2: Create Theme Provider Component

- [x] Task 2.1: Develop React ThemeProvider component

  - [x] 2.1.1: Create ThemeProvider with context
  - [x] 2.1.2: Add system preference detection
  - [x] 2.1.3: Add theme customization support
  - [x] 2.1.4: Add tests

- [x] Task 2.2: Add TypeScript types for theming
  - [x] 2.2.1: Create type definitions for all theme tokens
  - [x] 2.2.2: Implement IDE autocompletion support

### Phase 3: Implement Primary Color Selection

- [x] Task 3.1: Extend ThemeProvider with primary color options

  - [x] 3.1.1: Add primaryColor prop to ThemeProvider
  - [x] 3.1.2: Define PrimaryColorOption type (ocean, sunset, sun, marine)
  - [x] 3.1.3: Implement logic to map selected option to CSS variables
  - [x] 3.1.4: Ensure default primary color is maintained for backward compatibility

- [x] Task 3.2: Test primary color implementation

  - [x] 3.2.1: Add unit tests for primaryColor functionality
  - [x] 3.2.2: Create visual tests for each primary color option
  - [x] 3.2.3: Test interaction with custom tokens and existing themes

- [x] Task 3.3: Update API documentation
  - [x] 3.3.1: Document primaryColor prop and available options
  - [x] 3.3.2: Create usage examples for common scenarios
  - [x] 3.3.3: Update existing documentation to reference new capability

### Phase 4: Documentation and Usage Examples

- [x] Task 4.1: Update package documentation

  - [x] 4.1.1: Create CSS import usage examples
  - [x] 4.1.2: Create ThemeProvider usage examples
  - [x] 4.1.3: Document all available variables
  - [x] 4.1.4: Add customization guidance

- [ ] Task 4.2: Update Storybook examples
  - [ ] 4.2.1: Create theming documentation pages
  - [ ] 4.2.2: Add interactive theme customization examples
  - [x] 4.2.3: Add primary color selection examples

## Release Tasks

- [ ] Task R.1: Package Release (v1.3.0)

  - [ ] R.1.1: Build with new variable export system
  - [ ] R.1.2: Include updated documentation
  - [ ] R.1.3: Test tokens.css import flow

- [ ] Task R.2: Communication
  - [ ] R.2.1: Document changes and new approach
  - [ ] R.2.2: Create consumer migration guide

## Timeline

- Phase 1: 2-3 days
- Phase 2: 2-3 days
- Phase 3: 1-2 days
- Phase 4: 1-2 days
- Testing: 1 day
- Release: End of week

## Success Metrics

1. **Developer experience**
   - Simplified setup process
   - Intuitive theming approach
2. **Consistency**

   - Applications have consistent appearance
   - Reliable theme implementation

3. **Extensibility**
   - Easy to add new themes or customize existing ones
   - Straightforward path for future enhancements
