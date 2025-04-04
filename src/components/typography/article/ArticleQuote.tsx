import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { ArticleQuoteProps } from './types';

/**
 * ArticleQuote component for blockquotes in article content.
 * Features italic text and a distinctive left border.
 */
export function ArticleQuote({ className, attribution, children, ...props }: ArticleQuoteProps) {
  return (
    <Text
      as="blockquote"
      className={cn(
        'font-serif text-lg text-stone-700',
        'italic leading-relaxed tracking-normal',
        'pl-6 my-8 border-l-4 border-ds-primary',
        className
      )}
      {...props}
    >
      <div>{children}</div>
      {attribution && (
        <footer className="mt-4 text-base font-semi-bold text-stone-900 not-italic">
          — {attribution}
        </footer>
      )}
    </Text>
  );
}
