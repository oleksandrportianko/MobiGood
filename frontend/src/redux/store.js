import { applyMiddleware, combineReducers, createStore } from 'redux';
import headerReducer from './Reducers/headerReducer';
import thunkMiddlware from 'redux-thunk';

let reducers = combineReducers({
  header: headerReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddlware));

window.store = store;

export default store;
