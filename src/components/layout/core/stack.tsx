import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variant determines the spacing behavior
   * - ui: Uses gap for consistent spacing (default)
   * - article: Removes gap, relies on component margins
   */
  variant?: 'ui' | 'article';

  /**
   * Direction of the stack - vertical or horizontal
   */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';

  /**
   * Space between items using our spacing scale
   * Only applies to 'ui' variant
   */
  space?:
    | 'compact' // 8px
    | 'element' // 16px
    | 'relaxed' // 24px
    | 'content' // 32px
    | 'section' // 64px
    | 'layout'; // 96px

  /**
   * Alignment of items along the cross axis
   */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';

  /**
   * Alignment of items along the main axis
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

  /**
   * Whether the stack should be inline-flex instead of flex
   */
  inline?: boolean;

  /**
   * Maximum width of the stack using container tokens
   */
  maxWidth?: 'none' | 'metric' | 'card' | 'modal' | 'form' | 'content' | 'max';

  /**
   * Breakpoint at which row stacks become columns
   */
  breakAt?: 'sm' | 'md' | 'lg' | 'xl' | 'none';

  /**
   * HTML element to render as
   */
  as?: React.ElementType;
}

export function Stack({
  children,
  variant = 'ui',
  direction = 'column',
  space = 'element',
  align = 'stretch',
  justify = 'start',
  inline = false,
  maxWidth = 'none',
  breakAt = 'md',
  as: Component = 'div',
  className,
  ...props
}: StackProps) {
  // Convert props to Tailwind classes
  const classes = {
    // Base display
    display: inline ? 'inline-flex' : 'flex',

    // Direction with responsive behavior
    direction: {
      base: {
        row: 'flex-row',
        column: 'flex-col',
        'row-reverse': 'flex-row-reverse',
        'column-reverse': 'flex-col-reverse',
      }[direction],
      responsive:
        breakAt !== 'none' && direction.includes('row')
          ? {
              sm: 'sm:flex-col',
              md: 'md:flex-col',
              lg: 'lg:flex-col',
              xl: 'xl:flex-col',
            }[breakAt]
          : undefined,
    },

    // Alignment
    align: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    }[align],

    // Justification
    justify: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    }[justify],

    // Spacing using our token-based scale (only for UI variant)
    gap:
      variant === 'ui'
        ? {
            compact: 'gap-2', // 8px
            element: 'gap-4', // 16px
            relaxed: 'gap-6', // 24px
            content: 'gap-8', // 32px
            section: 'gap-16', // 64px
            layout: 'gap-24', // 96px
          }[space]
        : undefined,

    // Max width using container tokens with Tailwind classes
    maxWidth:
      maxWidth !== 'none'
        ? {
            metric: 'max-w-metric', // 320px
            card: 'max-w-card', // 480px
            modal: 'max-w-modal', // 560px
            form: 'max-w-form', // 640px
            content: 'max-w-content', // 768px
            max: 'max-w-max', // 1280px
          }[maxWidth]
        : undefined,
  };

  return (
    <Component
      className={cn(
        classes.display,
        classes.direction.base,
        classes.direction.responsive,
        classes.align,
        classes.justify,
        classes.gap,
        classes.maxWidth,
        // Allow custom classes to override
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
