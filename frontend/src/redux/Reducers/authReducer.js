import { ApiService } from '../../api/api';

const SET_AUTH_USER = 'SET-AUTH-USER';
const SET_REGISTRATION_USER = 'SET-REGISTRATION-USER';
const SET_USER_INFO = 'SET-USER-INFO';
const SET_LOGOUT_USER = 'SET-LOGOUT-USER';

let initialState = {
  isAuth: false,
  id: '',
  firstName: '',
  lastName: '',
  login: '',
  email: '',
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER: {
      return {
        ...state,
        isAuth: true,
        id: action.id,
      };
    }
    case SET_USER_INFO: {
      return {
        ...state,
        isAuth: true,
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        login: action.login,
      };
    }
    case SET_LOGOUT_USER: {
      return {
        isAuth: false,
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        login: '',
      };
    }
    default: {
      return state;
    }
  }
};

export const setAuthUser = (id) => ({ type: SET_AUTH_USER, id });
export const setRegistrationUser = () => ({ type: SET_REGISTRATION_USER });
export const setLogoutUser = () => ({ type: SET_LOGOUT_USER });
export const setUserInfo = (id, login, firstName, lastName, email) => ({
  type: SET_USER_INFO,
  id,
  login,
  firstName,
  lastName,
  email,
});

export const getUserInfo = () => async (dispatch) => {
  return ApiService.GetUserInfo().then((response) => {
    dispatch(
      setUserInfo(
        response.id,
        response.username,
        response.first_name,
        response.last_name,
        response.email,
      ),
    );
  });
};

export const logoutUser = () => async (dispatch) => {
  return ApiService.LogoutUser().then((response) => {
    dispatch(setLogoutUser());
  });
};

export const loginUser = (username, password) => async (dispatch) => {
  return ApiService.LoginUser(username, password).then((data) => {
    dispatch(setAuthUser(data.id));
    ApiService.GetUserInfo().then((response) => {
      dispatch(
        setUserInfo(
          response.id,
          response.username,
          response.first_name,
          response.last_name,
          response.email,
        ),
      );
    });
  });
};

export const registrationUser =
  (username, password, first_name, last_name, email) => async (dispatch) => {
    return ApiService.RegistrationUser(username, password, first_name, last_name, email)
      .then((response) =>
        response.status === 200 ? ApiService.LoginUser(username, password) : null,
      )
      .then((response) => {
        ApiService.GetUserInfo().then((response) => {
          dispatch(
            setUserInfo(
              response.id,
              response.username,
              response.first_name,
              response.last_name,
              response.email,
            ),
          );
        });
      });
  };

export default authReducer;
