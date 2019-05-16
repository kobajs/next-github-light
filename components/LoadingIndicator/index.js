import React from 'react';

import Typography from '@material-ui/core/Typography';

import { LoadingIndicatorWrapper, LoadingIndicatorProgress } from './LoadingIndicator.styles';

function LoadingIndicator(props) {
  const { message, isFixed = true } = props;
  const typoMessage = message && (
    <Typography color="primary" variant="h6">
      {message}
    </Typography>
  );

  return (
    <LoadingIndicatorWrapper isFixed={isFixed}>
      <LoadingIndicatorProgress />
      {typoMessage}
    </LoadingIndicatorWrapper>
  );
};

export default LoadingIndicator;
