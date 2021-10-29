import { applyMiddleware, combineReducers, createStore } from 'redux';
import headerReducer from './Reducers/headerReducer';
import thunkMiddlware from 'redux-thunk';
import cartReducer from './Reducers/cartReducer';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  header: headerReducer,
  cart: cartReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddlware));

window.store = store;

export default store;
