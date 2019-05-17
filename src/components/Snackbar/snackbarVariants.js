import styled from 'styled-components';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';

import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

export const snackbarVariants = {
  common: 'common',
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
};

const variantIcons = {
  common: ErrorIcon,
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

export const snackbarVariantStyles = theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      position: 'fixed',
      transform: 'none',
      display: 'block',
      top: 80,
      left: 'auto',
      right: 16,
      borderRadius: 8,
    },
  },
  snackbarContent: {
    flexWrap: 'nowrap',
  },
  common: {},
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
});

export const getVariantIcon = variant => {
  return styled(variantIcons[variant])`
    font-size: 20px;
    opacity: 0.9;
    margin-right: 8px;
  `;
};
