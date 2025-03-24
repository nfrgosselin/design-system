'use client';

import * as React from 'react';
import { forwardRef } from 'react';
import { Loader2, ChevronDown } from 'lucide-react';
import { Button } from '../../components/forms/button';
import type { BlogPost, SanityImageReference } from '../../types/blog';
import { ArticleCard } from '../../components/data-display/card';
import { formatDate } from '../../lib/utils';
import { cn } from '../../lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const POSTS_PER_PAGE = 6;

const loadMorePostsVariants = cva(['grid', 'gap-6'], {
  variants: {
    columns: {
      '1': 'grid-cols-1',
      '2': 'grid-cols-1 md:grid-cols-2',
      '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    columns: '3',
    size: 'md',
  },
});

export interface LoadMorePostsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadMorePostsVariants> {
  initialPosts: BlogPost[];
  totalPosts: number;
  urlBuilder?: (data: SanityImageReference) => string | undefined;
}

export const LoadMorePosts = forwardRef<HTMLDivElement, LoadMorePostsProps>(
  ({ initialPosts, totalPosts, className, columns, size, urlBuilder, ...props }, ref) => {
    const [posts, setPosts] = React.useState(initialPosts);
    const [isLoadingMore, setIsLoadingMore] = React.useState(false);
    const [error, setError] = React.useState<Error | null>(null);
    const [isMobile, setIsMobile] = React.useState(false);

    // Default URL builder function if none provided
    const defaultUrlBuilder =
      urlBuilder ||
      ((image: SanityImageReference) => {
        if (!image) return undefined;
        // This assumes the image has a url method from Sanity
        return image.url ? image.url() : undefined;
      });

    // Detect if we're on a mobile device
    React.useEffect(() => {
      type WindowWithOpera = Window & { opera?: unknown };
      const userAgent = (navigator.userAgent ||
        navigator.vendor ||
        ((window as WindowWithOpera).opera as string | undefined) ||
        '') as string;
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      setIsMobile(mobileRegex.test(userAgent.toLowerCase()));
    }, []);

    // Calculate if there are more posts to load
    const hasMore = posts.length < totalPosts;

    // Handle loading more posts
    const handleLoadMore = async () => {
      setIsLoadingMore(true);
      setError(null);

      try {
        let newPosts;

        // For mobile devices, use the server-side API route as a fallback
        if (isMobile) {
          // Add a small delay on mobile to ensure network stability
          await new Promise(resolve => setTimeout(resolve, 500));

          // Use fetch with the server-side API route
          const response = await fetch(`/api/posts?limit=${POSTS_PER_PAGE}&offset=${posts.length}`);

          if (!response.ok) {
            throw new Error(`Server API returned ${response.status}: ${response.statusText}`);
          }

          const data = await response.json();
          newPosts = data.posts;
        } else {
          // This should be replaced with the actual client query method in your app
          const response = await fetch(`/api/posts?limit=${POSTS_PER_PAGE}&offset=${posts.length}`);

          if (!response.ok) {
            throw new Error(`API returned ${response.status}: ${response.statusText}`);
          }

          const data = await response.json();
          newPosts = data.posts;
        }

        if (newPosts.length === 0) {
          return;
        }

        setPosts(prevPosts => [...prevPosts, ...newPosts]);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoadingMore(false);
      }
    };

    return (
      <div className={cn(loadMorePostsVariants({ columns, size }), className)} ref={ref} {...props}>
        {/* Show all loaded posts */}
        {posts.map(post => (
          <ArticleCard
            key={post._id}
            href={`/writing/${post.slug}`}
            title={post.title}
            subtitle={post.subtitle}
            date={formatDate(post.publishedAt)}
            image={post.mainImage ? defaultUrlBuilder(post.mainImage) : undefined}
            category={post.categories?.[0]?.title}
            size="sm"
            hover="subtle"
          />
        ))}

        {/* Show any error that occurred */}
        {error && (
          <div className="col-span-full mt-4 text-center text-red-500">
            Error loading posts: {error.message}
          </div>
        )}

        {hasMore && (
          <div className="col-span-full mt-8 flex justify-center">
            <Button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              variant="outline-accent"
              size="sm"
              icon={isLoadingMore ? Loader2 : ChevronDown}
            >
              {isLoadingMore ? 'Loading...' : 'Load More Posts'}
            </Button>
          </div>
        )}
      </div>
    );
  }
);

LoadMorePosts.displayName = 'LoadMorePosts';
