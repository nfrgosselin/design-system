import { render, screen } from '@testing-library/react';
import { NavText } from '../../../../components/typography/ui/NavText';

describe('NavText', () => {
  it('renders with default styles', () => {
    render(<NavText>Test</NavText>);
    const text = screen.getByText('Test');
    expect(text).toHaveClass('text-stone-500');
    expect(text).toHaveClass('font-medium');
    expect(text).toHaveClass('hover:text-marine-hover');
  });

  it('renders with active variant', () => {
    render(<NavText variant="active">Test</NavText>);
    const text = screen.getByText('Test');
    expect(text).toHaveClass('text-marine');
    expect(text).toHaveClass('font-medium');
  });

  it('renders with muted variant', () => {
    render(<NavText variant="muted">Test</NavText>);
    const text = screen.getByText('Test');
    expect(text).toHaveClass('text-stone-500');
    expect(text).toHaveClass('font-medium');
    expect(text).toHaveClass('hover:text-marine-hover');
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(<NavText size="sm">Test</NavText>);
    expect(screen.getByText('Test')).toHaveClass('text-sm');

    rerender(<NavText size="base">Test</NavText>);
    expect(screen.getByText('Test')).toHaveClass('text-base');
  });

  it('applies text transform styles', () => {
    const { rerender } = render(<NavText transform="uppercase">Test</NavText>);
    const text = screen.getByText('Test');
    expect(text).toHaveClass('uppercase');
    expect(text).toHaveClass('tracking-wider');

    rerender(<NavText transform="none">Test</NavText>);
    expect(screen.getByText('Test')).not.toHaveClass('uppercase');
    expect(screen.getByText('Test')).not.toHaveClass('tracking-wider');
  });

  it('applies underline effect when specified', () => {
    render(<NavText underline>Test</NavText>);
    const text = screen.getByText('Test');
    expect(text).toHaveClass('pb-0.5');
    expect(text).toHaveClass('after:w-0');
    expect(text).toHaveClass('after:bg-marine');
    expect(text).toHaveClass('after:absolute');
    expect(text).toHaveClass('after:bottom-0');
    expect(text).toHaveClass('after:left-0');
    expect(text).toHaveClass('after:h-px');
    expect(text).toHaveClass('after:transition-all');
    expect(text).toHaveClass('after:duration-200');
    expect(text).toHaveClass('after:ease-out');
    expect(text).toHaveClass('hover:after:w-full');
  });
});
