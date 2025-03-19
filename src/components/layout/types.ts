import * as React from 'react';

export type ContainerProps<T extends React.ElementType = 'div'> = {
  size?: 'default' | 'content' | 'form';
  as?: T;
  className?: string;
} & Omit<React.ComponentPropsWithRef<T>, 'size' | 'as' | 'className'>;

export type ContentProps<T extends React.ElementType = 'div'> = {
  as?: T;
  className?: string;
} & Omit<React.ComponentPropsWithRef<T>, 'as' | 'className'>;

export type GridProps<T extends React.ElementType = 'div'> = {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  as?: T;
  className?: string;
} & Omit<React.ComponentPropsWithRef<T>, 'columns' | 'gap' | 'as' | 'className'>;

export type SectionProps<T extends React.ElementType = 'section'> = {
  as?: T;
  className?: string;
} & Omit<React.ComponentPropsWithRef<T>, 'as' | 'className'>;
