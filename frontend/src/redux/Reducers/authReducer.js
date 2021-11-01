import { ApiService } from '../../api/api';
import AddCookies from '../../components/Common/addCookies';

const SET_AUTH_USER = 'SET-AUTH-USER';
const SET_REGISTRATION_USER = 'SET-REGISTRATION-USER';

let initialState = {
  isAuth: false,
  token: '',
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER: {
      AddCookies('mytoken', action.token);
      return {
        isAuth: true,
        token: action.token,
      };
    }
    default: {
      return state;
    }
  }
};

export const setAuthUser = (token) => ({ type: SET_AUTH_USER, token });
export const setRegistrationUser = (token) => ({ type: SET_REGISTRATION_USER, token });

export const loginUser = (username, password) => (dispatch) => {
  return ApiService.LoginUser(username, password).then((data) => {
    dispatch(setAuthUser(data.token));
  });
};

export const registrationUser = (username, password) => (dispatch) => {
  return ApiService.RegistrationUser(username, password)
    .then((response) => (response.status === 201 ? ApiService.LoginUser(username, password) : null))
    .then((resp) => {
      dispatch(setAuthUser(resp.token));
    });
};

export default authReducer;
