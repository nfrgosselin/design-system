import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { ArticleHeaderProps } from '../types';

/**
 * Header component for article section headings (h2/h3/h4).
 * Uses serif font with appropriate size scaling and tracking.
 * Maintains a clear visual hierarchy through size, weight, and color.
 */
export function ArticleHeader({ level = 2, className, children, ...props }: ArticleHeaderProps) {
  const styles = {
    2: 'font-serif font-semibold text-3xl text-stone-900 leading-snug tracking-tight word-spacing-spacious mb-2',
    3: 'font-serif font-medium text-2xl text-stone-700 leading-snug tracking-normal word-spacing-spacious mb-2',
    4: 'font-serif font-medium text-xl text-stone-500 leading-normal tracking-normal word-spacing-spacious mb-2',
  };

  return (
    <Text as={`h${level}`} className={cn(styles[level as 2 | 3 | 4], className)} {...props}>
      {children}
    </Text>
  );
}
