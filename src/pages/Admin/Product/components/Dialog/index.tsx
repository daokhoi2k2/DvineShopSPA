import Input from "components/Input";
import { CloseIcon } from "designs/icons/Drawer";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDialogModal } from "redux/actions/config";
import { RootState } from "redux/reducers";
import {
  CloseDialog,
  DialogBody,
  DialogHeader,
  DialogWrapper,
  GroupRow,
  Layout,
  Title,
} from "./styles";

const Dialog = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector((state: RootState) => state.config.isDialogModal);

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
              _id: "",
              masp: "",
              namesp: "",
            }}
            onSubmit={(values) => {
              console.log("Formik", values);
            }}
          >
            {(formik) => {
              console.log(formik.touched);
              return (
                <Form className="mt-5">
                  <GroupRow>
                    <Input
                      name="masp"
                      title="Mã sản phẩm"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.masp}
                    />
                    <Input
                      className="w-full"
                      name="namesp"
                      title="Tên sản phẩm"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.namesp}
                    />
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
