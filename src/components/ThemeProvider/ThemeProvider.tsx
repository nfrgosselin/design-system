import React, { useEffect, useState, useMemo } from 'react';
import type { ThemeContextValue, ThemeOption, PrimaryColorOption } from './types';
import type { CustomTokens } from './tokens';

/**
 * Context for theme values and functions
 */
export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: 'system',
  primaryColor: 'ocean',
  isDark: false,
  setTheme: () => undefined,
  setPrimaryColor: () => undefined,
});

/**
 * Provider component for theme management
 */
export function ThemeProvider({
  theme = 'system',
  primaryColor = 'ocean',
  customTokens = {},
  children,
}: {
  theme?: ThemeOption;
  primaryColor?: PrimaryColorOption;
  customTokens?: CustomTokens;
  children: React.ReactNode;
}) {
  const [systemIsDark, setSystemIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [currentTheme, setCurrentTheme] = useState<ThemeOption>(theme);
  const [currentPrimaryColor, setCurrentPrimaryColor] = useState<PrimaryColorOption>(primaryColor);

  // Sync props with state when they change
  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  useEffect(() => {
    setCurrentPrimaryColor(primaryColor);
  }, [primaryColor]);

  // Compute whether we're in dark mode based on theme setting and system preference
  const isDark = currentTheme === 'dark' || (currentTheme === 'system' && systemIsDark);

  // Update system dark mode preference when it changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setSystemIsDark(e.matches);

    // Add event listener
    media.addEventListener('change', handler);

    // Remove event listener on cleanup
    return () => media.removeEventListener('change', handler);
  }, []);

  // Generate primary color tokens based on the selected option
  const primaryColorTokens = useMemo(
    () => ({
      '--ds-primary': `var(--ds-color-${currentPrimaryColor}-base)`,
      '--ds-ring': `var(--ds-color-${currentPrimaryColor}-base)`,
    }),
    [currentPrimaryColor]
  );

  // Merge with any other custom tokens
  const mergedTokens = useMemo(
    () => ({
      ...primaryColorTokens,
      ...customTokens,
    }),
    [primaryColorTokens, customTokens]
  );

  // Apply theme class and custom tokens to document
  useEffect(() => {
    // Remove all theme data attributes
    document.documentElement.removeAttribute('data-theme');

    // Apply current theme if not system
    if (currentTheme !== 'system') {
      document.documentElement.setAttribute('data-theme', currentTheme);
    }

    // Apply dark mode class
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Apply custom tokens
    Object.entries(mergedTokens).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [currentTheme, isDark, mergedTokens]);

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        primaryColor: currentPrimaryColor,
        isDark,
        setTheme: setCurrentTheme,
        setPrimaryColor: setCurrentPrimaryColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
