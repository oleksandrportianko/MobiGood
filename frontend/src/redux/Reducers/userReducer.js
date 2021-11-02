import { ApiService } from '../../api/api';

const SET_USER_INFO = 'SET-USER-INFO';

let initialState = {
  firstName: '',
  lastName: '',
  email: '',
  login: '',
};

let userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      return {
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        login: action.login,
      };
    }
    default: {
      return state;
    }
  }
};

export const setUserInfo = (firstName, lastName, email, login) => ({
  type: SET_USER_INFO,
  firstName,
  lastName,
  email,
  login,
});

export const getUserInfo = (id) => (dispatch) => {
  return ApiService.GetUserInfo(id).then((response) => {
    dispatch(
      setUserInfo(response.first_name, response.last_name, response.email, response.username),
    );
  });
};

export default userReducer;
