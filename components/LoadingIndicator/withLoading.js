import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import LoadingIndicator from 'sontra-components/dist/LoadingIndicator';
import { cleanLoader } from '../../redux/creators/loaderCreators';

function withLoading(Component) {
  class WrappedComponent extends React.Component {
    componentWillUnmount() {
      const { cleanLoader } = this.props;
      cleanLoader();
    }

    render() {
      const { children, isLoading, message, ...otherProps } = this.props;

      return (
        <Fragment>
          {isLoading && <LoadingIndicator message={message} />}
          <Component {...otherProps}>{children}</Component>
        </Fragment>
      );
    }
  }

  const mapStateToProps = state => ({
    isLoading: state.loader.isLoading,
    message: state.loader.message,
  });

  const mapDispatchToProps = dispatch => ({
    cleanLoader: () => dispatch(cleanLoader()),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrappedComponent);
}

export default withLoading;
