import * as React from 'react';
import { cn } from '../../lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: 'default' | 'relaxed' | 'compact';
}

export function Section({ className, spacing = 'default', ...props }: SectionProps) {
  return (
    <section
      className={cn(
        {
          'py-[var(--spacing-section)]': spacing === 'default',
          'py-[var(--spacing-relaxed)]': spacing === 'relaxed',
          'py-[var(--spacing-compact)]': spacing === 'compact',
        },
        className
      )}
      {...props}
    />
  );
}
