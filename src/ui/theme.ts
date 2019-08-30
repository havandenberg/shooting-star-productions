import {
  DESKTOP,
  SMALL,
  TABLET,
  TABLET_DOWN,
  TABLET_UP,
  TINY,
} from '../utils/view';

export const colors = {
  background: '#000000',
  black: '#000000',
  gray: '#666666',
  white: '#FFFFFF',
  brand: {
    primary: '#E7D25C',
    primaryDark: '#AE8D3D',
    secondary: '#FF6A00',
    red: '#E75868',
    redLight: '#FEBDC7',
    blue: '#05BFC8',
    blueLight: '#AEDFE4',
    green: '#B0C970',
    greenLight: '#D8E6A9',
    orange: '#EC8A18',
    orangeLight: '#F7BE35',
    purple: '#C07FD9',
    purpleLight: '#E2B6EE',
  },
  text: {
    main: '#FFFFFF',
    link: '#E7D25C',
    inv: '#000000',
  },
  fill: {
    main: '#F7F4EF',
    alt: '#DDDAD4',
    inv: '#FFFFFF',
    invAlt: '#D8D8D8',
    debug: 'rgba(0,153,255,0.25)',
  },
  status: {
    info: '#0277BD',
    success: '#00B67D',
    failure: '#D50000',
  },
  overlay: {
    dark: 'rgba(32,32,32,0.64)',
    medium: 'rgba(32,32,32,0.32)',
    light: 'rgba(32,32,32,0.08)',
  },
};

export const gradients = {
  black: `linear-gradient(to bottom, ${colors.gray}, ${colors.black})`,
  blue: `linear-gradient(to bottom, ${colors.brand.blueLight}, ${colors.brand.blue})`,
  green: `linear-gradient(to bottom, ${colors.brand.greenLight}, ${colors.brand.green})`,
  orange: `linear-gradient(to bottom, ${colors.brand.orangeLight}, ${colors.brand.orange})`,
  primary: `linear-gradient(to bottom, ${colors.brand.primary}, ${colors.brand.primaryDark})`,
  purple: `linear-gradient(to bottom, ${colors.brand.purpleLight}, ${colors.brand.purple})`,
  red: `linear-gradient(to bottom, ${colors.brand.redLight}, ${colors.brand.red})`,
};

// Layout
export const heights = {
  header: '650px',
  input: '45px',
  navHeight: '32px',
};

export const sizes = {
  zero: '0px',
  fill: '100%',
  icon: '24px',
  xs: '16px',
  sm: '32px',
  md: '48px',
  lg: '64px',
  xl: '96px',
  xxl: '128px',
  xxxl: '256px',
};

export const spacing = {
  zero: '0px',
  fill: '100%',
  tn: '2px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '32px',
  xl: '64px',
  xxl: '128px',
  xxxl: '256px',
};

export const widths = {
  input: '350px',
  maxContent: '1024px',
  maxPage: '1440px',
};

// Typography
export const fontFamilies = {
  main: 'Audiowide-Regular, system-ui, sans-serif',
};

const getFontSize = (value: number, modifier: number) =>
  `calc(${value}px + (${modifier} - ${value}) * ((${
    window.innerWidth <= parseInt(widths.maxPage, 10) ? '100vw' : '1400px'
  } - 400px) / 1200))`;

export const fontSizes = {
  xs: getFontSize(12, 16),
  sm: getFontSize(14, 16),
  md: getFontSize(16, 16),
  lg: getFontSize(18, 20),
  main: getFontSize(16, 18),
  h3: getFontSize(18, 30),
  h2: getFontSize(24, 42),
  h1: getFontSize(32, 56),
};

export const fontWeights = {
  normal: 400,
  bold: 700,
};

export const lineHeights = { single: 1, heading: 1.25, main: 1.5 };

// Display
export const borders = {
  blue: `1px solid ${gradients.red}`,
  button: '2px solid',
  divider: `1px solid ${colors.black}`,
  gold: `1px solid ${gradients.primary}`,
  orange: `1px solid ${gradients.orange}`,
  purple: `1px solid ${gradients.purple}`,
  red: `1px solid ${gradients.red}`,
  transparent: '1px solid transparent',
};

