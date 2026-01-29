
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

// Global declaration for custom elements in JSX
// Fixed: Using 'declare global' instead of 'declare module 'react'' to avoid module resolution issues during augmentation
declare global {
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

export {};