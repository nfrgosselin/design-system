import { cn } from '@/lib/utils';
import { Text } from '../core/Text';
import type { TextProps } from '../core/types';

export interface NavTextProps extends TextProps {
  variant?: 'default' | 'active' | 'muted';
  size?: 'sm' | 'base';
  transform?: 'uppercase' | 'none';
  underline?: boolean;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
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
  weight = 'medium',
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
      default: 'text-stone-500 hover:text-marine-hover',
      active: 'text-marine',
      muted: 'text-stone-500 hover:text-marine-hover',
    },
    transform: {
      uppercase: 'uppercase tracking-wider',
      none: '',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  };

  return (
    <Text
      as="span"
      className={cn(
        'font-sans transition-colors duration-150 relative',
        underline && 'pb-0.5',
        underline &&
          'after:absolute after:bottom-0 after:left-0 after:h-px after:bg-marine after:transition-all after:duration-200 after:ease-out hover:after:w-full',
        underline && 'after:w-0',
        styles.size[size],
        styles.variant[variant],
        styles.transform[transform],
        styles.weight[weight],
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
}
