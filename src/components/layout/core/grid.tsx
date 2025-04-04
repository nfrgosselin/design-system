import * as React from 'react';
import { cn } from '../../../lib/utils';

type GridBaseProps<T extends React.ElementType = 'div'> = {
  /**
   * Number of columns in the grid
   * - 1: Single column
   * - 2: Two columns
   * - 3: Three columns
   * - 4: Four columns
   * - auto: Responsive (1 → 2 → 3 columns)
   */
  cols?: 1 | 2 | 3 | 4 | 'auto';

  /**
   * Space between grid items using our spacing scale
   * - compact: 8px (--spacing-compact)
   * - element: 16px (--spacing-element)
   * - relaxed: 24px (--spacing-relaxed)
   * - content: 32px (--spacing-content)
   */
  gap?: 'compact' | 'element' | 'relaxed' | 'content';

  /**
   * Breakpoint below which the grid collapses to a single column
   */
  collapseBelow?: 'sm' | 'md' | 'lg' | 'xl' | 'none';

  /**
   * HTML element to render as
   */
  as?: T;

  className?: string;
};

export type GridProps<T extends React.ElementType = 'div'> = GridBaseProps<T> &
  Omit<React.ComponentPropsWithRef<T>, keyof GridBaseProps<T>>;

function GridComponent<T extends React.ElementType = 'div'>({
  className,
  cols = 'auto',
  gap = 'element',
  collapseBelow = 'sm',
  as,
  ...props
}: GridProps<T>) {
  const Component = as || 'div';

  // Use explicit Tailwind gap utilities
  const gapClass = cn({
    'gap-2': gap === 'compact',
    'gap-4': gap === 'element',
    'gap-6': gap === 'relaxed',
    'gap-8': gap === 'content',
  });

  // Use explicit Tailwind grid column utilities
  const columnClass = cn({
    // Auto-responsive layout (1 → 2 → 3 columns)
    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': cols === 'auto',

    // Single column is always single column
    'grid-cols-1': cols === 1,

    // Two columns
    'grid-cols-1 sm:grid-cols-2': cols === 2 && collapseBelow === 'sm',
    'grid-cols-1 md:grid-cols-2': cols === 2 && collapseBelow === 'md',
    'grid-cols-1 lg:grid-cols-2': cols === 2 && collapseBelow === 'lg',
    'grid-cols-1 xl:grid-cols-2': cols === 2 && collapseBelow === 'xl',
    'grid-cols-2': cols === 2 && collapseBelow === 'none',

    // Three columns
    'grid-cols-1 sm:grid-cols-3': cols === 3 && collapseBelow === 'sm',
    'grid-cols-1 md:grid-cols-3': cols === 3 && collapseBelow === 'md',
    'grid-cols-1 lg:grid-cols-3': cols === 3 && collapseBelow === 'lg',
    'grid-cols-1 xl:grid-cols-3': cols === 3 && collapseBelow === 'xl',
    'grid-cols-3': cols === 3 && collapseBelow === 'none',

    // Four columns
    'grid-cols-1 sm:grid-cols-4': cols === 4 && collapseBelow === 'sm',
    'grid-cols-1 md:grid-cols-4': cols === 4 && collapseBelow === 'md',
    'grid-cols-1 lg:grid-cols-4': cols === 4 && collapseBelow === 'lg',
    'grid-cols-1 xl:grid-cols-4': cols === 4 && collapseBelow === 'xl',
    'grid-cols-4': cols === 4 && collapseBelow === 'none',
  });

  return <Component className={cn('grid w-full', columnClass, gapClass, className)} {...props} />;
}

export const Grid = GridComponent as typeof GridComponent & {
  <T extends React.ElementType = 'div'>(
    props: GridProps<T> & { ref?: React.ComponentPropsWithRef<T>['ref'] }
  ): JSX.Element;
};

// Semantic wrapper components
export const TwoColumnGrid = React.forwardRef<HTMLDivElement, Omit<GridProps, 'cols'>>(
  (props, ref) => <Grid {...props} cols={2} ref={ref} />
);
TwoColumnGrid.displayName = 'TwoColumnGrid';

export const ThreeColumnGrid = React.forwardRef<HTMLDivElement, Omit<GridProps, 'cols'>>(
  (props, ref) => <Grid {...props} cols={3} ref={ref} />
);
ThreeColumnGrid.displayName = 'ThreeColumnGrid';

export const FourColumnGrid = React.forwardRef<HTMLDivElement, Omit<GridProps, 'cols'>>(
  (props, ref) => <Grid {...props} cols={4} ref={ref} />
);
FourColumnGrid.displayName = 'FourColumnGrid';

export const ResponsiveGrid = React.forwardRef<HTMLDivElement, Omit<GridProps, 'cols'>>(
  (props, ref) => <Grid {...props} cols="auto" ref={ref} />
);
ResponsiveGrid.displayName = 'ResponsiveGrid';
