import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { ArticleTitleProps } from './types';

/**
 * Title component for article main headings (h1).
 * Uses serif font with larger size and tighter tracking for impact.
 *
 * @example
 * ```tsx
 * <ArticleTitle>My Article Title</ArticleTitle>
 * ```
 *
 * Styling:
 * - Uses serif font family
 * - Bold weight
 * - Large text size (4xl)
 * - Tight tracking for headlines
 * - Dark stone color for contrast
 * - Bottom margin for spacing
 */
export function ArticleTitle({ className, children, ...props }: ArticleTitleProps) {
  return (
    <Text
      as="h1"
      className={cn(
        'font-serif font-bold text-4xl md:text-4xl text-stone-900',
        'leading-tight tracking-tight word-spacing-spacious mb-element',
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
}

ArticleTitle.displayName = 'ArticleTitle';
