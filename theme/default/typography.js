export const FONT_WEIGHT = {
  NORMAL: 400,
  BOLD: 700,
};

export const typography = {
  useNextVariants: true,
  fontFamily: ['Arimo', 'Roboto'].join(','),
  fontWeightMedium: FONT_WEIGHT.NORMAL,
  fontSize: 14,
  h1: {
    fontSize: '96px',
    fontWeight: FONT_WEIGHT.NORMAL,
    letterSpacing: '-1.5px',
  },
  h2: {
    fontSize: '60px',
    fontWeight: FONT_WEIGHT.NORMAL,
    letterSpacing: '-0.5px',
  },
  h3: {
    fontSize: '48px',
    fontWeight: FONT_WEIGHT.NORMAL,
  },
  h4: {
    fontSize: '34px',
    fontWeight: FONT_WEIGHT.NORMAL,
    letterSpacing: '0.25px',
  },
  h5: {
    fontSize: '24px',
    fontWeight: FONT_WEIGHT.BOLD,
  },
  h6: {
    fontSize: '20px',
    fontWeight: FONT_WEIGHT.NORMAL,
    letterSpacing: 0.3,
    lineHeight: '22px',
  },
  subtitle1: {
    fontSize: '16px',
    fontWeight: FONT_WEIGHT.BOLD,
    letterSpacing: '0.15px',
  },
  subtitle2: {
    fontSize: '14px',
    fontWeight: FONT_WEIGHT.BOLD,
    letterSpacing: '0.1px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.71,
  },
  body1: {
    fontSize: '16px',
    fontWeight: FONT_WEIGHT.NORMAL,
    letterSpacing: '0.5px',
  },
  body2: {
    fontSize: '14px',
    fontWeight: FONT_WEIGHT.NORMAL,
    letterSpacing: '0.25px',
  },
  button: {
    fontSize: '14px',
    fontWeight: FONT_WEIGHT.NORMAL,
    letterSpacing: '1.25px',
  },
  caption: {
    fontSize: '12px',
    fontWeight: FONT_WEIGHT.NORMAL,
    letterSpacing: '0.4px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.33,
  },
  overline: {
    fontSize: '12px',
    fontWeight: FONT_WEIGHT.NORMAL,
    letterSpacing: '2px',
  },
};
