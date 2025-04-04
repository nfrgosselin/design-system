import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface ColoredTextProps extends TextProps {
  /**
   * Color variant for the text
   * - primary: Brand primary color
   * - success: Success/positive state
   * - warning: Warning/caution state
   * - error: Error/negative state
   * - info: Informational state
   */
  color: 'primary' | 'success' | 'warning' | 'error' | 'info';

  /**
   * Whether to use a subtle background color
   */
  subtle?: boolean;
}

/**
 * ColoredText component for text with semantic colors.
 * Used to convey meaning through color in inline text.
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
      default: 'text-ds-primary',
      subtle: 'text-ds-primary bg-ds-primary/10 px-1.5 py-0.5 rounded',
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
