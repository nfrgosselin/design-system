import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface ArticleListProps extends TextProps {
  variant?: 'unordered' | 'ordered';
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
 * ArticleList component for article content lists.
 * Provides styled ordered and unordered lists that match article typography.
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
