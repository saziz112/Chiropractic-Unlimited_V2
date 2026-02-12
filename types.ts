import type { ReactNode } from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
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