import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface CaptionProps extends TextProps {
  variant?: 'default' | 'muted';
}

/**
 * Caption component for small descriptive text in UI contexts.
 * Used for supplementary information like image descriptions, form field hints, etc.
 */
export function Caption({ variant = 'default', className, children, ...props }: CaptionProps) {
  const styles = {
    default: 'text-sm text-stone-700 leading-normal',
    muted: 'text-sm text-stone-500 leading-normal',
  };

  return (
    <Text as="span" className={cn('font-sans', styles[variant], className)} {...props}>
      {children}
    </Text>
  );
}
