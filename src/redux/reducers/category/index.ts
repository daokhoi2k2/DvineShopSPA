import produce from "immer";
import { getAllCategoriesSuccess } from "redux/actions/category";
import * as types from "redux/types/category";
import { getAllCategoryService } from "services/category";

export interface ICategoryItem {
  _id: string;
  title: string;
  icon: string;
}

export interface ICategory {
  data: ICategoryItem[];
}

const initialState: ICategory = {
  data: [],
};

export const fetchCategories = () => async (dispatch: any) => {
  const res:any = await getAllCategoryService();

  dispatch(getAllCategoriesSuccess(res.data));
}

const reducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_ALL_CATEGORIES_SUCCESS:
        draft.data = action.payload
        break;
    }
  });

export default reducer;