import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes with clsx and tailwind-merge
 *
 * This utility function combines the power of clsx for conditional class joining
 * with tailwind-merge to properly handle Tailwind CSS class conflicts.
 *
 * @param inputs - Class values to be merged
 * @returns Merged class string
 *
 * @example
 * // Basic usage
 * <div className={cn("px-4 py-2", "bg-blue-500")} />
 *
 * // With conditionals
 * <div className={cn("px-4 py-2", isActive && "bg-blue-500")} />
 *
 * // With class conflicts (later classes win)
 * <div className={cn("px-4", "px-8")} /> // Results in "px-8"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
