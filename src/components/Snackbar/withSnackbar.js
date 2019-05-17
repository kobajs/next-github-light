import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Snackbar  from '.';

import { closeSnackbar, cleanSnackbar, createSnackbarMessage } from '../../redux/actions/snackbarTypes';

export function withSnackbar(Component) {
  class WrappedComponent extends React.Component {
    // componentWillUnmount() {
    //   const { cleanSnackbar } = this.props;
    //   cleanSnackbar();
    // }

    onClose = () => {
      const { closeSnackbar } = this.props;
      closeSnackbar();
    };

    render() {
      const { children, open, message, variant, ...otherProps } = this.props;

      return (
        <Fragment>
          <Component {...otherProps}>{children}</Component>
          <Snackbar open={open} message={message} variant={variant} onClose={this.onClose} />
        </Fragment>
      );
    }
  }

  const mapStateToProps = state => ({
    open: state.snackbar.open,
    message: state.snackbar.message,
    variant: state.snackbar.variant,
  });

  const mapDispatchToProps = dispatch => ({
    closeSnackbar: () => dispatch(closeSnackbar()),
    cleanSnackbar: () => dispatch(cleanSnackbar()),
    createSnackbarMessage: (message, variant) => dispatch(createSnackbarMessage(dispatch)(message, variant)),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrappedComponent);
}
