import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

/**
 * Props for the UIText component
 */
export interface UITextProps extends TextProps {
  /**
   * Visual style variant
   * - default: Standard UI text (stone-900)
   * - muted: Less prominent text (stone-500)
   * - accent: Emphasized text using primary color (brand)
   */
  variant?: 'default' | 'muted' | 'accent';

  /**
   * Text size
   * - xs: Extra small (12px)
   * - sm: Small (14px)
   * - base: Default (16px)
   * - lg: Large (18px)
   */
  size?: 'xs' | 'sm' | 'base' | 'lg';

  /**
   * Font weight
   * - normal: Regular weight (400)
   * - medium: Medium weight (500)
   * - semibold: Semi-bold weight (600)
   */
  weight?: 'normal' | 'medium' | 'semibold';
}

/**
 * UIText component for general interface text.
 * Used for button labels, form labels, and other UI elements.
 *
 * @example
 * ```tsx
 * <UIText>Default text</UIText>
 * <UIText variant="muted" size="sm">Small muted text</UIText>
 * <UIText variant="accent" weight="semibold">Emphasized text</UIText>
 * ```
 *
 * Variants:
 * - default: Standard text (stone-900)
 * - muted: Less prominent text (stone-500)
 * - accent: Emphasized text using brand color
 *
 * Sizes:
 * - xs: 12px
 * - sm: 14px
 * - base: 16px (default)
 * - lg: 18px
 *
 * Weights:
 * - normal: Regular (400)
 * - medium: Medium (500)
 * - semibold: Semi-bold (600)
 *
 * Features:
 * - Sans-serif font for UI clarity
 * - Flexible size options
 * - Multiple weight options
 * - Semantic color variants
 */
export function UIText({
  variant = 'default',
  size = 'base',
  weight = 'normal',
  className,
  children,
  ...props
}: UITextProps) {
  const styles = {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    },
    variant: {
      default: 'text-stone-900',
      muted: 'text-stone-500',
      accent: 'text-brand',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
  };

  return (
    <Text
      as="span"
      className={cn(
        'font-sans',
        styles.size[size],
        styles.variant[variant],
        styles.weight[weight],
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
}

UIText.displayName = 'UIText';
