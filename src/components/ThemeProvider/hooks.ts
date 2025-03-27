import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

/**
 * Hook to access and modify theme context values
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
