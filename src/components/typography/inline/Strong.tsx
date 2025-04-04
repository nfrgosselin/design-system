import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface StrongProps extends TextProps {
  variant?: 'default' | 'muted' | 'accent';
}

/**
 * Strong component for bold text.
 * Used to strongly emphasize words or phrases within text content.
 */
export function Strong({ variant = 'default', className, children, ...props }: StrongProps) {
  const styles = {
    default: 'text-stone-900 font-semibold',
    muted: 'text-stone-600 font-semibold',
    accent: 'text-ds-primary font-semibold',
  };

  return (
    <Text as="strong" className={cn(styles[variant], className)} {...props}>
      {children}
    </Text>
  );
}
