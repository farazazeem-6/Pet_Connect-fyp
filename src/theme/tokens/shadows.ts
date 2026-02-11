export const shadows = {
  cardShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.08)',
  card: '0 2px 2px rgba(0, 0, 0, 0.3)',
  button: '0 2px 10px rgba(0, 0, 0, 0.3)',
  sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
  md: '0 4px 6px rgba(0, 0, 0, 0.15)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.2)',
  sideBarWrapper: '-8px 0 24px rgba(0, 0, 0, 0.08)',
  sideBarOverlay: 'rgba(0, 0, 0, 0.5)',
  dropDown: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  categoryCard: '0 8px 32px rgba(0, 0, 0, 0.01)',
  categoryCardHover:
    '0 20px 60px rgba(0, 0, 0, 0.15), 0 12px 40px rgba(34, 139, 34, 0.1)',
} as const;

export const gradients = {
  textGradient:
    'linear-gradient(90deg, #5E1BD6 3%, #912FFF 22%, #D555E2 45%, #FF943B 90%, #FFD057 100%)',
  sidebarGradient: 'linear-gradient(90deg, #e2e2e2, #ffffff, #e2e2e2)',
  gradient:
    'linear-gradient(112deg, #06b6d4 -63.59%, #ec4899 -20.3%, #3b82f6 70.46%)',
  buttonBG:
    'linear-gradient(73.6deg, #912FFF -46.37%, #D555E2 -0.62%, #FF943B 46.54%, #FFD057 76.1%, #FFFDF9 94.4%)',
  stepCircleGradient:
    'linear-gradient(97.77deg, #5E1BD6 -437.34%, #912FFF -333.27%, #D555E2 -207.28%, #FF943B 39.22%, #FFD057 94%)',
  gradientAccent: 'linear-gradient(90deg, #FF2D55, #3F72FF)',
  sideBarBgGradient:
    'linear-gradient(135deg, #ffffff 0%, #f8fafc 60%, #eef2f7 100%)',
  categoryCardBg: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
  skeletonGradient:
    'linear-gradient(90deg, #f0f0f0 0px, #ffffff 40px, #f0f0f0 80px)',
  imgOverlay:
    'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%)',
} as const;

export type ShadowTokens = typeof shadows;
export type GradientTokens = typeof gradients;
