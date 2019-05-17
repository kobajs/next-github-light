import { SET_LOADER, CLEAN_LOADER } from '../types/loaderTypes';

function setLoaderAction(payload) {
  return { type: SET_LOADER, payload };
}
function cleanLoaderAction() {
  return { type: CLEAN_LOADER };
}

export const setLoader = message => dispatch => {
  dispatch(setLoaderAction({ message }));
};

export const cleanLoader = () => dispatch => dispatch(cleanLoaderAction());

export const withLoader = async (promise, dispatch) => {
  dispatch(setLoader());
  await promise();
  dispatch(cleanLoader());
};
