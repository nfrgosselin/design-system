import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

/**
 * Props for the UIHeader component
 */
export interface UIHeaderProps extends TextProps {
  /**
   * Visual style variant
   * - default: High contrast for primary headings
   * - muted: Lower contrast for secondary headings
   */
  variant?: 'default' | 'muted';

  /**
   * Heading level (h1-h3)
   * - 1: Largest, for page titles (2xl)
   * - 2: Medium, for section headers (xl)
   * - 3: Smallest, for subsections (lg)
   */
  level?: 1 | 2 | 3;
}

/**
 * UIHeader component for UI section headers.
 * Used for dividing and labeling UI sections, unlike ArticleHeader which is for content.
 *
 * @example
 * ```tsx
 * <UIHeader level={1} variant="default">Page Title</UIHeader>
 * <UIHeader level={2} variant="muted">Section Header</UIHeader>
 * ```
 *
 * Variants:
 * - default: High contrast (stone-900)
 * - muted: Lower contrast (stone-600)
 *
 * Levels:
 * - 1: text-2xl, semibold
 * - 2: text-xl, medium
 * - 3: text-lg, medium
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

UIHeader.displayName = 'UIHeader';
