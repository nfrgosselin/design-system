import { token, type CustomTokens } from '../../../components/ThemeProvider/tokens';

describe('Theme Token Types', () => {
  it('token helper creates correct CSS variable references', () => {
    const color = token('--ds-color-paper');
    expect(color).toBe('var(--ds-color-paper)');
  });

  it('allows type-safe custom tokens', () => {
    // This is a type test - it should compile without errors
    const customTokens: CustomTokens = {
      '--ds-color-black': '20 14.3% 4.1%',
      '--ds-color-white': '0 0% 100%',
      '--ds-color-paper': '60 33.3% 98.8%',
    };

    expect(customTokens).toBeDefined();

    // Type error test - this code should not compile
    // Uncomment to verify type checking:
    // const invalidTokens: CustomTokens = {
    //   '--invalid-token': '#ff0000',
    // };
  });
});
