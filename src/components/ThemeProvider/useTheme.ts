import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import type { ThemeContextValue } from './types';

/**
 * Hook to access the current theme context
 * @throws {Error} If used outside of ThemeProvider
 * @returns {ThemeContextValue} The current theme context value
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
