import { applyMiddleware, combineReducers, createStore } from 'redux';
import headerReducer from './Reducers/headerReducer';
import thunkMiddlware from 'redux-thunk';
import cartReducer from './Reducers/cartReducer';
import authReducer from './Reducers/authReducer';
import phonesReducer from './Reducers/phonesReducer';

let reducers = combineReducers({
  header: headerReducer,
  cart: cartReducer,
  auth: authReducer,
  phones: phonesReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddlware));

window.store = store;

export default store;
