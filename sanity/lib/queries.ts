import { groq } from 'next-sanity'

export interface SanityProject {
  _id: string;
  title: string;
  slug: string;
  location: string;
  category: 'residential' | 'commercial' | 'industrial' | 'hospital';
  description: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
    caption?: string;
  };
  gallery?: Array<{
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
    caption?: string;
  }>;
  completionYear?: number;
  featured?: boolean;
}

export const projectsQuery = groq`
  *[_type == "project"] | order(completionYear desc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    location,
    category,
    description,
    mainImage {
      asset->{
        _id,
        url
      },
      alt,
      caption
    },
    gallery[] {
      asset->{
        _id,
        url
      },
      alt,
      caption
    },
    completionYear,
    featured
  }
`

// ─── Products Typings & Queries ───────────────────────────────────

export interface SanityProduct {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  fullOverview?: any[]; // PortableText
  features: Array<{
    title: string;
    desc: string;
  }>;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  gallery?: Array<{
    asset: {
      _id: string;
      url: string;
    };
    caption?: string;
    scope?: string;
    alt: string;
  }>;
}

export const productsQuery = groq`
  *[_type == "product"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    }
  }
`

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    fullOverview,
    features,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    gallery[] {
      asset->{
        _id,
        url
      },
      caption,
      scope,
      alt
    }
  }
`

