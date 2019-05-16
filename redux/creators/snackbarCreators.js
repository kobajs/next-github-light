import get from 'lodash/get';

import { snackbarVariants }  from 'sontra-components/dist/Snackbar/snackbarVariants';

import SnackbarMessage from '../../entities/SnackbarMessage';
import UnknownError from '../../entities/Error/UnknownError';

import { OPEN_SNACKBAR, CLOSE_SNACKBAR, CLEAN_SNACKBAR } from '../actions/snackbarActions';

function openSnackbarAction(payload) {
  return { type: OPEN_SNACKBAR, payload };
}
function closeSnackbarAction() {
  return { type: CLOSE_SNACKBAR };
}
function cleanSnackbarAction() {
  return { type: CLEAN_SNACKBAR };
}

export const openSnackbar = (message, variant) => dispatch => {
  dispatch(openSnackbarAction({ message, variant }));
};

export const closeSnackbar = () => dispatch => dispatch(closeSnackbarAction());

export const cleanSnackbar = () => dispatch => dispatch(cleanSnackbarAction());

export const prepareError = error => (get(error, 'message') ? error : new UnknownError(error));
export const createError = (error, dispatch) => {
  const snackbarMessage = SnackbarMessage.error(prepareError(error));
  snackbarMessage.dispatchCreate(dispatch);
};

export const createSnackbarMessage = dispatch => (message, variant = snackbarVariants.success) => {
  const snackbarMessage = new SnackbarMessage(message, variant);
  snackbarMessage.dispatchCreate(dispatch);
};
