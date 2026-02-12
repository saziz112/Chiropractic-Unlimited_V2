import React from 'react';
import { Activity, Heart, Brain, Zap, UserCheck, Stethoscope, ShieldCheck, Smile, Users } from 'lucide-react';
import { BusinessHours, NavItem, ServiceItem } from './types';

export const BUSINESS_INFO = {
  name: "Chiropractic Unlimited",
  doctor: "Dr. Jason Bang DC BSN RN",
  phone: "(334) 219-0150",
  address: "3731 20th Ave, Valley, AL 36854",
  locationNote: "Located INSIDE the Workout Anytime gym, in the same plaza as Ace Hardware.",
  email: "contact@chiropracticunlimited.com", // Placeholder
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.867566120892!2d-85.17935492358896!3d32.816698673646985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888cb3764835687b%3A0x63351368560064f7!2s3731%2020th%20Ave%2C%20Valley%2C%20AL%2036854!5e0!3m2!1sen!2sus!4v1714589000000!5m2!1sen!2sus"
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/chiropracticunlimited/",
  google: "https://www.google.com/search?q=chiropractic+unlimited+valley+al",
  facebook: "#"
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Conditions',
    children: [
      { label: 'Back & Neck Pain', href: '#conditions' },
      { label: 'Headaches & Migraines', href: '#conditions' },
      { label: 'Sciatica', href: '#conditions' },
      { label: 'Auto Injuries', href: '#conditions' },
    ]
  },
  {
    label: 'Services',
    children: [
      { label: 'Holistic Wellness', href: '#services' },
      { label: 'Spinal Correction', href: '#services' },
      { label: 'Integrated Care', href: '#services' },
      { label: 'Performance', href: '#services' },
    ]
  },
  {
    label: 'Patients',
    children: [
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'New Patient Offer', href: '#offers' },
      { label: 'The Process', href: '#how-it-works' },
    ]
  },
  { label: 'Doctors', href: '#about' },
  { label: 'Offers', href: '#offers' },
  {
    label: 'Other',
    children: [
      { label: 'Location', href: '#location' },
      { label: 'Book Online', href: '#booking' },
    ]
  }
];

export const HOURS: BusinessHours[] = [
  { day: 'Monday', hours: '10:00 AM – 5:00 PM' },
  { day: 'Tuesday', hours: '10:00 AM – 5:00 PM' },
  { day: 'Wednesday', hours: 'Closed' },
  { day: 'Thursday', hours: 'Closed' },
  { day: 'Friday', hours: '10:00 AM – 5:00 PM' },
  { day: 'Saturday', hours: '10:00 AM – 5:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Holistic Wellness",
    description: "Focusing on the whole person to improve quality of life beyond just symptom relief.",
    icon: <Heart className="w-8 h-8" />
  },
  {
    title: "Spinal Correction",
    description: "Gentle and effective spinal adjustments to restore proper alignment and function.",
    icon: <Activity className="w-8 h-8" />
  },
  {
    title: "Integrated Care",
    description: "Combining chiropractic expertise with nursing knowledge for a comprehensive health approach.",
    icon: <Stethoscope className="w-8 h-8" />
  },
  {
    title: "Performance",
    description: "Helping you move better, recover faster, and perform at your peak.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "Neurology",
    description: "Optimizing your nervous system to ensure your body communicates effectively.",
    icon: <Brain className="w-8 h-8" />
  },
  {
    title: "Personalized Plans",
    description: "Care plans tailored specifically to your unique physiology and health goals.",
    icon: <UserCheck className="w-8 h-8" />
  }
];

export const CONDITIONS = [
  { 
    title: "Low Back Pain", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Neck Pain", 
    image: "https://images.unsplash.com/photo-1590611936760-eeb9bc598548?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Headaches", 
    image: "https://images.unsplash.com/photo-1610145228588-466d6a2d2429?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Sciatica", 
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Auto Injuries", 
    image: "https://images.unsplash.com/photo-1599571217743-a602166e5f8f?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Poor Posture", 
    image: "https://nuccawellnesschicago.com/wp-content/uploads/2019/09/Man-with-Poor-Posture-Using-Laptop-at-Table-Indoors.png" 
  },
];

export const TESTIMONIALS = [
  {
    text: "My experience was wonderful. They were helpful, caring and friendly. Dr. Jason was a gift. He helped me straighten my spine and gave me many tips and exercises that helped me get rid of my bad habits. I regained flexibility and gained more energy.",
    author: "Karrar A.",
    type: "Patient"
  },
  {
    text: "I found this practice while I was 6 months pregnant. I had horrible hip pain and needed help. Dr. Bang and his wonderful staff are so attentive. As a mom, I highly recommend them for your family.",
    author: "Britton Grace K.",
    type: "Patient"
  },
  {
    text: "I’ve been a patient here for over a month due to being involved in a car accident. The staff is amazing, very clean and friendly place. Most importantly they are focused on getting your health better and breaking bad habits.",
    author: "L. Lopez",
    type: "Patient"
  }
];

export const HOW_IT_WORKS = [
  {
    title: "Better",
    description: "Our immediate focus is to stop the damage and stabilize the problem to allow you to start healing and feel better fast.",
    step: "01"
  },
  {
    title: "Stronger",
    description: "We’ll help you retrain your body and your spine so you can be the person you want to be and do the things you love.",
    step: "02"
  },
  {
    title: "Healthier",
    description: "We’ll help you reach the optimal level of health and protect the gains you’ve made so you can set and reach even higher goals!",
    step: "03"
  }
];

export const DIFFERENCE_POINTS = [
  {
    title: "Get To The Root Cause",
    description: "We believe true healing begins with uncovering the root cause of your problem—not just masking them. Our approach focuses on correcting underlying issues.",
    icon: <ShieldCheck className="w-10 h-10" />
  },
  {
    title: "True Health Partnership",
    description: "We’re more than just a clinic—we’re your partners in health. Together, we’ll create a personalized plan tailored to your specific goals.",
    icon: <Users className="w-10 h-10" />
  },
  {
    title: "Lifestyle Success Strategy",
    description: "Chiropractic care is a lifestyle success strategy. We help you optimize your body’s natural function to thrive physically, mentally, and emotionally.",
    icon: <Smile className="w-10 h-10" />
  }
];

export const BIO_TEXT = [
  `Dr. Jason Bang DC BSN RN is a proud graduate of Life University in Marietta, GA, with a deep passion for improving the quality of life in others through wellness-based care. My journey in chiropractic has taken me across the globe, mentoring and learning alongside professionals in countries like Canada, Germany, and China.`,
  `Driven by a desire to expand my ability to serve, I pursued a degree in nursing immediately after chiropractic school. I worked as a registered nurse during the COVID-19 pandemic and later at the VA Hospital in Birmingham, Alabama—experiences that deepened my compassion and reinforced my belief in integrated care.`
];