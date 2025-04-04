import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Link,
  InlineLink,
  UtilityLink,
  ButtonLink,
  MetadataLink,
  BreadcrumbLink,
  type LinkProps,
} from '../../../components/navigation/link';
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

  // External Link Tests
  describe('External Links', () => {
    it('handles external links correctly', () => {
      render(
        <Link href="https://example.com" isExternal>
          External Link
        </Link>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('aria-label', 'External Link (opens in new tab)');
    });

    it('shows external icon by default for external links', () => {
      render(
        <Link href="https://example.com" isExternal>
          External Link
        </Link>
      );
      expect(screen.getByRole('link').querySelector('svg')).toBeInTheDocument();
    });

    it('can hide external icon', () => {
      render(
        <Link href="https://example.com" isExternal showExternalIcon={false}>
          External Link
        </Link>
      );
      expect(screen.getByRole('link').querySelector('svg')).not.toBeInTheDocument();
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
      expect(link).toHaveClass('opacity-50', 'pointer-events-none');
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

    it('applies brand color to standalone links', () => {
      render(
        <Link href="/test" variant="standalone">
          Active Link
        </Link>
      );
      expect(screen.getByRole('link')).toHaveClass('text-brand');
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

  // Specialized Link Components
  describe('Specialized Link Components', () => {
    it('renders InlineLink with inline variant', () => {
      render(<InlineLink href="/test">Inline Link</InlineLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('text-brand');
    });

    it('renders UtilityLink with utility variant', () => {
      render(<UtilityLink href="/test">Utility Link</UtilityLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('font-sans', 'text-xs', 'text-stone-500');
    });

    it('renders ButtonLink with button variant', () => {
      render(<ButtonLink href="/test">Button Link</ButtonLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('bg-black', 'text-white', 'border-black');
    });

    it('renders MetadataLink with metadata variant', () => {
      render(<MetadataLink href="/test">Metadata Link</MetadataLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('font-sans', 'text-xs', 'text-stone-500');
    });

    it('renders BreadcrumbLink with breadcrumb variant', () => {
      render(<BreadcrumbLink href="/test">Breadcrumb Link</BreadcrumbLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('font-sans', 'text-sm', 'text-stone-600');
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

    it('applies hover styles for standalone variant', () => {
      render(
        <Link href="/test" variant="standalone">
          Standalone Link
        </Link>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveClass('hover:text-brand');
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
