import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface EmphasisProps extends TextProps {
  variant?: 'default' | 'muted';
}

/**
 * Emphasis component for italic text.
 * Used to emphasize words or phrases within text content.
 */
export function Emphasis({ variant = 'default', className, children, ...props }: EmphasisProps) {
  const styles = {
    default: 'text-stone-900 italic',
    muted: 'text-stone-600 italic',
  };

  return (
    <Text as="em" className={cn(styles[variant], className)} {...props}>
      {children}
    </Text>
  );
}
