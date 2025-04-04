import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface UIHeaderProps extends TextProps {
  variant?: 'default' | 'muted';
  level?: 1 | 2 | 3;
}

/**
 * UIHeader component for UI section headers.
 * Used for dividing and labeling UI sections, unlike ArticleHeader which is for content.
 */
export function UIHeader({
  variant = 'default',
  level = 2,
  className,
  children,
  ...props
}: UIHeaderProps) {
  const styles = {
    base: {
      1: 'text-2xl font-semibold',
      2: 'text-xl font-medium',
      3: 'text-lg font-medium',
    },
    variant: {
      default: 'text-stone-900',
      muted: 'text-stone-600',
    },
  };

  return (
    <Text
      as={`h${level}`}
      className={cn('font-sans', styles.base[level], styles.variant[variant], 'mb-4', className)}
      {...props}
    >
      {children}
    </Text>
  );
}
