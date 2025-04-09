import { render, screen } from '@testing-library/react';
import { BrandNav } from '../../../components/navigation/BrandNav';

describe('BrandNav', () => {
  const defaultProps = {
    brandName: 'Test Brand',
    navItems: [
      { label: 'Home', href: '/', isActive: true },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  };

  it('renders brand name correctly', () => {
    render(<BrandNav {...defaultProps} />);
    expect(screen.getByText('Test Brand')).toBeInTheDocument();
  });

  it('renders navigation items with separators', () => {
    render(<BrandNav {...defaultProps} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();

    // Check for separators (|)
    const separators = screen.getAllByText('|');
    expect(separators).toHaveLength(2); // Should have 2 separators for 3 items
  });

  it('applies different stack spacing when provided', () => {
    const { container } = render(<BrandNav {...defaultProps} stackSpacing="space-y-4" />);
    expect(container.firstChild).toHaveClass('space-y-4');
  });

  it('uses default stack spacing when not provided', () => {
    const { container } = render(<BrandNav {...defaultProps} />);
    expect(container.firstChild).toHaveClass('space-y-2');
  });

  it('renders without navigation items', () => {
    render(<BrandNav brandName="Test Brand" />);
    expect(screen.getByText('Test Brand')).toBeInTheDocument();
    expect(screen.queryByText('|')).not.toBeInTheDocument();
  });

  it('applies active state to navigation items correctly', () => {
    render(<BrandNav {...defaultProps} />);
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('data-active', 'true'); // Active state

    const aboutLink = screen.getByText('About').closest('a');
    expect(aboutLink).not.toHaveAttribute('data-active'); // Inactive state
  });
});
