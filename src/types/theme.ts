export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    accent: string;
  };
  fonts: {
    heading: string;
    body: string;
    mono: string;
  };
  spacing: {
    section: string;
    element: string;
  };
}

export const theme: Theme = {
  id: 'default',
  name: 'Default',
  colors: {
    primary: 'bg-gradient-to-r from-gray-900 to-gray-800',
    secondary: 'bg-gray-100/80',
    background: 'bg-[#FBFBFD]',
    surface: 'bg-white',
    text: 'text-gray-900',
    accent: 'bg-blue-600',
  },
  fonts: {
    heading: 'font-sans font-semibold tracking-tight',
    body: 'font-sans font-light leading-relaxed',
    mono: 'font-mono',
  },
  spacing: {
    section: 'py-28',
    element: 'space-y-10',
  },
};
