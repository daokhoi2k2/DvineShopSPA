import NavDrawer from 'components/Admin/NavDrawer';
import TopHeader from 'components/Admin/TopHeader';
import Input from 'components/Input';
import Table, { IColumns } from 'components/Table';
import { EditIcon, TrashIcon } from 'designs/icons/Drawer';
import Img from 'designs/Img';
import React, { useEffect, useMemo, useState } from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { setDialogModal } from 'redux/actions/config';
import {
  deleteProduct,
  getAllProducts,
  updateProduct,
} from 'redux/actions/product';
import { RootState } from 'redux/reducers';
import AlertPrompt from './components/AlertPrompt';
import Dialog from './components/Dialog';

import {
  AddBtnWrapper,
  AddButton,
  BtnItem,
  Container,
  Content,
  ControlUIWrapper,
  ControlWrapper,
  Layout,
  SearchInput,
  StatusButton,
  Wrapper,
} from './styles';

const ProductAdmin: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.product.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const onBlurSearch = () => {
    console.log(searchValue);
  };

  const handleToggleStatus = (values: any) => {
    const newItem = { ...values };
    newItem.amount = '';
    newItem.status = !newItem.status;

    const formData: any = new FormData();

    // // Append all form field for formData
    for (let key in newItem) {
      formData.append(key, newItem[key]);
    }

    dispatch(updateProduct(formData));
  };

  const columns: IColumns[] = useMemo(
    () => [
      {
        text: <div className="p-6">Thumbnail</div>,
        dataField: 'thumbnail',
      },
      {
        text: <div className="p-6">Mã sản phẩm</div>,
        dataField: 'masp',
      },
      {
        text: <div className="xl:hidden">Tên sản phẩm</div>,
        dataField: 'namesp',
      },
      {
        text: <div className="p-6">Trạng thái</div>,
        dataField: 'status',
      },
      {
        text: <div className="p-6">Điều khiển</div>,
        dataField: 'control',
      },
    ],
    []
  );

  const handleOpenDialog = () => {
    dispatch(
      setDialogModal({
        isOpen: true,
        editField: null,
      })
    );
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
              masp: <div className="p-6">{item.code}</div>,
              thumbnail: (
                <LazyLoad
                  className="relative pt-[50%] bg-fallback mx-[10px] my-[5px]"
                  placeholder={
                    <Img
                      className="rounded-md absolute w-full h-full top-0"
                      name="fallback.png"
                    />
                  }
                >
                  <img
                    className="rounded-md absolute w-full h-full top-0"
                    src={
                      item.thumb_nail
                        ? process.env.REACT_APP_API_URL + `/${item.thumb_nail}`
                        : require('../../../assets/images/defaultProduct.png')
                    }
                    alt={item.thumbnail}
                  />
                </LazyLoad>
              ),
              namesp: <div className="xl:hidden">{item.name}</div>,
              status: (
                <StatusButton
                  onClick={() => handleToggleStatus(item)}
                  status={item.status}
                >
                  {item.status ? 'Còn hàng' : 'Hết hàng'}{' '}
                </StatusButton>
              ),
              control: (
                <ControlWrapper>
                  <BtnItem
                    onClick={() =>
                      dispatch(
                        setDialogModal({ isOpen: true, editField: item })
                      )
                    }
                  >
                    <EditIcon className="w-[20px] h-[20px]" />
                  </BtnItem>
                  <BtnItem onClick={() => dispatch(deleteProduct(item?._id))}>
                    <TrashIcon className="w-[20px] h-[20px]" />
                  </BtnItem>
                </ControlWrapper>
              ),
            },
          ])}
        </Table>
      </Content>
      <Dialog />
      {/* <AlertPrompt /> */}
    </Container>
  );
};

export default ProductAdmin;
