import { cn } from '@/lib/utils';
import { type AnchorHTMLAttributes } from 'react';

// Compatibility component for Link if Next.js is not available
const Link = ({
  href,
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => {
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
};

export interface BlogPostPreviewProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  subtitle?: string;
  publishDate: string;
  href: string;
}

export function BlogPostPreview({
  title,
  subtitle,
  publishDate,
  href,
  className,
  ...props
}: BlogPostPreviewProps) {
  return (
    <Link
      href={href}
      className={cn('group flex items-start justify-between gap-8', className)}
      {...props}
    >
      <div className="flex min-w-0 items-baseline gap-3">
        <span className="prose-body whitespace-nowrap font-semibold text-stone-900 group-hover:text-primary">
          {title}
        </span>
        {subtitle && (
          <>
            <span className="shrink-0 text-stone-600 group-hover:text-primary">|</span>
            <span className="prose-body truncate text-stone-600 group-hover:text-primary">
              {subtitle}
            </span>
          </>
        )}
      </div>
      <time className="prose-caption shrink-0 text-stone-600 group-hover:text-primary">
        {publishDate}
      </time>
    </Link>
  );
}
