import { CompanionSideNav } from '../components/navigation/CompanionSideNav';
import { TopNav } from '../components/navigation/TopNav';
import { NewsletterSignup } from '../components/forms/NewsletterSignup';
import { useState } from 'react';

export function Workbench() {
  const navItems = [
    { label: 'Work', href: '#', isActive: true },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const brandProps = {
    brandName: 'Nate Gosselin',
    navItems,
    stackSpacing: 'space-y-1' as const,
  };

  // Demo form state
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string>();

  const handleSubmit = async (email: string) => {
    setStatus('loading');
    setError(undefined);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!email.includes('@')) {
      setStatus('error');
      setError('Please enter a valid email address');
      return;
    }

    setStatus('success');
  };

  return (
    <div className="flex min-h-screen flex-col overscroll-none">
      <TopNav
        brand={brandProps}
        secondContent={<div className="text-stone-600">Second Section</div>}
        thirdContent={<div className="text-stone-600">Third Section</div>}
        fourthContent={<div className="text-stone-600">Fourth Section</div>}
      />

      <div className="relative flex-1">
        <CompanionSideNav
          footer={
            <div className="space-y-4">
              <NewsletterSignup
                status={status}
                error={error}
                onSubmit={handleSubmit}
                headingText="Sign up for my newsletter."
                placeholder="Enter your email"
              />
            </div>
          }
        >
          <div className="space-y-6">
            <div className="rounded-lg bg-stone-100 p-4">
              <h3 className="font-medium">Newsletter Component Demo</h3>
              <p className="mt-2 text-sm text-stone-600">
                This demonstrates our NewsletterSignup component in two places - in the sidebar and
                in the main content area below. The component is purely presentational, allowing
                applications to implement their own form handling logic.
              </p>
            </div>
          </div>
        </CompanionSideNav>

        <main className="absolute top-0 right-0 bottom-0 left-[25vw] min-w-0 overflow-y-auto overscroll-none">
          <div className="px-8 py-6">
            <h1 className="text-2xl font-semibold leading-none">Newsletter Signup Demo</h1>
            <p className="mt-2 text-stone-600">
              This demonstrates our NewsletterSignup component with custom form handling logic.
            </p>

            <div className="mt-8 max-w-xl">
              <NewsletterSignup status={status} error={error} onSubmit={handleSubmit} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
