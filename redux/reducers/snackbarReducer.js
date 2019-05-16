import { snackbarVariants }  from 'sontra-components/dist/Snackbar/snackbarVariants';

import { OPEN_SNACKBAR, CLOSE_SNACKBAR, CLEAN_SNACKBAR } from '../actions/snackbarActions';

const initialState = {
  open: false,
  message: '',
  variant: snackbarVariants.error,
};

export default function snackbarReducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return {
        open: true,
        message: action.payload.message,
        variant: action.payload.variant,
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        open: false,
      };
    case CLEAN_SNACKBAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
