import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Code,
  Emphasis,
  Strong,
  ColoredText,
  FootnoteText,
  FootnoteItem,
} from '@/components/typography';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Inline Typography Components', () => {
  describe('Emphasis', () => {
    it('renders with default variant styles', () => {
      render(<Emphasis>Test Emphasis</Emphasis>);
      const emphasis = screen.getByText('Test Emphasis');
      expect(emphasis.tagName).toBe('EM');
      expect(emphasis).toHaveClass('text-stone-900', 'italic');
    });

    it('renders with muted variant styles', () => {
      render(<Emphasis variant="muted">Test Emphasis</Emphasis>);
      const emphasis = screen.getByText('Test Emphasis');
      expect(emphasis).toHaveClass('text-stone-600', 'italic');
    });

    it('accepts and applies custom className', () => {
      render(<Emphasis className="custom-class">Test Emphasis</Emphasis>);
      const emphasis = screen.getByText('Test Emphasis');
      expect(emphasis).toHaveClass('custom-class');
    });
  });

  describe('Strong', () => {
    it('renders with default variant styles', () => {
      render(<Strong>Test Strong</Strong>);
      const strong = screen.getByText('Test Strong');
      expect(strong.tagName).toBe('STRONG');
      expect(strong).toHaveClass('text-stone-900', 'font-semibold');
    });

    it('renders with muted variant styles', () => {
      render(<Strong variant="muted">Test Strong</Strong>);
      const strong = screen.getByText('Test Strong');
      expect(strong).toHaveClass('text-stone-600', 'font-semibold');
    });

    it('renders with accent variant styles', () => {
      render(<Strong variant="accent">Test Strong</Strong>);
      const strong = screen.getByText('Test Strong');
      expect(strong).toHaveClass('text-brand', 'font-semibold');
    });

    it('accepts and applies custom className', () => {
      render(<Strong className="custom-class">Test Strong</Strong>);
      const strong = screen.getByText('Test Strong');
      expect(strong).toHaveClass('custom-class');
    });
  });

  describe('Code', () => {
    it('renders with default variant styles', () => {
      render(<Code>Test Code</Code>);
      const code = screen.getByText('Test Code');
      expect(code.tagName).toBe('CODE');
      expect(code).toHaveClass(
        'font-mono',
        'text-[0.8em]',
        'bg-stone-100',
        'text-stone-900',
        'px-1.5',
        'py-0.5',
        'rounded'
      );
    });

    it('renders with muted variant styles', () => {
      render(<Code variant="muted">Test Code</Code>);
      const code = screen.getByText('Test Code');
      expect(code).toHaveClass(
        'font-mono',
        'text-[0.8em]',
        'bg-stone-50',
        'text-stone-600',
        'px-1.5',
        'py-0.5',
        'rounded'
      );
    });

    it('accepts and applies custom className', () => {
      render(<Code className="custom-class">Test Code</Code>);
      const code = screen.getByText('Test Code');
      expect(code).toHaveClass('custom-class');
    });
  });

  describe('ColoredText', () => {
    it('renders with primary color', () => {
      render(<ColoredText color="primary">Primary Text</ColoredText>);
      const text = screen.getByText('Primary Text');
      expect(text).toHaveClass('text-brand');
    });

    it('renders with success color', () => {
      render(<ColoredText color="success">Success Text</ColoredText>);
      const text = screen.getByText('Success Text');
      expect(text).toHaveClass('text-green-600');
    });

    it('renders with warning color', () => {
      render(<ColoredText color="warning">Warning Text</ColoredText>);
      const text = screen.getByText('Warning Text');
      expect(text).toHaveClass('text-amber-600');
    });

    it('renders with error color', () => {
      render(<ColoredText color="error">Error Text</ColoredText>);
      const text = screen.getByText('Error Text');
      expect(text).toHaveClass('text-red-600');
    });

    it('renders with info color', () => {
      render(<ColoredText color="info">Info Text</ColoredText>);
      const text = screen.getByText('Info Text');
      expect(text).toHaveClass('text-blue-600');
    });

    it('renders with subtle styles', () => {
      render(
        <ColoredText color="primary" subtle>
          Primary Text
        </ColoredText>
      );
      const text = screen.getByText('Primary Text');
      expect(text).toHaveClass('text-brand', 'bg-brand/10', 'px-1.5', 'py-0.5', 'rounded');
    });

    it('accepts and applies custom className', () => {
      render(
        <ColoredText color="primary" className="custom-class">
          Colored Text
        </ColoredText>
      );
      const text = screen.getByText('Colored Text');
      expect(text).toHaveClass('custom-class');
    });
  });

  describe('FootnoteText', () => {
    it('renders with correct default styles', () => {
      render(<FootnoteText number={1}>Footnote Text</FootnoteText>);
      const text = screen.getByText('Footnote Text');
      expect(text).toHaveClass('text-[0.65em]', 'font-medium', 'text-brand', 'ml-0.5');
      expect(text.tagName).toBe('SUP');
    });

    it('renders number when no children provided', () => {
      render(<FootnoteText number={1} />);
      const text = screen.getByText('1');
      expect(text.tagName).toBe('SUP');
    });

    it('accepts and applies custom className', () => {
      render(
        <FootnoteText number={1} className="custom-class">
          Footnote Text
        </FootnoteText>
      );
      const text = screen.getByText('Footnote Text');
      expect(text).toHaveClass('custom-class');
    });
  });

  describe('FootnoteItem', () => {
    it('renders with correct default styles', () => {
      render(<FootnoteItem number={1}>Footnote Content</FootnoteItem>);
      const item = screen.getByText('Footnote Content');
      expect(item.parentElement).toHaveClass(
        'text-base',
        'text-stone-600',
        'flex',
        'gap-2',
        'items-baseline'
      );
    });

    it('renders number with correct styles', () => {
      render(<FootnoteItem number={1}>Footnote Content</FootnoteItem>);
      const number = screen.getByText('1');
      expect(number).toHaveClass('text-[0.75em]', 'font-medium', 'text-brand');
      expect(number.tagName).toBe('SUP');
    });

    it('accepts and applies custom className', () => {
      render(
        <FootnoteItem number={1} className="custom-class">
          Footnote Content
        </FootnoteItem>
      );
      const item = screen.getByText('Footnote Content').parentElement;
      expect(item).toHaveClass('custom-class');
    });
  });

  describe('Accessibility', () => {
    it('Components have no accessibility violations', async () => {
      const { container } = render(
        <>
          <Emphasis>Test Emphasis</Emphasis>
          <Strong>Test Strong</Strong>
          <Code>Test Code</Code>
          <ColoredText color="primary">Primary Text</ColoredText>
          <FootnoteText number={1}>Footnote Text</FootnoteText>
          <FootnoteItem number={1}>Footnote Content</FootnoteItem>
        </>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('FootnoteText and FootnoteItem maintain proper semantic structure', () => {
      render(
        <>
          <FootnoteText number={1}>Reference</FootnoteText>
          <FootnoteItem number={1}>Content</FootnoteItem>
        </>
      );
      const reference = screen.getByText('Reference');
      const content = screen.getByText('Content');
      expect(reference.tagName).toBe('SUP');
      expect(content.parentElement?.tagName).toBe('DIV');
    });
  });
});
