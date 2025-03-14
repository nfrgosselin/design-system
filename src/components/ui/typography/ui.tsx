import * as React from 'react';
import { cn } from '../../../lib/utils';

interface UIHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: 'primary' | 'secondary' | 'supporting';
}

interface UILabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  isUppercase?: boolean;
}

export function UIHeader({ variant = 'primary', className, children, ...props }: UIHeaderProps) {
  const styles = {
    primary: 'font-sans font-semibold text-base leading-5 text-stone-900',
    secondary: 'font-sans font-medium text-sm leading-5 text-stone-900',
    supporting: 'font-sans text-sm leading-5 text-stone-600',
  };

  return (
    <h3 className={cn(styles[variant], className)} {...props}>
      {children}
    </h3>
  );
}

export function UILabel({ isUppercase = true, className, children, ...props }: UILabelProps) {
  return (
    <label
      className={cn(
        'font-sans text-xs font-medium leading-4 text-stone-700',
        isUppercase && 'uppercase tracking-wide',
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}

export function UICaption({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('font-sans text-xs leading-4 text-stone-500', className)} {...props}>
      {children}
    </p>
  );
}
