import SVG from "designs/SVG";
import { Form, useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { authLogin } from "redux/actions/auth";
import Swal from 'sweetalert2'
import {
  AuthCol,
  AuthDescription,
  Button,
  FormAuth,
  ImgWrapper,
  Input,
  TextLink,
} from "../AuthModalBody/styles";

const LoginBox: React.FC = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      account: "",
      password: "",
    },
    onSubmit: (values, err) => {
      dispatch(authLogin(values))
    },
  });

  return (
    <>
      <AuthCol>
        <AuthDescription>
          Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp
          dẫn
        </AuthDescription>
        <FormAuth onSubmit={formik.handleSubmit}>
          <Input
            placeholder="Email hoặc tên đăng nhập"
            name="account"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            placeholder="Mật khẩu"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextLink>Bạn quên mật khẩu?</TextLink>
          <Button type="submit">Đăng nhập</Button>
        </FormAuth>
      </AuthCol>
      <AuthCol>
        <ImgWrapper>
          <SVG className="" name="368e705d45bfc8742aa9d20dbcf4c78c" />
        </ImgWrapper>
      </AuthCol>
    </>
  );
};

export default LoginBox;
