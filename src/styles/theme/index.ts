export const colors = {
  primary: '#000000',
  secondary: '#15181C',

  gray: '#7A7A7A',
  white: '#D9D9D9',

  like: '#E8265E',
  outline: '#2F3336',
  retweet: '#00C06B',
  search: '#202327',
  twitter: '#33A1F2',
  twitterDarkHover: '#011017',
  twitterLightHover: '#2C8ED6',
};

export const fontStyles = {
  title: {
    fontSize: 24,
  },
};

export const grid = {
  breakpoints: {
    xs: 331,
    sm: 501,
    md: 601,
    lg: 1001,
    xl: 1281,
  },
};

export const mediaQueries = {
  xs: `(min-width: ${grid.breakpoints.xs}px)`,
  sm: `(min-width: ${grid.breakpoints.sm}px)`,
  md: `(min-width: ${grid.breakpoints.md}px)`,
  lg: `(min-width: ${grid.breakpoints.lg}px)`,
  xl: `(min-width: ${grid.breakpoints.xl}px)`,
};

export default { colors, fontStyles, grid, mediaQueries };
