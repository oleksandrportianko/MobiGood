import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import { setAuthUser, loginUser, registrationUser } from '../../redux/Reducers/authReducer';
import { getUserInfo } from '../../redux/Reducers/userReducer';

let mapStateToProps = (state) => {
  return {
    countItemsCart: state.cart.countItemsCart,
    headerItems: state.header.headerItems,
    login: state.user.login,
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
  };
};

export default compose(
  connect(mapStateToProps, { getUserInfo, setAuthUser, loginUser, registrationUser }),
)(Header);
