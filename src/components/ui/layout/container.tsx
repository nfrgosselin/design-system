import * as React from 'react';
import { cn } from '../../../lib/utils';

type ContainerProps<T extends React.ElementType> = {
  size?: 'default' | 'content' | 'form';
  as?: T;
} & Omit<React.ComponentPropsWithRef<T>, 'size' | 'as'>;

export function Container<T extends React.ElementType = 'div'>({
  className,
  size = 'default',
  as: Component = 'div' as T,
  ...props
}: ContainerProps<T>) {
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
