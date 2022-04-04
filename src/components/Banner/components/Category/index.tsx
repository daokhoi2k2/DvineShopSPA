import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "redux/actions/category";
import { RootState } from "redux/reducers";
import { CategoryItem, CategoryList, CategoryWrapper, CateIco, CateText } from "./style";

const Category: React.FC = () => {
  const categories = useSelector((state:RootState) => state.category.allCategory);
  const dispatch = useDispatch();
  // const getAllCategories = useSelector
  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  useEffect(() => {
    // dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <CategoryWrapper>
      <CategoryList>
        {categories.map((item: any) => {
          return (
            <CategoryItem key={item?.title}>
              <CateIco>
                <img src={item?.icon} className="w-[21px] h-[17.5px]" alt={item?.title} />
              </CateIco>
              <CateText>{item?.title}</CateText>
            </CategoryItem>
          );
        })}
      </CategoryList>
    </CategoryWrapper>
  );
};

export default Category;
