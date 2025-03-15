import * as React from 'react';
import { cn } from '../../../utils/cn';

interface ArticleTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: 'lead' | 'default';
}

interface ArticleHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level: 1 | 2 | 3;
}

export function ArticleTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'font-serif text-4xl font-bold text-stone-900',
        'mb-6 leading-tight',
        'md:text-[49px] md:leading-[56px]',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function ArticleSubtitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'font-serif text-lg text-stone-600',
        'mb-8 leading-relaxed',
        'md:text-xl md:leading-8',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function ArticleHeader({ level, className, children, ...props }: ArticleHeaderProps) {
  const Component = `h${level}` as 'h1' | 'h2' | 'h3';
  const styles = {
    2: 'font-serif text-3xl font-bold text-stone-900 leading-tight mb-6 mt-12 first:mt-0 md:text-[39px] md:leading-[44px]',
    3: 'font-serif text-2xl font-medium text-stone-900 leading-snug mb-4 mt-10 first:mt-0 md:text-[31px] md:leading-[36px]',
  };

  return (
    <Component className={cn(styles[level as 2 | 3], className)} {...props}>
      {children}
    </Component>
  );
}

export function ArticleText({
  variant = 'default',
  className,
  children,
  ...props
}: ArticleTextProps) {
  const styles = {
    lead: 'font-serif text-xl text-stone-700 leading-relaxed md:text-xl md:leading-relaxed mb-10',
    default: 'font-serif text-lg text-stone-900 leading-relaxed md:text-lg md:leading-relaxed mb-8',
  };

  return (
    <p className={cn(styles[variant], className)} {...props}>
      {children}
    </p>
  );
}
