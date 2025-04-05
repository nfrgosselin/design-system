import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /**
   * Visual style variant using the stone scale
   * - heavy: stone-900 (default) - Maximum contrast
   * - medium: stone-600 - Strong visual separation
   * - light: stone-300 - Moderate visual separation
   * - subtle: stone-200 - Minimal visual separation
   * - faint: stone-100 - Very subtle visual separation
   */
  variant?: 'heavy' | 'medium' | 'light' | 'subtle' | 'faint';

  /**
   * Orientation of the divider
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Space before and after the divider using our spacing scale
   * @default 'element'
   */
  spacing?: 'compact' | 'element' | 'relaxed' | 'content';

  /**
   * Whether the divider should be decorative (aria-hidden)
   * @default false
   */
  decorative?: boolean;
}

export function Divider({
  variant = 'heavy',
  orientation = 'horizontal',
  spacing = 'element',
  decorative = false,
  className,
  ...props
}: DividerProps) {
  // Convert props to Tailwind classes
  const styles = {
    // Base styles
    base: 'border-0',

    // Orientation-specific styles
    orientation: {
      horizontal: 'w-full border-t',
      vertical: 'h-full border-l',
    },

    // Variant-specific border colors using stone scale
    variant: {
      heavy: 'border-stone-900', // Maximum contrast
      medium: 'border-stone-600', // Strong separation
      light: 'border-stone-300', // Moderate separation
      subtle: 'border-stone-200', // Minimal separation
      faint: 'border-stone-100', // Very subtle separation
    },

    // Spacing using our token-based scale
    spacing: {
      horizontal: {
        compact: 'my-2',
        element: 'my-4',
        relaxed: 'my-6',
        content: 'my-8',
      },
      vertical: {
        compact: 'mx-2',
        element: 'mx-4',
        relaxed: 'mx-6',
        content: 'mx-8',
      },
    },
  };

  return (
    <hr
      role={decorative ? 'none' : 'separator'}
      aria-orientation={orientation}
      className={cn(
        styles.base,
        styles.orientation[orientation],
        styles.variant[variant],
        styles.spacing[orientation][spacing],
        className
      )}
      {...props}
    />
  );
}
