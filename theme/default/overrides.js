import { palette, colors } from './palette';

export const overrides = {
  MuiFormLabel: {
    root: {
      '&$focused': {
        color: palette.primary.main,
      },
    },
  },
  MuiStepIcon: {
    root: {
      '&$active': {
        color: palette.secondary.main,
      },
      '&$completed': {
        color: palette.secondary.main,
      },
    },
    text: {
      fontFamily: 'Roboto',
      fontWeight: 700,
    },
  },
  MuiDialogActions: {
    root: {
      margin: '20px',
    },
  },
  MuiDialogContentText: {
    root: {
      color: colors.black,
    },
  },
  MuiSelect: {
    icon: {
      right: '10px',
    },
  },
  MuiDialogActions: {
    root: {
      margin: '20px',
    },
  },
  MuiDialogContentText: {
    root: {
      color: colors.black,
    },
  },
};
