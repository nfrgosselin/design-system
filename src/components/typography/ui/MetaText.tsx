import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface MetaTextProps extends TextProps {
  variant?: 'default' | 'muted' | 'accent';
}

/**
 * MetaText component for metadata and supplementary information.
 * Used for dates, read times, author names, and other metadata.
 */
export function MetaText({ variant = 'default', className, children, ...props }: MetaTextProps) {
  const styles = {
    default: 'text-sm text-stone-700 tracking-wider uppercase',
    muted: 'text-sm text-stone-500 tracking-wider uppercase',
    accent: 'text-sm text-brand tracking-wider uppercase',
  };

  return (
    <Text as="span" className={cn('font-sans font-normal', styles[variant], className)} {...props}>
      {children}
    </Text>
  );
}
