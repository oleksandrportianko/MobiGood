import { ApiService } from '../../api/api';

const SET_AUTH_USER = 'SET-AUTH-USER';
const SET_REGISTRATION_USER = 'SET-REGISTRATION-USER';
const SET_USER_INFO = 'SET-USER-INFO';
const SET_LOGOUT_USER = 'SET-LOGOUT-USER';
const SET_CHANGED_PASSWORD = 'SET-CHENGED-PASSWOD';
const SET_USER_CART = 'SET-USER-CART';

let initialState = {
  isAuth: false,
  id: '',
  firstName: '',
  lastName: '',
  fatherName: '',
  login: '',
  email: '',
  phone: '',
  cart: '',
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
    case SET_CHANGED_PASSWORD: {
      return {
        ...state,
        changePasswordCode: action.code,
      };
    }
    case SET_USER_CART: {
      return {
        ...state,
        cart: action.cart
      }
    }
    default: {
      return state;
    }
  }
};

export const setAuthUser = (id) => ({ type: SET_AUTH_USER, id });
export const setUserCart = (cart) => ({ type: SET_USER_CART, cart })
export const setRegistrationUser = () => ({ type: SET_REGISTRATION_USER });
export const setLogoutUser = () => ({ type: SET_LOGOUT_USER });
export const setChangedPasswordCode = (code) => ({ type: SET_CHANGED_PASSWORD, code });
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
  })
  .then((response) =>
      ApiService.GetUserCart().then((response) => {
        dispatch(setUserCart(response))
      })
    )
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

export const changePassword = (oldPassword, confirmPassword) => async (dispatch) => {
  return ApiService.ChangePassword(oldPassword, confirmPassword)
    .then((response) => {
      if (response.code === 200) {
        dispatch(setChangedPasswordCode(response.code));
      }
    })
    .catch((error) => dispatch(setChangedPasswordCode(0)));
};

export const loginUser = (email, password) => async (dispatch) => {
  return ApiService.LoginUser(email, password).then((data) => {
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
    })
    .then((response) =>
      ApiService.GetUserCart().then((response) => {
        dispatch(setUserCart(response))
      })
    )
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
        response.status === 200 ? ApiService.LoginUser(email, password) : null,
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

  export const setCartPhones = (id) => async (dispatch) => {
    ApiService.AddPhoneToCart(id).then((response) =>
    ApiService.GetUserCart().then((response) => {
      dispatch(setUserCart(response))
    })
  )
  };

  export const deleteCartPhones = (id) => async (dispatch) => {
    ApiService.RemoveProductFromCart(id).then((response) =>
    ApiService.GetUserCart().then((response) => {
      dispatch(setUserCart(response))
    })
  )
  };

  export const changeQtyCartPhones = (qty, id) => async (dispatch) => {
    ApiService.ChangeQtyOfProductsInCart(qty, id).then((response) =>
    ApiService.GetUserCart().then((response) => {
      dispatch(setUserCart(response))
    })
  )
  };

export default authReducer;
