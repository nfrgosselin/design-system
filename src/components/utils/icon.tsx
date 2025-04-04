import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const sizeClasses = {
  xs: 'w-3 h-3' /* 12px */,
  sm: 'w-4 h-4' /* 16px */,
  md: 'w-5 h-5' /* 20px */,
  lg: 'w-6 h-6' /* 24px */,
  xl: 'w-8 h-8' /* 32px */,
  '2xl': 'w-10 h-10' /* 40px */,
} as const;

export type IconSize = keyof typeof sizeClasses;

export interface IconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** The Lucide icon component to render */
  icon: LucideIcon;
  /** The size of the icon */
  size?: IconSize;
  /** Optional label for accessibility */
  'aria-label'?: string;
}

/**
 * Icon component that renders Lucide icons with consistent sizing.
 * Uses Tailwind's text color utilities for coloring.
 *
 * @example
 * ```tsx
 * import { Mail } from 'lucide-react';
 *
 * <Icon icon={Mail} size="md" className="text-foreground" />
 * <Icon icon={Check} size="sm" className="text-success" />
 * <Icon icon={Star} size="lg" className="text-brand" />
 * ```
 */
export function Icon({
  icon: Icon,
  size = 'md',
  className,
  'aria-label': ariaLabel,
  ...props
}: IconProps) {
  return (
    <span
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      className={cn('inline-flex items-center justify-center', className)}
      {...props}
    >
      <Icon className={sizeClasses[size]} aria-hidden="true" data-testid="icon" />
    </span>
  );
}
