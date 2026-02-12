export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
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