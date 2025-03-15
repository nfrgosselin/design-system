import * as React from 'react';
import { cn } from '../../../utils/cn';

type ContainerProps<T extends React.ElementType = 'div'> = {
  size?: 'default' | 'content' | 'form';
  as?: T;
  className?: string;
} & Omit<React.ComponentPropsWithRef<T>, 'size' | 'as' | 'className'>;

export function Container<T extends React.ElementType = 'div'>({
  className,
  size = 'default',
  as,
  ...props
}: ContainerProps<T>) {
  const Component = as || 'div';
  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 md:px-6 lg:px-8',
        {
          'max-w-[var(--container-max)]': size === 'default',
          'max-w-[var(--container-content)]': size === 'content',
          'max-w-[var(--container-form)]': size === 'form',
        },
        className
      )}
      {...props}
    />
  );
}
