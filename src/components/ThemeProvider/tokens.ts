/**
 * Type definitions for design system tokens
 */

// All Design System Tokens
export type DesignToken = `--ds-${string}`;

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
