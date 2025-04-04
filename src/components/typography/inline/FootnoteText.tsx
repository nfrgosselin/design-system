import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface FootnoteTextProps extends Omit<TextProps, 'children'> {
  /**
   * The footnote reference number
   */
  number: number;

  /**
   * Optional children - if not provided, will render the number
   */
  children?: React.ReactNode;
}

/**
 * FootnoteText component for footnote references.
 * Used to create superscript footnote numbers in text content.
 */
export function FootnoteText({ number, className, children, ...props }: FootnoteTextProps) {
  return (
    <Text
      as="sup"
      className={cn('text-[0.65em] font-medium text-ds-primary ml-0.5', className)}
      {...props}
    >
      {children ?? number}
    </Text>
  );
}
