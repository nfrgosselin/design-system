import { cn } from '@/lib/utils';
import { Link } from './link';
import { NavText } from '../typography/ui/NavText';
import { NamedIcon } from '../utils/namedIcon';
import type { IconName } from '../utils/namedIcon';
import type { LinkProps } from './link';

export interface NavItemProps extends Omit<LinkProps, 'variant' | 'size'> {
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
  icon,
  iconOnly = false,
  iconPosition = 'start',
  className,
  children,
  isActive,
  textVariant = 'default',
  size = 'base',
  transform = 'none',
  underline = false,
  align = 'left',
  ...props
}: NavItemProps) {
  const styles = {
    base: 'inline-flex items-center transition-colors duration-150 group',
    nav: 'py-2 px-4',
    iconOnly: 'justify-center p-2',
    iconGap: icon ? 'gap-2' : '',
    icon: {
      default: cn(
        'shrink-0 transition-colors duration-150',
        'text-stone-500 group-hover:text-marine-hover',
        isActive && 'text-marine'
      ),
    },
    align: {
      left: '',
      center: 'mx-auto',
      right: 'ml-auto',
    },
  };

  return (
    <Link
      variant="nav"
      data-active={isActive ? 'true' : undefined}
      className={cn(
        styles.base,
        !iconOnly && styles.nav,
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
        <NamedIcon name={icon} size="sm" className={styles.icon.default} />
      )}
    </Link>
  );
}
