import produce from 'immer';
import * as types from 'redux/types/location';

const initialState = {
  city: [],
  district: [],
  ward: [],
};

const reducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_CITY_LOCATION_SUCCESS:
        draft.city = action.payload;
        break;
      case types.GET_DISTRICT_LOCATION_BY_CITY_SUCCESS:
        draft.district = action.payload;
        break;
      case types.GET_WARD_LOCATION_BY_DISTRICT_SUCCESS:
        draft.ward = action.payload;
        break;
      case types.CLEAR_DISTRICT_LOCATION:
        draft.district = [];
        break;
      case types.CLEAR_WARD_LOCATION:
        draft.ward = [];
        break;
    }
  });

export default reducer;
