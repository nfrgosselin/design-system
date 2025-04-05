import type { TextProps } from '../core/types';

export interface CaptionProps extends TextProps {
  variant?: 'default' | 'muted';
}

export interface UIDescriptionProps extends TextProps {
  variant?: 'default' | 'muted';
}

export interface MetaTextProps extends TextProps {
  variant?: 'default' | 'muted';
  size?: 'xs' | 'sm';
}

export interface NavTextProps extends TextProps {
  active?: boolean;
  size?: 'sm' | 'base';
}

export interface UIHeaderProps extends TextProps {
  level?: 1 | 2 | 3;
}

export interface UITextProps extends TextProps {
  variant?: 'default' | 'muted' | 'accent';
  size?: 'xs' | 'sm' | 'base' | 'lg';
  weight?: 'normal' | 'medium' | 'semibold';
}
