import styled from 'styled-components';

import MUIIconButton from '@material-ui/core/IconButton';
import MUICloseIcon from '@material-ui/icons/Close';

export const snackbarIconStyles = {
  fontSize: '20px',
  opacity: 0.9,
  marginRight: '8px',
};

export const MessageWrapper = styled.div.attrs({
  id: 'client-snackbar',
})`
  display: flex;
  align-items: center;
`;

export const IconButton = styled(MUIIconButton).attrs({
  color: 'inherit',
})``;

export const CloseIcon = styled(MUICloseIcon)`
  font-size: 20px;
  opacity: 0.9;
  margin-right: 8px;
`;
