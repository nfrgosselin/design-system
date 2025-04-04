import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface UITextProps extends TextProps {
  /**
   * Visual style variant
   * - default: Standard UI text
   * - muted: Less prominent text
   * - accent: Emphasized text using primary color
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
   * - normal: 400
   * - medium: 500
   * - semibold: 600
   */
  weight?: 'normal' | 'medium' | 'semibold';
}

/**
 * UIText component for general interface text.
 * Used for button labels, form labels, and other UI elements.
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
      accent: 'text-ds-primary',
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
