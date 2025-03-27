/**
 * ThemeProvider Example
 *
 * This example demonstrates how to use the ThemeProvider component
 * for theme mode management (light/dark/white/system).
 */

import React from 'react';
import { ThemeProvider, Button, useTheme } from '../../src';

// Example 1: Basic ThemeProvider with default settings
export const BasicThemeProviderExample = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Basic ThemeProvider</h2>
      <p>Default setup with system theme:</p>
      <ThemeProvider>
        <div className="flex gap-2">
          <Button>Primary Button</Button>
          <Button variant="outline-accent">Outline Button</Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

// Example 2: ThemeProvider with light theme
export const LightThemeExample = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Light Theme</h2>
      <p>Using light theme explicitly:</p>
      <ThemeProvider theme="light">
        <div className="flex gap-2">
          <Button>Primary Button</Button>
          <Button variant="outline-accent">Outline Button</Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

// Example 3: Interactive theme selection
export const InteractiveThemeExample = () => {
  return (
    <ThemeProvider>
      <ThemeSelector />
    </ThemeProvider>
  );
};

// Theme selector component that uses the useTheme hook
const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Interactive Theme Selection</h2>
      <p>Click a button to change the theme using the useTheme hook:</p>

      <div className="flex gap-2">
        {(['light', 'dark', 'white', 'system'] as const).map(themeOption => (
          <button
            key={themeOption}
            onClick={() => setTheme(themeOption)}
            className={`
              px-4 py-2 rounded-md font-medium
              ${
                themeOption === theme
                  ? 'bg-ds-primary text-white'
                  : 'border border-gray-200 hover:border-ds-primary'
              }
            `}
          >
            {themeOption}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="font-medium">Current theme: {theme}</h3>
        <div className="flex gap-2 mt-2">
          <Button>Primary Button</Button>
          <Button variant="outline-accent">Outline Button</Button>
        </div>
      </div>
    </div>
  );
};

// Example 4: ThemeProvider with custom tokens
export const CustomTokensExample = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Custom Tokens</h2>
      <p>Using custom color tokens:</p>
      <ThemeProvider
        customTokens={{
          '--ds-color-paper': '60 33.3% 98.8%',
        }}
      >
        <div className="flex gap-2">
          <Button>Custom Background</Button>
          <Button variant="outline-accent">Outline Button</Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

// Example 5: Different theme modes
export const ThemeModesExample = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Theme Modes</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg">
          <h3 className="font-medium mb-2">Light Theme</h3>
          <ThemeProvider theme="light">
            <Button>Light Mode</Button>
          </ThemeProvider>
        </div>

        <div className="p-4 bg-gray-900 rounded-lg">
          <h3 className="font-medium mb-2 text-white">Dark Theme</h3>
          <ThemeProvider theme="dark">
            <Button>Dark Mode</Button>
          </ThemeProvider>
        </div>

        <div className="p-4 bg-white rounded-lg">
          <h3 className="font-medium mb-2">White Theme</h3>
          <ThemeProvider theme="white">
            <Button>White Mode</Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

// Combined example
export const ThemeProviderExamplePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <header className="pb-6 border-b">
        <h1 className="text-3xl font-bold">ThemeProvider System</h1>
        <p className="text-gray-600">
          Demonstrating the features of the ThemeProvider component for managing theme modes.
        </p>
      </header>

      <BasicThemeProviderExample />
      <LightThemeExample />
      <InteractiveThemeExample />
      <CustomTokensExample />
      <ThemeModesExample />
    </div>
  );
};

export default ThemeProviderExamplePage;
