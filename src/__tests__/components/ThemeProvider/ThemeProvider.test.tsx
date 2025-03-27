/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from '../../../components/ThemeProvider';

// Mock component that uses the theme context
function TestComponent() {
  const { theme, isDark, setTheme } = useTheme();
  return (
    <div>
      <div data-testid="theme">{theme}</div>
      <div data-testid="isDark">{isDark.toString()}</div>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
      <button onClick={() => setTheme('light')}>Set Light</button>
    </div>
  );
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    // Reset any theme-related DOM changes
    document.documentElement.className = '';
    document.documentElement.removeAttribute('data-theme');
  });

  it('provides default theme context values', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('system');
    expect(screen.getByTestId('isDark')).toHaveTextContent('false');
  });

  it('allows setting theme via props', () => {
    render(
      <ThemeProvider theme="dark">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('isDark')).toHaveTextContent('true');
  });

  it('allows changing theme via hook', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    await userEvent.click(screen.getByText('Set Dark'));
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('isDark')).toHaveTextContent('true');

    await userEvent.click(screen.getByText('Set Light'));
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(screen.getByTestId('isDark')).toHaveTextContent('false');
  });

  it('applies theme attributes to document root', () => {
    render(
      <ThemeProvider theme="dark">
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('applies custom tokens to document root', () => {
    const customTokens = {
      '--test-token': 'test-value',
    };

    render(
      <ThemeProvider customTokens={customTokens}>
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.documentElement.style.getPropertyValue('--test-token')).toBe('test-value');
  });
});
