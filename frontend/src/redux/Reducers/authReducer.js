import { ApiService } from '../../api/api';

const SET_AUTH_USER_TOKEN = 'SET-AUTH-USER-TOKEN';

let initialState = {
  isAuth: false,
  token: '',
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_TOKEN: {
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

export const setAuthUserToken = (token) => ({ type: SET_AUTH_USER_TOKEN, token });

export default authReducer;
