import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import { setAuthUserToken, loginUser } from '../../redux/Reducers/authReducer';

let mapStateToProps = (state) => {
  return {
    countItemsCart: state.cart.countItemsCart,
    isAuth: state.auth.isAuth,
    token: state.auth.token,
  };
};

export default compose(connect(mapStateToProps, { setAuthUserToken, loginUser }))(Header);
