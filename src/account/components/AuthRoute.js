import React from 'react';
import PropTypes from 'prop-types';
import RouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const AuthRoute = ({ isLoggedIn, component: Component, ...rest }) => (
  <Route {...rest} render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/account/login" />)} />
);

AuthRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  location: RouterPropTypes.location.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.account.login.isLoggedIn,
});

export default withRouter(connect(mapStateToProps)(AuthRoute));
