/**
 * Mock implementation of Sanity image URL builder for the design system
 * In a real application, this would connect to Sanity's image pipeline
 */
import { SanityImageReference } from '../../types/blog';

export function urlFor(source: SanityImageReference) {
  // Simple mock implementation that handles the common pattern
  return {
    url: () => {
      if (!source || !source.asset || !source.asset._ref) {
        return undefined;
      }
      // Return a placeholder image URL or construct a URL from the reference
      return `https://via.placeholder.com/600x400?text=Image`;
    },
  };
}
