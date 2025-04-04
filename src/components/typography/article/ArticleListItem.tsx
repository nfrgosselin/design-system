import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface ArticleListItemProps extends TextProps {
  markerColor?:
    | 'primary'
    | 'secondary'
    | 'muted'
    | 'seafoam'
    | 'coral'
    | 'navy'
    | 'amber'
    | 'lagoon'
    | 'peach'
    | 'slate'
    | 'gold';
}

/**
 * ArticleListItem component for individual list items within ArticleList.
 * Maintains consistent typography with article content.
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
