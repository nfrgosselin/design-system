'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { LucideIcon } from 'lucide-react';

const buttonVariants = cva(
  [
    // Base styles
    'inline-flex items-center justify-center',
    'relative',
    'rounded-lg',
    'text-xs font-sans font-medium tracking-normal leading-none',
    'transition-color duration-ultra-fast ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'border border-transparent',
  ],
  {
    variants: {
      variant: {
        solid: 'text-white font-semibold hover:border-black',
        outline: [
          'bg-white text-stone-700 border-2 border-stone-500',
          'hover:bg-white hover:text-black hover:border-black',
          'active:bg-white active:text-black active:border-black',
        ].join(' '),
        solidReverse:
          'text-white font-semibold hover:bg-white hover:text-black hover:border-black active:bg-white active:text-black active:border-black',
      },
      color: {
        brand: '',
        lagoon: '',
        peach: '',
        slate: '',
        gold: '',
        black: '',
      },
      size: {
        sm: 'h-8 px-4 text-xs min-h-[2rem]',
        md: 'h-10 px-6 min-h-[2.5rem]',
        lg: 'h-12 px-8 text-base min-h-[3rem]',
      },
      iconOnly: {
        sm: 'h-8 w-8 !p-0 min-h-[2rem] min-w-[2rem]',
        md: 'h-10 w-10 !p-0 min-h-[2.5rem] min-w-[2.5rem]',
        lg: 'h-12 w-12 !p-0 min-h-[3rem] min-w-[3rem]',
      },
      fullWidth: {
        true: 'w-full',
      },
      isLoading: {
        true: 'cursor-wait',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        color: 'brand',
        className: 'bg-brand hover:bg-brand-hover active:bg-brand-active',
      },
      {
        variant: 'solid',
        color: 'lagoon',
        className: 'bg-lagoon hover:bg-lagoon-hover active:bg-lagoon-active',
      },
      {
        variant: 'solid',
        color: 'peach',
        className: 'bg-peach hover:bg-peach-hover active:bg-peach-active',
      },
      {
        variant: 'solid',
        color: 'slate',
        className: 'bg-slate hover:bg-slate-hover active:bg-slate-active',
      },
      {
        variant: 'solid',
        color: 'gold',
        className: 'bg-gold hover:bg-gold-hover active:bg-gold-active',
      },
      {
        variant: 'solid',
        color: 'black',
        className: 'bg-black hover:bg-black/90 active:bg-black/80',
      },
      { variant: 'solidReverse', color: 'brand', className: 'bg-brand' },
      { variant: 'solidReverse', color: 'lagoon', className: 'bg-lagoon' },
      { variant: 'solidReverse', color: 'peach', className: 'bg-peach' },
      { variant: 'solidReverse', color: 'slate', className: 'bg-slate' },
      { variant: 'solidReverse', color: 'gold', className: 'bg-gold' },
      { variant: 'solidReverse', color: 'black', className: 'bg-black' },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      color: 'brand',
      isLoading: false,
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    Omit<ButtonVariants, 'iconOnly'> {
  isLoading?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  isIconOnly?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      color,
      fullWidth,
      isLoading,
      icon: Icon,
      iconPosition = 'left',
      isIconOnly = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    const iconSize = {
      sm: 12,
      md: 16,
      lg: 20,
    }[size || 'md'];

    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            color,
            size: isIconOnly ? undefined : size,
            iconOnly: isIconOnly ? size : undefined,
            fullWidth,
            isLoading,
          }),
          className,
          isDisabled &&
            'cursor-not-allowed bg-stone-200 text-stone-500 hover:bg-stone-200 active:scale-100'
        )}
        disabled={isDisabled}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-inherit">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-stone-400 border-t-white" />
          </div>
        )}
        <span
          className={cn(
            'inline-flex items-center justify-center',
            !isIconOnly && 'gap-2',
            isLoading && 'invisible'
          )}
        >
          {Icon && !isIconOnly && iconPosition === 'left' && (
            <Icon className="shrink-0" width={iconSize} height={iconSize} />
          )}
          {Icon && isIconOnly ? (
            <Icon className="shrink-0" width={iconSize} height={iconSize} />
          ) : (
            children
          )}
          {Icon && !isIconOnly && iconPosition === 'right' && (
            <Icon className="shrink-0" width={iconSize} height={iconSize} />
          )}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };
