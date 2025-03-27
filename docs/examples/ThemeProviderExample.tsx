/**
 * ThemeProvider Example
 *
 * This example demonstrates how to use the ThemeProvider component
 * with its various features, including primary color selection.
 */

import React from 'react';
import { ThemeProvider, Button, usePrimaryColor } from '../../src';

// Example 1: Basic ThemeProvider with default settings
export const BasicThemeProviderExample = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Basic ThemeProvider</h2>
      <p>Default setup with system theme and ocean primary color:</p>
      <ThemeProvider>
        <div className="flex gap-2">
          <Button variant="default">Ocean (Default)</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

// Example 2: ThemeProvider with custom primary color
export const CustomPrimaryColorExample = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Custom Primary Color</h2>
      <p>Using sunset as the primary color:</p>
      <ThemeProvider primaryColor="sunset">
        <div className="flex gap-2">
          <Button variant="default">Sunset Primary</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

// Example 3: Interactive primary color selection
export const InteractivePrimaryColorExample = () => {
  return (
    <ThemeProvider>
      <PrimaryColorSelector />
    </ThemeProvider>
  );
};

// Primary color selector component that uses the usePrimaryColor hook
const PrimaryColorSelector = () => {
  const { primaryColor, setPrimaryColor } = usePrimaryColor();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Interactive Primary Color Selection</h2>
      <p>Click a button to change the primary color using the usePrimaryColor hook:</p>

      <div className="flex gap-2">
        {(['ocean', 'sunset', 'sun', 'marine'] as const).map(color => (
          <button
            key={color}
            onClick={() => setPrimaryColor(color)}
            className={`
              px-4 py-2 rounded-md font-medium
              ${
                color === primaryColor
                  ? 'bg-primary text-white'
                  : 'border border-gray-200 hover:border-primary'
              }
            `}
          >
            {color}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="font-medium">Current primary color: {primaryColor}</h3>
        <div className="flex gap-2 mt-2">
          <Button variant="default">Primary Button</Button>
          <Button variant="outline">Outline Button</Button>
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
          '--ds-primary': 'purple',
          '--ds-ring': 'purple',
        }}
      >
        <div className="flex gap-2">
          <Button variant="default">Custom Purple</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

// Example 5: Theme and primary color together
export const ThemeAndPrimaryColorExample = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Theme & Primary Color</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg">
          <h3 className="font-medium mb-2">Light Theme + Sun</h3>
          <ThemeProvider theme="light" primaryColor="sun">
            <Button variant="default">Sun Button</Button>
          </ThemeProvider>
        </div>

        <div className="p-4 bg-gray-900 rounded-lg">
          <h3 className="font-medium mb-2 text-white">Dark Theme + Marine</h3>
          <ThemeProvider theme="dark" primaryColor="marine">
            <Button variant="default">Marine Button</Button>
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
          Demonstrating the features of the ThemeProvider component, including primary color
          selection.
        </p>
      </header>

      <BasicThemeProviderExample />
      <CustomPrimaryColorExample />
      <InteractivePrimaryColorExample />
      <CustomTokensExample />
      <ThemeAndPrimaryColorExample />
    </div>
  );
};

export default ThemeProviderExamplePage;
