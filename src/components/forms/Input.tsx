import { forwardRef, useRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { Eye, EyeOff, Search, X } from 'lucide-react';

// Helper hook to merge refs
const useMergeRefs = <T,>(
  ...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T> | null | undefined>
): React.RefCallback<T> => {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
};

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Visual variant of the input */
  variant?: 'default' | 'muted';
  /** Size variant of the input */
  size?: 'xs' | 'base' | 'lg' | 'xl';
  /** Error state */
  error?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Font family to use */
  font?: 'sans' | 'serif';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'default',
      size = 'base',
      font = 'sans',
      type: initialType = 'text',
      error,
      isLoading,
      disabled,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [searchValue, setSearchValue] = useState(defaultValue || value || '');
    const internalRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRefs(internalRef, ref);
    const type = initialType === 'password' && showPassword ? 'text' : initialType;

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
      onChange?.(e);
    };

    const handleSearchClear = () => {
      setSearchValue('');
      internalRef.current?.focus();

      // Create and dispatch a synthetic change event
      if (internalRef.current && onChange) {
        const syntheticEvent = {
          target: { ...internalRef.current, value: '' },
          currentTarget: internalRef.current,
          preventDefault: () => {},
          stopPropagation: () => {},
          bubbles: true,
          cancelable: true,
          timeStamp: new Date().getTime(),
          type: 'change',
        } as React.ChangeEvent<HTMLInputElement>;

        onChange(syntheticEvent);
      }
    };

    const getIconSize = () => {
      switch (size) {
        case 'xs':
          return 14;
        case 'base':
          return 16;
        case 'lg':
          return 18;
        case 'xl':
          return 20;
        default:
          return 16;
      }
    };

    return (
      <div className="relative w-full">
        <input
          ref={mergedRef}
          type={type}
          disabled={disabled || isLoading}
          defaultValue={initialType !== 'search' ? defaultValue : undefined}
          value={initialType === 'search' ? searchValue : value}
          onChange={initialType === 'search' ? handleSearchChange : onChange}
          className={cn(
            // Base styles
            'w-full rounded-md border-2 bg-background transition-colors duration-base',
            'placeholder:text-muted-foreground',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand',

            // Font family
            font === 'sans' ? 'font-sans' : 'font-serif',

            // Size variants
            size === 'xs' && 'h-6 px-1.5 text-xs',
            size === 'base' && 'h-8 px-2 text-sm',
            size === 'lg' && 'h-10 px-3 text-base',
            size === 'xl' && 'h-12 px-4 text-lg',

            // Visual variants
            variant === 'default' && [
              'border-stone-900',
              'hover:border-stone-500',
              'focus-visible:border-ring',
            ],
            variant === 'muted' && [
              'border-stone-200 bg-muted',
              'hover:border-stone-300',
              'focus-visible:border-ring',
            ],

            // States
            error && [
              'border-destructive',
              'hover:border-destructive',
              'focus-visible:border-destructive focus-visible:ring-destructive',
              'placeholder:text-destructive/50',
            ],
            disabled && 'opacity-50 cursor-not-allowed bg-stone-300',
            isLoading && 'opacity-50 cursor-wait',

            // Type-specific padding
            (initialType === 'password' || initialType === 'search') && 'pr-8',

            className
          )}
          {...props}
        />

        {/* Password Toggle Button */}
        {initialType === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={cn(
              'absolute right-2 top-1/2 -translate-y-1/2',
              'text-stone-500 hover:text-stone-700',
              'focus:outline-none focus-visible:text-stone-700',
              (disabled || isLoading) && 'pointer-events-none opacity-50'
            )}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={getIconSize()} /> : <Eye size={getIconSize()} />}
          </button>
        )}

        {/* Search Icon/Clear Button */}
        {initialType === 'search' && (
          <button
            type="button"
            onClick={searchValue ? handleSearchClear : undefined}
            className={cn(
              'absolute right-2 top-1/2 -translate-y-1/2',
              'text-stone-500 hover:text-stone-700',
              'focus:outline-none focus-visible:text-stone-700',
              (disabled || isLoading) && 'pointer-events-none opacity-50',
              !searchValue && 'pointer-events-none'
            )}
            tabIndex={-1}
          >
            {searchValue ? <X size={getIconSize()} /> : <Search size={getIconSize()} />}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
