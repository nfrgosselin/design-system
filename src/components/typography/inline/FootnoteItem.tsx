import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface FootnoteItemProps extends TextProps {
  /**
   * The footnote reference number
   */
  number: number;
}

/**
 * FootnoteItem component for individual footnote items.
 * Used to display each footnote's content with its reference number.
 */
export function FootnoteItem({ number, className, children, ...props }: FootnoteItemProps) {
  return (
    <Text
      as="div"
      className={cn('text-base text-stone-600 flex gap-2 items-baseline', className)}
      {...props}
    >
      <Text as="sup" className="text-[0.75em] font-medium text-brand">
        {number}
      </Text>
      <div className="flex-1">{children}</div>
    </Text>
  );
}
