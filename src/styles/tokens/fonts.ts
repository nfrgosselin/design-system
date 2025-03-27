/**
 * Font configuration for the design system.
 * This exports the exact requirements for fonts used in the design system.
 */

type FontStyle = 'normal' | 'italic';
type FontWeight = 400 | 500 | 600 | 700;
type FontProvider = 'google';

interface FontConfig {
  family: string;
  provider: FontProvider;
  weights: FontWeight[];
  styles: FontStyle[];
  display: 'swap';
}

export const fonts: Record<'serif' | 'sans' | 'mono', FontConfig> = {
  serif: {
    family: 'Newsreader',
    provider: 'google',
    weights: [400, 500, 600, 700],
    styles: ['normal', 'italic'],
    display: 'swap',
  },
  sans: {
    family: 'Inter',
    provider: 'google',
    weights: [400, 500, 600, 700],
    styles: ['normal'],
    display: 'swap',
  },
  mono: {
    family: 'JetBrains Mono',
    provider: 'google',
    weights: [400, 500, 600, 700],
    styles: ['normal'],
    display: 'swap',
  },
} as const;

/**
 * Helper to generate Google Fonts URL
 */
export function getGoogleFontsUrl(): string {
  const urls = Object.values(fonts)
    .filter(font => font.provider === 'google')
    .map(font => {
      const family = font.family.replace(/ /g, '+');
      const hasItalic = font.styles.includes('italic');
      const weights = font.weights.map(w => (hasItalic ? `0,${w};1,${w}` : w)).join(';');
      return `family=${family}:${hasItalic ? 'ital,wght@' : 'wght@'}${weights}`;
    });

  return `https://fonts.googleapis.com/css2?${urls.join('&')}&display=swap`;
}

/**
 * Helper to generate font-family CSS variable value
 */
export function getFontFamilyValue(font: keyof typeof fonts): string {
  const fallbacks: Record<keyof typeof fonts, string> = {
    serif: 'Georgia, serif',
    sans: 'system-ui, -apple-system, sans-serif',
    mono: 'monospace',
  };

  return `"${fonts[font].family}", ${fallbacks[font]}`;
}
