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
  pillColor = 'marine',
  className,
}: WorkItemProps) {
  // Dynamic hover styles based on pill color
  const hoverStyles = {
    marine: 'hover:border-marine',
    ocean: 'hover:border-ocean',
    sunset: 'hover:border-sunset',
    sun: 'hover:border-sun',
    seafoam: 'hover:border-seafoam',
    coral: 'hover:border-coral',
    navy: 'hover:border-navy',
    amber: 'hover:border-amber',
    lagoon: 'hover:border-lagoon',
    peach: 'hover:border-peach',
    slate: 'hover:border-slate',
    gold: 'hover:border-gold',
    success: 'hover:border-success',
    warning: 'hover:border-warning',
    error: 'hover:border-error',
    info: 'hover:border-info',
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

  const content = (
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

  const containerClasses = cn(
    'border-t border-stone-200 py-6 transition-colors duration-ultra-fast group',
    'hover:border-t-2 hover:pt-[23px] hover:pb-6',
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
