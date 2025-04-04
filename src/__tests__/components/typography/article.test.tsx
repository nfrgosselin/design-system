import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  ArticleTitle,
  ArticleSubtitle,
  ArticleHeader,
  ArticleText,
  ArticleQuote,
  ArticleList,
  ArticleListItem,
} from '@/components/typography';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Article Typography Components', () => {
  describe('ArticleTitle', () => {
    it('renders with correct default styles', () => {
      render(<ArticleTitle>Test Title</ArticleTitle>);
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toHaveClass(
        'font-serif',
        'font-bold',
        'text-4xl',
        'md:text-4xl',
        'text-stone-900',
        'leading-tight',
        'tracking-tight',
        'word-spacing-spacious',
        'mb-element'
      );
      expect(title).toHaveTextContent('Test Title');
    });

    it('accepts and applies custom className', () => {
      render(<ArticleTitle className="custom-class">Test Title</ArticleTitle>);
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toHaveClass('custom-class');
    });
  });

  describe('ArticleSubtitle', () => {
    it('renders with correct default styles', () => {
      render(<ArticleSubtitle>Test Subtitle</ArticleSubtitle>);
      const subtitle = screen.getByText('Test Subtitle');
      expect(subtitle).toHaveClass(
        'font-serif',
        'text-lg',
        'text-stone-600',
        'leading-relaxed',
        'tracking-normal',
        'word-spacing-relaxed',
        'mb-element'
      );
    });

    it('accepts and applies custom className', () => {
      render(<ArticleSubtitle className="custom-class">Test Subtitle</ArticleSubtitle>);
      const subtitle = screen.getByText('Test Subtitle');
      expect(subtitle).toHaveClass('custom-class');
    });
  });

  describe('ArticleHeader', () => {
    it('renders h2 with correct styles', () => {
      render(<ArticleHeader level={2}>Test H2</ArticleHeader>);
      const header = screen.getByRole('heading', { level: 2 });
      expect(header).toHaveClass(
        'font-serif',
        'font-semibold',
        'text-3xl',
        'text-stone-900',
        'leading-snug',
        'tracking-tight',
        'word-spacing-spacious',
        'mb-element',
        'mt-12',
        'first:mt-0'
      );
      expect(header).toHaveTextContent('Test H2');
    });

    it('renders h3 with correct styles', () => {
      render(<ArticleHeader level={3}>Test H3</ArticleHeader>);
      const header = screen.getByRole('heading', { level: 3 });
      expect(header).toHaveClass(
        'font-serif',
        'font-medium',
        'text-2xl',
        'text-stone-700',
        'leading-snug',
        'tracking-normal',
        'word-spacing-spacious',
        'mb-element',
        'mt-12',
        'first:mt-0'
      );
      expect(header).toHaveTextContent('Test H3');
    });

    it('renders h4 with correct styles', () => {
      render(<ArticleHeader level={4}>Test H4</ArticleHeader>);
      const header = screen.getByRole('heading', { level: 4 });
      expect(header).toHaveClass(
        'font-serif',
        'font-medium',
        'text-xl',
        'text-stone-500',
        'leading-normal',
        'tracking-normal',
        'word-spacing-spacious',
        'mb-element',
        'mt-12',
        'first:mt-0'
      );
      expect(header).toHaveTextContent('Test H4');
    });

    it('accepts and applies custom className', () => {
      render(
        <ArticleHeader level={2} className="custom-class">
          Test Header
        </ArticleHeader>
      );
      const header = screen.getByRole('heading', { level: 2 });
      expect(header).toHaveClass('custom-class');
    });
  });

  describe('ArticleText', () => {
    it('renders with default variant styles', () => {
      render(<ArticleText>Test Text</ArticleText>);
      const text = screen.getByText('Test Text');
      expect(text).toHaveClass(
        'font-serif',
        'text-lg',
        'text-stone-900',
        'leading-relaxed',
        'tracking-normal',
        'word-spacing-relaxed',
        'mb-relaxed'
      );
    });

    it('renders with lead variant styles', () => {
      render(<ArticleText variant="lead">Lead Text</ArticleText>);
      const text = screen.getByText('Lead Text');
      expect(text).toHaveClass(
        'font-serif',
        'text-lg',
        'font-semibold',
        'text-stone-700',
        'leading-relaxed',
        'tracking-normal',
        'word-spacing-expanded',
        'mb-relaxed'
      );
    });

    it('accepts and applies custom className', () => {
      render(<ArticleText className="custom-class">Test Text</ArticleText>);
      const text = screen.getByText('Test Text');
      expect(text).toHaveClass('custom-class');
    });
  });

  describe('ArticleQuote', () => {
    it('renders with correct default styles', () => {
      render(<ArticleQuote>Test Quote</ArticleQuote>);
      const quote = document.querySelector('[data-ds-element="text"]');
      expect(quote).toHaveClass(
        'font-serif',
        'text-lg',
        'text-stone-700',
        'italic',
        'leading-relaxed',
        'tracking-normal',
        'pl-6',
        'my-8',
        'border-l-4',
        'border-ds-primary'
      );
      expect(quote).toHaveTextContent('Test Quote');
    });

    it('renders with attribution', () => {
      render(<ArticleQuote attribution="Author Name">Test Quote</ArticleQuote>);
      const attribution = screen.getByText('— Author Name');
      expect(attribution).toHaveClass(
        'mt-4',
        'text-base',
        'font-semi-bold',
        'text-stone-900',
        'not-italic'
      );
    });

    it('accepts and applies custom className', () => {
      render(<ArticleQuote className="custom-class">Test Quote</ArticleQuote>);
      const quote = document.querySelector('[data-ds-element="text"]');
      expect(quote).toHaveClass('custom-class');
    });
  });

  describe('ArticleList', () => {
    it('renders unordered list with correct default styles', () => {
      render(
        <ArticleList>
          <ArticleListItem>Item 1</ArticleListItem>
        </ArticleList>
      );
      const list = screen.getByRole('list');
      expect(list).toHaveClass(
        'font-serif',
        'text-lg',
        'text-stone-900',
        'mb-relaxed',
        'pl-8',
        'list-disc'
      );
    });

    it('renders ordered list with correct styles', () => {
      render(
        <ArticleList variant="ordered">
          <ArticleListItem>Item 1</ArticleListItem>
        </ArticleList>
      );
      const list = screen.getByRole('list');
      expect(list).toHaveClass(
        'font-serif',
        'text-lg',
        'text-stone-900',
        'mb-relaxed',
        'pl-8',
        'list-decimal'
      );
    });

    it('applies marker color styles', () => {
      render(
        <ArticleList markerColor="primary">
          <ArticleListItem>Item 1</ArticleListItem>
        </ArticleList>
      );
      const list = screen.getByRole('list');
      expect(list).toHaveClass('marker:text-ds-primary');
    });

    it('accepts and applies custom className', () => {
      render(
        <ArticleList className="custom-class">
          <ArticleListItem>Item 1</ArticleListItem>
        </ArticleList>
      );
      const list = screen.getByRole('list');
      expect(list).toHaveClass('custom-class');
    });
  });

  describe('ArticleListItem', () => {
    it('renders with correct default styles', () => {
      render(
        <ArticleList>
          <ArticleListItem>Test Item</ArticleListItem>
        </ArticleList>
      );
      const item = screen.getByRole('listitem');
      expect(item).toHaveClass(
        'font-serif',
        'text-lg',
        'text-stone-900',
        'leading-relaxed',
        'tracking-normal',
        'word-spacing-relaxed',
        'mb-2',
        'last:mb-0'
      );
      expect(item).toHaveTextContent('Test Item');
    });

    it('applies marker color styles', () => {
      render(
        <ArticleList>
          <ArticleListItem markerColor="primary">Test Item</ArticleListItem>
        </ArticleList>
      );
      const item = screen.getByRole('listitem');
      expect(item).toHaveClass('marker:text-ds-primary');
    });

    it('accepts and applies custom className', () => {
      render(
        <ArticleList>
          <ArticleListItem className="custom-class">Test Item</ArticleListItem>
        </ArticleList>
      );
      const item = screen.getByRole('listitem');
      expect(item).toHaveClass('custom-class');
    });
  });

  describe('Accessibility', () => {
    it('ArticleTitle has no accessibility violations', async () => {
      const { container } = render(<ArticleTitle>Accessible Title</ArticleTitle>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('ArticleHeader has correct heading hierarchy', () => {
      const { rerender } = render(<ArticleHeader level={2}>H2 Header</ArticleHeader>);
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();

      rerender(<ArticleHeader level={3}>H3 Header</ArticleHeader>);
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();

      rerender(<ArticleHeader level={4}>H4 Header</ArticleHeader>);
      expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
    });

    it('ArticleQuote has no accessibility violations', async () => {
      const { container } = render(<ArticleQuote>Accessible Quote</ArticleQuote>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('ArticleList has no accessibility violations', async () => {
      const { container } = render(
        <ArticleList>
          <ArticleListItem>Item 1</ArticleListItem>
          <ArticleListItem>Item 2</ArticleListItem>
        </ArticleList>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('ArticleList maintains proper list semantics', () => {
      const { rerender } = render(
        <ArticleList>
          <ArticleListItem>Item 1</ArticleListItem>
        </ArticleList>
      );
      expect(screen.getByRole('list')).toBeInTheDocument();
      expect(screen.getByRole('listitem')).toBeInTheDocument();

      rerender(
        <ArticleList variant="ordered">
          <ArticleListItem>Item 1</ArticleListItem>
        </ArticleList>
      );
      const list = screen.getByRole('list');
      expect(list.tagName).toBe('OL');
    });
  });
});
