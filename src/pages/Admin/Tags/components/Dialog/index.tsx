import Input from 'components/Input';
import { CloseIcon } from 'designs/icons/Drawer';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDialogModal } from 'redux/actions/config';
import { RootState } from 'redux/reducers';
import ReactQuill from 'react-quill';
import * as yup from 'yup';
import {
  CloseDialog,
  DialogBody,
  DialogHeader,
  DialogWrapper,
  GroupRow,
  Layout,
  ResetBtn,
  SubmitBtn,
  Title,
} from './styles';
import Checkbox from 'components/Checkbox';
import { addTag, updateTag } from 'redux/actions/tag';

const Dialog = () => {
  const dispatch = useDispatch();
  const { isOpen, editField } = useSelector(
    (state: RootState) => state.config.isDialogModal
  );

  const initialValueForm = useMemo(
    () => ({
      tag_name: editField?.tag_name || '',
      isShow: editField?.isShow || true,
    }),
    [editField]
  );

  const handleCloseDialog = () => {
    dispatch(
      setDialogModal({
        isOpen: false,
        editField: null,
      })
    );
  };

  const handleResetForm = (formik: any) => {
    if (editField) {
      formik.resetForm();
      dispatch(
        setDialogModal({
          isOpen,
          editField: {},
        })
      );
    } else {
      formik.resetForm();
    }
  };

  const validationSchema = yup.object().shape({
    tag_name: yup
      .string()
      .required('Bạn đang bỏ trống 1 trường bắt buộc')
      .max(20, 'Ký tự tối đa cho phép là 20'),
  });

  return (
    <DialogWrapper isOpen={isOpen}>
      <Layout>
        <DialogHeader>
          <Title>{!editField ? 'Thêm nhãn gián' : 'Cập nhật nhãn gián'}</Title>
          <CloseDialog onClick={handleCloseDialog}>
            <CloseIcon className="w-[24px] h-[24px]" />
          </CloseDialog>
        </DialogHeader>
        <DialogBody>
          <Formik
            initialValues={initialValueForm}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={(values: any, { resetForm }) => {
              if(editField) {
                values._id = editField._id;
                dispatch(updateTag(values))
                resetForm();
              } else {
                dispatch(addTag(values));
                resetForm();
              }
            }}
          >
            {(formik) => {
              return (
                <Form className="mt-5">
                  <GroupRow>
                    <Input
                      name="tag_name"
                      className="w-full"
                      title="Tên nhãn (*)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.tag_name}
                      errorMsg={formik.errors.tag_name}
                      touched={formik.touched.tag_name}
                      isTooltip={true}
                    />
                  </GroupRow>
                  <GroupRow>
                    <Checkbox
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="isShow"
                      placeholder="Hiện thị"
                      isChecked={formik.values.isShow}
                    />
                  </GroupRow>
                  <GroupRow className="justify-end">
                    <ResetBtn
                      onClick={() => handleResetForm(formik)}
                      type="reset"
                    >
                      Làm mới
                    </ResetBtn>
                    <SubmitBtn type="submit">
                      {!editField ? 'Thêm' : 'Cập nhật'}
                    </SubmitBtn>
                  </GroupRow>
                </Form>
              );
            }}
          </Formik>
        </DialogBody>
      </Layout>
    </DialogWrapper>
  );
};

export default Dialog;
