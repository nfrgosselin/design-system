/**
 * Design System Types
 * @packageDocumentation
 */

import { type ThemeTokens } from '../styles/tokens/theme';

// Re-export theme types
export type { ThemeTokens };

// Component Base Types
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Variant Types
export type Size = 'sm' | 'md' | 'lg' | 'xl';
export type Intent = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type Variant = 'solid' | 'outline' | 'ghost' | 'link';

// Registry Types
export type ComponentSource = 'shadcn' | 'extended' | 'custom';

export interface BaseComponentInfo {
  source: ComponentSource;
  description: string;
  extendable: boolean;
}

export interface ShadcnComponentInfo extends BaseComponentInfo {
  source: 'shadcn';
  originalPath: string;
  customizations?: string[];
}

export interface ExtendedComponentInfo extends BaseComponentInfo {
  source: 'extended';
  baseComponent: string;
  extensions: string[];
}

export interface CustomComponentInfo extends BaseComponentInfo {
  source: 'custom';
}

export type ComponentInfo = ShadcnComponentInfo | ExtendedComponentInfo | CustomComponentInfo;

// Theme Extension Types
export interface ThemeExtension {
  colors?: Partial<ThemeTokens['colors']>;
  spacing?: Partial<ThemeTokens['spacing']>;
  typography?: Partial<ThemeTokens['typography']>;
  radius?: Partial<ThemeTokens['radius']>;
  container?: Partial<ThemeTokens['container']>;
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Token category types
export type ColorToken = keyof ThemeTokens['colors'];
export type SpacingToken = keyof ThemeTokens['spacing'];
export type RadiusToken = keyof ThemeTokens['radius'];
export type AnimationToken = keyof ThemeTokens['animation'];
export type BreakpointToken = keyof ThemeTokens['screens'];
export type ElevationToken = keyof ThemeTokens['elevation'];

// Hook Types
export interface UseThemeProps {
  defaultTheme?: 'light' | 'dark';
  storageKey?: string;
}

// Export version type
export type Version = string;
