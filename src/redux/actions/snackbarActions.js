import get from 'lodash/get';

import { snackbarVariants }  from 'sontra-components/dist/Snackbar/snackbarVariants';

import SnackbarMessage from '../../entities/SnackbarMessage';
import UnknownError from '../../entities/Error/UnknownError';

import { OPEN_SNACKBAR, CLOSE_SNACKBAR, CLEAN_SNACKBAR } from '../types/snackbarTypes';

function openSnackbarCreator(payload) {
  return { type: OPEN_SNACKBAR, payload };
}
function closeSnackbarCreator() {
  return { type: CLOSE_SNACKBAR };
}
function cleanSnackbarCreator() {
  return { type: CLEAN_SNACKBAR };
}

export const openSnackbar = (message, variant) => dispatch => {
  dispatch(openSnackbarCreator({ message, variant }));
};

export const closeSnackbar = () => dispatch => dispatch(closeSnackbarCreator());

export const cleanSnackbar = () => dispatch => dispatch(cleanSnackbarCreator());

export const prepareError = error => (get(error, 'message') ? error : new UnknownError(error));
export const createError = (error, dispatch) => {
  const snackbarMessage = SnackbarMessage.error(prepareError(error));
  snackbarMessage.dispatchCreate(dispatch);
};

export const createSnackbarMessage = dispatch => (message, variant = snackbarVariants.success) => {
  const snackbarMessage = new SnackbarMessage(message, variant);
  snackbarMessage.dispatchCreate(dispatch);
};
