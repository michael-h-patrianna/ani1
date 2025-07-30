// Design tokens extracted from Figma design
export const tokens = {
  colors: {
    // Base colors
    background: '#000000',
    surface: '#191919',
    surfaceLight: '#3C3C3C',

    // Text colors
    textPrimary: '#FFFFFF',
    textSecondary: '#CCCCCC',

    // Brand colors
    primary: '#FA114F',

    // Gradients
    heroGradient: 'linear-gradient(180deg, #012038 0%, #22A1D7 42%, #24AAD0 58%, #1AD5DE 66%, #21F4AD 83%, #045238 100%)',
    rainbowGradient: 'linear-gradient(90deg, #F9A836 5%, #FFEA43 18%, #83EA9A 30%, #0FEAF1 32%, #3492F0 46%, #6362E2 60%, #9150C4 72%, #C55B7B 88%, #FA7532 100%)',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
  },

  typography: {
    fontFamily: "'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    sizes: {
      xs: '10px',
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '18px',
    },
    weights: {
      normal: 400,
      medium: 500,
    },
    lineHeights: {
      xs: '12px',
      sm: '16.8px',
      md: '19.6px',
      lg: '22.4px',
      xl: '25.2px',
    },
  },

  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '10px',
  },

  gameCard: {
    standard: {
      width: '112px',
      height: '149px',
    },
    large: {
      width: '186px',
      height: '248px',
    },
    small: {
      width: '90px',
      height: '120px',
    },
  },

  layout: {
    mobileWidth: '414px',
    containerPadding: '12px',
    sectionGap: '10px',
    cardGap: '8px',
  },

  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
} as const;

export type Tokens = typeof tokens;
