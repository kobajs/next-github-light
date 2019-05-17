import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import classNames from 'classnames';
import values from 'lodash/values';

import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import MUISnackbar from '@material-ui/core/Snackbar';
import MUISnackbarContent from '@material-ui/core/SnackbarContent';

import { MessageWrapper, IconButton, CloseIcon, snackbarIconStyles } from './Snackbar.styles';
import { getVariantIcon, snackbarVariants, snackbarVariantStyles } from './snackbarVariants';

function Snackbar({ classes, open, message, variant, onClose, width, ...other }) {
  const Icon = getVariantIcon(variant);

  const handleClose = (event, reason) => {
    // if (reason === 'clickaway') return;

    onClose();
  };

  const direction = isWidthUp('sm', width) ? 'left' : 'up';

  return (
    <MUISnackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
      className={classes.root}
      TransitionProps={{ direction }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      disableWindowBlurListener
    >
      <MUISnackbarContent
        className={classNames(classes.snackbarContent, classes[variant])}
        aria-describedby="client-snackbar"
        message={
          <MessageWrapper>
            <Icon style={snackbarIconStyles} />
            <Typography color="inherit">{message}</Typography>
          </MessageWrapper>
        }
        action={[
          <IconButton key="close" aria-label="Close" onClick={onClose}>
            <CloseIcon />
          </IconButton>,
        ]}
        {...other}
      />
    </MUISnackbar>
  );
};

Snackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(values(snackbarVariants)),
};

Snackbar.defaultProps = {
  onClose: () => {},
  variant: snackbarVariants.common,
};

export default compose(
  withWidth(),
  withStyles(snackbarVariantStyles),
)(Snackbar);
