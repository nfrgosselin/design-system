import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Link, type LinkProps } from '../../../components/navigation/link';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Link Component', () => {
  // Base Rendering Tests
  describe('Rendering', () => {
    it('renders correctly with default props', () => {
      render(<Link href="/test">Test Link</Link>);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/test');
      expect(link).toHaveTextContent('Test Link');
      expect(link).toHaveClass('text-brand'); // inline variant (default)
    });

    it('renders with different variants', () => {
      const variants: NonNullable<LinkProps['variant']>[] = [
        'inline',
        'standalone',
        'standalone-icon-right',
        'standalone-icon-left',
        'button',
        'button-outline',
        'button-accent',
        'metadata',
        'breadcrumb',
        'utility',
      ];

      variants.forEach(variant => {
        const { rerender } = render(
          <Link href="/test" variant={variant}>
            Test Link
          </Link>
        );
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        rerender(<></>);
      });
    });

    describe('renders with different sizes', () => {
      const sizes = [
        ['sm', 'text-sm'],
        ['md', 'text-base'],
        ['lg', 'text-lg'],
      ] as const;

      sizes.forEach(([size, expectedClass]) => {
        it(`renders with size ${size}`, () => {
          const { rerender } = render(
            <Link href="#" size={size}>
              Link Text
            </Link>
          );
          const link = screen.getByRole('link');
          expect(link).toHaveClass(expectedClass);
          rerender(<></>);
        });
      });
    });

    it('applies custom className', () => {
      const customClass = 'my-custom-class';
      render(
        <Link href="/test" className={customClass}>
          Test Link
        </Link>
      );
      expect(screen.getByRole('link')).toHaveClass(customClass);
    });
  });

  // Variant Style Tests
  describe('Variant Styles', () => {
    it('applies correct styles to standalone links', () => {
      render(
        <Link href="/test" variant="standalone">
          Standalone Link
        </Link>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveClass(
        'font-sans',
        'text-sm',
        'font-medium',
        'text-brand',
        'hover:text-brand-hover',
        'hover:underline',
        'hover:underline-offset-4'
      );
    });

    it('applies correct styles to button links', () => {
      render(
        <Link href="/test" variant="button">
          Button Link
        </Link>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveClass(
        'inline-flex',
        'items-center',
        'justify-center',
        'h-10',
        'px-6',
        'min-h-[2.5rem]',
        'font-sans',
        'text-xs',
        'font-semibold',
        'rounded-lg',
        'bg-brand',
        'text-white'
      );
    });

    it('applies correct styles to button-outline links', () => {
      render(
        <Link href="/test" variant="button-outline">
          Outline Button Link
        </Link>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveClass(
        'bg-white',
        'text-stone-700',
        'border-2',
        'border-stone-500',
        'hover:text-black',
        'hover:border-black'
      );
    });
  });

  // State Tests
  describe('States', () => {
    it('handles disabled state', () => {
      render(
        <Link href="/test" disabled>
          Disabled Link
        </Link>
      );
      const link = screen.getByRole('link');
      expect(link).not.toHaveAttribute('href');
      expect(link).toHaveAttribute('aria-disabled', 'true');
      expect(link).toHaveClass(
        'disabled:cursor-not-allowed',
        'disabled:opacity-50',
        'opacity-50',
        'pointer-events-none',
        'cursor-not-allowed'
      );
    });

    it('handles loading state', () => {
      render(
        <Link href="/test" isLoading>
          Loading Link
        </Link>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveClass('cursor-wait');
      expect(screen.getByText('Loading Link')).toBeInTheDocument();
      expect(link.querySelector('svg')).toHaveClass('animate-spin');
    });
  });

  // Accessibility Tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Link href="/test">Accessible Link</Link>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('provides accessible name for external links', () => {
      render(
        <Link href="https://example.com" isExternal>
          External Link
        </Link>
      );
      expect(screen.getByRole('link')).toHaveAccessibleName('External Link (opens in new tab)');
    });
  });

  // Design Token Integration Tests
  describe('Design Token Integration', () => {
    it('applies focus styles', () => {
      render(<Link href="/test">Focus Test</Link>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass(
        'focus-visible:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-brand'
      );
    });

    it('applies transition styles to button variants', () => {
      render(
        <Link href="/test" variant="button">
          Button Link
        </Link>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveClass('transition-color', 'duration-ultra-fast', 'ease-in-out');
    });

    it('applies consistent font families', () => {
      const { rerender } = render(<Link href="/test">Default Link</Link>);
      // inline variant should inherit font

      rerender(
        <Link href="/test" variant="standalone">
          Sans Link
        </Link>
      );
      expect(screen.getByRole('link')).toHaveClass('font-sans');
    });

    it('applies visited styles for inline links', () => {
      render(<Link href="/test">Visited Link</Link>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('visited:text-sunset');
    });
  });
});
