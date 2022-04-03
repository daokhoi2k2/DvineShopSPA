import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "redux/actions/category";
import { getAllProducts } from "redux/actions/product";
import { RootState } from "redux/reducers";
import { fetchCategories } from "redux/reducers/category";
import { fetchProduct } from "redux/reducers/product";
import { getAllProductsServices } from "services/product";
import { CategoryItem, CategoryList, CategoryWrapper, CateIco, CateText } from "./style";

const Category: React.FC = () => {
  const categories = useSelector((state:RootState) => state.category.data);
  const dispatch = useDispatch();
  // const getAllCategories = useSelector
  useEffect(() => {
    // dispatch(getAllCategories())
    dispatch(fetchCategories())
  }, [dispatch])

  useEffect(() => {
    // dispatch((getAllProducts()))
    dispatch(fetchProduct());
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
