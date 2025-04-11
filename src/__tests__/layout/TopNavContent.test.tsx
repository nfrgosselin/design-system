import { render, screen, act } from '@testing-library/react';
import { TopNavContent } from '@/components/layout/TopNavContent';

describe('TopNavContent', () => {
  it('renders desktop layout with all content', async () => {
    await act(async () => {
      render(
        <TopNavContent
          leftContent={<div>Left Content</div>}
          middleContent={<div>Middle Content</div>}
          rightContent={<div>Right Content</div>}
        />
      );
    });

    // Check that desktop grid is present
    expect(screen.getByTestId('desktop-grid')).toBeInTheDocument();

    // Verify all content is rendered
    expect(screen.getByText('Left Content')).toBeInTheDocument();
    expect(screen.getByText('Middle Content')).toBeInTheDocument();
    expect(screen.getByText('Right Content')).toBeInTheDocument();
  });

  it('renders mobile layout when mobileContent is provided', async () => {
    await act(async () => {
      render(
        <TopNavContent
          mobileContent={<div>Mobile Content</div>}
          leftContent={<div>Left Content</div>}
          middleContent={<div>Middle Content</div>}
          rightContent={<div>Right Content</div>}
        />
      );
    });

    // Check that mobile content is rendered
    expect(screen.getByTestId('mobile-container')).toHaveClass('md:hidden');
    expect(screen.getByText('Mobile Content')).toBeInTheDocument();
  });

  it('applies custom className to desktop grid', async () => {
    await act(async () => {
      render(<TopNavContent className="custom-class" leftContent={<div>Left Content</div>} />);
    });

    expect(screen.getByTestId('desktop-grid')).toHaveClass('custom-class');
  });

  it('renders without mobile content when not provided', async () => {
    await act(async () => {
      render(<TopNavContent leftContent={<div>Left Content</div>} />);
    });

    // Check that mobile container is not present
    expect(screen.queryByTestId('mobile-container')).not.toBeInTheDocument();
  });

  it('renders empty columns when content is not provided', async () => {
    await act(async () => {
      render(<TopNavContent />);
    });

    // Check that all three columns are rendered but empty
    const columns = screen.getAllByTestId('content-column');
    expect(columns).toHaveLength(3);
    columns.forEach(column => {
      expect(column).toBeEmptyDOMElement();
    });
  });

  it('maintains consistent layout structure', async () => {
    await act(async () => {
      render(
        <TopNavContent
          leftContent={<div>Left</div>}
          middleContent={<div>Middle</div>}
          rightContent={<div>Right</div>}
        />
      );
    });

    // Verify the layout structure
    const columns = screen.getAllByTestId('content-column');
    expect(columns).toHaveLength(3);
    columns.forEach(column => {
      expect(column).toHaveClass('flex', 'items-end', 'h-full', 'w-full');
    });
  });

  it('renders desktop and mobile layouts simultaneously when both contents provided', async () => {
    await act(async () => {
      render(
        <TopNavContent
          mobileContent={<div>Mobile View</div>}
          leftContent={<div>Desktop Left</div>}
          middleContent={<div>Desktop Middle</div>}
          rightContent={<div>Desktop Right</div>}
        />
      );
    });

    // Mobile view should be present
    expect(screen.getByText('Mobile View')).toBeInTheDocument();

    // Desktop view should also be present but hidden on mobile
    const desktopGrid = screen.getByTestId('desktop-grid');
    expect(desktopGrid).toHaveClass('hidden', 'md:grid');
    expect(screen.getByText('Desktop Left')).toBeInTheDocument();
    expect(screen.getByText('Desktop Middle')).toBeInTheDocument();
    expect(screen.getByText('Desktop Right')).toBeInTheDocument();
  });
});
