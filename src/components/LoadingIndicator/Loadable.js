import L from 'react-loadable';

import LoadingIndicator from '.'

const Loadable = opts =>
  L({
    loading: LoadingIndicator,
    ...opts,
  });

export default Loadable;
