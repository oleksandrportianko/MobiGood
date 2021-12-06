const SET_PHONES_TO_CART = 'SET-PHONES-TO-CART';

let initialState = {
  countItemsCart: 0,
  items: [],
};

let cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHONES_TO_CART: {
      return {
        ...state,
        countItemsCart: state.countItemsCart + 1,
        items: [...state.items, action.id],
      };
    }
    default: {
      return state;
    }
  }
};

export const setPhonesToCart = (id) => ({ type: SET_PHONES_TO_CART, id });

export const setCartPhones = (id) => async (dispatch) => {
  dispatch(setPhonesToCart(id));
};

export default cartReducer;
