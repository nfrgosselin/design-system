import { render, screen } from '@testing-library/react';
import { BrandNav } from '../../../components/navigation/BrandNav';

describe('BrandNav', () => {
  const defaultProps = {
    brandName: 'Test Brand',
    navItems: [
      { label: 'Item 1', href: '#1' },
      { label: 'Item 2', href: '#2', isActive: true },
      { label: 'Item 3', href: '#3' },
    ],
  };

  it('renders brand name', () => {
    render(<BrandNav {...defaultProps} />);
    expect(screen.getByText('Test Brand')).toBeInTheDocument();
  });

  it('renders navigation items with separators', () => {
    render(<BrandNav {...defaultProps} />);

    // Check nav items
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();

    // Check separators (|)
    const separators = screen.getAllByText('|');
    expect(separators).toHaveLength(2); // Should have 2 separators for 3 items
  });

  it('applies custom stack spacing', () => {
    const { container } = render(<BrandNav {...defaultProps} stackSpacing="space-y-4" />);
    const nav = container.querySelector('nav');
    expect(nav).toHaveClass('space-y-4');
  });

  it('renders without nav items', () => {
    const { container } = render(<BrandNav brandName={defaultProps.brandName} />);

    // Should not render the nav items container
    expect(container.querySelector('.flex.items-center')).not.toBeInTheDocument();
  });

  it('applies correct styling to brand name', () => {
    const { container } = render(<BrandNav {...defaultProps} />);
    const brandName = container.querySelector(
      '.text-base.font-semibold.leading-none.tracking-widest'
    );
    expect(brandName).toBeInTheDocument();
    expect(brandName).toHaveTextContent('Test Brand');
  });
});
