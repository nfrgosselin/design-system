import { cn } from '../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// Compatibility components for Link and Image if Next.js is not available
// Replace these with your actual Link and Image components when integrating
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

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  quality?: number;
  sizes?: string;
}

const Image = ({ src, alt, fill, className, quality, sizes, ...props }: ImageProps) => {
  return fill ? (
    <div className="relative h-full w-full">
      <img
        src={src}
        alt={alt}
        className={cn('absolute inset-0 h-full w-full object-cover', className)}
        {...props}
      />
    </div>
  ) : (
    <img src={src} alt={alt} className={className} {...props} />
  );
};

// Base card styles
const cardBase =
  'rounded-lg border-2 border-stone-900 bg-background transition-all duration-100 hover:border-ds-primary hover:shadow-[0_0_0_2px_hsl(var(--ds-primary))] group';

// Article/Content Card
const articleCardVariants = cva(cardBase, {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
    hover: {
      subtle: '',
      lift: '',
      none: '',
    },
  },
  defaultVariants: {
    size: 'md',
    hover: 'none',
  },
});

export interface ArticleCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof articleCardVariants> {
  title: string;
  date?: string;
  subtitle?: string;
  excerpt?: string;
  category?: string;
  categoryColor?: 'seafoam' | 'coral' | 'navy' | 'amber' | 'lagoon' | 'peach' | 'slate' | 'gold';
  href?: string;
  image?: string;
  aspectRatio?: 'video' | 'square' | 'wide';
}

