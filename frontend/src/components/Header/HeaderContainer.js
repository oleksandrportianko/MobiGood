import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import {
  getUserInfo,
  setAuthUser,
  loginUser,
  registrationUser,
  setLogoutUser,
  logoutUser,
} from '../../redux/Reducers/authReducer';

let mapStateToProps = (state) => {
  return {
    countItemsCart: state.cart.countItemsCart,
    headerItems: state.header.headerItems,
    login: state.auth.login,
    email: state.auth.email,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserInfo,
    setAuthUser,
    loginUser,
    registrationUser,
    setLogoutUser,
    logoutUser,
  }),
)(Header);
