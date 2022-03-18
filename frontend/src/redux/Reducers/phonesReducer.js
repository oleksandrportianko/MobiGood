import { ApiService } from '../../api/api';

const SET_PHONES_DATA = 'SET-PHONES-DATA';
const SET_CURRENT_PHONE = 'SET-CURRENT-PHONE';

let initialState = {
  phonesData: [],
  currentPhone: '',
};

let phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHONES_DATA: {
      return {
        ...state,
        phonesData: [...action.data],
      };
    }
    case SET_CURRENT_PHONE: {
      return {
        ...state,
        currentPhone: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export const setPhonesData = (data) => ({ type: SET_PHONES_DATA, data });
export const setCurrentPhone = (data) => ({ type: SET_CURRENT_PHONE, data });

export const getPhones = () => async (dispatch) => {
  return ApiService.GetPhonesData().then((response) => {
    dispatch(setPhonesData(response));
  });
}

export const getCurrentPhone = (id) => async (dispatch) => {
  return ApiService.GetPhonesById(id).then((response) => {
    dispatch(setCurrentPhone(response))
})}

export default phonesReducer;
