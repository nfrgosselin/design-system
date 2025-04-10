/**
 * @nathangosselin/design-system
 * A modern, accessible, and customizable design system for React applications
 *
 * @packageDocumentation
 */

// Re-export utility functions with proper types
export * from './utils/cn';

// Export registry utilities
export {
  componentRegistry,
  resolveComponent,
  getComponentsByCategory,
} from './components/registry';

// Export ThemeProvider and related hooks and types
export {
  ThemeProvider,
  useTheme,
  type ThemeProviderProps,
  type ThemeOption,
  type ThemeContextValue,
  type CustomTokens,
} from './components/ThemeProvider';

// Export components by category
// Layout Components
export {
  Container,
  ContentContainer,
  FormContainer,
  ModalContainer,
  CardContainer,
  MetricContainer,
  Stack,
  Grid,
  TwoColumnGrid,
  ThreeColumnGrid,
  FourColumnGrid,
  ResponsiveGrid,
} from './components/layout';

// Data Display Components
// Chart component removed

/**
 * Component Exports
 * Components are grouped by their functional category for easier discovery
 */

// Form Components
export {
  Input,
  NewsletterSignup,
  type InputProps,
  type NewsletterSignupProps,
  buttonVariants,
} from './components/registry';

// Layout Components
export { Button, Link, type ButtonProps } from './components/registry';

// Typography Components
export {
  // Article Components
  ArticleTitle,
  ArticleSubtitle,
  ArticleHeader,
  ArticleText,
  ArticleList,
  ArticleListItem,
  ArticleQuote,
  // Inline Components
  Code,
  ColoredText,
  Emphasis,
  Strong,
  FootnoteText,
  FootnoteItem,
  // UI Components
  UIHeader,
  UIDescription,
  Caption,
  MetaText,
  NavText,
  UIText,
} from './components/typography';

// Display Components
export { Icon } from './components/utils/icon';

/**
 * CSS Imports
 *
 * The design system includes all necessary styles in a single CSS file.
 * Import it in your application's entry point:
 * ```tsx
 * import '@nathangosselin/design-system/styles.css';
 * ```
 *
 * This import includes:
 * - Base styles and CSS reset
 * - Design tokens and CSS variables
 * - Tailwind utility classes
 * - Component-specific styles
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
 *   Code,
 *   UIHeader,
 *   UIText
 * } from '@nathangosselin/design-system';
 *
 * function App() {
 *   return (
 *     <Container>
 *       <Grid>
 *         <ArticleTitle>Welcome</ArticleTitle>
 *         <UIHeader level={2}>Section Title</UIHeader>
 *         <UIText as="label">Form Field</UIText>
 *         <Button variant="primary">Click Me</Button>
 *         <Link href="/about">About</Link>
 *         <Icon name="arrow-right" />
 *         <Code>npm install</Code>
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
