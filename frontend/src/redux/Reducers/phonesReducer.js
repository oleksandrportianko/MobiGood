import { ApiService } from '../../api/api';
const SET_PHONES_DATA = 'SET-PHONES-DATA';

let initialState = {
  phonesData: [],
};

let phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHONES_DATA: {
      return {
        ...state,
        phonesData: [...action.data],
      };
    }
    default: {
      return state;
    }
  }
};

export const setPhonesData = (data) => ({ type: SET_PHONES_DATA, data });

export const getPhones = () => async (dispatch) => {
  return ApiService.GetPhonesData().then((response) => {
    dispatch(setPhonesData(response));
  });
};

export default phonesReducer;
