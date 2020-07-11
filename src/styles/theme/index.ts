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
    sm: 501,
    md: 1001,
    lg: 1281,
  },
};

export const mediaQueries = {
  sm: `(min-width: ${grid.breakpoints.sm}px)`,
  md: `(min-width: ${grid.breakpoints.md}px)`,
  lg: `(min-width: ${grid.breakpoints.lg}px)`,
};

export default { colors, fontStyles, grid, mediaQueries };
