import * as React from 'react';
import type { TextProps } from '../core/types';

export interface ArticleTextProps extends TextProps {
  variant?: 'lead' | 'default';
}

export interface ArticleHeaderProps extends TextProps {
  level: 2 | 3 | 4;
}

export interface ArticleTitleProps extends TextProps {
  children: React.ReactNode;
}

export interface ArticleSubtitleProps extends TextProps {
  children: React.ReactNode;
}

export interface ArticleQuoteProps extends TextProps {
  attribution?: string;
}

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
