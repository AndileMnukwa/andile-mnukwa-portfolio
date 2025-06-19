
// Portable Color Schema for Lovable Projects
// Copy this entire object to your new project's tailwind.config.ts

export const portableColorSchema = {
  // Main Brand Colors - These work in any project without CSS variables
  coral: {
    DEFAULT: '#ff7f71',
    light: '#ff8e87',
    dark: '#e55a4a',
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ff7f71', // Main coral
    600: '#e55a4a',
    700: '#dc2626',
    800: '#b91c1c',
    900: '#991b1b',
  },
  
  navy: {
    DEFAULT: '#1a254f',
    light: '#39406a',
    dark: '#182142',
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#39406a', // Navy light
    600: '#1a254f', // Main navy
    700: '#182142', // Navy dark
    800: '#0f172a',
    900: '#020617',
  },
  
  'gray-blue': {
    DEFAULT: '#64748b',
    light: '#94a3b8',
    dark: '#475569',
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b', // Main gray-blue
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  
  // Background Colors - Safe defaults
  'light-gray': {
    DEFAULT: '#f9fafb',
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
  },
};

// Usage Examples:
// bg-coral (main coral)
// bg-coral-light (lighter coral)
// text-navy-dark (dark navy text)
// border-gray-blue-300 (light gray-blue border)

// Common Color Combinations:
export const colorCombinations = {
  // Hero sections
  heroBackground: 'bg-gradient-to-br from-light-gray-50 to-light-gray-100',
  heroText: 'text-navy-dark',
  heroAccent: 'text-coral',
  
  // Cards
  cardBackground: 'bg-white',
  cardBorder: 'border-gray-blue-200',
  cardText: 'text-navy',
  
  // Buttons
  primaryButton: 'bg-coral hover:bg-coral-light text-white',
  outlineButton: 'border-coral text-coral hover:bg-coral hover:text-white',
  
  // Navigation
  navBackground: 'bg-white/95 backdrop-blur-sm',
  navText: 'text-navy',
  navActiveText: 'text-coral',
};