export function ArticleCard({
  className,
  title,
  date,
  subtitle,
  excerpt,
  category,
  categoryColor = 'seafoam',
  href,
  image,
  aspectRatio = 'video',
  size,
  hover,
  ...props
}: ArticleCardProps) {
  const imageHeight =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'video'
        ? 'aspect-video'
        : 'aspect-[2/1]';
  const padding = size === 'sm' ? 'p-4' : size === 'lg' ? 'p-8' : 'p-6';

  const content = (
    <div className={cn('flex flex-col', image && 'h-full')}>
      {image && (
        <div
          className={cn(
            'relative w-full overflow-hidden rounded-t-md border-b-2 border-stone-900 group-hover:border-primary',
            imageHeight
          )}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            quality={95}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
      )}
      <div className={cn('flex flex-col', padding, image && 'rounded-t-none')}>
        {category && (
          <div
            className={cn(
              'mb-2 inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white',
              {
                'bg-seafoam': categoryColor === 'seafoam',
                'bg-coral': categoryColor === 'coral',
                'bg-navy': categoryColor === 'navy',
                'bg-amber': categoryColor === 'amber',
                'bg-lagoon': categoryColor === 'lagoon',
                'bg-peach': categoryColor === 'peach',
                'bg-slate': categoryColor === 'slate',
                'bg-gold': categoryColor === 'gold',
              }
            )}
          >
            {category}
          </div>
        )}
        <div className="flex flex-1 flex-col justify-between">
          <div className="stack-compact">
            <h3
              className={cn(
                'font-serif line-clamp-2 font-medium text-stone-900 group-hover:text-ds-primary',
                {
                  'text-xl mb-1': size === 'sm',
                  'text-2xl mb-2': size === 'md',
                  'text-3xl mb-3': size === 'lg',
                }
              )}
            >
              {title}
            </h3>
            {subtitle ? (
              <p
                className={cn('font-serif line-clamp-2 text-stone-600', {
                  'text-base': size === 'sm',
                  'text-lg': size === 'md',
                  'text-xl': size === 'lg',
                })}
              >
                {subtitle}
              </p>
            ) : excerpt ? (
              <p
                className={cn('font-serif line-clamp-2 text-stone-600', {
                  'text-base': size === 'sm',
                  'text-lg': size === 'md',
                  'text-xl': size === 'lg',
                })}
              >
                {excerpt}
              </p>
            ) : null}
          </div>
          {date && (
            <div
              className={cn(
                'mt-4 font-sans text-stone-500',
                size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-sm'
              )}
            >
              {date}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          articleCardVariants({ size, hover }),
          'flex cursor-pointer flex-col',
          className
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={cn(articleCardVariants({ size, hover }), 'flex flex-col', className)}
      {...props}
    >
      {content}
    </div>
  );
}

// Project/Work Card
const projectCardVariants = cva(cardBase, {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
    hover: {
      subtle: '',
      lift: '',
      none: '',
    },
  },
  defaultVariants: {
    size: 'md',
    hover: 'none',
  },
});

export interface ProjectCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof projectCardVariants> {
  title: string;
  description: string;
  status?: 'active' | 'completed' | 'archived';
  technologies?: Array<{
    name: string;
    color?: 'seafoam' | 'coral' | 'navy' | 'amber' | 'lagoon' | 'peach' | 'slate' | 'gold';
  }>;
  metrics?: Array<{
    label: string;
    value: string | number;
  }>;
  href?: string;
  image?: string;
  aspectRatio?: 'video' | 'square' | 'wide';
}

export function ProjectCard({
  className,
  title,
  description,
  status,
  technologies,
  metrics,
  href,
  image,
  aspectRatio = 'video',
  size,
  hover,
  ...props
}: ProjectCardProps) {
  const imageHeight =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'video'
        ? 'aspect-video'
        : 'aspect-[2/1]';
  const padding = size === 'sm' ? 'p-4' : size === 'lg' ? 'p-8' : 'p-6';

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-warning text-white';
      case 'completed':
        return 'bg-success text-white';
      case 'archived':
        return 'bg-error text-white';
      default:
        return 'bg-stone-100 text-white';
    }
  };

  const content = (
    <div className={cn('flex flex-col', image && 'h-full')}>
      {image && (
        <div className={cn('relative w-full overflow-hidden rounded-t-lg', imageHeight)}>
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className={cn('flex flex-col', padding, image && 'flex-1')}>
        <div className="flex items-start justify-between">
          <h3 className="font-serif text-lg font-medium text-stone-900 group-hover:text-ds-primary">
            {title}
          </h3>
          {status && (
            <span
              className={cn(
                'inline-flex select-none items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize',
                getStatusColor(status)
              )}
            >
              {status}
            </span>
          )}
        </div>
        <p className="mt-2 font-serif text-base text-stone-600">{description}</p>
        {technologies && (
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map(tech => (
              <span
                key={tech.name}
                className={cn(
                  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white',
                  {
                    'bg-seafoam': tech.color === 'seafoam',
                    'bg-coral': tech.color === 'coral',
                    'bg-navy': tech.color === 'navy',
                    'bg-amber': tech.color === 'amber',
                    'bg-lagoon': tech.color === 'lagoon',
                    'bg-peach': tech.color === 'peach',
                    'bg-slate': tech.color === 'slate',
                    'bg-gold': tech.color === 'gold',
                  }
                )}
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}
        {metrics && (
          <div className="mt-4 grid grid-cols-2 gap-4 border-t pt-4">
            {metrics.map(({ label, value }) => (
              <div key={label} className="space-y-1">
                <div className="text-xs font-medium text-stone-500">{label}</div>
                <div className="text-sm font-semibold">{value}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          projectCardVariants({ size, hover }),
          'flex cursor-pointer flex-col',
          className
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={cn(projectCardVariants({ size, hover }), 'flex flex-col', className)}
      {...props}
    >
      {content}
    </div>
  );
}

// Interactive/Feature Card
const featureCardVariants = cva(cardBase, {
  variants: {
    size: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
    variant: {
      default: '',
      highlight: 'bg-blue-50/30',
      callout: 'border-2',
    },
    hover: {
      subtle: '',
      lift: '',
      none: '',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    hover: 'none',
  },
});

export interface FeatureCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof featureCardVariants> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  expanded?: boolean;
  onToggle?: () => void;
}

export function FeatureCard({
  className,
  title,
  description,
  icon,
  action,
  expanded,
  onToggle,
  size,
  variant,
  hover,
  children,
  ...props
}: FeatureCardProps) {
  return (
    <div className={cn(featureCardVariants({ size, variant, hover }), className)} {...props}>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          {icon && <div className="flex-shrink-0 text-stone-600">{icon}</div>}
          <div className="flex-1 space-y-1">
            <h3 className="font-serif text-lg font-medium text-stone-900 group-hover:text-ds-primary">
              {title}
            </h3>
            <p className="font-serif text-base text-stone-600">{description}</p>
          </div>
        </div>
        {expanded && <div className="border-t pt-4">{children}</div>}
        {action && <div className="flex justify-end pt-4">{action}</div>}
      </div>
    </div>
  );
}

// Export the variant functions for use in other components
export { articleCardVariants, projectCardVariants, featureCardVariants };
