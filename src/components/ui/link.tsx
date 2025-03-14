import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ExternalLink, Loader2 } from 'lucide-react';

const linkVariants = cva(
  [
    'relative',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-900',
  ],
  {
    variants: {
      variant: {
        // Inline content links - Freight Text Pro
        prose:
          'font-serif text-primary underline underline-offset-4 decoration-primary hover:decoration-primary visited:text-coral visited:decoration-coral',

        // Navigation links - Inter
        nav: 'font-sans text-sm font-medium text-stone-900 hover:text-primary relative after:absolute after:bottom-[-0.25em] after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-100 after:ease-out hover:after:scale-x-100',
        'nav-active':
          'font-sans text-sm font-medium text-primary after:absolute after:bottom-[-0.25em] after:left-0 after:h-[1px] after:w-full after:bg-primary',

        // Side navigation links - smaller underline offset
        'nav-side': 'font-sans text-sm font-medium text-stone-600 hover:text-primary',
        'nav-side-active': 'font-sans text-sm font-medium text-primary',

        // Footer/utility links
        utility: 'font-sans text-xs text-stone-500 hover:text-stone-700',

        // Standalone links (not in paragraph)
        standalone: 'font-sans text-sm font-medium text-primary hover:text-primary',
        'standalone-icon-right':
          'font-sans text-sm font-medium text-primary hover:text-primary inline-flex items-center gap-2',
        'standalone-icon-left':
          'font-sans text-sm font-medium text-primary hover:text-primary inline-flex items-center gap-2 flex-row-reverse',

        // Button-like links
        button:
          'inline-flex items-center justify-center h-10 px-6 font-sans text-sm font-medium bg-black text-white border-[1.5px] border-black rounded-md hover:bg-white hover:text-black',
        'button-outline':
          'inline-flex items-center justify-center h-10 px-6 font-sans text-sm font-medium border border-stone-200 text-stone-900 rounded-md hover:border-stone-900',
        'button-accent':
          'inline-flex items-center justify-center h-10 px-6 font-sans text-sm font-medium bg-white text-black border-[1.5px] border-black rounded-md hover:bg-primary hover:text-white hover:border-primary',

        // Small/metadata links
        metadata: 'font-sans text-xs text-stone-500 hover:text-stone-700 hover:underline',

        // Breadcrumb links
        breadcrumb: 'font-sans text-sm text-stone-600 hover:text-stone-900 hover:underline',
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
        true: 'cursor-wait',
      },
    },
    defaultVariants: {
      variant: 'prose',
      size: 'md',
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  isExternal?: boolean;
  showExternalIcon?: boolean;
  isActive?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Link({
  href,
  variant,
  size,
  isExternal,
  showExternalIcon = true,
  isActive,
  isLoading,
  disabled,
  className,
  children,
  ...props
}: LinkProps) {
  const isExternalUrl = isExternal || (href && href.startsWith('http'));
  const externalProps = isExternalUrl
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `${typeof children === 'string' ? children : ''} (opens in new tab)`,
      }
    : {};

  // For navigation links, use the active variant if isActive is true
  const effectiveVariant =
    isActive && variant?.startsWith('nav') ? (`${variant}-active` as typeof variant) : variant;

  return (
    <a
      href={disabled ? undefined : href}
      className={cn(
        linkVariants({
          variant: effectiveVariant,
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
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {children}
        </>
      ) : (
        <>
          {children}
          {isExternalUrl &&
            showExternalIcon &&
            variant !== 'button' &&
            variant !== 'button-outline' && <ExternalLink className="ml-1 inline-block h-3 w-3" />}
        </>
      )}
    </a>
  );
}

// Specialized link components for specific use cases
export function InlineLink(props: Omit<LinkProps, 'variant'>) {
  return <Link {...props} variant="prose" />;
}

export function NavLink(
  props: Omit<LinkProps, 'variant'> & {
    variant?: Extract<
      VariantProps<typeof linkVariants>['variant'],
      'nav' | 'nav-side' | 'nav-active' | 'nav-side-active'
    >;
  }
) {
  const effectiveVariant = props.variant || (props.isActive ? 'nav-active' : 'nav');
  return <Link {...props} variant={effectiveVariant} />;
}

export function UtilityLink(props: Omit<LinkProps, 'variant'>) {
  return <Link {...props} variant="utility" />;
}

export function ButtonLink(props: Omit<LinkProps, 'variant'>) {
  return <Link {...props} variant="button" />;
}

export function MetadataLink(props: Omit<LinkProps, 'variant'>) {
  return <Link {...props} variant="metadata" />;
}

export function BreadcrumbLink(props: Omit<LinkProps, 'variant'>) {
  return <Link {...props} variant="breadcrumb" />;
}