export const borderRadii = { default: 6 };

export const boxShadows = {
  sm: '0 2px 4px rgba(0,0,0,0.08)',
  lg: '0 2px 16px rgba(0,0,0,0.5)',
  white: '0 2px 16px rgba(255,255,255,0.5)',
};

export const breakpoints = [320, 700, 999];

export const breakpointQueries = {
  [DESKTOP]: '@media (min-width: 1000px)',
  [SMALL]: '@media (max-width: 320px)',
  [TABLET]: '@media (min-width: 700px) and (max-width: 999px)',
  [TABLET_DOWN]: '@media (max-width: 999px)',
  [TABLET_UP]: '@media (min-width: 700px)',
  [TINY]: '@media (max-width: 320px)',
};

export const transitions = {
  default: 'all 0.3s ease',
};

export const scrollOptions = {
  duration: 300,
  offset: -60,
  smooth: 'true',
};

export const scrollStyles = (showScrollBar: boolean) => ({
  '::-webkit-scrollbar': {
    height: showScrollBar ? 18 : 0,
    width: showScrollBar ? 18 : 0,
  },
  '::-webkit-scrollbar-button': {
    display: 'none',
    height: 0,
    width: 0,
  },
  '::-webkit-scrollbar-corner': {
    backgroundColor: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    '-webkit-border-radius': 20,
    '-webkit-box-shadow':
      'inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05)',
    backgroundClip: 'padding-box',
    backgroundColor: colors.white,
    border: showScrollBar ? '8px solid rgba(0, 0, 0, 0)' : 0,
    height: showScrollBar ? 4 : 0,
  },
  overflow: 'scroll',
});

// Variants
export const colorStyles = {
  main: {
    background: colors.fill.main,
    color: colors.text.main,
  },
};

export const textStyles = {
  heading: {
    fontFamily: fontFamilies.main,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.heading,
  },
  main: {
    fontFamily: fontFamilies.main,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.main,
  },
  caps: {
    fontWeight: fontWeights.bold,
    textTransform: 'uppercase',
  },
};

// Global
export const globalStyles = {
  '*': {
    outline: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  },
  // Text
  'html,button': {
    color: colors.text.main,
    fontSize: fontSizes.main,
    textStyle: textStyles.main,
    margin: 0,
    padding: 0,
  },
  body: {
    background: colors.black,
    fontFamily: fontFamilies.main,
    letterSpacing: 2,
    margin: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: 0,
  },
  '@media(min-width:360px)': {
    'html,button': {
      fontSize: '18px',
    },
  },
  '@media(min-width:720px)': {
    'html,button': {
      fontSize: '20px',
    },
  },
  p: {
    lineHeight: 2,
    margin: 0,
  },
  // Headings
  'h1,h2,h3,h4,h5,h6': {
    margin: 0,
    marginBottom: '1rem',
    textStyle: textStyles.heading,
  },
  h1: {
    fontSize: fontSizes.h1,
  },
  h2: {
    fontSize: fontSizes.h2,
  },
  h3: {
    fontSize: fontSizes.h3,
  },
  // Formatting
  'b,strong': {
    fontWeight: fontWeights.bold,
  },
  blockquote: {
    margin: '1rem 0',
  },
  // Links
  a: {
    color: colors.text.link,
    textDecoration: 'none',
  },
  // Lists
  'ol,ul': {
    listStyle: 'disc inside none',
    padding: 0,
    margin: 0,
  },
  'ol ol,ul ul': {
    listStyleType: 'disc',
    marginLeft: '1.5rem',
  },
  // Button
  button: {
    borderRadius: borderRadii.default,
    fontSize: fontSizes.md,
    height: heights.input,
    paddingX: '32px',
  },
};

export const theme = {
  borderRadii,
  borders,
  boxShadows,
  breakpoints,
  breakpointQueries,
  colors,
  colorStyles,
  fontFamilies,
  fontSizes,
  fontWeights,
  globalStyles,
  gradients,
  heights,
  lineHeights,
  scrollOptions,
  scrollStyles,
  sizes,
  spacing,
  textStyles,
  transitions,
  widths,
};

export default theme;
