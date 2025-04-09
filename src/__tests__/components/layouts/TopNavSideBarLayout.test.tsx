import { render, screen } from '@testing-library/react';
import { TopNavSideBarLayout } from '../../../components/layout/pages/TopNavSideBarLayout';

describe('TopNavSideBarLayout', () => {
  it('renders all layout sections', () => {
    render(
      <TopNavSideBarLayout topNavContent={<div>Top Nav</div>} sidebarContent={<div>Sidebar</div>}>
        <div>Main Content</div>
      </TopNavSideBarLayout>
    );

    expect(screen.getByText('Top Nav')).toBeInTheDocument();
    expect(screen.getByText('Sidebar')).toBeInTheDocument();
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });

  it('renders without sidebar', () => {
    render(
      <TopNavSideBarLayout topNavContent={<div>Top Nav</div>} sidebarContent={null}>
        <div>Main Content</div>
      </TopNavSideBarLayout>
    );

    expect(screen.getByText('Top Nav')).toBeInTheDocument();
    expect(screen.queryByText('Sidebar')).not.toBeInTheDocument();
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });

  it('renders without top nav', () => {
    render(
      <TopNavSideBarLayout topNavContent={null} sidebarContent={<div>Sidebar</div>}>
        <div>Main Content</div>
      </TopNavSideBarLayout>
    );

    expect(screen.queryByText('Top Nav')).not.toBeInTheDocument();
    expect(screen.getByText('Sidebar')).toBeInTheDocument();
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });

  it('applies layout classes correctly', () => {
    const { container } = render(
      <TopNavSideBarLayout topNavContent={<div>Top Nav</div>} sidebarContent={<div>Sidebar</div>}>
        <div>Main Content</div>
      </TopNavSideBarLayout>
    );

    expect(container.firstChild).toHaveClass('min-h-screen', 'flex', 'flex-col');
  });

  it('maintains correct layout structure', () => {
    const { container } = render(
      <TopNavSideBarLayout topNavContent={<div>Top Nav</div>} sidebarContent={<div>Sidebar</div>}>
        <div>Main Content</div>
      </TopNavSideBarLayout>
    );

    const mainContentArea = container.querySelector('.grid');
    expect(mainContentArea).toHaveClass('grid-cols-1', 'md:grid-cols-4');

    const sidebar = container.querySelector('.hidden.md\\:block');
    expect(sidebar).toBeInTheDocument();

    const main = container.querySelector('main');
    expect(main).toHaveClass('col-span-1', 'md:col-span-3');
  });
});
