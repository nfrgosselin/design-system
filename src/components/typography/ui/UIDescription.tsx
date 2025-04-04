import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface UIDescriptionProps extends TextProps {
  variant?: 'default' | 'muted';
}

/**
 * UIDescription component for longer descriptive text in UI contexts.
 * Used for detailed explanations, help text, and longer form descriptions.
 */
export function UIDescription({
  variant = 'default',
  className,
  children,
  ...props
}: UIDescriptionProps) {
  const styles = {
    default: 'text-base text-stone-700 leading-relaxed',
    muted: 'text-base text-stone-500 leading-relaxed',
  };

  return (
    <Text as="p" className={cn('font-sans', styles[variant], 'mb-4', className)} {...props}>
      {children}
    </Text>
  );
}
