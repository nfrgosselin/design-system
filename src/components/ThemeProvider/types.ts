import { ReactNode } from 'react';
import type { CustomTokens, DesignToken, TokenValue } from './tokens';

export type ThemeOption = 'light' | 'dark' | 'white' | 'system';

export type PrimaryColorOption = 'ocean' | 'sunset' | 'sun' | 'marine';

export interface ThemeProviderProps {
  /** The theme to use. Defaults to 'system' */
  theme?: ThemeOption;
  /** Optional custom tokens to override default theme values */
  customTokens?: CustomTokens;
  /** Primary color option */
  primaryColor?: PrimaryColorOption;
  /** Children to render within the theme context */
  children: ReactNode;
}

export interface ThemeContextValue {
  /** The current active theme */
  theme: ThemeOption;
  /** Primary color option */
  primaryColor: PrimaryColorOption;
  /** Whether the current theme is dark mode (either explicitly set or via system preference) */
  isDark: boolean;
  /** Function to update the current theme */
  setTheme: (theme: ThemeOption) => void;
  /** Function to update the primary color */
  setPrimaryColor: (color: PrimaryColorOption) => void;
}

// Re-export token types for consumers
export type {
  BaseColorToken,
  SpacingToken,
  TypographyToken,
  SemanticToken,
  DesignToken,
  CustomTokens,
  TokenValue,
} from './tokens';

// Re-export token helper
export { token } from './tokens';
