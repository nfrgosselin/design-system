import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

/**
 * Props for the MetaText component
 */
export interface MetaTextProps extends TextProps {
  /**
   * Visual style variant
   * - default: Standard metadata text (stone-700)
   * - muted: Less prominent metadata (stone-500)
   * - accent: Emphasized metadata using brand color
   */
  variant?: 'default' | 'muted' | 'accent';
}

/**
 * MetaText component for metadata and supplementary information.
 * Used for dates, read times, author names, and other metadata.
 *
 * @example
 * ```tsx
 * <MetaText>Published on May 1, 2024</MetaText>
 * <MetaText variant="muted">5 min read</MetaText>
 * <MetaText variant="accent">Featured Post</MetaText>
 * ```
 *
 * Variants:
 * - default: Standard metadata text (stone-700)
 * - muted: Less prominent metadata (stone-500)
 * - accent: Emphasized metadata using brand color
 *
 * Styling:
 * - Sans-serif font for clarity
 * - Small text size (14px)
 * - Wider letter spacing
 * - Uppercase for distinction
 * - Normal font weight
 * - Color variants for different contexts
 */
export function MetaText({ variant = 'default', className, children, ...props }: MetaTextProps) {
  const styles = {
    default: 'text-sm text-stone-700 tracking-wider uppercase',
    muted: 'text-sm text-stone-500 tracking-wider uppercase',
    accent: 'text-sm text-brand tracking-wider uppercase',
  };

  return (
    <Text as="span" className={cn('font-sans font-normal', styles[variant], className)} {...props}>
      {children}
    </Text>
  );
}

MetaText.displayName = 'MetaText';
