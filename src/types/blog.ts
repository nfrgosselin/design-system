export interface BlogPost {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  publishedAt: string;
  content?: string;
  mainImage?: SanityImageReference; // Sanity image reference
  categories?: Array<{
    title: string;
  }>;
}

// Define a more specific type for Sanity image references
export interface SanityImageReference {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  // Add other potential Sanity image properties as needed
  url?: () => string;
}
