import * as React from 'react';

// Limit supported elements to common text elements
export type TextElement =
  | 'p'
  | 'span'
  | 'div'
  | 'label'
  | 'em'
  | 'strong'
  | 'code'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'ol'
  | 'ul'
  | 'li'
  | 'blockquote'
  | 'sup'
  | 'sub';

/**
 * Design system approved word spacing values
 */
export type WordSpacing = 'tight' | 'reduced' | 'normal' | 'relaxed' | 'spacious' | 'expanded';

/**
 * Base props for the internal Text component.
 * This component is not meant to be used directly by consumers.
 */
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The HTML element to render.
   * Limited to common text elements for type safety and semantic usage.
   * @default 'p'
   */
  as?: TextElement;

  /**
   * Additional className to apply standard design system styles.
   * Use this for applying design-system approved styles.
   */
  className?: string;

  /**
   * Internal escape hatch for advanced use cases.
   * @internal This prop is for internal use only and may change without notice.
   */
  __UNSTABLE_className?: string;

  /**
   * React children
   */
  children: React.ReactNode;

  /**
   * HTML for attribute for labels
   * Only valid when as="label"
   */
  htmlFor?: string;

  /**
   * Word spacing value from the design system.
   * Use this to control the space between words for readability and visual rhythm.
   * @example
   * wordSpacing="relaxed" // Applies a slightly larger gap between words
   * wordSpacing="tight"   // Reduces the gap between words
   */
  wordSpacing?: WordSpacing;
}
