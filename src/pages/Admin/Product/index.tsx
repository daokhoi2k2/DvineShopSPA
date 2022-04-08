import NavDrawer from 'components/Admin/NavDrawer';
import TopHeader from 'components/Admin/TopHeader';
import Input from 'components/Input';
import Table, { IColumns } from 'components/Table';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDialogModal } from 'redux/actions/config';
import { getAllProducts } from 'redux/actions/product';
import { RootState } from 'redux/reducers';
import Dialog from './components/Dialog';

import {
  AddBtnWrapper,
  AddButton,
  Container,
  Content,
  ControlUIWrapper,
  Layout,
  SearchInput,
  Wrapper,
} from './styles';

const ProductAdmin: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [])

  const onBlurSearch = () => {
    console.log(searchValue);
  };

  const columns: IColumns[] = useMemo(
    () => [
      {
        text: 'Thumnail',
        dataField: 'thumbnail',
      },
      {
        text: 'Mã sản phẩm',
        dataField: 'masp',
      },
      {
        text: 'Tên sản phẩm',
        dataField: 'namesp',
      },
      {
        text: 'Hiển thị',
        dataField: 'isShow',
      },
      {
        text: 'Điều khiển',
        dataField: 'control',
      },
    ],
    []
  );

  const data = [
    {
      thumbnail: 'ASDC',
    },
  ];

  const handleOpenDialog = () => {
    dispatch(setDialogModal(true));
  };

  return (
    <Container className="w-full">
      <TopHeader
        subBreadCumb="Bảng điều khiển"
        mainBreadCumb="Sản phẩm"
      ></TopHeader>
      <Content>
        <ControlUIWrapper>
          <SearchInput>
            <Input
              title="Search"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              name="search"
              onBlur={onBlurSearch}
            />
          </SearchInput>
          <AddBtnWrapper>
            <AddButton onClick={handleOpenDialog}>Thêm</AddButton>
          </AddBtnWrapper>
        </ControlUIWrapper>
        <Table columns={columns} page={1} totalSize={10}>
          {products?.map((item: any) => [
            {
              masp: item.code,
              thumbnail: <img className="w-[100px]" src={process.env.REACT_APP_API_URL + `/${item.thumb_nail}`} alt={item.thumbnail} />,
              namesp: item.name,
              isShow: <h1>{item.isShow ? "Còn hàng" : "Hết hàng"} </h1>,
              control: '',
            },
          ])}
        </Table>
      </Content>
      <Dialog />
    </Container>
  );
};

export default ProductAdmin;
