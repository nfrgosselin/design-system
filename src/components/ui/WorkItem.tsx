import * as React from 'react';
import { ThreeColumnGrid } from '../layout/core/grid';
import { cn } from '@/lib/utils';
import { Pill } from './Pill';
import { Image } from '../utils/image';

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

  return (
    <ThreeColumnGrid
      gap="element"
      className={cn(
        'border-t border-stone-200 py-6 transition-colors duration-ultra-fast group',
        'hover:border-t-2 hover:pt-[23px] hover:pb-6',
        hoverStyles,
        className
      )}
    >
      {/* Left column - Image */}
      <div>
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
      </div>

      {/* Middle column - Title and Description */}
      <div className="flex flex-col">
        <h3
          className={cn(
            'font-sans font-medium text-lg tracking-wide transition-colors duration-ultra-fastfast',
            textColorStyles
          )}
        >
          {projectName}
        </h3>
        <p className="text-stone-500 text-sm mt-2">{description}</p>
      </div>

      {/* Right column - Pill and Date */}
      <div className="flex flex-col items-end">
        <Pill color={pillColor} size="sm">
          {primaryService}
        </Pill>
        <span className="text-stone-500 text-sm mt-2">{year}</span>
      </div>
    </ThreeColumnGrid>
  );
}
