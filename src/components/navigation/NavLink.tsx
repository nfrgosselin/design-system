import { cn } from '@/lib/utils';
import { Link } from './link';
import { NavText } from '../typography/ui/NavText';
import type { LinkProps } from './link';

export interface NavLinkProps extends Omit<LinkProps, 'variant' | 'size'> {
  isActive?: boolean;
  variant?: 'default' | 'active' | 'muted';
  size?: 'sm' | 'base';
  transform?: 'uppercase' | 'none';
  underline?: boolean;
}

/**
 * NavLink component for navigation items.
 * Combines Link behavior with NavText styling.
 */
export function NavLink({
  href,
  isActive,
  variant = 'default',
  size = 'base',
  transform = 'uppercase',
  underline = false,
  className,
  children,
  ...props
}: NavLinkProps) {
  return (
    <Link href={href} className={cn('no-underline', className)} {...props}>
      <NavText
        variant={isActive ? 'active' : variant}
        size={size}
        transform={transform}
        underline={underline}
      >
        {children}
      </NavText>
    </Link>
  );
}
