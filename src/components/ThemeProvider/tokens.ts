/**
 * Type definitions for design system tokens
 */

// Base Color Tokens
export type BaseColorToken =
  | '--ds-color-black' // Same as stone-900
  | '--ds-color-white' // Pure white
  | '--ds-color-paper' // Same as stone-50
  // Stone Scale
  | '--ds-color-stone-50'
  | '--ds-color-stone-100'
  | '--ds-color-stone-200'
  | '--ds-color-stone-300'
  | '--ds-color-stone-400'
  | '--ds-color-stone-500'
  | '--ds-color-stone-600'
  | '--ds-color-stone-700'
  | '--ds-color-stone-800'
  | '--ds-color-stone-900'
  // Product Identity Colors
  | '--ds-color-ocean-base'
  | '--ds-color-ocean-hover'
  | '--ds-color-ocean-active'
  | '--ds-color-sunset-base'
  | '--ds-color-sunset-hover'
  | '--ds-color-sunset-active'
  | '--ds-color-sun-base'
  | '--ds-color-sun-hover'
  | '--ds-color-sun-active'
  | '--ds-color-marine-base'
  | '--ds-color-marine-hover'
  | '--ds-color-marine-active'
  // Supporting Accents
  | '--ds-color-seafoam'
  | '--ds-color-coral'
  | '--ds-color-navy'
  | '--ds-color-amber'
  | '--ds-color-lagoon'
  | '--ds-color-peach'
  | '--ds-color-slate'
  | '--ds-color-gold'
  // Status Colors
  | '--ds-color-success'
  | '--ds-color-success-subtle'
  | '--ds-color-warning'
  | '--ds-color-warning-subtle'
  | '--ds-color-error'
  | '--ds-color-error-subtle'
  | '--ds-color-info'
  | '--ds-color-info-subtle'
  // Special Effects
  | '--ds-color-overlay-light'
  | '--ds-color-overlay-medium'
  | '--ds-color-overlay-heavy'
  // Chart Colors
  | '--ds-color-chart-1'
  | '--ds-color-chart-2'
  | '--ds-color-chart-3'
  | '--ds-color-chart-4'
  | '--ds-color-chart-5';

// Spacing Tokens
export type SpacingToken =
  | '--ds-container-max'
  | '--ds-container-content'
  | '--ds-container-form'
  | '--ds-space-1'
  | '--ds-space-2'
  | '--ds-space-3'
  | '--ds-space-4'
  | '--ds-space-6'
  | '--ds-space-8'
  | '--ds-space-12'
  | '--ds-space-16'
  | '--ds-spacing-section'
  | '--ds-spacing-content'
  | '--ds-spacing-element'
  | '--ds-spacing-relaxed'
  | '--ds-spacing-compact'
  | '--ds-radius';

// Typography Tokens
export type TypographyToken = '--ds-font-serif' | '--ds-font-sans' | '--ds-font-mono';

// Semantic Theme Tokens
export type SemanticToken =
  // Base Theme Colors
  | '--ds-background'
  | '--ds-foreground'
  // Component Colors
  | '--ds-card'
  | '--ds-card-foreground'
  | '--ds-popover'
  | '--ds-popover-foreground'
  // Brand Colors
  | '--ds-primary'
  | '--ds-primary-foreground'
  | '--ds-secondary'
  | '--ds-secondary-foreground'
  // UI States
  | '--ds-muted'
  | '--ds-muted-foreground'
  | '--ds-accent'
  | '--ds-accent-foreground'
  | '--ds-destructive'
  | '--ds-destructive-foreground'
  // Borders
  | '--ds-border'
  | '--ds-border-subtle'
  | '--ds-border-hover'
  // Form Elements
  | '--ds-input'
  | '--ds-ring'
  // Surface Colors
  | '--ds-surface'
  | '--ds-surface-hover'
  | '--ds-surface-active';

// All Design System Tokens
export type DesignToken = BaseColorToken | SpacingToken | TypographyToken | SemanticToken;

/**
 * Type-safe custom tokens object
 */
export type CustomTokens = Partial<Record<DesignToken, string>>;

/**
 * Helper type for CSS properties that accept design tokens
 */
export type TokenValue<T extends DesignToken> = `var(${T})`;

/**
 * Helper function to create a CSS variable reference
 * @example
 * const color = token('--ds-color-primary');
 * // Returns: 'var(--ds-color-primary)'
 */
export const token = <T extends DesignToken>(token: T): TokenValue<T> =>
  `var(${token})` as TokenValue<T>;
