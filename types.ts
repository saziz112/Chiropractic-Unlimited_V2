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

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export interface BusinessHours {
  day: string;
  hours: string;
}