import { cn } from '@/lib/utils';

export interface PillProps {
  /**
   * The text content of the pill
   */
  children: React.ReactNode;

  /**
   * The color token to use
   * Can be any design system color
   */
  color?:
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
   * The size of the pill
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Optional additional className
   */
  className?: string;
}

export function Pill({ children, color = 'marine', size = 'md', className }: PillProps) {
  const styles = {
    base: 'inline-flex items-center justify-center rounded-full font-sans font-medium',
    size: {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-2 text-base',
    },
    color: {
      // Product Identity Colors
      marine: 'bg-marine-muted text-marine',
      ocean: 'bg-ocean-muted text-ocean',
      sunset: 'bg-sunset-muted text-sunset',
      sun: 'bg-sun-muted text-sun',

      // Supporting Accents
      seafoam: 'bg-seafoam-muted text-seafoam',
      coral: 'bg-coral-muted text-coral',
      navy: 'bg-navy-muted text-navy',
      amber: 'bg-amber-muted text-amber',
      lagoon: 'bg-lagoon-muted text-lagoon',
      peach: 'bg-peach-muted text-peach',
      slate: 'bg-slate-muted text-slate',
      gold: 'bg-gold-muted text-gold',

      // Status Colors
      success: 'bg-success-subtle text-success',
      warning: 'bg-warning-subtle text-warning',
      error: 'bg-error-subtle text-error',
      info: 'bg-info-subtle text-info',
    },
  };

  return (
    <span className={cn(styles.base, styles.size[size], styles.color[color], className)}>
      {children}
    </span>
  );
}
