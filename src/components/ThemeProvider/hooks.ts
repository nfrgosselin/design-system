import React from 'react';
import { ThemeContext } from './ThemeProvider';
import type { PrimaryColorOption } from './types';

/**
 * Hook to access and update the primary color
 * @returns Object containing the current primary color and a function to update it
 */
export function usePrimaryColor(): {
  primaryColor: PrimaryColorOption;
  setPrimaryColor: (color: PrimaryColorOption) => void;
} {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('usePrimaryColor must be used within a ThemeProvider');
  }

  return {
    primaryColor: context.primaryColor,
    setPrimaryColor: context.setPrimaryColor,
  };
}

// Re-export existing hooks
export * from './useTheme';
