import * as React from 'react';

// Article Typography Types
export interface ArticleTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: 'lead' | 'default';
}

export interface ArticleHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level: 1 | 2 | 3;
}

export type ArticleTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
export type ArticleSubtitleProps = React.HTMLAttributes<HTMLParagraphElement>;

// Inline Typography Types
export interface InlineCodeProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface InlineLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export interface InlineEmphasisProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface InlineStrongProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

// UI Typography Types
export interface UIHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export interface UILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export interface UICaptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: 'default' | 'muted';
}
