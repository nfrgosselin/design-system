import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';
import { BlogPostPreview } from './blog-post-preview';
import { BlogPost } from '../../types/blog';
import { Button } from '../../components/forms/button';

// Compatibility component for Link if Next.js is not available
const Link = ({
  href,
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => {
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
};

export interface BlogPostListProps extends HTMLAttributes<HTMLDivElement> {
  posts: BlogPost[];
  showMore?: boolean;
}

export function BlogPostList({ posts, showMore = false, className, ...props }: BlogPostListProps) {
  return (
    <div className={cn('flex flex-col', className)} {...props}>
      <div className="space-y-1">
        {posts.map(post => (
          <BlogPostPreview
            key={post._id}
            title={post.title}
            subtitle={post.subtitle}
            publishDate={new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
            href={`/writing/${post.slug}`}
          />
        ))}
      </div>
      {showMore && (
        <Link href="/writing" className="self-end">
          <Button variant="outline-accent" size="sm" className="mt-2">
            See all <span aria-hidden="true">→</span>
          </Button>
        </Link>
      )}
    </div>
  );
}
