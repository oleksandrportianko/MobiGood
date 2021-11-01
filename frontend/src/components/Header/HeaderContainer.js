import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import { setAuthUser, loginUser, registrationUser } from '../../redux/Reducers/authReducer';

let mapStateToProps = (state) => {
  return {
    countItemsCart: state.cart.countItemsCart,
    isAuth: state.auth.isAuth,
    token: state.auth.token,
    headerItems: state.header.headerItems,
  };
};

export default compose(connect(mapStateToProps, { setAuthUser, loginUser, registrationUser }))(
  Header,
);
