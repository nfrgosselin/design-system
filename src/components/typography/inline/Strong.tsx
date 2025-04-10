import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

/**
 * Props for the Strong component
 */
export interface StrongProps extends TextProps {
  /**
   * Visual style variant
   * - default: Standard bold text (stone-900)
   * - muted: Less prominent bold text (stone-600)
   * - accent: Emphasized bold text using brand color
   */
  variant?: 'default' | 'muted' | 'accent';
}

/**
 * Strong component for bold text.
 * Used to strongly emphasize words or phrases within text content.
 *
 * @example
 * ```tsx
 * <Strong>Important text</Strong>
 * <Strong variant="muted">Less important bold text</Strong>
 * <Strong variant="accent">Branded bold text</Strong>
 * ```
 *
 * Variants:
 * - default: High contrast bold text
 * - muted: Lower contrast bold text
 * - accent: Brand-colored bold text
 *
 * Styling:
 * - Semi-bold weight for emphasis
 * - Color variants for different contexts
 * - Semantic HTML using <strong> tag
 */
export function Strong({ variant = 'default', className, children, ...props }: StrongProps) {
  const styles = {
    default: 'text-stone-900 font-semibold',
    muted: 'text-stone-600 font-semibold',
    accent: 'text-brand font-semibold',
  };

  return (
    <Text as="strong" className={cn(styles[variant], className)} {...props}>
      {children}
    </Text>
  );
}

Strong.displayName = 'Strong';
