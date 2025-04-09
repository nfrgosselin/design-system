import { render, screen } from '@testing-library/react';
import { Sidebar } from '../../../components/navigation/Sidebar';

describe('Sidebar', () => {
  it('renders main content', () => {
    const content = <div data-testid="main-content">Main Content</div>;
    render(<Sidebar>{content}</Sidebar>);
    expect(screen.getByTestId('main-content')).toBeInTheDocument();
  });

  it('renders footer content when provided', () => {
    const footer = <div data-testid="footer-content">Footer Content</div>;
    render(<Sidebar footer={footer}>Main Content</Sidebar>);
    expect(screen.getByTestId('footer-content')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const { container } = render(<Sidebar className="custom-class">Content</Sidebar>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('maintains sticky positioning and height calculations', () => {
    const { container } = render(<Sidebar>Content</Sidebar>);
    const sidebar = container.firstChild;
    expect(sidebar).toHaveClass('sticky');
    expect(sidebar).toHaveClass('top-[80px]');
    expect(sidebar).toHaveClass('h-[calc(100vh-80px)]');
  });

  it('renders without footer', () => {
    const { container } = render(<Sidebar>Main Content</Sidebar>);
    expect(container.querySelector('.mt-auto')).not.toBeInTheDocument();
  });

  it('applies correct padding', () => {
    const { container } = render(<Sidebar>Content</Sidebar>);
    expect(container.firstChild).toHaveClass('py-6');
    expect(container.firstChild).toHaveClass('pr-8');
  });
});
