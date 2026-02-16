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
  details: string; // Main intro text
  symptoms: string[];
  image: string;
  // SEO & Rich Content
  metaTitle?: string;
  metaDescription?: string;
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