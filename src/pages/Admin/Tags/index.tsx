import NavDrawer from 'components/Admin/NavDrawer';
import TopHeader from 'components/Admin/TopHeader';
import Input from 'components/Input';
import Table, { IColumns } from 'components/Table';
import { EditIcon, TrashIcon } from 'designs/icons/Drawer';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDialogModal } from 'redux/actions/config';
import { getAllTags } from 'redux/actions/tag';
import { RootState } from 'redux/reducers';
import { BtnItem, ControlWrapper, StatusButton } from '../Product/styles';
import Dialog from './components/Dialog';

import {
  AddBtnWrapper,
  AddButton,
  Container,
  Content,
  ControlUIWrapper,
  SearchInput,
  TagCol,
} from './styles';

const Tags: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const allTags = useSelector((state: RootState) => state.tag.allTag);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTags());
  }, []);

  useEffect(() => {
    dispatch(
      setDialogModal({
        isOpen: false,
        editField: null,
      })
    );
  }, []);

  const handleOpenDialog = () => {
    dispatch(
      setDialogModal({
        isOpen: true,
        editField: null,
      })
    );
  };

  const onBlurSearch = () => {
    console.log(searchValue);
  };

  const handleDeleteTag = (_id: string) => {
    console.log(_id)
  }

  const columns: IColumns[] = useMemo(
    () => [
      {
        text: <div className="p-6">Tên nhãn gián</div>,
        dataField: 'tagname',
      },
      {
        text: <div className="p-6">Trạng thái</div>,
        dataField: 'isShow',
      },
      {
        text: <div className="p-6 flex justify-end">Tính năng</div>,
        dataField: 'control',
      },
    ],
    []
  );

  return (
    <Container className="w-full">
      <TopHeader subBreadCumb="Sản phẩm" mainBreadCumb="Nhãn gián"></TopHeader>
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
          {allTags.map((item: any) => [
            {
              tagname: <TagCol>{item.tag_name}</TagCol>,
              isShow: (
                <TagCol className='my-3'>
                  <StatusButton status={item.isShow}>
                    {item.isShow ? 'Hiện thị' : 'Ẩn'}
                  </StatusButton>
                </TagCol>
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
                  <BtnItem>
                    <TrashIcon onClick={() => handleDeleteTag(item._id)} className="w-[20px] h-[20px]" />
                  </BtnItem>
                </ControlWrapper>
              ),
            },
          ])}
        </Table>
      </Content>
      <Dialog />
    </Container>
  );
};

export default Tags;
