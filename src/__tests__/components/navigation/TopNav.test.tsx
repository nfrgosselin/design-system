import { render, screen } from '@testing-library/react';
import { TopNav } from '../../../components/navigation/TopNav';

describe('TopNav', () => {
  const defaultProps = {
    brand: {
      brandName: 'Test Brand',
      navItems: [
        { label: 'Home', href: '/', isActive: true },
        { label: 'About', href: '/about' },
      ],
      stackSpacing: 'space-y-2' as const,
    },
  };

  it('renders brand section correctly', () => {
    render(<TopNav {...defaultProps} />);
    expect(screen.getByText('Test Brand')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders content when provided', () => {
    const content = <div data-testid="test-content">Test Content</div>;
    render(<TopNav {...defaultProps} content={content} />);
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const { container } = render(<TopNav {...defaultProps} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders without content', () => {
    const { container } = render(<TopNav {...defaultProps} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
