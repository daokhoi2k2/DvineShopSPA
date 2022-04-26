import Banner from 'components/Banner';
import Header from 'components/Header';
import Input from 'components/Input';
import ProductList from 'components/ProductList';
import { ProductListWrapper } from 'components/ProductList/styles';
import Select from 'components/Select';
import { FilterIcon } from 'designs/icons/Drawer';
import Img from 'designs/Img';
import { Form, Formik } from 'formik';
import { FilterButton } from 'pages/OrderHistory/styles';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getAllCategories } from 'redux/actions/category';
import { RootState } from 'redux/reducers';
import { getProductsListServices } from 'services/product';
import {
  Container,
  ProductEmpty,
  SearchController,
  SearchLayout,
  SearchTable,
  SearchTitle,
  SearchWrapper,
  SeparateBetweenInput,
} from './styles';

const Search: React.FC = () => {
  const [searchParams, setSearchParams]: any = useSearchParams();
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFeching] = useState(false);

  const searchParamsObject = useMemo(() => {
    return Object.fromEntries([...searchParams]);
  }, [searchParams]);

  const sortOptions = [
    {
      value: 'sales-desc',
      name: 'Bán chạy nhất',
    },
    {
      value: 'date-desc',
      name: 'Mới cập nhật',
    },
    {
      value: 'price-asc',
      name: 'Giá thấp đến cao',
    },
    {
      value: 'price-desc',
      name: 'Giá cao đến thấp',
    },
    {
      value: 'name-asc',
      name: 'Tên từ A đến Z',
    },
    {
      value: 'name-desc',
      name: 'Tên từ Z đến A',
    },
  ];

  const initialValuesSearch = {
    categoryId: searchParamsObject?.category_id || '',
    priceFrom: searchParamsObject?.price_from || '',
    priceTo: searchParamsObject?.price_to || '',
    sort: searchParamsObject?.sort || '',
    q: searchParamsObject?.q || '',
  };
  const categories = useSelector(
    (state: RootState) => state.category.allCategory
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories.length) {
      dispatch(getAllCategories());
    }
  }, []);

  useEffect(() => {
    searchParamsObject.limit = 24;
    searchParamsObject.page = 1;
    (async () => {
      setIsFeching(true);
      const response = await getProductsListServices(searchParamsObject);
      setProducts(response?.data);
      setIsFeching(false);
    })();
  }, [searchParamsObject]);

  return (
    <Container>
      <SearchWrapper>
        <SearchLayout>
          <SearchTitle>Tìm kiếm sản phẩm</SearchTitle>
          <SearchController>
            <Formik
              initialValues={initialValuesSearch}
              onSubmit={(values) => {
                const { categoryId, priceFrom, priceTo, sort, q } = values;

                const searchQuery: any = {};

                categoryId && (searchQuery.category_id = categoryId);
                priceFrom && (searchQuery.price_from = priceFrom);
                priceTo && (searchQuery.price_to = priceTo);
                sort && (searchQuery.sort = sort);
                q && (searchQuery.q = q);

                setSearchParams(searchQuery);
              }}
            >
              {(formik) => (
                <Form className="flex lg:flex-wrap">
                  <Select
                    name="categoryId"
                    className="p-2 lg:flex-basis[50%] lg:w-[50%]"
                    placeholder="Danh mục"
                    options={categories}
                    onChange={formik.handleChange}
                    selected={formik.values.categoryId}
                    specifyFieldTitle="title"
                    specifyFieldValue="_id"
                    specifyDefaultTitle="Tất cả"
                    sepecifyDefaultValue=""
                    labelStyle={{
                      paddingLeft: '18px',
                      paddinggRight: '18px',
                      marginTop: '2px',
                    }}
                  ></Select>
                  <SeparateBetweenInput>Mức giá</SeparateBetweenInput>
                  <Input
                    className="p-2"
                    title="Mức giá từ"
                    name="priceFrom"
                    labelStyle={{ paddingLeft: '1.5rem' }}
                    onChange={formik.handleChange}
                    value={formik.values.priceFrom}
                  />
                  <SeparateBetweenInput>-</SeparateBetweenInput>
                  <Input
                    className="p-2"
                    title="Mức giá đến"
                    name="priceTo"
                    labelStyle={{ paddingLeft: '1.5rem' }}
                    onChange={formik.handleChange}
                    value={formik.values.priceTo}
                  />
                  <Select
                    name="sort"
                    className="p-2"
                    placeholder="Sắp xếp"
                    options={sortOptions}
                    onChange={formik.handleChange}
                    specifyDefaultTitle="Mặc định"
                    sepecifyDefaultValue=""
                    selected={formik.values.sort}
                    labelStyle={{
                      paddingLeft: '18px',
                      paddinggRight: '18px',
                      marginTop: '2px',
                    }}
                  ></Select>
                  <FilterButton type="submit">
                    <FilterIcon className="w-[17.5px] h-[17.5px] text-white" />
                    Lọc
                  </FilterButton>
                </Form>
              )}
            </Formik>
          </SearchController>
          <SearchTable>
            {(products.length !== 0 || isFetching === true) && (
              <ProductList loading={isFetching} data={products}></ProductList>
            )}
            {products.length === 0 && isFetching === false && (
              <ProductEmpty>
                <h2 className="text-lg font-semibold text-center">
                  Không có sản phẩm phù hợp với tìm kiếm!
                </h2>
                <h4 className="text-sm text-center">
                  Bạn có thể thử từ khóa đơn giản hơn hoặc liên hệ với hỗ trợ.
                </h4>
                <Img name="emptyProduct.svg" className="mx-auto mt-10" />
              </ProductEmpty>
            )}
          </SearchTable>
        </SearchLayout>
      </SearchWrapper>
    </Container>
  );
};

export default Search;
