'use client';

import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

/**
 * Props for the NavText component
 */
export interface NavTextProps extends TextProps {
  /**
   * Visual style variant
   * - default: Standard nav item (stone-500 with marine hover)
   * - active: Currently active nav item (marine)
   * - muted: Less prominent nav item (stone-500 with marine hover)
   */
  variant?: 'default' | 'active' | 'muted';

  /**
   * Text size
   * - sm: Small (14px)
   * - base: Default (16px)
   */
  size?: 'sm' | 'base';

  /**
   * Text transform
   * - uppercase: All caps with wider tracking
   * - none: No transformation
   */
  transform?: 'uppercase' | 'none';

  /**
   * Whether to show underline animation on hover
   */
  underline?: boolean;

  /**
   * Font weight
   * - light: 300
   * - normal: 400
   * - medium: 500
   * - semibold: 600
   * - bold: 700
   */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
}

/**
 * NavText component for navigation items.
 * Used for menu items, links, and other navigational elements.
 *
 * @example
 * ```tsx
 * <NavText>Menu Item</NavText>
 * <NavText variant="active" underline>Active Item</NavText>
 * <NavText size="sm" weight="semibold">Small Bold Item</NavText>
 * ```
 *
 * Variants:
 * - default: Standard nav item with hover effect
 * - active: Currently selected/active item
 * - muted: Less prominent nav item
 *
 * Features:
 * - Sans-serif font for clarity
 * - Configurable text size
 * - Optional uppercase transform
 * - Animated underline option
 * - Multiple weight options
 * - Smooth color transitions
 * - Marine accent color on hover/active
 */
export function NavText({
  variant = 'default',
  size = 'base',
  transform = 'uppercase',
  underline = false,
  weight = 'medium',
  className,
  children,
  ...props
}: NavTextProps) {
  const styles = {
    size: {
      sm: 'text-sm',
      base: 'text-base',
    },
    variant: {
      default: 'text-stone-500 hover:text-marine-hover',
      active: 'text-marine',
      muted: 'text-stone-500 hover:text-marine-hover',
    },
    transform: {
      uppercase: 'uppercase tracking-wider',
      none: '',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  };

  return (
    <Text
      as="span"
      className={cn(
        'font-sans transition-colors duration-150 relative',
        underline && 'pb-0.5',
        underline &&
          'after:absolute after:bottom-0 after:left-0 after:h-px after:bg-marine after:transition-all after:duration-200 after:ease-out hover:after:w-full',
        underline && 'after:w-0',
        styles.size[size],
        styles.variant[variant],
        styles.transform[transform],
        styles.weight[weight],
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
}

NavText.displayName = 'NavText';
