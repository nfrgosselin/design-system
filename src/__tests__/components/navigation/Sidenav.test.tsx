import { render, screen } from '@testing-library/react';
import { Sidenav } from '../../../components/navigation/Sidenav';

describe('Sidenav', () => {
  const defaultNavItems = [
    { label: 'Item 1', href: '#1' },
    { label: 'Item 2', href: '#2', isActive: true },
    { label: 'Item 3', href: '#3' },
  ];

  const defaultFooterItems = [
    { label: 'Footer 1', href: '#f1' },
    { label: 'Footer 2', href: '#f2', secondaryLabel: 'New' },
  ];

  describe('Streamlined variant', () => {
    const defaultProps = {
      variant: 'streamlined' as const,
      brand: {
        logo: <div data-testid="mock-logo">Logo</div>,
        brandName: 'Test Brand',
        navItems: defaultNavItems,
      },
    };

    it('renders brand section with BrandNav', () => {
      render(<Sidenav {...defaultProps} />);

      expect(screen.getByTestId('mock-logo')).toBeInTheDocument();
      expect(screen.getByText('Test Brand')).toBeInTheDocument();
      defaultNavItems.forEach(item => {
        expect(screen.getByText(item.label)).toBeInTheDocument();
      });
    });

    it('renders footer items', () => {
      render(<Sidenav {...defaultProps} footerItems={defaultFooterItems} />);

      expect(screen.getByText('Footer 1')).toBeInTheDocument();
      expect(screen.getByText('Footer 2')).toBeInTheDocument();
      expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('renders custom footer content instead of footer items when both are provided', () => {
      render(
        <Sidenav
          {...defaultProps}
          footerItems={defaultFooterItems}
          footer={<div data-testid="custom-footer">Custom Footer</div>}
        />
      );

      expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
      expect(screen.queryByText('Footer 1')).not.toBeInTheDocument();
    });

    it('renders main content', () => {
      render(
        <Sidenav {...defaultProps}>
          <div data-testid="main-content">Main Content</div>
        </Sidenav>
      );

      expect(screen.getByTestId('main-content')).toBeInTheDocument();
    });
  });

  describe('Expanded variant', () => {
    const defaultProps = {
      variant: 'expanded' as const,
      brand: {
        logo: <div data-testid="mock-logo">Logo</div>,
        brandName: 'Test Brand',
        navItems: defaultNavItems,
      },
    };

    it('renders brand section in horizontal layout', () => {
      const { container } = render(<Sidenav {...defaultProps} />);

      expect(screen.getByTestId('mock-logo')).toBeInTheDocument();
      expect(screen.getByText('Test Brand')).toBeInTheDocument();

      // Check for horizontal layout class
      const brandSection = container.querySelector('.flex.items-center');
      expect(brandSection).toBeInTheDocument();
    });

    it('renders nav items in vertical stack', () => {
      const { container } = render(<Sidenav {...defaultProps} />);

      // Check for vertical stack class
      const navStack = container.querySelector('.space-y-2');
      expect(navStack).toBeInTheDocument();

      // Check all nav items are rendered
      defaultNavItems.forEach(item => {
        expect(screen.getByText(item.label)).toBeInTheDocument();
      });
    });

    it('renders footer items', () => {
      render(<Sidenav {...defaultProps} footerItems={defaultFooterItems} />);

      expect(screen.getByText('Footer 1')).toBeInTheDocument();
      expect(screen.getByText('Footer 2')).toBeInTheDocument();
      expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('renders custom footer content', () => {
      render(
        <Sidenav {...defaultProps} footer={<div data-testid="custom-footer">Custom Footer</div>} />
      );

      expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
    });

    it('renders main content after nav items', () => {
      const { container } = render(
        <Sidenav {...defaultProps}>
          <div data-testid="main-content">Main Content</div>
        </Sidenav>
      );

      const mainContent = screen.getByTestId('main-content');
      expect(mainContent).toBeInTheDocument();

      // Check that main content comes after nav items in the DOM
      const navStack = container.querySelector('.space-y-2');
      expect(navStack?.compareDocumentPosition(mainContent)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    });
  });
});
