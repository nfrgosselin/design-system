import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Aspect ratio of the image container
   * - square: 1:1
   * - wide: 16:9
   * - video: 4:3
   * - cinema: 2.35:1
   * - 35mm: 3:2
   * - portrait: 3:4
   * - smartphone: 9:16
   * - auto: natural image ratio
   */
  aspect?: 'square' | 'wide' | 'video' | 'cinema' | '35mm' | 'portrait' | 'smartphone' | 'auto';

  /**
   * How the image should fit within its container
   */
  fit?: 'cover' | 'contain' | 'fill' | 'none';

  /**
   * Position of the image within its container when using cover/contain
   */
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';

  /**
   * Optional border radius using our scale
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';

  /**
   * Border width using Tailwind's scale
   * - 0: no border
   * - 1: 1px border
   * - 2: 2px border
   * - 4: 4px border
   * - 8: 8px border
   */
  borderWidth?: 0 | 1 | 2 | 4 | 8;

  /**
   * Border color using our color tokens
   * - black: stone-900
   * - brand: brand color
   * - muted: stone-500
   * - subtle: stone-200
   */
  borderColor?: 'black' | 'brand' | 'muted' | 'subtle';

  /**
   * Whether to show a subtle background while loading
   */
  showLoadingBackground?: boolean;
}

export function Image({
  aspect = 'auto',
  fit = 'cover',
  position = 'center',
  radius = 'md',
  borderWidth = 0,
  borderColor = 'black',
  showLoadingBackground = true,
  className,
  alt = '',
  ...props
}: ImageProps) {
  // Convert props to Tailwind classes
  const classes = {
    // Base styles
    base: 'w-full',

    // Aspect ratio
    aspect: {
      square: 'aspect-square',
      wide: 'aspect-video',
      video: 'aspect-[4/3]',
      cinema: 'aspect-[2.35/1]',
      '35mm': 'aspect-[3/2]',
      portrait: 'aspect-[3/4]',
      smartphone: 'aspect-[9/16]',
      auto: '',
    }[aspect],

    // Object fit
    fit: {
      cover: 'object-cover',
      contain: 'object-contain',
      fill: 'object-fill',
      none: 'object-none',
    }[fit],

    // Object position
    position: {
      center: 'object-center',
      top: 'object-top',
      bottom: 'object-bottom',
      left: 'object-left',
      right: 'object-right',
    }[position],

    // Border radius using our scale
    radius: {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    }[radius],

    // Border width using Tailwind's scale
    border: borderWidth === 0 ? '' : `border-${borderWidth}`,

    // Border color using our color tokens
    borderColor:
      borderWidth === 0
        ? ''
        : {
            black: 'border-stone-900',
            brand: 'border-brand',
            muted: 'border-stone-500',
            subtle: 'border-stone-200',
          }[borderColor],

    // Loading background
    loading: showLoadingBackground ? 'bg-background' : '',
  };

  return (
    <img
      className={cn(
        classes.base,
        classes.aspect,
        classes.fit,
        classes.position,
        classes.radius,
        classes.border,
        classes.borderColor,
        classes.loading,
        className
      )}
      alt={alt}
      {...props}
    />
  );
}
