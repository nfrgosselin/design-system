import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { ArticleTextProps } from './types';

/**
 * ArticleText component for article body content.
 * Uses serif font and optimized line heights for readability.
 *
 * @example
 * ```tsx
 * <ArticleText>Regular paragraph text</ArticleText>
 * <ArticleText variant="lead">Opening paragraph with emphasis</ArticleText>
 * ```
 *
 * Variants:
 * - default: Standard paragraph text (18px, stone-900)
 * - lead: Emphasized opening paragraph (18px, semibold, stone-700)
 *
 * Styling:
 * - Serif font for readability
 * - Optimized line height (relaxed)
 * - Proper word spacing
 * - Bottom margin for paragraph spacing
 * - Tracking optimized for reading
 */
export function ArticleText({
  variant = 'default',
  className,
  children,
  ...props
}: ArticleTextProps) {
  const styles = {
    lead: 'font-serif text-lg font-semibold text-stone-700 leading-relaxed tracking-normal word-spacing-expanded mb-relaxed',
    default:
      'font-serif text-lg text-stone-900 leading-relaxed tracking-normal word-spacing-relaxed mb-relaxed',
  } as const;

  return (
    <Text className={cn(styles[variant], className)} {...props}>
      {children}
    </Text>
  );
}

ArticleText.displayName = 'ArticleText';
