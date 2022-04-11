import Input from 'components/Input';
import { CloseIcon } from 'designs/icons/Drawer';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
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
import FileUpload from 'components/FileUpload';
import { addProduct } from 'redux/actions/product';
import ProgressBar from 'components/ProgressBar';
import Select from 'components/Select';
import { getAllCategories } from 'redux/actions/category';
import parseUrl from 'utils/parseUrl';

const Dialog = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(
    (state: RootState) => state.config.isDialogModal
  );
  const percentProgressAddProduct = useSelector(
    (state: RootState) => state.config.progressPercentUpdateProduct
  );

  const categoryList = useSelector(
    (state: RootState) => state.category.allCategory
  );

  useEffect(() => {
    if (!categoryList.length) {
      dispatch(getAllCategories());
    }
  }, []);

  const handleCloseDialog = () => {
    dispatch(setDialogModal(false));
  };

  const handleDependentFieldOfName = (value: any, formik: any) => {
    if(!formik.touched.name_url) {
      formik.setFieldValue("name_url", parseUrl(value))
    }
  }

  const validationSchema = yup.object().shape({
    code: yup
      .string()
      .required('Bạn đang bỏ trống 1 trường bắt buộc')
      .max(20, 'Ký tự tối đa cho phép là 20'),
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
  });

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
              // _id: '',
              code: '',
              name: '',
              name_url: '',
              price: '',
              price_promotion: '',
              amount: '',
              description: '',
              status: false,
              thumb_nail: '',
              categoryId: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values: any) => {
              const formData: any = new FormData();

              // Append all form field for formData
              for (let key in values) {
                formData.append(key, values[key]);
              }

              dispatch(addProduct(formData));
            }}
          >
            {(formik) => {
              return (
                <Form className="mt-5">
                  <GroupRow>
                    <Input
                      name="code"
                      className="w-full"
                      title="Mã sản phẩm (*)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.code}
                      errorMsg={formik.errors.code}
                      touched={formik.touched.code}
                      isTooltip={true}
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
                      handleDependentFieldOf={handleDependentFieldOfName}
                    />
                  </GroupRow>
                  <GroupRow>
                    <Input
                      className="w-full"
                      name="name_url"
                      title="Đường dẫn sản phẩm (*)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name_url}
                      touched={formik.touched.name_url}
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
                    <Select
                      placeholder="Thể loại"
                      options={categoryList}
                      name="categoryId"
                      specifyFieldValue={'_id'}
                      specifyFieldTitle={'title'}
                      onChange={formik.handleChange}
                      selected={formik.values.categoryId}
                    ></Select>
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
                        formik.setFieldValue('thumb_nail', e.target.files[0])
                      }
                      isPreviewImg={true}
                      value={formik.values.thumb_nail}
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
                  <GroupRow className="justify-end">
                    <ResetBtn onClick={() => formik.resetForm()} type="reset">
                      Hủy
                    </ResetBtn>
                    <SubmitBtn type="submit">Thêm sản phẩm</SubmitBtn>
                  </GroupRow>
                  <ProgressBar
                    percent={percentProgressAddProduct}
                  ></ProgressBar>
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
