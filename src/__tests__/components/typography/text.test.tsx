import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from '@/components/typography';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Text Component', () => {
  describe('Element Rendering', () => {
    it('renders as paragraph by default', () => {
      render(<Text>Default Text</Text>);
      const text = screen.getByText('Default Text');
      expect(text.tagName).toBe('P');
    });

    const elements = [
      'span',
      'div',
      'label',
      'em',
      'strong',
      'code',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'ol',
      'ul',
      'li',
      'blockquote',
      'sup',
      'sub',
    ] as const;

    elements.forEach(element => {
      it(`renders as ${element} when specified`, () => {
        render(<Text as={element}>Test Text</Text>);
        const text = screen.getByText('Test Text');
        expect(text.tagName).toBe(element.toUpperCase());
      });
    });
  });

  describe('Word Spacing', () => {
    const spacings = ['tight', 'reduced', 'normal', 'relaxed', 'spacious', 'expanded'] as const;

    spacings.forEach(spacing => {
      it(`applies ${spacing} word spacing`, () => {
        render(<Text wordSpacing={spacing}>Test Text</Text>);
        const text = screen.getByText('Test Text');
        expect(text).toHaveClass(`word-spacing-${spacing}`);
      });
    });
  });

  describe('Label Functionality', () => {
    it('applies htmlFor attribute when used as label', () => {
      render(
        <Text as="label" htmlFor="test-input">
          Test Label
        </Text>
      );
      const label = screen.getByText('Test Label');
      expect(label).toHaveAttribute('for', 'test-input');
    });
  });

  describe('Styling', () => {
    it('applies className prop', () => {
      render(<Text className="custom-class">Test Text</Text>);
      const text = screen.getByText('Test Text');
      expect(text).toHaveClass('custom-class');
    });

    it('applies __UNSTABLE_className prop', () => {
      render(<Text __UNSTABLE_className="unstable-class">Test Text</Text>);
      const text = screen.getByText('Test Text');
      expect(text).toHaveClass('unstable-class');
    });

    it('applies data-ds-element attribute', () => {
      render(<Text>Test Text</Text>);
      const text = screen.getByText('Test Text');
      expect(text).toHaveAttribute('data-ds-element', 'text');
    });

    it('combines multiple class names correctly', () => {
      render(
        <Text className="custom-class" __UNSTABLE_className="unstable-class" wordSpacing="relaxed">
          Test Text
        </Text>
      );
      const text = screen.getByText('Test Text');
      expect(text).toHaveClass('custom-class', 'unstable-class', 'word-spacing-relaxed');
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <>
          <Text as="h1">Heading</Text>
          <Text as="p">Paragraph</Text>
          <Text as="label" htmlFor="test">
            Label
          </Text>
        </>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('maintains proper heading hierarchy', () => {
      render(
        <>
          <Text as="h1">Heading 1</Text>
          <Text as="h2">Heading 2</Text>
          <Text as="h3">Heading 3</Text>
        </>
      );
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    });

    it('maintains proper list semantics', () => {
      render(
        <Text as="ul">
          <Text as="li">Item 1</Text>
          <Text as="li">Item 2</Text>
        </Text>
      );
      expect(screen.getByRole('list')).toBeInTheDocument();
      const items = screen.getAllByRole('listitem');
      expect(items).toHaveLength(2);
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to the underlying element', () => {
      const ref = jest.fn();
      render(<Text ref={ref}>Test Text</Text>);
      expect(ref).toHaveBeenCalled();
      expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLParagraphElement);
    });
  });
});
