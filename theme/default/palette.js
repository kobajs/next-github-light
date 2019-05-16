import green from '@material-ui/core/colors/green';

export const colors = {
  lightBlue: '#E9F3FF',
  mediumBlue: '#309FCD',
  darkBlue: '#1F64B2',
  lightGrey: '#ECEFF1',
  mediumGrey: '#B0BEC5',
  darkGrey: '#37474F',
  lightOrange: '#FFF7EB',
  darkOrange: '#FF9900',
  lightLeaf: '#E1F7E1',
  darkLeaf: '#00A72C',
  red: '#E1313C',
  darkGreen: green[600],
  white: '#FAFAFA',
  black: '#000000',
};

export const palette = {
  primary: {
    light: colors.lightBlue,
    main: colors.mediumBlue,
    dark: colors.darkBlue,
    contrastText: colors.lightGrey,
  },
  secondary: {
    light: colors.lightLeaf,
    main: colors.darkLeaf,
    dark: colors.darkGrey,
    contrastText: colors.white,
  },
  error: {
    light: colors.red,
    main: colors.red,
    dark: colors.red,
    contrastText: colors.lightGrey,
  },
  text: {
    primary: colors.darkGrey,
    secondary: colors.mediumGrey,
    white: colors.white,
  },
};
