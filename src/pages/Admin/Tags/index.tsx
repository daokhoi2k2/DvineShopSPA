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

const Tags: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const onBlurSearch = () => {
    console.log(searchValue);
  };

  const columns: IColumns[] = useMemo(
    () => [
      {
        text: 'Tên nhãn gián',
        dataField: 'tagname',
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
        subBreadCumb="Sản phẩm"
        mainBreadCumb="Nhãn gián"
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
              tagname: 'pugb',
              isShow: 'Hiện thị',
              control: 'asd',
            },
          ])}
        </Table>
      </Content>
    </Container>
  );
};

export default Tags;
