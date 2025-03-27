import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '../../../components/ThemeProvider/ThemeProvider';
import { usePrimaryColor } from '../../../components/ThemeProvider/hooks';

function TestComponent() {
  const { primaryColor, setPrimaryColor } = usePrimaryColor();
  return (
    <div>
      <span data-testid="primary-color">{primaryColor}</span>
      <button onClick={() => setPrimaryColor('sunset')}>Change to Sunset</button>
    </div>
  );
}

describe('Primary Color Selection', () => {
  it('uses ocean as default primary color', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('primary-color')).toHaveTextContent('ocean');
    expect(document.documentElement.style.getPropertyValue('--ds-primary')).toBe(
      'var(--ds-color-ocean-base)'
    );
  });

  it('allows setting primary color via prop', () => {
    render(
      <ThemeProvider primaryColor="sunset">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('primary-color')).toHaveTextContent('sunset');
    expect(document.documentElement.style.getPropertyValue('--ds-primary')).toBe(
      'var(--ds-color-sunset-base)'
    );
  });

  it('allows changing primary color via hook', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('primary-color')).toHaveTextContent('ocean');

    await user.click(screen.getByText('Change to Sunset'));

    expect(screen.getByTestId('primary-color')).toHaveTextContent('sunset');
    expect(document.documentElement.style.getPropertyValue('--ds-primary')).toBe(
      'var(--ds-color-sunset-base)'
    );
  });

  it('preserves primary color when theme changes', () => {
    const { rerender } = render(
      <ThemeProvider primaryColor="marine">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('primary-color')).toHaveTextContent('marine');

    rerender(
      <ThemeProvider primaryColor="marine" theme="dark">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('primary-color')).toHaveTextContent('marine');
    expect(document.documentElement.style.getPropertyValue('--ds-primary')).toBe(
      'var(--ds-color-marine-base)'
    );
  });

  it('allows custom tokens to override primary color', () => {
    render(
      <ThemeProvider
        primaryColor="ocean"
        customTokens={{
          '--ds-primary': 'purple',
        }}
      >
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('primary-color')).toHaveTextContent('ocean');
    expect(document.documentElement.style.getPropertyValue('--ds-primary')).toBe('purple');
  });

  it('works with different themes', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme="dark" primaryColor="sunset">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('primary-color')).toHaveTextContent('sunset');
    expect(document.documentElement.style.getPropertyValue('--ds-primary')).toBe(
      'var(--ds-color-sunset-base)'
    );
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    await user.click(screen.getByText('Change to Sunset'));
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('preserves primary color when theme changes via system preference', () => {
    // Mock system color scheme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const originalMatches = mediaQuery.matches;
    Object.defineProperty(mediaQuery, 'matches', { value: false, writable: true });

    render(
      <ThemeProvider theme="system" primaryColor="marine">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('primary-color')).toHaveTextContent('marine');
    expect(document.documentElement.style.getPropertyValue('--ds-primary')).toBe(
      'var(--ds-color-marine-base)'
    );

    // Simulate system theme change
    Object.defineProperty(mediaQuery, 'matches', { value: true });
    mediaQuery.dispatchEvent(new Event('change'));

    expect(screen.getByTestId('primary-color')).toHaveTextContent('marine');
    expect(document.documentElement.style.getPropertyValue('--ds-primary')).toBe(
      'var(--ds-color-marine-base)'
    );

    // Cleanup
    Object.defineProperty(mediaQuery, 'matches', { value: originalMatches });
  });
});
