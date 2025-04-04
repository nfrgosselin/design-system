import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { ArticleTextProps } from './types';

/**
 * ArticleText component for article body content.
 * Uses serif font and optimized line heights for readability.
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
