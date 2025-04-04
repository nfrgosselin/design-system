import * as React from 'react';

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface EmphasisProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface StrongProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface ColoredTextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  color: 'primary' | 'secondary' | 'muted' | 'success' | 'warning' | 'error';
}

export interface FootnoteTextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  reference: string | number;
}

export interface FootnoteItemProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  reference: string | number;
}
