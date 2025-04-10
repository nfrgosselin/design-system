import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

/**
 * Props for the Code component
 */
export interface CodeProps extends TextProps {
  /**
   * Visual style variant
   * - default: Standard code style (stone-900 on stone-100)
   * - muted: Less prominent code style (stone-600 on stone-50)
   */
  variant?: 'default' | 'muted';
}

/**
 * Code component for inline code snippets.
 * Used to display code, keyboard shortcuts, or technical terms within text content.
 *
 * @example
 * ```tsx
 * <Code>npm install</Code>
 * <Code variant="muted">Ctrl+C</Code>
 * ```
 *
 * Variants:
 * - default: High contrast for primary code
 * - muted: Lower contrast for secondary code
 *
 * Styling:
 * - Monospace font for code clarity
 * - Slightly smaller text (0.8em)
 * - Light background for contrast
 * - Rounded corners
 * - Proper padding for readability
 */
export function Code({ variant = 'default', className, children, ...props }: CodeProps) {
  const styles = {
    default: 'font-mono text-[0.8em] bg-stone-100 text-stone-900 px-1.5 py-0.5 rounded',
    muted: 'font-mono text-[0.8em] bg-stone-50 text-stone-600 px-1.5 py-0.5 rounded',
  };

  return (
    <Text as="code" className={cn(styles[variant], className)} {...props}>
      {children}
    </Text>
  );
}

Code.displayName = 'Code';
