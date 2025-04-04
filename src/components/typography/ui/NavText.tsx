import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface NavTextProps extends TextProps {
  variant?: 'default' | 'active' | 'muted';
  size?: 'sm' | 'base';
  transform?: 'uppercase' | 'none';
  underline?: boolean;
}

/**
 * NavText component for navigation items.
 * Used for menu items, links, and other navigational elements.
 */
export function NavText({
  variant = 'default',
  size = 'base',
  transform = 'uppercase',
  underline = false,
  className,
  children,
  ...props
}: NavTextProps) {
  const styles = {
    size: {
      sm: 'text-sm',
      base: 'text-base',
    },
    variant: {
      default: 'text-stone-700 font-medium hover:text-primary',
      active: 'text-ds-primary font-medium',
      muted: 'text-stone-500 font-medium hover:text-primary',
    },
    transform: {
      uppercase: 'uppercase tracking-wider',
      none: '',
    },
  };

  return (
    <Text
      as="span"
      className={cn(
        'font-sans transition-colors duration-150 relative',
        underline && 'pb-0.5',
        underline &&
          'after:absolute after:bottom-0 after:left-0 after:h-px after:bg-primary after:transition-all after:duration-200 after:ease-out hover:after:w-full',
        underline && 'after:w-0',
        styles.size[size],
        styles.variant[variant],
        styles.transform[transform],
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
}
