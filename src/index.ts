/**
 * @nathangosselin/design-system
 * A modern, accessible, and customizable design system for React applications
 *
 * @packageDocumentation
 */

// Re-export utility functions with proper types
export * from './utils/cn';

// Export registry utilities
export { componentRegistry, resolveComponent } from './components/registry';

// Export ThemeProvider and related hooks and types
export {
  ThemeProvider,
  useTheme,
  usePrimaryColor,
  type ThemeProviderProps,
  type ThemeOption,
  type PrimaryColorOption,
  type ThemeContextValue,
  type CustomTokens,
} from './components/ThemeProvider';

/**
 * Component Exports
 * Components are grouped by their functional category for easier discovery
 */

// Layout Components
export { Button, Link, type ButtonProps } from './components/registry';
export { Container, Content, Grid, Section } from './components/layout';

// Typography Components
export {
  // Article Components
  ArticleTitle,
  ArticleSubtitle,
  ArticleHeader,
  ArticleText,
  // Inline Components
  InlineCode,
  InlineLink,
  InlineEmphasis,
  InlineStrong,
  // UI Components
  UIHeader,
  UILabel,
  UICaption,
} from './components/typography';

// Display Components
export { Icon } from './components/utils/icon';

// Form Components
export { buttonVariants } from './components/registry';

/**
 * CSS Imports
 *
 * To use the design system styles, import the CSS file in your application:
 * ```tsx
 * import '@nathangosselin/design-system/styles.css';
 * ```
 */

/**
 * Component Usage Examples
 *
 * Basic usage:
 * ```tsx
 * import {
 *   Button,
 *   Link,
 *   Icon,
 *   Container,
 *   Grid,
 *   ArticleTitle,
 *   InlineCode,
 *   UIHeader,
 *   UILabel
 * } from '@nathangosselin/design-system';
 *
 * function App() {
 *   return (
 *     <Container>
 *       <Grid>
 *         <ArticleTitle>Welcome</ArticleTitle>
 *         <UIHeader variant="primary">Section Title</UIHeader>
 *         <UILabel>Form Field</UILabel>
 *         <Button variant="primary">Click Me</Button>
 *         <Link href="/about">About</Link>
 *         <Icon name="arrow-right" />
 *         <InlineCode>npm install</InlineCode>
 *       </Grid>
 *     </Container>
 *   );
 * }
 * ```
 *
 * Using the component registry:
 * ```tsx
 * import { componentRegistry, resolveComponent } from '@nathangosselin/design-system';
 *
 * // Get component info
 * const buttonInfo = componentRegistry.button;
 *
 * // Dynamically resolve a component
 * const DynamicButton = resolveComponent('button');
 * ```
 */

// Type exports for better IDE support
export type { ComponentMetadata, ComponentRegistry } from './components/registry/registry.types';

// Export version information
export const VERSION = '0.1.0';

// Explicitly mark the package as side-effect free for better tree-shaking
// This is also configured in package.json
export const __sideEffects = false;

// Export all types
export type {
  // Base Types
  BaseProps,
  // Theme Types
  ThemeTokens,
  ThemeExtension,
  ColorToken,
  SpacingToken,
  RadiusToken,
  // Component Types
  Size,
  Intent,
  Variant,
  // Registry Types
  ComponentSource,
  ComponentInfo,
  ShadcnComponentInfo,
  ExtendedComponentInfo,
  CustomComponentInfo,
  // Utility Types
  DeepPartial,
  // Hook Types
  UseThemeProps,
  // Version Type
  Version,
} from './types';
