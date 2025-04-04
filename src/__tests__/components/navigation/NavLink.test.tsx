import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NavLink } from '../../../components/navigation/NavLink';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('NavLink Component', () => {
  // Base Rendering Tests
  describe('Rendering', () => {
    it('renders correctly with default props', () => {
      render(<NavLink href="/test">Test Link</NavLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/test');
      expect(link).toHaveTextContent('Test Link');
      expect(link.firstElementChild).toHaveClass('uppercase'); // default transform
    });

    it('renders with different variants', () => {
      const variants = ['default', 'active', 'muted'] as const;

      variants.forEach(variant => {
        const { rerender } = render(
          <NavLink href="/test" variant={variant}>
            Test Link
          </NavLink>
        );
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        rerender(<></>);
      });
    });

    it('renders with different sizes', () => {
      const sizes = ['sm', 'base'] as const;

      sizes.forEach(size => {
        const { rerender } = render(
          <NavLink href="/test" size={size}>
            Test Link
          </NavLink>
        );
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        rerender(<></>);
      });
    });

    it('applies custom className', () => {
      const customClass = 'my-custom-class';
      render(
        <NavLink href="/test" className={customClass}>
          Test Link
        </NavLink>
      );
      expect(screen.getByRole('link')).toHaveClass(customClass);
    });
  });

  // State Tests
  describe('States', () => {
    it('handles active state', () => {
      render(
        <NavLink href="/test" isActive>
          Active Link
        </NavLink>
      );
      const navText = screen.getByRole('link').firstElementChild;
      expect(navText).toHaveClass('text-brand');
    });

    it('handles muted variant', () => {
      render(
        <NavLink href="#" variant="muted">
          Muted Link
        </NavLink>
      );
      const navText = screen.getByRole('link').firstElementChild;
      expect(navText).toHaveClass('text-stone-500');
    });

    it('handles disabled state', () => {
      render(
        <NavLink href="/test" disabled>
          Disabled Link
        </NavLink>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('aria-disabled', 'true');
      expect(link).toHaveClass('opacity-50', 'pointer-events-none');
    });
  });

  // Style Tests
  describe('Style Variants', () => {
    it('applies text transform styles', () => {
      const { rerender } = render(
        <NavLink href="/test" transform="uppercase">
          Uppercase Link
        </NavLink>
      );
      expect(screen.getByRole('link').firstElementChild).toHaveClass('uppercase');

      rerender(
        <NavLink href="/test" transform="none">
          No Transform Link
        </NavLink>
      );
      expect(screen.getByRole('link').firstElementChild).not.toHaveClass('uppercase');
    });

    it('applies underline styles', () => {
      render(
        <NavLink href="#" underline>
          Underlined Link
        </NavLink>
      );
      const link = screen.getByRole('link').firstElementChild;
      expect(link).toHaveClass(
        'pb-0.5',
        'after:absolute',
        'after:bottom-0',
        'after:left-0',
        'after:h-px',
        'after:bg-brand'
      );
    });

    it('applies size styles', () => {
      const { rerender } = render(
        <NavLink href="/test" size="sm">
          Small Link
        </NavLink>
      );
      expect(screen.getByRole('link').firstElementChild).toHaveClass('text-sm');

      rerender(
        <NavLink href="/test" size="base">
          Base Link
        </NavLink>
      );
      expect(screen.getByRole('link').firstElementChild).toHaveClass('text-base');
    });
  });

  // Accessibility Tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<NavLink href="/test">Accessible Link</NavLink>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('provides accessible name for external links', () => {
      const linkText = 'External Link';
      render(<NavLink href="https://example.com">{linkText}</NavLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('aria-label', `${linkText} (opens in new tab)`);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
