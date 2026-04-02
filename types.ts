import type { ReactNode } from 'react';

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  icon: ReactNode;
  image: string;
  metaTitle?: string;
  metaDescription?: string;
  approach?: string;
  faqs?: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ConditionItem {
  slug: string;
  title: string;
  description: string; // Short description for cards
  details: string; // Main intro text (supports \n\n for multiple paragraphs)
  symptoms: string[];
  image: string;
  // SEO & Rich Content
  metaTitle?: string;
  metaDescription?: string;
  causes?: string; // "What Causes It" section (supports \n\n for multiple paragraphs)
  whenToSee?: string; // "When to See a Chiropractor" section (supports \n\n)
  approach?: string; // "How we treat it" section
  faqs?: FAQ[];
}

export interface PatientItem {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  image: string;
  metaTitle?: string;
  metaDescription?: string;
  approach?: string;
  faqs?: FAQ[];
}

export interface ServiceAreaItem {
  slug: string;
  city: string;
  state: string;
  title: string; // e.g. "Chiropractor Near Lanett, AL"
  description: string; // Short description for cards/meta
  intro: string; // Multi-paragraph intro (supports \n\n)
  whyChoose: string; // Why choose us from this area (supports \n\n)
  directions: string; // Driving directions from this city
  driveTime: string; // e.g. "5 minutes"
  distance: string; // e.g. "3 miles"
  conditionsServed: string; // Paragraph about conditions treated for this area
  metaTitle: string;
  metaDescription: string;
  faqs: FAQ[];
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export interface BusinessHours {
  day: string;
  hours: string;
}

export type BlogSectionType = 'paragraph' | 'heading' | 'subheading' | 'list' | 'blockquote' | 'image' | 'chart';

export interface BlogSection {
  type: BlogSectionType;
  content: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
  chartId?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorCredentials: string;
  publishDate: string;
  lastUpdated?: string;
  readTime: string;
  featuredImage: string;
  featuredImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  sections: BlogSection[];
  faqs: FAQ[];
  relatedLinks: { label: string; href: string }[];
  tags: string[];
}