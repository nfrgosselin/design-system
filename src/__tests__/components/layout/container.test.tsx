import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Container } from '../../../components/layout/core/container';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe.skip('Container Component', () => {
  describe('Rendering', () => {
    it('renders with default size', () => {
      render(<Container>Content</Container>);
      const container = screen.getByText('Content');
      expect(container).toHaveClass(
        'mx-auto',
        'w-full',
        'px-4',
        'md:px-6',
        'lg:px-8',
        'max-w-[var(--container-max)]'
      );
    });

    it('renders with content size', () => {
      render(<Container size="content">Content</Container>);
      const container = screen.getByText('Content');
      expect(container).toHaveClass('max-w-[var(--container-content)]');
    });

    it('renders with form size', () => {
      render(<Container size="form">Content</Container>);
      const container = screen.getByText('Content');
      expect(container).toHaveClass('max-w-[var(--container-form)]');
    });

    it('accepts and applies custom className', () => {
      render(<Container className="custom-class">Content</Container>);
      const container = screen.getByText('Content');
      expect(container).toHaveClass('custom-class');
    });
  });

  describe('Polymorphic Behavior', () => {
    it('renders as a div by default', () => {
      render(<Container>Content</Container>);
      const container = screen.getByText('Content');
      expect(container.tagName).toBe('DIV');
    });

    it('renders as a main element when specified', () => {
      render(<Container as="main">Content</Container>);
      const container = screen.getByText('Content');
      expect(container.tagName).toBe('MAIN');
    });

    it('renders as an article element when specified', () => {
      render(<Container as="article">Content</Container>);
      const container = screen.getByText('Content');
      expect(container.tagName).toBe('ARTICLE');
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Container>Accessible Content</Container>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('preserves role attributes', () => {
      render(<Container role="main">Content</Container>);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });
  });
});
