import { ApiService } from '../../api/api';
import AddCookies from '../../components/Common/addCookies';

const SET_AUTH_USER = 'SET-AUTH-USER';
const SET_REGISTRATION_USER = 'SET-REGISTRATION-USER';

let initialState = {
  isAuth: false,
  token: '',
  id: '',
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER: {
      AddCookies('mytoken', action.token);
      AddCookies('id', action.id);
      return {
        isAuth: true,
        token: action.token,
        id: action.id,
      };
    }
    default: {
      return state;
    }
  }
};

export const setAuthUser = (token, id) => ({ type: SET_AUTH_USER, token, id });
export const setRegistrationUser = (token) => ({ type: SET_REGISTRATION_USER, token });

export const loginUser = (username, password) => (dispatch) => {
  return ApiService.LoginUser(username, password).then((data) => {
    dispatch(setAuthUser(data.token, data.id));
    window.location.reload();
  });
};

export const registrationUser =
  (username, password, first_name, last_name, email) => (dispatch) => {
    return ApiService.RegistrationUser(username, password, first_name, last_name, email)
      .then((response) =>
        response.status === 201 ? ApiService.LoginUser(username, password) : null,
      )
      .then((resp) => {
        dispatch(setAuthUser(resp.token, resp.id));
        window.location.reload();
      });
  };

export default authReducer;
