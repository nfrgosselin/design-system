import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

/**
 * Props for the ColoredText component
 */
export interface ColoredTextProps extends TextProps {
  /**
   * Color variant for the text
   * - primary: Brand primary color (brand)
   * - success: Success/positive state (green)
   * - warning: Warning/caution state (amber)
   * - error: Error/negative state (red)
   * - info: Informational state (blue)
   */
  color: 'primary' | 'success' | 'warning' | 'error' | 'info';

  /**
   * Whether to use a subtle background color
   * When true, adds a light background and rounded corners
   */
  subtle?: boolean;
}

/**
 * ColoredText component for text with semantic colors.
 * Used to convey meaning through color in inline text.
 *
 * @example
 * ```tsx
 * <ColoredText color="success">Task completed</ColoredText>
 * <ColoredText color="error" subtle>Error occurred</ColoredText>
 * ```
 *
 * Color Variants:
 * - primary: Brand color for emphasis
 * - success: Green for positive states
 * - warning: Amber for caution states
 * - error: Red for negative states
 * - info: Blue for informational states
 *
 * Each color has two modes:
 * - Default: Just the text color
 * - Subtle: Includes a light background and rounded corners
 */
export function ColoredText({
  color,
  subtle = false,
  className,
  children,
  ...props
}: ColoredTextProps) {
  const styles = {
    primary: {
      default: 'text-brand',
      subtle: 'text-brand bg-brand/10 px-1.5 py-0.5 rounded',
    },
    success: {
      default: 'text-green-600',
      subtle: 'text-green-700 bg-green-50 px-1.5 py-0.5 rounded',
    },
    warning: {
      default: 'text-amber-600',
      subtle: 'text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded',
    },
    error: {
      default: 'text-red-600',
      subtle: 'text-red-700 bg-red-50 px-1.5 py-0.5 rounded',
    },
    info: {
      default: 'text-blue-600',
      subtle: 'text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded',
    },
  };

  return (
    <Text
      as="span"
      className={cn(styles[color][subtle ? 'subtle' : 'default'], className)}
      {...props}
    >
      {children}
    </Text>
  );
}

ColoredText.displayName = 'ColoredText';
