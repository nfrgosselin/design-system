import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InlineLink, InlineEmphasis, InlineStrong, InlineCode } from '../inline';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Inline Typography Components', () => {
  describe('InlineLink', () => {
    it('renders with correct default styles', () => {
      render(<InlineLink href="/test">Test Link</InlineLink>);
      const link = screen.getByRole('link');
      expect(link).toHaveClass(
        'text-blue-600',
        'hover:text-blue-700',
        'active:text-blue-800',
        'underline',
        'underline-offset-4',
        'transition-colors'
      );
      expect(link).toHaveAttribute('href', '/test');
    });

    it('handles external links correctly', () => {
      render(
        <InlineLink href="https://example.com" isExternal>
          External Link
        </InlineLink>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('accepts and applies custom className', () => {
      render(
        <InlineLink href="/test" className="custom-class">
          Test Link
        </InlineLink>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveClass('custom-class');
    });
  });

  describe('InlineEmphasis', () => {
    it('renders with correct default styles', () => {
      render(<InlineEmphasis>Test Emphasis</InlineEmphasis>);
      const emphasis = screen.getByText('Test Emphasis');
      expect(emphasis.tagName).toBe('EM');
      expect(emphasis).toHaveClass('font-serif', 'italic', 'text-stone-900');
    });

    it('accepts and applies custom className', () => {
      render(<InlineEmphasis className="custom-class">Test Emphasis</InlineEmphasis>);
      const emphasis = screen.getByText('Test Emphasis');
      expect(emphasis).toHaveClass('custom-class');
    });
  });

  describe('InlineStrong', () => {
    it('renders with correct default styles', () => {
      render(<InlineStrong>Test Strong</InlineStrong>);
      const strong = screen.getByText('Test Strong');
      expect(strong.tagName).toBe('STRONG');
      expect(strong).toHaveClass('font-serif', 'font-bold', 'text-stone-900');
    });

    it('accepts and applies custom className', () => {
      render(<InlineStrong className="custom-class">Test Strong</InlineStrong>);
      const strong = screen.getByText('Test Strong');
      expect(strong).toHaveClass('custom-class');
    });
  });

  describe('InlineCode', () => {
    it('renders with correct default styles', () => {
      render(<InlineCode>Test Code</InlineCode>);
      const code = screen.getByText('Test Code');
      expect(code.tagName).toBe('CODE');
      expect(code).toHaveClass(
        'rounded',
        'bg-stone-100',
        'px-1.5',
        'py-0.5',
        'font-mono',
        'text-sm',
        'text-stone-900'
      );
    });

    it('accepts and applies custom className', () => {
      render(<InlineCode className="custom-class">Test Code</InlineCode>);
      const code = screen.getByText('Test Code');
      expect(code).toHaveClass('custom-class');
    });
  });

  describe('Accessibility', () => {
    it('InlineLink has no accessibility violations', async () => {
      const { container } = render(<InlineLink href="/test">Accessible Link</InlineLink>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('InlineLink provides proper attributes for external links', () => {
      render(
        <InlineLink href="https://example.com" isExternal>
          External Link
        </InlineLink>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('target', '_blank');
    });
  });
});
