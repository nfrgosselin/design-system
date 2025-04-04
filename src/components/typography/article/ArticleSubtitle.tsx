import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { ArticleSubtitleProps } from './types';

/**
 * Subtitle component for article subheadings.
 * Provides a complementary style to ArticleTitle with reduced visual weight.
 */
export function ArticleSubtitle({ className, children, ...props }: ArticleSubtitleProps) {
  return (
    <Text
      as="p"
      className={cn(
        'font-serif text-lg text-stone-600',
        'leading-relaxed tracking-normal word-spacing-relaxed mb-element',
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
}
