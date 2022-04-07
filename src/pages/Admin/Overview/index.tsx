import NavDrawer from 'components/Admin/NavDrawer';
import TopHeader from 'components/Admin/TopHeader';
import Input from 'components/Input';
import Table, { IColumns } from 'components/Table';
import React, { useMemo, useState } from 'react';

import {
  AddBtnWrapper,
  AddButton,
  Container,
  Content,
  ControlUIWrapper,
  SearchInput,
} from './styles';

const Overview: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const onBlurSearch = () => {
    console.log(searchValue);
  };

  const columns: IColumns[] = useMemo(
    () => [
      {
        text: 'Mã sản phẩm',
        dataField: 'masp',
      },
      {
        text: 'Thumnail',
        dataField: 'thumbnail',
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

  return (
    <Container className="w-full">
      <TopHeader
        subBreadCumb="Bảng điều khiển"
        mainBreadCumb="Tổng quan"
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
            <AddButton>Thêm</AddButton>
          </AddBtnWrapper>
        </ControlUIWrapper>
        <Table columns={columns} page={1} totalSize={10}>
          {data.map((item) => [
            {
              thumbnail: <h1>{item.thumbnail}</h1>,
              masp: 'Admin Duy',
              namesp: 'Game of Thrones',
              isShow: true,
              control: 'asd',
            },
          ])}
        </Table>
      </Content>
    </Container>
  );
};

export default Overview;
