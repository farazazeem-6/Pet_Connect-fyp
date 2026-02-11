export const radius = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  xxl: '24px',
  circle: '50%',
  full: '100%',
} as const;

export type RadiusTokens = typeof radius;
