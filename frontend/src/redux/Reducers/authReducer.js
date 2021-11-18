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
  fatherName: '',
  login: '',
  email: '',
  phone: '',
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
        fatherName: action.fatherName,
        email: action.email,
        login: action.login,
        phone: action.phone,
      };
    }
    case SET_LOGOUT_USER: {
      return {
        isAuth: false,
        id: '',
        firstName: '',
        lastName: '',
        fatherName: '',
        email: '',
        login: '',
        phone: '',
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
export const setUserInfo = (id, login, firstName, lastName, fatherName, email, phone) => ({
  type: SET_USER_INFO,
  id,
  login,
  firstName,
  lastName,
  fatherName,
  email,
  phone,
});

export const getUserInfo = () => async (dispatch) => {
  return ApiService.GetUserInfo().then((response) => {
    dispatch(
      setUserInfo(
        response.id,
        response.username,
        response.first_name,
        response.last_name,
        response.father_name,
        response.email,
        response.phone,
      ),
    );
  });
};

export const editPersonalDataUser =
  (username, first_name, last_name, father_name, email, phone) => async (dispatch) => {
    return ApiService.EditPersonalData(
      username,
      first_name,
      last_name,
      father_name,
      email,
      phone,
    ).then((response) => {
      dispatch(
        setUserInfo(
          response.id,
          response.username,
          response.first_name,
          response.last_name,
          response.father_name,
          response.email,
          response.phone,
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
          response.father_name,
          response.email,
          response.phone,
        ),
      );
    });
  });
};

export const registrationUser =
  (username, password, first_name, last_name, father_name, email, phone) => async (dispatch) => {
    return ApiService.RegistrationUser(
      username,
      password,
      first_name,
      last_name,
      father_name,
      email,
      phone,
    )
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
              response.father_name,
              response.email,
              response.phone,
            ),
          );
        });
      });
  };

export default authReducer;
