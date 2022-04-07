import SVG from 'designs/SVG';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/actions/user';
import { RootState } from 'redux/reducers';
import * as yup from 'yup';
import {
  AuthCol,
  AuthDescription,
  Button,
  FormAuth,
  ImgWrapper,
  Input,
} from '../AuthModalBody/styles';
import { ErrorMsg, Tips } from './styles';

const RegisterBox: React.FC = () => {
  const dispatch = useDispatch();
  const registerError = useSelector((state: any) => state.user.registerError);

  useEffect(() => {
    formik.setErrors(registerError)
  }, [registerError])

  const schema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email('Email bạn vừa nhập không đúng định dạng')
        .required('Bạn đang để trống trường bắt buộc'),
      username: yup
        .string()
        .required('Bạn đang để trống trường bắt buộc')
        .max(17, 'Số ký tự tối đa bạn có thể nhập là 17')
        .min(6, 'Số ký tự tối thiểu bạn cần nhập là 6'),
      password: yup
        .string()
        .required('Bạn đang để trống trường bắt buộc')
        .min(6, 'Số ký tự tối thiểu bạn cần nhập là 6'),
    })
    .required();

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });


  const { touched, errors } = formik;
  return (
    <>
      <AuthCol>
        <AuthDescription>
          Đăng ký để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận
          nhiều ưu đãi hấp dẫn
        </AuthDescription>
        <FormAuth onSubmit={formik.handleSubmit}>
          <Input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
            onBlur={formik.handleBlur}
            error={touched.email && errors.email ? true : false}
          />
          {touched.email && <ErrorMsg>{errors.email}</ErrorMsg>}
          <Input
            placeholder="Tên đăng nhập"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            error={touched.username && errors.username ? true : false}
          />
          {touched.username && <ErrorMsg>{errors.username}</ErrorMsg>}

          <Input
            placeholder="Mật khẩu"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={touched.password && errors.password ? true : false}
          />
          {touched.password && <ErrorMsg>{errors.password}</ErrorMsg>}

          <Button type="submit">Tạo tài khoản</Button>
          <Tips>
            Khi bấm <span className="font-bold">Tạo tài khoản</span>, bạn đã
            đồng ý với{' '}
            <span className="font-bold hover:underline cursor-pointer">
              Điều khoản dịch vụ của Divine Shop
            </span>
          </Tips>
        </FormAuth>
      </AuthCol>
      <AuthCol>
        <ImgWrapper>
          <SVG className="" name="235dccb09069e3d4eebc6227236f9dc2" />
        </ImgWrapper>
      </AuthCol>
    </>
  );
};

export default RegisterBox;
