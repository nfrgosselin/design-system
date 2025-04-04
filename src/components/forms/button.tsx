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
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-primary ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        solid: [
          'bg-black text-white border-2 border-black',
          'hover:bg-white hover:text-black',
          'active:bg-white active:text-black',
        ].join(' '),
        outline: [
          'bg-white text-black border-2 border-black',
          'hover:bg-black hover:text-white',
          'active:bg-black active:text-white',
        ].join(' '),
        'brand-outline': [
          'bg-white text-black border-2 border-black',
          'hover:bg-ds-primary hover:text-white hover:border-black',
          'active:bg-ds-primary-active active:text-white active:border-ds-primary-active',
        ].join(' '),
        brand: [
          'bg-ds-primary text-white border-2 border-black',
          'hover:bg-white hover:text-black',
          'active:bg-white active:text-black',
        ].join(' '),
        'brand-solid': [
          'bg-ds-primary text-white border-2 border-black',
          'hover:bg-white hover:text-black',
          'active:bg-white active:text-black',
        ].join(' '),
        accent: [
          'bg-ds-primary text-white border-2 border-black',
          'hover:bg-ds-primary-hover',
          'active:bg-ds-primary-active',
        ].join(' '),
        'outline-accent': [
          'border border-gray-200 text-primary',
          'hover:border-primary hover:text-primary-dark',
          'active:border-primary-dark active:text-primary-dark',
        ].join(' '),
        'outline-subtle': [
          'border border-gray-200 text-black',
          'hover:border-black',
          'active:border-black',
        ].join(' '),
        ghost: [
          'border border-stone-200 text-stone-600',
          'hover:text-black hover:bg-stone-100 hover:border-stone-200',
          'active:bg-stone-200',
        ].join(' '),
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
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      isLoading: false,
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, 'iconOnly'> {
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
