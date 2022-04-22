import produce from 'immer';
import * as types from 'redux/types/tag';

export interface ICategoryItem {
  _id: string;
  tag_name: string;
  isShow: boolean;
}

export interface ITag {
  allTag: ICategoryItem[];
}

const initialState: ITag = {
  allTag: [],
};

// export const fetchCategories = () => async (dispatch: any) => {
//   const res:any = await getAllCategoryService();

//   dispatch(getAllCategoriesSuccess(res.data));
// }

const reducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_ALL_TAGS_SUCCESS:
        draft.allTag = action.payload;
        break;
    }
  });

export default reducer;
