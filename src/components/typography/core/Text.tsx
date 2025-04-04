import * as React from 'react';
import { cn } from '@/lib/utils';
import type { TextProps } from './types';

/**
 * Internal base text component that provides foundational text rendering capabilities.
 * This component is not meant to be used directly by consumers.
 * Instead, use the context-specific components from article/, ui/, or inline/.
 *
 * @internal
 */
const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    { as: Component = 'p', className, __UNSTABLE_className, wordSpacing, children, ...props },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn(
          wordSpacing && `word-spacing-${wordSpacing}`,
          className,
          __UNSTABLE_className
        ),
        'data-ds-element': 'text',
        ...props,
      },
      children
    );
  }
);

Text.displayName = 'Text';

export { Text };

/**
 * @example
 * // Internal usage in context-specific components:
 * export function ArticleText({ variant = 'default', className, ...props }: ArticleTextProps) {
 *   const styles = {
 *     default: 'font-serif text-lg text-stone-900 leading-relaxed',
 *     lead: 'font-serif text-xl text-stone-700 leading-relaxed'
 *   };
 *
 *   return (
 *     <Text
 *       className={cn(styles[variant], className)}
 *       {...props}
 *     />
 *   );
 * }
 */
