
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
// We augment the React.JSX namespace to ensure the custom element is recognized 
// without shadowing standard HTML elements like div, span, button, etc.
// This approach is compatible with both React 18+ (using React.JSX) and older versions.
declare global {
  namespace React {
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
  
  // Also provide a global JSX augmentation for environments that check global scope,
  // but we do it in a way that attempts to merge with existing definitions.
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
