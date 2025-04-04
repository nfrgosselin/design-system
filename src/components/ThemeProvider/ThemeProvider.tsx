import React, { useEffect, useState } from 'react';
import type { ThemeContextValue, ThemeOption } from './types';
import type { CustomTokens } from './tokens';

/**
 * Context for theme values and functions
 */
export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: 'light',
  isDark: false,
  setTheme: () => undefined,
});

/**
 * Provider component for theme management
 */
export function ThemeProvider({
  theme = 'light',
  customTokens = {},
  children,
}: {
  theme?: ThemeOption;
  customTokens?: CustomTokens;
  children: React.ReactNode;
}) {
  const [currentTheme, setCurrentTheme] = useState<ThemeOption>(theme);

  // Sync props with state when they change
  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  // Apply theme class and custom tokens to document
  useEffect(() => {
    // Apply theme data attribute
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Apply custom tokens
    Object.entries(customTokens).forEach(([key, value]) => {
      if (value !== undefined) {
        document.documentElement.style.setProperty(key, value);
      }
    });
  }, [currentTheme, customTokens]);

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        isDark: false,
        setTheme: setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
