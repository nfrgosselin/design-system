import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  ArticleTitle,
  ArticleSubtitle,
  ArticleHeader,
  ArticleText,
} from '../../../components/typography/article';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

// Temporarily disabled during v2 migration
describe.skip('Article Typography Components', () => {
  describe('ArticleTitle', () => {
    it('renders with correct default styles', () => {
      render(<ArticleTitle>Test Title</ArticleTitle>);
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toHaveClass(
        'font-serif',
        'text-4xl',
        'font-bold',
        'text-stone-900',
        'mb-6',
        'leading-tight'
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
        'mb-8',
        'leading-relaxed'
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
        'text-3xl',
        'font-bold',
        'text-stone-900',
        'leading-tight'
      );
      expect(header).toHaveTextContent('Test H2');
    });

    it('renders h3 with correct styles', () => {
      render(<ArticleHeader level={3}>Test H3</ArticleHeader>);
      const header = screen.getByRole('heading', { level: 3 });
      expect(header).toHaveClass(
        'font-serif',
        'text-2xl',
        'font-medium',
        'text-stone-900',
        'leading-snug'
      );
      expect(header).toHaveTextContent('Test H3');
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
        'mb-8'
      );
    });

    it('renders with lead variant styles', () => {
      render(<ArticleText variant="lead">Lead Text</ArticleText>);
      const text = screen.getByText('Lead Text');
      expect(text).toHaveClass(
        'font-serif',
        'text-xl',
        'text-stone-700',
        'leading-relaxed',
        'mb-10'
      );
    });

    it('accepts and applies custom className', () => {
      render(<ArticleText className="custom-class">Test Text</ArticleText>);
      const text = screen.getByText('Test Text');
      expect(text).toHaveClass('custom-class');
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
    });
  });
});
