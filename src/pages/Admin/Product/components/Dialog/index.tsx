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
import { getAllTags } from 'redux/actions/tag';
import parseUrl from 'utils/parseUrl';
import MultipleSelect from 'components/MultipleSelect';

const Dialog = () => {
  const dispatch = useDispatch();
  const { isOpen, editField } = useSelector(
    (state: RootState) => state.config.isDialogModal
  );
  const allTags = useSelector((state: RootState) => state.tag.allTag);
  const percentProgressAddProduct = useSelector(
    (state: RootState) => state.config.progressPercentUpdateProduct
  );

  const modules = {
    toolbar: [
      [{ color: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

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
      tags: editField?.tags || [],
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
      .required('B???n ??ang b??? tr???ng 1 tr?????ng b???t bu???c')
      .max(30, 'K?? t??? t???i ??a cho ph??p l?? 30'),
    name: yup
      .string()
      .required('B???n ??ang b??? tr???ng 1 tr?????ng b???t bu???c')
      .min(6, 'K?? t??? t???i thi???u l?? 6'),
    price: yup
      .number()
      .required('B???n ??ang b??? tr???ng 1 tr?????ng b???t bu???c')
      .typeError('Gi?? tr??? nh???p kh??ng ph???i l?? ????n v??? ti???n t???'),
    price_promotion: yup
      .number()
      .typeError('Gi?? tr??? nh???p kh??ng ph???i l?? ????n v??? ti???n t???'),
    amount: yup.number(),
    description: yup.string(),
    status: yup.boolean(),
  });

  return (
    <DialogWrapper isOpen={isOpen}>
      <Layout>
        <DialogHeader>
          <Title>{!editField ? 'Th??m s???n ph???m' : 'C???p nh???t s???n ph???m'}</Title>
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
                if (key === 'tags') {
                  for (var i = 0; i < values.tags.length; i++) {
                    formData.append('tags[]', values.tags[i]);
                  }
                  continue;
                }
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
                      title="M?? s???n ph???m (*)"
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
                      title="T??n s???n ph???m (*)"
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
                      title="???????ng d???n s???n ph???m (*)"
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
                      title="Gi?? g???c (*)"
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
                      title="Gi?? khuy???n m??i"
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
                      title="S??? l?????ng"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.amount}
                    />
                  </GroupRow>
                  <GroupRow>
                    <Select
                      placeholder="Th??? lo???i"
                      options={categoryList}
                      name="categoryId"
                      specifyFieldValue={'_id'}
                      specifyFieldTitle={'title'}
                      onChange={formik.handleChange}
                      selected={formik.values.categoryId}
                    ></Select>
                  </GroupRow>
                  <GroupRow>
                    <MultipleSelect
                      name="tags"
                      id="tags"
                      tags={allTags}
                      onChange={formik.handleChange}
                      value={formik.values.tags}
                    ></MultipleSelect>
                  </GroupRow>
                  <GroupRow>
                    <Field name="description">
                      {({ field }: any) => (
                        <ReactQuill
                          className="w-full min-h-[200px] mb-14 rounded-md"
                          modules={modules}
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
                      placeholder="C??n h??ng"
                      isChecked={formik.values.status}
                    />
                  </GroupRow>
                  <GroupRow className="justify-end">
                    <ResetBtn
                      onClick={() => handleResetForm(formik)}
                      type="reset"
                    >
                      L??m m???i
                    </ResetBtn>
                    <SubmitBtn type="submit">
                      {!editField ? 'Th??m s???n ph???m' : 'C???p nh???t'}
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
