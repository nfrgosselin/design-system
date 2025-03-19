import * as React from 'react';
import { cn } from '../../../utils/cn';

export function InlineEmphasis({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <em className={cn('font-serif italic text-stone-700', className)} {...props}>
      {children}
    </em>
  );
}

export function InlineStrong({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <strong className={cn('font-serif font-bold text-stone-900', className)} {...props}>
      {children}
    </strong>
  );
}

export function InlineCode({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        'rounded bg-stone-100 px-[0.3em] py-[0.2em] font-mono text-[0.9em] text-stone-900',
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}
