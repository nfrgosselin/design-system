import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 'auto';
  gap?: 'default' | 'relaxed' | 'compact';
  collapseBelow?: 'sm' | 'md' | 'lg' | 'none';
  as?: React.ElementType;
}

export function Grid({
  className,
  cols = 'auto',
  gap = 'default',
  collapseBelow = 'md',
  as: Component = 'div',
  ...props
}: GridProps) {
  // Gap classes based on design system tokens
  // --spacing-element: var(--space-4) = 1rem = 16px
  // --spacing-relaxed: var(--space-6) = 1.5rem = 24px
  // --spacing-compact: var(--space-2) = 0.5rem = 8px
  const gapClass = {
    default: 'gap-4', // maps to --spacing-element (16px)
    relaxed: 'gap-6', // maps to --spacing-relaxed (24px)
    compact: 'gap-2', // maps to --spacing-compact (8px)
  }[gap];

  // Get the column classes explicitly rather than using string interpolation
  let columnClass = '';

  if (cols === 'auto') {
    columnClass = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  } else if (collapseBelow === 'none') {
    // Explicitly list all possible combinations
    if (cols === 1) columnClass = 'grid-cols-1';
    if (cols === 2) columnClass = 'grid-cols-2';
    if (cols === 3) columnClass = 'grid-cols-3';
    if (cols === 4) columnClass = 'grid-cols-4';
  } else {
    // Explicitly list all possible responsive combinations
    if (cols === 1) {
      if (collapseBelow === 'sm') columnClass = 'grid-cols-1 sm:grid-cols-1';
      if (collapseBelow === 'md') columnClass = 'grid-cols-1 md:grid-cols-1';
      if (collapseBelow === 'lg') columnClass = 'grid-cols-1 lg:grid-cols-1';
    } else if (cols === 2) {
      if (collapseBelow === 'sm') columnClass = 'grid-cols-1 sm:grid-cols-2';
      if (collapseBelow === 'md') columnClass = 'grid-cols-1 md:grid-cols-2';
      if (collapseBelow === 'lg') columnClass = 'grid-cols-1 lg:grid-cols-2';
    } else if (cols === 3) {
      if (collapseBelow === 'sm') columnClass = 'grid-cols-1 sm:grid-cols-3';
      if (collapseBelow === 'md') columnClass = 'grid-cols-1 md:grid-cols-3';
      if (collapseBelow === 'lg') columnClass = 'grid-cols-1 lg:grid-cols-3';
    } else if (cols === 4) {
      if (collapseBelow === 'sm') columnClass = 'grid-cols-1 sm:grid-cols-4';
      if (collapseBelow === 'md') columnClass = 'grid-cols-1 md:grid-cols-4';
      if (collapseBelow === 'lg') columnClass = 'grid-cols-1 lg:grid-cols-4';
    }
  }

  return <Component className={cn('grid w-full', columnClass, gapClass, className)} {...props} />;
}
