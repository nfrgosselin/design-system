import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { ArticleHeaderProps } from './types';

/**
 * Header component for article section headings (h2/h3/h4).
 * Uses serif font with appropriate size scaling and tracking.
 * Maintains a clear visual hierarchy through size, weight, and color.
 *
 * @example
 * ```tsx
 * <ArticleHeader level={2}>Major Section</ArticleHeader>
 * <ArticleHeader level={3}>Subsection</ArticleHeader>
 * <ArticleHeader level={4}>Minor Section</ArticleHeader>
 * ```
 *
 * Levels:
 * - h2: Major sections (24px, semibold, stone-900)
 * - h3: Subsections (20px, medium, stone-700)
 * - h4: Minor sections (18px, medium, stone-500)
 *
 * Styling:
 * - Serif font for consistency with article content
 * - Appropriate size scaling for hierarchy
 * - Color gradation for visual depth
 * - Proper spacing with margins
 * - First header has no top margin
 */
export function ArticleHeader({ level = 2, className, children, ...props }: ArticleHeaderProps) {
  const styles = {
    2: 'font-serif font-semibold text-3xl text-stone-900 leading-snug tracking-tight word-spacing-spacious mb-element mt-12 first:mt-0',
    3: 'font-serif font-medium text-2xl text-stone-700 leading-snug tracking-normal word-spacing-spacious mb-element mt-12 first:mt-0',
    4: 'font-serif font-medium text-xl text-stone-500 leading-normal tracking-normal word-spacing-spacious mb-element mt-12 first:mt-0',
  } as const;

  return (
    <Text as={`h${level}`} className={cn(styles[level as 2 | 3 | 4], className)} {...props}>
      {children}
    </Text>
  );
}

ArticleHeader.displayName = 'ArticleHeader';
