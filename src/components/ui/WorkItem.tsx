import { cn } from '@/lib/utils';
import { Pill } from './Pill';
import { Image } from '../utils/image';
import dynamic from 'next/dynamic';

// Dynamically import Next.js Link with fallback
const NextLink = dynamic(() => import('next/link'), { ssr: true });

export interface WorkItemProps {
  /**
   * Project name
   */
  projectName: string;

  /**
   * Project description
   */
  description: string;

  /**
   * Project image URL
   */
  imageUrl: string;

  /**
   * Primary service/category for the pill
   */
  primaryService: string;

  /**
   * Project year or year range
   * Can be a single year (e.g. "2024") or a range (e.g. "2021-2023")
   */
  year: string;

  /**
   * URL to link to when the work item is clicked
   * External URLs will open in a new tab
   */
  url?: string;

  /**
   * Design variant of the work item
   * @default 'v1'
   */
  variant?: 'v1' | 'collapsed' | 'featured';

  /**
   * Text to display next to the pill in featured variant
   */
  featuredText?: string;

  /**
   * Color variant for the service pill
   * @default 'marine'
   */
  pillColor?:
    | 'marine'
    | 'ocean'
    | 'sunset'
    | 'sun'
    | 'seafoam'
    | 'coral'
    | 'navy'
    | 'amber'
    | 'lagoon'
    | 'peach'
    | 'slate'
    | 'gold'
    | 'orchid'
    | 'surf'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';

  /**
   * Optional className for custom styling
   */
  className?: string;
}

