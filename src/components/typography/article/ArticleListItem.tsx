import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { ArticleListItemProps } from './types';

/**
 * ArticleListItem component for individual list items within ArticleList.
 * Maintains consistent typography with article content.
 *
 * @example
 * ```tsx
 * <ArticleList>
 *   <ArticleListItem>Regular list item</ArticleListItem>
 *   <ArticleListItem markerColor="primary">Colored marker item</ArticleListItem>
 * </ArticleList>
 * ```
 *
 * Features:
 * - Consistent serif font styling
 * - Large text size (18px)
 * - Proper line height and tracking
 * - Bottom margin between items (except last)
 * - Optional marker color customization
 *
 * Marker Colors:
 * - primary: Brand primary color
 * - secondary: Brand secondary color
 * - muted: Muted text color
 * - seafoam, coral, navy: Brand accent colors
 * - amber, lagoon, peach: Additional accent colors
 * - slate, gold: Neutral accent colors
 *
 * Note: The markerColor prop should typically be set on the parent ArticleList
 * component for consistent styling across all items.
 */
export function ArticleListItem({
  className,
  markerColor,
  children,
  ...props
}: ArticleListItemProps) {
  return (
    <Text
      as="li"
      className={cn(
        'font-serif text-lg text-stone-900',
        'leading-relaxed tracking-normal word-spacing-relaxed',
        'mb-2 last:mb-0',
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

ArticleListItem.displayName = 'ArticleListItem';
