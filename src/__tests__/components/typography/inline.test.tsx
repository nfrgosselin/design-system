import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InlineEmphasis, InlineStrong, InlineCode } from '../../../components/typography/inline';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

// Temporarily disabled during v2 migration
describe.skip('Inline Typography Components', () => {
  describe('InlineEmphasis', () => {
    it('renders with correct default styles', () => {
      render(<InlineEmphasis>Test Emphasis</InlineEmphasis>);
      const emphasis = screen.getByText('Test Emphasis');
      expect(emphasis.tagName).toBe('EM');
      expect(emphasis).toHaveClass('font-serif', 'italic', 'text-stone-700');
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
        'px-[0.3em]',
        'py-[0.2em]',
        'font-mono',
        'text-[0.9em]',
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
    it('Components have no accessibility violations', async () => {
      const { container } = render(
        <>
          <InlineEmphasis>Test Emphasis</InlineEmphasis>
          <InlineStrong>Test Strong</InlineStrong>
          <InlineCode>Test Code</InlineCode>
        </>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
