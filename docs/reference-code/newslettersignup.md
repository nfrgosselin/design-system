'use client';

import \* as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

// Form validation schema
const newsletterSchema = z.object({
email: z.string().email('Please enter a valid email address'),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

export function NewsletterSignup() {
const [mounted, setMounted] = React.useState(false);
const [status, setStatus] = React.useState<
'idle' | 'loading' | 'success' | 'error'

> ('idle');
> const [message, setMessage] = React.useState<string>('');

const {
register,
handleSubmit,
formState: { errors },
reset,
} = useForm<NewsletterForm>({
resolver: zodResolver(newsletterSchema),
});

React.useEffect(() => {
setMounted(true);
}, []);

const onSubmit = async (data: NewsletterForm) => {
try {
setStatus('loading');
const response = await fetch('/api/newsletter', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(data),
});

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to subscribe');
      }

      setStatus('success');
      setMessage(result.message);
      reset();
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error ? error.message : 'Something went wrong'
      );
    }

};

// Return loading state during SSR and initial mount
if (!mounted) {
return <div className="h-[88px] animate-pulse rounded-lg bg-stone-100" />;
}

return (

<div>
<p className="ui-text text-stone-600">
Want this in your inbox? Sign up for my newsletter.
</p>
<form
        onSubmit={handleSubmit(onSubmit)}
        className="element-spacing flex gap-3"
      >
<div className="relative flex-1">
<input
type="email"
placeholder="Enter your email"
{...register('email')}
className={cn(
'input w-full',
'focus:shadow-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0',
errors.email && 'border-error'
)}
disabled={status === 'loading' || status === 'success'}
/>
{errors.email && (
<p className="absolute -bottom-5 left-0 text-xs text-error">
{errors.email.message}
</p>
)}
</div>
<Button
type="submit"
disabled={status === 'loading' || status === 'success'}
variant={
status === 'success' ? 'primary-accent' : 'primary-accent-reverse'
}
icon={
status === 'loading'
? Loader2
: status === 'success'
? CheckCircle2
: status === 'error'
? XCircle
: undefined
} >
{status === 'loading'
? 'Subscribing...'
: status === 'success'
? 'Submitted!'
: 'Subscribe'}
</Button>
</form>
{message && status !== 'loading' && (
<p
className={cn(
'mt-2 font-sans text-sm',
status === 'success' ? 'text-success' : 'text-error'
)} >
{status === 'success'
? 'A confirmation email is on its way!'
: message}
</p>
)}
</div>
);
}
