import { render, screen } from '@testing-library/react';
import { Image, ImageProps } from '../../../components/layout/core/image';

describe('Image', () => {
  const defaultProps = {
    src: 'test-image.jpg',
    alt: 'Test image',
  };

  it('renders with default props', () => {
    render(<Image {...defaultProps} />);
    const image = screen.getByRole('img', { name: 'Test image' });

    // Default classes
    expect(image).toHaveClass('w-full');
    expect(image).toHaveClass('object-cover');
    expect(image).toHaveClass('object-center');
    expect(image).toHaveClass('rounded-md');
    expect(image).toHaveClass('bg-background');
  });

  // Aspect ratio tests
  describe('aspect ratios', () => {
    it.each<[ImageProps['aspect'], string]>([
      ['square', 'aspect-square'],
      ['wide', 'aspect-video'],
      ['video', 'aspect-[4/3]'],
      ['cinema', 'aspect-[2.35/1]'],
      ['35mm', 'aspect-[3/2]'],
      ['portrait', 'aspect-[3/4]'],
      ['smartphone', 'aspect-[9/16]'],
      ['auto', ''],
    ])('applies correct class for aspect="%s"', (aspect, expectedClass) => {
      render(<Image {...defaultProps} aspect={aspect} />);
      const image = screen.getByRole('img');
      if (expectedClass) {
        expect(image).toHaveClass(expectedClass);
      } else {
        expect(image).not.toHaveClass('aspect-');
      }
    });
  });

  // Fit mode tests
  describe('fit modes', () => {
    it.each<[ImageProps['fit'], string]>([
      ['cover', 'object-cover'],
      ['contain', 'object-contain'],
      ['fill', 'object-fill'],
      ['none', 'object-none'],
    ])('applies correct class for fit="%s"', (fit, expectedClass) => {
      render(<Image {...defaultProps} fit={fit} />);
      const image = screen.getByRole('img');
      expect(image).toHaveClass(expectedClass);
    });
  });

  // Position tests
  describe('positions', () => {
    it.each<[ImageProps['position'], string]>([
      ['center', 'object-center'],
      ['top', 'object-top'],
      ['bottom', 'object-bottom'],
      ['left', 'object-left'],
      ['right', 'object-right'],
    ])('applies correct class for position="%s"', (position, expectedClass) => {
      render(<Image {...defaultProps} position={position} />);
      const image = screen.getByRole('img');
      expect(image).toHaveClass(expectedClass);
    });
  });

  // Border radius tests
  describe('border radius', () => {
    it.each<[ImageProps['radius'], string]>([
      ['none', ''],
      ['sm', 'rounded-sm'],
      ['md', 'rounded-md'],
      ['lg', 'rounded-lg'],
      ['full', 'rounded-full'],
    ])('applies correct class for radius="%s"', (radius, expectedClass) => {
      render(<Image {...defaultProps} radius={radius} />);
      const image = screen.getByRole('img');
      if (expectedClass) {
        expect(image).toHaveClass(expectedClass);
      } else {
        expect(image).not.toHaveClass('rounded-');
      }
    });
  });

  // Border width tests
  describe('border width', () => {
    it.each<[ImageProps['borderWidth'], string]>([
      [0, ''],
      [1, 'border-1'],
      [2, 'border-2'],
      [4, 'border-4'],
      [8, 'border-8'],
    ])('applies correct class for borderWidth=%i', (width, expectedClass) => {
      render(<Image {...defaultProps} borderWidth={width} />);
      const image = screen.getByRole('img');
      if (expectedClass) {
        expect(image).toHaveClass(expectedClass);
      } else {
        expect(image).not.toHaveClass('border-');
      }
    });
  });

  // Border color tests
  describe('border color', () => {
    it.each<[ImageProps['borderColor'], string]>([
      ['black', 'border-stone-900'],
      ['brand', 'border-brand'],
      ['muted', 'border-stone-500'],
      ['subtle', 'border-stone-200'],
    ])('applies correct class for borderColor="%s"', (color, expectedClass) => {
      render(<Image {...defaultProps} borderWidth={1} borderColor={color} />);
      const image = screen.getByRole('img');
      expect(image).toHaveClass(expectedClass);
    });

    it('does not apply border color when borderWidth is 0', () => {
      render(<Image {...defaultProps} borderWidth={0} borderColor="black" />);
      const image = screen.getByRole('img');
      expect(image).not.toHaveClass('border-stone-900');
    });
  });

  // Loading background tests
  describe('loading background', () => {
    it('shows loading background by default', () => {
      render(<Image {...defaultProps} />);
      const image = screen.getByRole('img');
      expect(image).toHaveClass('bg-background');
    });

    it('hides loading background when showLoadingBackground is false', () => {
      render(<Image {...defaultProps} showLoadingBackground={false} />);
      const image = screen.getByRole('img');
      expect(image).not.toHaveClass('bg-background');
    });
  });

  // Alt text tests
  describe('alt text', () => {
    it('sets empty alt text by default', () => {
      render(<Image src="test.jpg" />);
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('alt', '');
    });

    it('sets provided alt text', () => {
      render(<Image {...defaultProps} alt="Custom alt text" />);
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('alt', 'Custom alt text');
    });
  });

  // Custom class tests
  it('allows custom classes to be added', () => {
    render(<Image {...defaultProps} className="custom-class" />);
    const image = screen.getByRole('img');
    expect(image).toHaveClass('custom-class');
  });

  // HTML attributes pass-through test
  it('passes through additional HTML attributes', () => {
    render(<Image {...defaultProps} data-testid="custom-test-id" loading="lazy" />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('data-testid', 'custom-test-id');
    expect(image).toHaveAttribute('loading', 'lazy');
  });
});
