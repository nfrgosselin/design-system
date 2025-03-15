import * as React from 'react';
import { cn } from '../../../utils/cn';

interface InlineLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  isExternal?: boolean;
}

export function InlineLink({ href, className, children, isExternal, ...props }: InlineLinkProps) {
  const styles =
    'text-blue-600 hover:text-blue-700 active:text-blue-800 underline underline-offset-4 transition-colors';

  if (isExternal) {
    return (
      <a
        href={href}
        className={cn(styles, className)}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={cn(styles, className)} {...props}>
      {children}
    </a>
  );
}

export function InlineEmphasis({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <em className={cn('font-serif italic text-stone-900', className)} {...props}>
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
        'rounded bg-stone-100 px-1.5 py-0.5 font-mono text-sm text-stone-900',
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}
