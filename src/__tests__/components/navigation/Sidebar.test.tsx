import { render, screen } from '@testing-library/react';
import { Sidebar } from '../../../components/navigation/Sidebar';

describe('Sidebar', () => {
  it('renders children content', () => {
    render(
      <Sidebar>
        <div>Test Content</div>
      </Sidebar>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders footer content when provided', () => {
    render(
      <Sidebar footer={<div data-testid="custom-footer">Custom Footer</div>}>
        <div>Test Content</div>
      </Sidebar>
    );

    expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    render(
      <Sidebar className="custom-class">
        <div>Test Content</div>
      </Sidebar>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('custom-class');
  });

  it('maintains sticky positioning and height calculations', () => {
    render(
      <Sidebar>
        <div>Test Content</div>
      </Sidebar>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('sticky', 'top-[80px]', 'h-[calc(100vh-80px)]');
  });
});
