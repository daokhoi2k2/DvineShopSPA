import Input from 'components/Input';
import { CloseIcon } from 'designs/icons/Drawer';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDialogModal } from 'redux/actions/config';
import { RootState } from 'redux/reducers';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as yup from 'yup';
import {
  CloseDialog,
  DialogBody,
  DialogHeader,
  DialogWrapper,
  GroupRow,
  Layout,
  SubmitBtn,
  Title,
} from './styles';
import Checkbox from 'components/Checkbox';
import FileUpload from 'components/FileUpload';
import Tooltip from 'components/Tooltip';

const Dialog = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(
    (state: RootState) => state.config.isDialogModal
  );

  const handleCloseDialog = () => {
    dispatch(setDialogModal(false));
  };

  return (
    <DialogWrapper isOpen={isOpenModal}>
      <Layout>
        <DialogHeader>
          <Title>Thêm sản phẩm</Title>
          <CloseDialog onClick={handleCloseDialog}>
            <CloseIcon className="w-[24px] h-[24px]" />
          </CloseDialog>
        </DialogHeader>
        <DialogBody>
          <Formik
            initialValues={{
              _id: '',
              code: '',
              name: '',
              price: '',
              price_promotion: '',
              amount: '',
              description: '',
              status: false,
              thumb_nail: '',
            }}
            validationSchema={yup.object().shape({
              code: yup
                .string()
                .required('Bạn đang bỏ trống 1 trường bắt buộc')
                .max(10, 'Ký tự tối đa cho phép là 10'),
              name: yup
                .string()
                .required('Bạn đang bỏ trống 1 trường bắt buộc')
                .min(6, 'Ký tự tối thiểu là 6'),
              price: yup
                .number()
                .required('Bạn đang bỏ trống 1 trường bắt buộc')
                .typeError('Giá trị nhập không phải là đơn vị tiền tệ'),
              price_promotion: yup
                .number()
                .typeError('Giá trị nhập không phải là đơn vị tiền tệ'),
              amount: yup.number(),
              description: yup.string(),
              status: yup.boolean(),
            })}
            onSubmit={(values) => {
              console.log('Formik', values);
            }}
          >
            {(formik) => {
              return (
                <Form className="mt-5">
                  <GroupRow>
                    <Input
                      name="code"
                      title="Mã sản phẩm (*)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.code}
                      errorMsg={formik.errors.code}
                      touched={formik.touched.code}
                      isTooltip={true}
                    />
                    <Tooltip
                      name="code"
                      errorMsg={formik.errors.code}
                      touched={formik.touched.code}
                    />
                    <Input
                      className="w-full"
                      name="name"
                      title="Tên sản phẩm (*)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      errorMsg={formik.errors.name}
                      touched={formik.touched.name}
                      isTooltip={true}
                    />
                    <Tooltip
                      name="name"
                      errorMsg={formik.errors.name}
                      touched={formik.touched.name}
                    />
                  </GroupRow>
                  <GroupRow>
                    <Input
                      className="w-full"
                      name="price"
                      title="Giá gốc (*)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.price}
                      errorMsg={formik.errors.price}
                      touched={formik.touched.price}
                      isTooltip={true}
                    />
                    <Tooltip
                      name="price"
                      errorMsg={formik.errors.price}
                      touched={formik.touched.price}
                    />
                    <Input
                      className="w-full"
                      name="price_promotion"
                      title="Giá khuyến mãi"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.price_promotion}
                      errorMsg={formik.errors.price_promotion}
                      touched={formik.touched.price_promotion}
                      isTooltip={true}
                    />
                    <Tooltip
                      name="price_promotion"
                      errorMsg={formik.errors.price_promotion}
                      touched={formik.touched.price_promotion}
                    />
                    <Input
                      className="w-full"
                      name="amount"
                      title="Số lượng"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.amount}
                    />
                  </GroupRow>
                  <GroupRow>
                    <Field name="description">
                      {({ field }: any) => (
                        <ReactQuill
                          className="w-full min-h-[200px] mb-14 rounded-md"
                          value={field.value}
                          onChange={field.onChange(field.name)}
                          onBlur={() =>
                            formik.handleBlur({
                              target: { name: 'description' },
                            })
                          }
                        />
                      )}
                    </Field>
                  </GroupRow>
                  <GroupRow>
                    <FileUpload
                      onChange={(e) =>
                        formik.setFieldValue('file', e.target.files[0])
                      }
                    ></FileUpload>
                  </GroupRow>
                  <GroupRow>
                    <Checkbox
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="status"
                      placeholder="Còn hàng"
                      isChecked={formik.values.status}
                    />
                  </GroupRow>
                  <SubmitBtn type="submit">Thêm sản phẩm</SubmitBtn>
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
