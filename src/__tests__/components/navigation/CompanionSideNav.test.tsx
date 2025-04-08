import { render, screen } from '@testing-library/react';
import { CompanionSideNav } from '../../../components/navigation/CompanionSideNav';

describe('CompanionSideNav', () => {
  it('renders children content', () => {
    render(
      <CompanionSideNav>
        <div data-testid="main-content">Main Content</div>
      </CompanionSideNav>
    );

    expect(screen.getByTestId('main-content')).toBeInTheDocument();
  });

  it('renders custom footer content', () => {
    render(
      <CompanionSideNav footer={<div data-testid="custom-footer">Custom Footer</div>}>
        <div>Main Content</div>
      </CompanionSideNav>
    );

    expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
  });

  it('applies correct layout classes', () => {
    const { container } = render(
      <CompanionSideNav>
        <div>Content</div>
      </CompanionSideNav>
    );

    // Check for sticky positioning and width
    const nav = container.querySelector('nav');
    expect(nav).toHaveClass(
      'sticky',
      'top-[80px]',
      'w-[25vw]',
      'min-w-[256px]',
      'h-[calc(100vh-80px)]',
      'bg-white',
      'z-40',
      'overscroll-none'
    );
  });

  it('renders content with correct layout', () => {
    const { container } = render(
      <CompanionSideNav>
        <div>Content</div>
      </CompanionSideNav>
    );

    // Check for flex layout and spacing
    const contentWrapper = container.querySelector('.flex.flex-col.h-full');
    expect(contentWrapper).toBeInTheDocument();
  });
});
