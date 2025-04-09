'use client';

import * as React from 'react';
import { cn } from '../../utils/cn';
import { Button } from './button';
import { Input } from './Input';

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
   */
  variant?: 'inline' | 'stacked' | 'streamlined';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  const isStreamlined = variant === 'streamlined';
  const isStacked = variant === 'stacked' || isStreamlined;

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
