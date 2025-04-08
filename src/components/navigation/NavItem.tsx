import { cn } from '@/lib/utils';
import { Link } from './link';
import { NavText } from '../typography/ui/NavText';
import { NamedIcon } from '../utils/namedIcon';
import type { IconName } from '../utils/namedIcon';
import type { LinkProps } from './link';

export interface NavItemProps extends Omit<LinkProps, 'variant' | 'size'> {
  /**
   * The navigation variant that determines the styling and layout
   */
  variant?: 'top' | 'side';

  /**
   * Optional icon to display with the nav item
   */
  icon?: IconName;

  /**
   * Whether to only show the icon without text
   */
  iconOnly?: boolean;

  /**
   * The position of the icon relative to the text
   */
  iconPosition?: 'start' | 'end';

  /**
   * Whether the item is currently active
   */
  isActive?: boolean;

  /**
   * Typography variant for the nav text
   */
  textVariant?: 'default' | 'active' | 'muted';

  /**
   * Size variant for the nav text
   */
  size?: 'sm' | 'base';

  /**
   * Text transform option
   */
  transform?: 'uppercase' | 'none';

  /**
   * Whether to show an underline effect
   */
  underline?: boolean;

  /**
   * Horizontal alignment of the nav item
   */
  align?: 'left' | 'center' | 'right';
}

/**
 * NavItem component that combines navigation, layout, and typography.
 * Provides a complete navigation item solution with icon support and text styling.
 */
export function NavItem({
  variant = 'top',
  icon,
  iconOnly = false,
  iconPosition = 'start',
  className,
  children,
  isActive,
  textVariant = 'default',
  size = 'base',
  transform = 'uppercase',
  underline = false,
  align = 'left',
  ...props
}: NavItemProps) {
  const styles = {
    base: 'inline-flex items-center transition-colors duration-150 group',
    variants: {
      top: cn(
        'py-2 relative w-fit',
        !isActive && [
          'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand',
          'after:transition-all after:duration-200 after:ease-out',
          'hover:after:w-full after:w-0',
        ]
      ),
      side: cn(
        'w-full rounded-md px-4 py-2',
        isActive
          ? 'bg-background-subtle text-foreground'
          : 'text-muted hover:bg-background-subtle hover:text-foreground'
      ),
    },
    iconOnly: 'justify-center p-2',
    iconGap: icon ? 'gap-3' : '',
    icon: {
      default: cn(
        'shrink-0 transition-colors duration-150',
        isActive
          ? 'text-brand'
          : textVariant === 'muted'
            ? 'text-muted group-hover:text-brand'
            : 'text-foreground group-hover:text-brand'
      ),
      end: 'ml-auto',
    },
    align: {
      left: '',
      center: 'mx-auto',
      right: 'ml-auto',
    },
  };

  return (
    <Link
      className={cn(
        styles.base,
        !iconOnly && styles.variants[variant],
        iconOnly && styles.iconOnly,
        styles.iconGap,
        styles.align[align],
        'no-underline',
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'start' && (
        <NamedIcon name={icon} size="sm" className={styles.icon.default} />
      )}
      {!iconOnly && (
        <NavText
          variant={isActive ? 'active' : textVariant}
          size={size}
          transform={transform}
          underline={underline}
        >
          {children}
        </NavText>
      )}
      {icon && iconPosition === 'end' && (
        <NamedIcon name={icon} size="sm" className={cn(styles.icon.default, styles.icon.end)} />
      )}
    </Link>
  );
}
