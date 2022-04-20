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
import FileUpload from 'components/FileUpload';
import { addProduct, updateProduct } from 'redux/actions/product';
import ProgressBar from 'components/ProgressBar';
import Select from 'components/Select';
import { getAllCategories } from 'redux/actions/category';
import parseUrl from 'utils/parseUrl';

const Dialog = () => {
  const dispatch = useDispatch();
  const { isOpen, editField } = useSelector(
    (state: RootState) => state.config.isDialogModal
  );
  const percentProgressAddProduct = useSelector(
    (state: RootState) => state.config.progressPercentUpdateProduct
  );

  const categoryList = useSelector(
    (state: RootState) => state.category.allCategory
  );

  const initialValueForm = useMemo(
    () => ({
      code: editField?.code || '',
      name: editField?.name || '',
      name_url: editField?.name_url || '',
      price: editField?.price || '',
      price_promotion: editField?.price_promotion || '',
      amount: editField?.amount || '',
      description: editField?.description || '',
      status: editField?.status || false,
      thumb_nail: editField?.thumb_nail || null,
      categoryId: editField?.categoryId || '-1',
    }),
    [editField]
  );

  useEffect(() => {
    if (!categoryList.length) {
      dispatch(getAllCategories());
    }
  }, []);

  const handleCloseDialog = () => {
    dispatch(
      setDialogModal({
        isOpen: false,
        editField: null,
      })
    );
  };

  const handleDependentFieldOfName = (value: any, formik: any) => {
    if (!formik.touched.name_url) {
      formik.setFieldValue('name_url', parseUrl(value));
    }
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
    code: yup
      .string()
      .required('Bạn đang bỏ trống 1 trường bắt buộc')
      .max(30, 'Ký tự tối đa cho phép là 30'),
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
    <DialogWrapper isOpen={isOpen}>
      <Layout>
        <DialogHeader>
          <Title>{!editField ? 'Thêm sản phẩm' : 'Cập nhật sản phẩm'}</Title>
          <CloseDialog onClick={handleCloseDialog}>
            <CloseIcon className="w-[24px] h-[24px]" />
          </CloseDialog>
        </DialogHeader>
        <DialogBody>
          <Formik
            initialValues={initialValueForm}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={async (values: any, { resetForm }) => {
              const formData: any = new FormData();

              // Append all form field for formData
              for (let key in values) {
                if (key === 'price_promotion' && !values[key]) {
                  values[key] = values.price;
                }
                // if()
                formData.append(key, values[key]);
              }

              if (editField) {
                const _id = editField?._id;
                formData.append('_id', _id);

                dispatch(updateProduct(formData));
              } else {
                dispatch(addProduct(formData));
                resetForm();
              }
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
                  {/* <GroupRow>
                    <div className="w-full md:w-1/2 flex flex-col items-center h-64 mx-auto">
                      <div className="w-full px-4">
                        <div className="flex flex-col items-center relative">
                          <div className="w-full  svelte-1l8159u">
                            <div className="my-2 p-1 flex border border-gray-200 bg-white rounded svelte-1l8159u">
                              <div className="flex flex-auto flex-wrap">
                                <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                                  <div className="text-xs font-normal leading-none max-w-full flex-initial">
                                    HTML
                                  </div>
                                  <div className="flex flex-auto flex-row-reverse">
                                    <div>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                                      >
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                                  <div className="text-xs font-normal leading-none max-w-full flex-initial">
                                    Ruby
                                  </div>
                                  <div className="flex flex-auto flex-row-reverse">
                                    <div>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                                      >
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                                  <div className="text-xs font-normal leading-none max-w-full flex-initial">
                                    Javascript
                                  </div>
                                  <div className="flex flex-auto flex-row-reverse">
                                    <div>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                                      >
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <input
                                    placeholder=""
                                    className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                                  />
                                </div>
                              </div>
                              <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                                <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-chevron-up w-4 h-4"
                                  >
                                    <polyline points="18 15 12 9 6 15" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="absolute shadow top-[100%]  bg-white z-40 w-full lef-0 rounded max-h-[300px] overflow-y-auto svelte-5uyqqj">
                            <div className="flex flex-col w-full">
                              <div className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                                  <div className="w-full items-center flex">
                                    <div className="mx-2 leading-6  ">
                                      Python{' '}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative border-teal-600">
                                  <div className="w-full items-center flex">
                                    <div className="mx-2 leading-6  ">
                                      Javascript{' '}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative border-teal-600">
                                  <div className="w-full items-center flex">
                                    <div className="mx-2 leading-6  ">
                                      Ruby{' '}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                                  <div className="w-full items-center flex">
                                    <div className="mx-2 leading-6  ">
                                      JAVA{' '}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                                  <div className="w-full items-center flex">
                                    <div className="mx-2 leading-6  ">
                                      ASP.Net{' '}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                                  <div className="w-full items-center flex">
                                    <div className="mx-2 leading-6  ">C++ </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                                  <div className="w-full items-center flex">
                                    <div className="mx-2 leading-6  ">SQL </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cursor-pointer w-full border-gray-100 rounded-b hover:bg-teal-100">
                                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative border-teal-600">
                                  <div className="w-full items-center flex">
                                    <div className="mx-2 leading-6  ">
                                      HTML{' '}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GroupRow> */}
                  <GroupRow>
                    <Field name="description">
                      {({ field }: any) => (
                        <ReactQuill
                          className="w-full min-h-[200px] mb-14 rounded-md"
                          value={field.value}
                          onChange={field.onChange(field.name)}
                          formats={['color']}
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
                    <ResetBtn
                      onClick={() => handleResetForm(formik)}
                      type="reset"
                    >
                      Làm mới
                    </ResetBtn>
                    <SubmitBtn type="submit">
                      {!editField ? 'Thêm sản phẩm' : 'Cập nhật'}
                    </SubmitBtn>
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
