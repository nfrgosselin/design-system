import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const sizeClasses = {
  sm: 'w-4 h-4' /* 16px - spacing-4 */,
  md: 'w-6 h-6' /* 24px - spacing-6 */,
  lg: 'w-8 h-8' /* 32px - spacing-8 */,
  xl: 'w-12 h-12' /* 48px - spacing-12 */,
} as const;

const colorClasses = {
  default: 'text-stone-900',
  muted: 'text-stone-500',
  primary: 'text-primary',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
  info: 'text-info',
} as const;

export type IconSize = keyof typeof sizeClasses;
export type IconColor = keyof typeof colorClasses;

export interface IconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** The Lucide icon component to render */
  icon: LucideIcon;
  /** The size of the icon */
  size?: IconSize;
  /** The color variant of the icon */
  color?: IconColor;
  /** Optional label for accessibility */
  'aria-label'?: string;
}

/**
 * Icon component that renders Lucide icons with consistent sizing and colors.
 *
 * @example
 * ```tsx
 * import { Mail } from 'lucide-react';
 *
 * <Icon icon={Mail} size="md" color="primary" />
 * ```
 */
export function Icon({
  icon: Icon,
  size = 'md',
  color = 'default',
  className,
  'aria-label': ariaLabel,
  ...props
}: IconProps) {
  return (
    <span
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      className={cn('inline-flex items-center justify-center', colorClasses[color], className)}
      {...props}
    >
      <Icon className={sizeClasses[size]} aria-hidden="true" />
    </span>
  );
}
