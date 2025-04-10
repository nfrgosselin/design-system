import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { ArticleListProps } from './types';

/**
 * ArticleList component for article content lists.
 * Provides styled ordered and unordered lists that match article typography.
 *
 * @example
 * ```tsx
 * <ArticleList>
 *   <ArticleListItem>First item</ArticleListItem>
 *   <ArticleListItem>Second item</ArticleListItem>
 * </ArticleList>
 *
 * <ArticleList variant="ordered" markerColor="primary">
 *   <ArticleListItem>Step one</ArticleListItem>
 *   <ArticleListItem>Step two</ArticleListItem>
 * </ArticleList>
 * ```
 *
 * Variants:
 * - unordered: Bullet points (•)
 * - ordered: Numbered list (1, 2, 3)
 *
 * Marker Colors:
 * - primary: Brand primary color
 * - secondary: Brand secondary color
 * - muted: Muted text color
 * - seafoam, coral, navy: Brand accent colors
 * - amber, lagoon, peach: Additional accent colors
 * - slate, gold: Neutral accent colors
 *
 * Styling:
 * - Serif font for consistency
 * - Large text size (18px)
 * - Proper list indentation
 * - Customizable marker colors
 * - Bottom margin for spacing
 */
export function ArticleList({
  variant = 'unordered',
  markerColor,
  className,
  children,
  ...props
}: ArticleListProps) {
  const Component = variant === 'ordered' ? 'ol' : 'ul';

  return (
    <Text
      as={Component}
      className={cn(
        'font-serif text-lg text-stone-900',
        'mb-relaxed pl-8',
        variant === 'unordered' ? 'list-disc' : 'list-decimal',
        markerColor && {
          'marker:text-ds-primary': markerColor === 'primary',
          'marker:text-ds-secondary': markerColor === 'secondary',
          'marker:text-ds-muted': markerColor === 'muted',
          'marker:text-seafoam': markerColor === 'seafoam',
          'marker:text-coral': markerColor === 'coral',
          'marker:text-navy': markerColor === 'navy',
          'marker:text-amber': markerColor === 'amber',
          'marker:text-lagoon': markerColor === 'lagoon',
          'marker:text-peach': markerColor === 'peach',
          'marker:text-slate': markerColor === 'slate',
          'marker:text-gold': markerColor === 'gold',
        },
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
}

ArticleList.displayName = 'ArticleList';
