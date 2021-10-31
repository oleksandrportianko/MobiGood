import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';

let mapStateToProps = (state) => {
  return {
    countItemsCart: state.cart.countItemsCart,
    isAuth: state.auth.isAuth,
    token: state.auth.token,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Header);
