import * as React from 'react';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ExternalLink, Loader2 } from 'lucide-react';

const linkVariants = cva(
  'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        // Inline text links (inherits font from parent)
        inline:
          'text-brand hover:text-brand/80 active:text-brand/70 visited:text-sunset underline underline-offset-4',

        // Standalone links (not in paragraph)
        standalone: 'font-sans text-sm font-medium text-brand hover:text-brand',
        'standalone-icon-right':
          'font-sans text-sm font-medium text-brand hover:text-brand inline-flex items-center gap-1.5',
        'standalone-icon-left':
          'font-sans text-sm font-medium text-brand hover:text-brand inline-flex items-center gap-1.5 flex-row-reverse',

        // Button-like links
        button:
          'inline-flex items-center justify-center h-9 px-6 font-sans text-sm font-medium bg-black text-white border-2 border-black rounded-md hover:bg-white hover:text-black',
        'button-outline':
          'inline-flex items-center justify-center h-9 px-6 font-sans text-sm font-medium border border-stone-200 text-stone-900 rounded-md hover:border-stone-900',
        'button-accent':
          'inline-flex items-center justify-center h-9 px-6 font-sans text-sm font-medium bg-white text-black border-2 border-black rounded-md hover:bg-brand hover:text-white hover:border-brand',

        // Small/metadata links
        metadata: 'font-sans text-xs text-stone-500 hover:text-stone-700 hover:underline',

        // Breadcrumb links
        breadcrumb: 'font-sans text-sm text-stone-600 hover:text-stone-900 hover:underline',

        // Footer/utility links
        utility: 'font-sans text-xs text-stone-500 hover:text-stone-700',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none cursor-not-allowed',
      },
      loading: {
        true: 'cursor-wait inline-flex items-center gap-1.5',
      },
    },
    defaultVariants: {
      variant: 'inline',
    },
  }
);

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  isExternal?: boolean;
  showExternalIcon?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  'aria-label'?: string;
}

function Link({
  href,
  variant,
  size,
  isExternal,
  showExternalIcon = true,
  isLoading,
  disabled,
  className,
  children,
  'aria-label': ariaLabelProp,
  ...props
}: LinkProps) {
  const isExternalUrl = isExternal || (href && href.startsWith('http'));

  let childText = '';
  if (typeof children === 'string') {
    childText = children;
  } else if (React.isValidElement(children) && typeof children.props.children === 'string') {
    childText = children.props.children;
  }

  const externalAriaLabel = `${childText} (opens in new tab)`;

  const externalProps = isExternalUrl
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': ariaLabelProp ?? externalAriaLabel,
      }
    : {};

  return (
    <a
      href={disabled ? undefined : href}
      className={cn(
        linkVariants({
          variant,
          size,
          disabled,
          loading: isLoading,
          className,
        })
      )}
      {...(disabled ? { role: 'link', 'aria-disabled': true } : {})}
      {...(!disabled ? externalProps : {})}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          {children}
        </>
      ) : (
        <>
          {children}
          {isExternalUrl &&
            showExternalIcon &&
            variant !== 'button' &&
            variant !== 'button-outline' && <ExternalLink className="ml-1 inline-block h-4 w-4" />}
        </>
      )}
    </a>
  );
}

// Specialized link components
function InlineLink(props: Omit<LinkProps, 'variant'>) {
  return <Link {...props} variant="inline" size={undefined} />;
}

function UtilityLink(props: Omit<LinkProps, 'variant'>) {
  return <Link {...props} variant="utility" />;
}

function ButtonLink(props: Omit<LinkProps, 'variant'>) {
  return <Link {...props} variant="button" />;
}

function MetadataLink(props: Omit<LinkProps, 'variant'>) {
  return <Link {...props} variant="metadata" />;
}

function BreadcrumbLink(props: Omit<LinkProps, 'variant'>) {
  return <Link {...props} variant="breadcrumb" />;
}

export { Link, linkVariants, InlineLink, UtilityLink, ButtonLink, MetadataLink, BreadcrumbLink };
export type { LinkProps };
