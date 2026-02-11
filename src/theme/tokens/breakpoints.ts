export const breakpointTokens = {
  xxs: '380px',
  xs: '420px',
  sm: '576px',
  md: '768px',
  lg: '1000px',
  xl: '1200px',
  xxl: '1440px',
  xxxl: '1780px',
} as const;

export type BreakpointTokens = typeof breakpointTokens;
