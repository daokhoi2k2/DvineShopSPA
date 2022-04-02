import produce from "immer";
import * as types from "redux/types/category";

export interface ICategoryItem {
  _id: string;
  title: string;
  icon: string;
}

export interface ICategory {
  categories: ICategoryItem[];
}

const initialState: ICategory = {
  categories: [],
};

const reducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_ALL_CATEGORIES_SUCCESS:
        draft.categories = action.payload
        break;
    }
  });

export default reducer;
