import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';

export const LoadingIndicatorWrapper = styled.div`
  ${({ isFixed }) => (isFixed ? `position: fixed; background-color: rgba(255,255,255,0.8);` : '')}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1000000;
`;

export const LoadingIndicatorProgress = styled(CircularProgress).attrs({
  size: 120,
})`
  margin: 32px 0;
`;
