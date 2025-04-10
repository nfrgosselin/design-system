'use client';

import * as React from 'react';
import { cn } from '../../utils/cn';
import { Button } from './button';
import { Input } from './Input';
import { NamedIcon } from '../utils/namedIcon';

export interface NewsletterSignupProps {
  /**
   * Current state of the form
   */
  status?: 'idle' | 'loading' | 'success' | 'error';

  /**
   * Error message to display
   */
  error?: string;

  /**
   * Success message to display
   */
  successMessage?: string;

  /**
   * Default email value
   */
  defaultValue?: string;

  /**
   * Called when form is submitted
   */
  onSubmit?: (email: string) => void;

  /**
   * Custom className to apply to container
   */
  className?: string;

  /**
   * Heading text shown above the form
   * @default "Want this in your inbox? Sign up for my newsletter."
   */
  headingText?: string;

  /**
   * Placeholder text for the email input
   * @default "Enter your email"
   */
  placeholder?: string;

  /**
   * Layout variant
   * - inline: Input and button side by side (default)
   * - stacked: Input and button stacked vertically
   * - streamlined: Compact stacked layout without heading, max-width 200px
   * - topnav: Two-line layout with hover expansion for top navigation
   */
  variant?: 'inline' | 'stacked' | 'streamlined' | 'topnav';
}

export function NewsletterSignup({
  status = 'idle',
  error,
  successMessage = 'A confirmation email is on its way!',
  defaultValue = '',
  onSubmit,
  className,
  headingText = 'Want this in your inbox? Sign up for my newsletter.',
  placeholder = 'Enter your email',
  variant = 'inline',
}: NewsletterSignupProps) {
  const [email, setEmail] = React.useState(defaultValue);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [hasSignedUp, setHasSignedUp] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
    setIsExpanded(false);
    setHasSignedUp(true);
  };

  const isStreamlined = variant === 'streamlined';
  const isStacked = variant === 'stacked' || isStreamlined;
  const isTopNav = variant === 'topnav';

  if (isTopNav) {
    return (
      <div
        className={cn('group relative', className)}
        data-expanded={isExpanded ? 'true' : 'false'}
      >
        <div className={cn('flex flex-col items-end', isExpanded && 'invisible')}>
          <span className="text-sm font-sans leading-none tracking-wide uppercase text-stone-500">
            Newsletter
          </span>
          <div className="mt-1">
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="text-sm font-sans font-medium text-brand hover:text-brand-hover transition-colors duration-150"
            >
              {hasSignedUp ? 'Signed Up!' : 'Subscribe'}
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          role="form"
          aria-label="Newsletter signup form"
          className={cn(
            'absolute top-0 right-0 flex items-center gap-2',
            'transition-all duration-200 ease-out',
            isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          )}
        >
          <div className="relative">
            <Input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={!!error}
              disabled={status === 'loading' || status === 'success'}
              className="w-[200px]"
            />
            {error && (
              <p className="absolute -bottom-5 left-0 text-xs font-sans text-error">{error}</p>
            )}
          </div>
          <Button
            type="submit"
            size="sm"
            disabled={status === 'loading' || status === 'success'}
            variant="solid"
            color="brand"
            isLoading={status === 'loading'}
            data-loading={status === 'loading' ? 'true' : undefined}
          >
            {status === 'success' ? 'Submitted!' : 'Subscribe'}
          </Button>
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="p-1 text-stone-500 hover:text-stone-700 transition-colors duration-150"
          >
            <NamedIcon name="close" size="sm" />
          </button>
        </form>
      </div>
    );
  }

  return (
    <div
      className={cn(
        isStreamlined && 'max-w-[200px]',
        variant === 'stacked' && 'max-w-[250px]',
        className
      )}
    >
      {!isStreamlined && <p className="text-stone-600 font-sans text-sm">{headingText}</p>}
      <form
        onSubmit={handleSubmit}
        role="form"
        aria-label="Newsletter signup form"
        className={cn(isStacked ? 'flex flex-col gap-2' : 'flex gap-3', !isStreamlined && 'mt-2')}
      >
        <div className={cn('relative', isStacked ? 'w-full' : 'flex-1')}>
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={!!error}
            disabled={status === 'loading' || status === 'success'}
          />
          {error && (
            <p className="absolute -bottom-5 left-0 text-xs font-sans text-error">{error}</p>
          )}
        </div>
        <Button
          type="submit"
          size="sm"
          disabled={status === 'loading' || status === 'success'}
          variant="solid"
          color="brand"
          isLoading={status === 'loading'}
          data-loading={status === 'loading' ? 'true' : undefined}
          className={isStacked ? 'w-full' : undefined}
        >
          {status === 'success' ? 'Submitted!' : 'Subscribe'}
        </Button>
      </form>
      {status === 'success' && (
        <p className="mt-2 text-sm font-sans text-success">{successMessage}</p>
      )}
    </div>
  );
}
