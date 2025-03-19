import * as React from 'react';
import { cn } from '../../lib/utils';

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: 'default' | 'relaxed' | 'compact';
}

export function Content({ className, spacing = 'default', ...props }: ContentProps) {
  return (
    <div
      className={cn(
        {
          'space-y-[var(--spacing-content)]': spacing === 'default',
          'space-y-[var(--spacing-relaxed)]': spacing === 'relaxed',
          'space-y-[var(--spacing-compact)]': spacing === 'compact',
        },
        className
      )}
      {...props}
    />
  );
}
