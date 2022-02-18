import { ApiService } from '../../api/api';

const GET_LIKED_ITEMS = 'GET-LIKED-ITEMS';

let initialState = {
  likedItems: [],
};

let phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIKED_ITEMS: {
      return {
        ...state,
        likedItems: [action.items],
      }
    }
    default: {
      return state;
    }
  }
};

export const getLikedItemsAction = (items) => ({ type: GET_LIKED_ITEMS, items });

export const addToLikedItem = (id) => async (dispatch) => {
  return ApiService.AddToLikedList(id).then((response) => {
     console.log("add to liked from reducer", response)
  });
};

export const removeLikedItem = (id) => async (dispatch) => {
  return ApiService.RemoveLikedItems(id).then((response) => {
     console.log("remove liked from reducer", response)
  });
};

export const getLikedItemThunk = () => async (dispatch) => {
   return ApiService.GetLikedItems().then((response) => {
      console.log("items liked form reducer", response.id)
      dispatch(getLikedItemsAction(response))
   })
}

export default phonesReducer;
