import type { ReactNode } from 'react';

export type ThemeOption = 'light' | 'dark' | 'white' | 'system';

export interface ThemeProviderProps {
  /** The theme to use */
  theme?: ThemeOption;
  /** Optional custom tokens to override default theme values */
  customTokens?: CustomTokens;
  /** Children to render within the theme context */
  children: ReactNode;
}

export interface ThemeContextValue {
  theme: ThemeOption;
  isDark: boolean;
  setTheme: (theme: ThemeOption) => void;
}

export interface CustomTokens {
  [key: string]: string;
}
