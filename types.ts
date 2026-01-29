import React from 'react';

export type Language = 'ko' | 'en' | 'zh';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  joinDate: string;
  reservations: number;
}

export interface Course {
  id: string;
  title: string;
  price: string;
  description: string;
  duration: string;
  image: string;
  tag?: string;
}

export interface Reservation {
  id: string;
  courseName: string;
  userName: string;
  userEmail: string;
  date: string;
  time: string;
  status: 'active' | 'completed' | 'cancelled';
}

// Fix for 'iconify-icon' intrinsic element error in TypeScript JSX.
// We augment the 'react' module's JSX namespace to ensure the custom element is recognized.
// This avoids shadowing the global React or JSX namespaces which caused standard HTML elements 
// (like div, span, button, etc.) to be unrecognized across the application.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        icon?: string;
        width?: string | number;
        height?: string | number;
        flip?: string;
        rotate?: string | number;
        inline?: boolean;
      }, HTMLElement>;
    }
  }
}

// Provide a minimal global JSX augmentation to ensure the custom element is recognized
// globally without overriding existing HTML element definitions.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': any;
    }
  }
}
