import { connect } from 'react-redux';
import LoginModal from './LoginModal';
import { setAuthUserToken } from '../../../redux/Reducers/authReducer';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {};
};

export default compose(connect(mapStateToProps, { setAuthUserToken })(LoginModal));
