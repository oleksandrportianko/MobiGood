import HeaderBurger from './HeaderBurger';
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToProps = (state) => {
   return {
      headerItems: state.header.headerItems,
   };
};

let mapDispatchToProps = (dispatch) => {
   return {
   }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(HeaderBurger);