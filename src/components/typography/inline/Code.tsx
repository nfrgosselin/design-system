import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface CodeProps extends TextProps {
  variant?: 'default' | 'muted';
}

/**
 * Code component for inline code snippets.
 * Used to display code, keyboard shortcuts, or technical terms within text content.
 */
export function Code({ variant = 'default', className, children, ...props }: CodeProps) {
  const styles = {
    default: 'font-mono text-[0.8em] bg-stone-100 text-stone-900 px-1.5 py-0.5 rounded',
    muted: 'font-mono text-[0.8em] bg-stone-50 text-stone-600 px-1.5 py-0.5 rounded',
  };

  return (
    <Text as="code" className={cn(styles[variant], className)} {...props}>
      {children}
    </Text>
  );
}
