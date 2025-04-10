/**
 * @nathangosselin/design-system
 * A modern, accessible, and customizable design system for React applications
 *
 * @packageDocumentation
 */

// Export all components and types through the registry
export * from './components/registry';

// Export utility functions
export * from './utils/cn';

// Export theme-related exports
export * from './components/ThemeProvider';

// Export base types
export * from './types';

// Export version information
export const VERSION = '0.1.0';

// Explicitly mark the package as side-effect free for better tree-shaking
export const __sideEffects = false;

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
