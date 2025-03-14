/**
 * Design System Main Entry Point
 *
 * This file exports all components, utilities, and types
 * for consumption by client applications.
 */

// Export component registry
export * from './components/registry';

// Export utility functions
export * from './utils/cn';

// Export styles (consumers should import '../styles.css' separately)

/**
 * Usage:
 *
 * ```tsx
 * // Import components
 * import { Button, Card } from '@nathangosselin/design-system';
 *
 * // Import styles
 * import '@nathangosselin/design-system/styles.css';
 *
 * // Use components
 * function App() {
 *   return (
 *     <Card>
 *       <h2>Hello World</h2>
 *       <Button>Click Me</Button>
 *     </Card>
 *   );
 * }
 * ```
 */
