import { applyMiddleware, combineReducers, createStore } from 'redux';
import headerReducer from './Reducers/headerReducer';
import thunkMiddlware from 'redux-thunk';
import authReducer from './Reducers/authReducer';
import phonesReducer from './Reducers/phonesReducer';
import likedProductReducer from './Reducers/likedProductReducer'

let reducers = combineReducers({
  header: headerReducer,
  auth: authReducer,
  phones: phonesReducer,
  liked: likedProductReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddlware));

window.store = store;

export default store;
