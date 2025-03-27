/** @jest-environment jsdom */
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../components/ThemeProvider/ThemeProvider';
import { useTheme } from '../../../components/ThemeProvider/hooks';

// Mock component that uses the theme context
function TestComponent() {
  const { theme, setTheme, isDark } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="dark-mode">{isDark ? 'dark' : 'light'}</span>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
      <button onClick={() => setTheme('light')}>Set Light</button>
      <button onClick={() => setTheme('white')}>Set White</button>
    </div>
  );
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    // Reset any theme-related DOM changes
    document.documentElement.className = '';
    document.documentElement.removeAttribute('data-theme');
  });

  it('provides theme context to children', () => {
    render(
      <ThemeProvider theme="light">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(screen.getByTestId('dark-mode')).toHaveTextContent('light');
  });

  it('allows theme switching', () => {
    render(
      <ThemeProvider theme="light">
        <TestComponent />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Set Dark'));
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('dark-mode')).toHaveTextContent('dark');

    fireEvent.click(screen.getByText('Set White'));
    expect(screen.getByTestId('theme')).toHaveTextContent('white');
    expect(screen.getByTestId('dark-mode')).toHaveTextContent('light');
  });

  it('applies theme attribute to document', () => {
    render(
      <ThemeProvider theme="white">
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.documentElement).toHaveAttribute('data-theme', 'white');
  });

  it('applies custom tokens', () => {
    const customTokens = {
      '--ds-color-paper': '60 33.3% 98.8%',
    };

    render(
      <ThemeProvider theme="white" customTokens={customTokens}>
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.documentElement.style.getPropertyValue('--ds-color-paper')).toBe(
      '60 33.3% 98.8%'
    );
  });

  // Since we now provide default values for the ThemeContext, useTheme won't throw when used outside a provider
  // This test is no longer valid with our new implementation
  it('uses default theme when used outside provider', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('theme')).toHaveTextContent('system');
  });
});
