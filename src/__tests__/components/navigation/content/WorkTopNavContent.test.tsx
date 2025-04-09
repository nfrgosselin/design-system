import { render, screen } from '@testing-library/react';
import { WorkTopNavContent } from '../../../../components/navigation/content/WorkTopNavContent';

describe('WorkTopNavContent', () => {
  const defaultProps = {
    sortControls: {
      title: 'Sort',
      navItems: [
        { label: 'Newest', href: '#', isActive: true },
        { label: 'Oldest', href: '#', isActive: false },
        { label: 'AtoZ', href: '#', isActive: false },
      ],
      onChange: jest.fn(),
    },
    filterControls: {
      title: 'Filter',
      navItems: [
        { label: 'All', href: '#', isActive: true },
        { label: 'Projects', href: '#', isActive: false },
        { label: 'Writing', href: '#', isActive: false },
      ],
      onChange: jest.fn(),
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders both sort and filter controls', () => {
    render(<WorkTopNavContent {...defaultProps} />);
    const sortLabels = screen.getAllByText('Sort');
    const filterLabels = screen.getAllByText('Filter');
    expect(sortLabels.length).toBeGreaterThan(0);
    expect(filterLabels.length).toBeGreaterThan(0);
  });

  it('renders mobile layout with collapsed controls', () => {
    render(<WorkTopNavContent {...defaultProps} />);
    const mobileView = screen.getAllByText('Sort')[0].closest('.md\\:hidden');
    expect(mobileView).toBeInTheDocument();

    // Check for active items in mobile view
    const mobileNewest = screen.getAllByText('Newest')[0];
    const mobileAll = screen.getAllByText('All')[0];
    expect(mobileNewest).toBeInTheDocument();
    expect(mobileAll).toBeInTheDocument();
    expect(mobileNewest.closest('.md\\:hidden')).toBeInTheDocument();
    expect(mobileAll.closest('.md\\:hidden')).toBeInTheDocument();
  });

  it('renders desktop layout with expanded controls', () => {
    render(<WorkTopNavContent {...defaultProps} />);
    const desktopView = screen.getAllByText('Sort')[1].closest('.hidden.md\\:grid');
    expect(desktopView).toBeInTheDocument();

    // All items should be visible in desktop view
    defaultProps.sortControls.navItems.forEach(item => {
      const elements = screen.getAllByText(item.label);
      const desktopElement = elements.find(el => el.closest('.hidden.md\\:grid'));
      expect(desktopElement).toBeInTheDocument();
    });
    defaultProps.filterControls.navItems.forEach(item => {
      const elements = screen.getAllByText(item.label);
      const desktopElement = elements.find(el => el.closest('.hidden.md\\:grid'));
      expect(desktopElement).toBeInTheDocument();
    });
  });

  it('calls sort onChange handler when sort item is clicked', () => {
    render(<WorkTopNavContent {...defaultProps} />);
    // Click in desktop view
    const oldestButton = screen.getAllByText('Oldest')[0];
    oldestButton.click();
    expect(defaultProps.sortControls.onChange).toHaveBeenCalledWith('Oldest');
  });

  it('calls filter onChange handler when filter item is clicked', () => {
    render(<WorkTopNavContent {...defaultProps} />);
    // Click in desktop view
    const projectsButton = screen.getAllByText('Projects')[0];
    projectsButton.click();
    expect(defaultProps.filterControls.onChange).toHaveBeenCalledWith('Projects');
  });

  it('applies custom className to desktop grid', () => {
    const { container } = render(<WorkTopNavContent {...defaultProps} className="custom-class" />);
    const desktopGrid = container.querySelector('.hidden.md\\:grid');
    expect(desktopGrid).toHaveClass('custom-class');
  });

  it('handles mobile interactions correctly', () => {
    render(<WorkTopNavContent {...defaultProps} />);

    // Click sort title to expand
    const sortTitle = screen.getAllByText('Sort')[0];
    sortTitle.click();

    // Click a sort option in mobile view
    const oldestOption = screen.getAllByText('Oldest')[0];
    oldestOption.click();

    expect(defaultProps.sortControls.onChange).toHaveBeenCalledWith('Oldest');
  });
});