export function WorkItem({
  projectName,
  description,
  imageUrl,
  primaryService,
  year,
  url,
  variant = 'v1',
  featuredText,
  pillColor = 'marine',
  className,
}: WorkItemProps) {
  // Dynamic hover styles based on pill color
  const hoverStyles = {
    marine: 'hover:border-marine hover:bg-marine-muted',
    ocean: 'hover:border-ocean hover:bg-ocean-muted',
    sunset: 'hover:border-sunset hover:bg-sunset-muted',
    sun: 'hover:border-sun hover:bg-sun-muted',
    seafoam: 'hover:border-seafoam hover:bg-seafoam-muted',
    coral: 'hover:border-coral hover:bg-coral-muted',
    navy: 'hover:border-navy hover:bg-navy-muted',
    amber: 'hover:border-amber hover:bg-amber-muted',
    lagoon: 'hover:border-lagoon hover:bg-lagoon-muted',
    peach: 'hover:border-peach hover:bg-peach-muted',
    slate: 'hover:border-slate hover:bg-slate-muted',
    gold: 'hover:border-gold hover:bg-gold-muted',
    orchid: 'hover:border-orchid hover:bg-orchid-muted',
    surf: 'hover:border-surf hover:bg-surf-muted',
    success: 'hover:border-success hover:bg-success-subtle',
    warning: 'hover:border-warning hover:bg-warning-subtle',
    error: 'hover:border-error hover:bg-error-subtle',
    info: 'hover:border-info hover:bg-info-subtle',
  }[pillColor];

  // Dynamic text color styles based on pill color
  const textColorStyles = {
    marine: 'group-hover:text-marine',
    ocean: 'group-hover:text-ocean',
    sunset: 'group-hover:text-sunset',
    sun: 'group-hover:text-sun',
    seafoam: 'group-hover:text-seafoam',
    coral: 'group-hover:text-coral',
    navy: 'group-hover:text-navy',
    amber: 'group-hover:text-amber',
    lagoon: 'group-hover:text-lagoon',
    peach: 'group-hover:text-peach',
    slate: 'group-hover:text-slate',
    gold: 'group-hover:text-gold',
    orchid: 'group-hover:text-orchid',
    surf: 'group-hover:text-surf',
    success: 'group-hover:text-success',
    warning: 'group-hover:text-warning',
    error: 'group-hover:text-error',
    info: 'group-hover:text-info',
  }[pillColor];

  const isExternalUrl = url?.startsWith('http') || url?.startsWith('//');

  const V1Content = () => (
    <>
      {/* Mobile Layout */}
      <div className="block md:hidden space-y-4">
        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-md bg-stone-100">
          <Image
            src={imageUrl}
            alt={projectName}
            aspect="wide"
            radius="md"
            fit="cover"
            showLoadingBackground
          />
        </div>

        {/* Title */}
        <h3
          className={cn(
            'font-sans font-medium text-lg tracking-wide transition-colors duration-ultra-fast',
            textColorStyles
          )}
        >
          {projectName}
        </h3>

        {/* Description */}
        <p className="text-stone-500 text-base">{description}</p>

        {/* Pill and Date */}
        <div className="flex justify-between items-center">
          <Pill color={pillColor} size="md">
            {primaryService}
          </Pill>
          <span className="text-stone-500 text-sm">{year}</span>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-element">
        {/* Left column - Image */}
        <div>
          <div className="relative w-full max-w-[280px] overflow-hidden rounded-md bg-stone-100">
            <Image
              src={imageUrl}
              alt={projectName}
              aspect="wide"
              radius="md"
              fit="cover"
              showLoadingBackground
            />
          </div>
        </div>

        {/* Middle column - Title and Description */}
        <div className="flex flex-col">
          <h3
            className={cn(
              'font-sans font-medium text-xl tracking-wide transition-colors duration-ultra-fast',
              textColorStyles
            )}
          >
            {projectName}
          </h3>
          <p className="text-stone-500 text-base mt-2">{description}</p>
        </div>

        {/* Right column - Pill and Date */}
        <div className="flex flex-col items-end">
          <Pill color={pillColor} size="md">
            {primaryService}
          </Pill>
          <span className="text-stone-500 text-base mt-2 pr-1">{year}</span>
        </div>
      </div>
    </>
  );

  const CollapsedContent = () => {
    const truncatedDescription =
      description.length > 80 ? `${description.slice(0, 80)}...` : description;

    return (
      <>
        {/* Mobile layout */}
        <div className="flex flex-col gap-2 md:hidden">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Pill color={pillColor} size="sm" variant="fixed" className="mt-1">
                {primaryService}
              </Pill>
              <h3
                className={cn(
                  'font-sans font-medium text-lg tracking-wide text-stone-700',
                  `group-hover:text-${pillColor}`,
                  'transition-colors duration-200'
                )}
              >
                {projectName}
              </h3>
            </div>
            <span className="text-stone-500 text-base font-medium font-sans shrink-0 pr-1 mt-0.5">
              {year}
            </span>
          </div>
          <p className="text-stone-500 text-sm font-sans line-clamp-1">{truncatedDescription}</p>
        </div>

        {/* Desktop layout - preserving existing styles */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-element">
          <div className="flex items-start gap-4">
            <Pill color={pillColor} size="md" variant="fixed">
              {primaryService}
            </Pill>
            <h3
              className={cn(
                'font-sans font-medium text-lg tracking-wide text-stone-700',
                `group-hover:text-${pillColor}`,
                'transition-colors duration-200'
              )}
            >
              {projectName}
            </h3>
          </div>

          <div className="col-span-2 flex justify-between items-start">
            <p className="text-stone-500 text-sm font-sans line-clamp-1 pt-1 pr-8">
              {truncatedDescription}
            </p>
            <span className="text-stone-500 text-base font-medium font-sans shrink-0 pr-1">
              {year}
            </span>
          </div>
        </div>
      </>
    );
  };

  const FeaturedContent = () => (
    <div className="flex flex-col md:grid md:grid-cols-3 md:gap-element">
      {/* Mobile layout */}
      <div className="md:hidden">
        {/* Top two-column grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col gap-3">
            <h3 className={cn('font-sans font-medium text-xl tracking-wide', `text-${pillColor}`)}>
              {projectName}
            </h3>
            <p className="text-stone-500 text-base line-clamp-3">{description}</p>
          </div>
          <div className="relative w-full">
            <Image
              src={imageUrl}
              alt={projectName}
              aspect="wide"
              radius="md"
              fit="cover"
              showLoadingBackground
            />
          </div>
        </div>
        {/* Bottom metadata row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Pill color={pillColor} size="sm" variant="fixed">
              {primaryService}
            </Pill>
            {featuredText && (
              <span className="uppercase text-xs font-medium tracking-wider text-stone-900 pt-0.5">
                {featuredText}
              </span>
            )}
          </div>
          <span className="text-stone-500 text-base font-medium font-sans pr-1">{year}</span>
        </div>
      </div>

      {/* Desktop layout - preserving all existing styles */}
      <div className="hidden md:flex md:flex-col gap-3">
        <h3 className={cn('font-sans font-medium text-xl tracking-wide ml-1', `text-${pillColor}`)}>
          {projectName}
        </h3>
        <div className="flex items-center gap-4">
          <Pill color={pillColor} size="md" variant="fixed">
            {primaryService}
          </Pill>
          {featuredText && (
            <span className="uppercase text-xs font-medium tracking-wider text-stone-900 pt-0.5">
              {featuredText}
            </span>
          )}
        </div>
      </div>

      <div className="hidden md:block pt-0.5">
        <p className="text-stone-500 font-sans text-base line-clamp-3">{description}</p>
      </div>

      <div className="hidden md:flex md:flex-row md:justify-between md:items-start">
        <div className="relative w-full max-w-[240px] overflow-hidden rounded-md bg-stone-100">
          <Image
            src={imageUrl}
            alt={projectName}
            aspect="wide"
            radius="md"
            fit="cover"
            showLoadingBackground
          />
        </div>
        <span className="text-stone-500 text-base font-medium font-sans pr-1">{year}</span>
      </div>
    </div>
  );

  const content = {
    v1: <V1Content />,
    collapsed: <CollapsedContent />,
    featured: <FeaturedContent />,
  }[variant];

  const containerClasses = cn(
    'border-t-2 group overflow-hidden bg-white py-4',
    variant === 'featured'
      ? cn(
          {
            'border-marine': pillColor === 'marine',
            'border-ocean': pillColor === 'ocean',
            'border-sunset': pillColor === 'sunset',
            'border-sun': pillColor === 'sun',
            'border-seafoam': pillColor === 'seafoam',
            'border-coral': pillColor === 'coral',
            'border-navy': pillColor === 'navy',
            'border-amber': pillColor === 'amber',
            'border-lagoon': pillColor === 'lagoon',
            'border-peach': pillColor === 'peach',
            'border-slate': pillColor === 'slate',
            'border-gold': pillColor === 'gold',
            'border-orchid': pillColor === 'orchid',
            'border-surf': pillColor === 'surf',
            'border-success': pillColor === 'success',
            'border-warning': pillColor === 'warning',
            'border-error': pillColor === 'error',
            'border-info': pillColor === 'info',
          },
          `hover:bg-${pillColor}-muted`
        )
      : cn(
          'border-[#E7E5E4_transparent]', // 1px stone-200, 1px transparent
          {
            'hover:border-marine': pillColor === 'marine',
            'hover:border-ocean': pillColor === 'ocean',
            'hover:border-sunset': pillColor === 'sunset',
            'hover:border-sun': pillColor === 'sun',
            'hover:border-seafoam': pillColor === 'seafoam',
            'hover:border-coral': pillColor === 'coral',
            'hover:border-navy': pillColor === 'navy',
            'hover:border-amber': pillColor === 'amber',
            'hover:border-lagoon': pillColor === 'lagoon',
            'hover:border-peach': pillColor === 'peach',
            'hover:border-slate': pillColor === 'slate',
            'hover:border-gold': pillColor === 'gold',
            'hover:border-orchid': pillColor === 'orchid',
            'hover:border-surf': pillColor === 'surf',
            'hover:border-success': pillColor === 'success',
            'hover:border-warning': pillColor === 'warning',
            'hover:border-error': pillColor === 'error',
            'hover:border-info': pillColor === 'info',
          },
          'transition-[border-color,background-color] duration-200',
          hoverStyles
        ),
    url && 'cursor-pointer',
    className
  );

  if (!url) {
    return <div className={containerClasses}>{content}</div>;
  }

  // Use regular anchor for external URLs or when Next.js Link is not available
  if (isExternalUrl || !NextLink) {
    return (
      <a
        href={url}
        target={isExternalUrl ? '_blank' : undefined}
        rel={isExternalUrl ? 'noopener noreferrer' : undefined}
        className={containerClasses}
      >
        {content}
      </a>
    );
  }

  // Use Next.js Link for internal navigation when available
  return (
    <NextLink href={url} className={containerClasses}>
      {content}
    </NextLink>
  );
}
