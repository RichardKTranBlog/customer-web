import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColor: false,
};

const colors = {
  // Single color
  transparent: 'transparent',
  tag_color: '#22B07D',
  stress_card_bg: '#22B07D',
  stress_card_text: '#ffffff',
  stress_card_text_blur: 'gray.900',

  // Light-Dark color

  dark_heading_color: '#FF8700',
  light_heading_color: '#00AFB9',

  dark_timeline_color: '#FFFFFF',
  light_timeline_color: '#1081E8',
  dark_icon_timeline_color: '#22B07D',
  light_icon_timeline_color: '#FFFFFF',

  dark_bg: '#121519',
  light_bg: '#F5F5F5',

  dark_card_bg: '#171A1E',
  light_card_bg: '#F5F5F5',

  dark_text_stress: '#FFFFFF',
  light_text_stress: '#003049',

  dark_text_blur: '#E6E6E6',
  light_text_blur: 'gray.800',
};

const styles = {
  global: {
    'html, body': {
      height: '100%',
      scrollBehavior: 'smooth',
    },
    p: {
      fontWeight: 'normal',
    },
    strong: {
      fontWeight: 'semibold',
    },
  },
};

const breakpoints = {
  sm: '320px',
  md: '624px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

const fonts = {
  heading: `'Nunito Sans'`,
  body: `'Nunito Sans'`,
};

const fontWeights = {
  normal: 400,
  medium: 600,
  semibold: 700,
  bold: 700,
};

export const theme = extendTheme({
  config,
  fonts,
  styles,
  breakpoints,
  fontWeights,
  colors,
});
