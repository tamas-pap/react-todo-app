import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../ducks';

class LogoutPage extends Component {
  componentDidMount() {
    const { logout } = this.props;
    logout();
  }

  render() {
    const { isLoggedOut } = this.props;
    return isLoggedOut ? <Redirect to="/account/login" /> : null;
  }
}

const mapStateToProps = state => ({
  isLoggedOut: state.account.login.isLoggedOut,
});
const mapDispatchToProps = { logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogoutPage);
