import * as React from 'react';
import { cn } from '../../../utils/cn';

type ContainerBaseProps<T extends React.ElementType = 'div'> = {
  /**
   * Maximum width variant of the container
   * - max: 1280px - Full width layouts
   * - content: 768px - Article content
   * - form: 640px - Forms and inputs
   * - modal: 560px - Dialog boxes
   * - card: 480px - Card layouts
   * - metric: 320px - Dashboard metrics
   */
  size?: 'max' | 'content' | 'form' | 'modal' | 'card' | 'metric';

  /**
   * HTML element to render as
   */
  as?: T;

  className?: string;
};

export type ContainerProps<T extends React.ElementType = 'div'> = ContainerBaseProps<T> &
  Omit<React.ComponentPropsWithRef<T>, keyof ContainerBaseProps<T>>;

export function Container<T extends React.ElementType = 'div'>({
  className,
  size = 'max',
  as,
  ...props
}: ContainerProps<T>) {
  const Component = as || 'div';

  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 md:px-6 lg:px-8',
        {
          'max-w-max': size === 'max',
          'max-w-content': size === 'content',
          'max-w-form': size === 'form',
          'max-w-modal': size === 'modal',
          'max-w-card': size === 'card',
          'max-w-metric': size === 'metric',
        },
        className
      )}
      {...props}
    />
  );
}

// Semantic wrapper components
export const ContentContainer = React.forwardRef<
  HTMLDivElement,
  Omit<ContainerProps<'div'>, 'size'>
>((props, ref) => <Container {...props} size="content" ref={ref} />);
ContentContainer.displayName = 'ContentContainer';

export const FormContainer = React.forwardRef<HTMLDivElement, Omit<ContainerProps<'div'>, 'size'>>(
  (props, ref) => <Container {...props} size="form" ref={ref} />
);
FormContainer.displayName = 'FormContainer';

export const ModalContainer = React.forwardRef<HTMLDivElement, Omit<ContainerProps<'div'>, 'size'>>(
  (props, ref) => <Container {...props} size="modal" ref={ref} />
);
ModalContainer.displayName = 'ModalContainer';

export const CardContainer = React.forwardRef<HTMLDivElement, Omit<ContainerProps<'div'>, 'size'>>(
  (props, ref) => <Container {...props} size="card" ref={ref} />
);
CardContainer.displayName = 'CardContainer';

export const MetricContainer = React.forwardRef<
  HTMLDivElement,
  Omit<ContainerProps<'div'>, 'size'>
>((props, ref) => <Container {...props} size="metric" ref={ref} />);
MetricContainer.displayName = 'MetricContainer';
