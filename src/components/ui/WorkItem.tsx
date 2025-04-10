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
   * Project year
   */
  year: string | number;

  /**
   * URL to link to when the work item is clicked
   * External URLs will open in a new tab
   */
  url?: string;

  /**
   * Design variant of the work item
   * @default 'v1'
   */
  variant?: 'v1' | 'collapsed';

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

  const CollapsedContent = () => (
    <div
      className={cn(
        'grid grid-cols-3 gap-element relative',
        'transition-[height] duration-500 ease-in-out'
      )}
    >
      {/* Left column - Pill and Title */}
      <div className="flex items-start gap-4 pt-1">
        <Pill color={pillColor} size="md" variant="fixed">
          {primaryService}
        </Pill>
        <h3
          className={cn(
            'font-sans font-medium text-lg tracking-wide',
            'transition-colors duration-50',
            textColorStyles
          )}
        >
          {projectName}
        </h3>
      </div>

      {/* Middle column - Description */}
      <div className="flex flex-col justify-start pt-1">
        <p
          className={cn(
            'text-stone-500 text-base',
            'transition-[height,opacity] duration-500 ease-in-out',
            'line-clamp-1 group-hover:line-clamp-3',
            'whitespace-normal overflow-hidden',
            'pt-1.5'
          )}
        >
          {description}
        </p>
      </div>

      {/* Right column - Date */}
      <div className="flex justify-end">
        <span className="text-stone-500 text-base pt-1">{year}</span>
      </div>
    </div>
  );

  const content = variant === 'v1' ? <V1Content /> : <CollapsedContent />;

  const containerClasses = cn(
    'border-t border-stone-200 group overflow-hidden bg-white',
    'py-6',
    'hover:border-t-2 hover:pt-[23px]',
    'transition-[height] duration-500 ease-in-out transition-[border-width,colors,background-color] duration-50',
    url && 'cursor-pointer',
    hoverStyles,
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
