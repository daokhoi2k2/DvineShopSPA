import SVG from "designs/SVG";
import React, { useEffect } from "react";
import LazyLoad, { forceCheck } from "react-lazyload";
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
  useEffect(() => {
    // Kiểm tra thủ công các phẩn tử với LazyLoad vì AuthModel được ẩn sau đó hiện thị trở lại
    forceCheck();
  });

  return (
    <>
      <AuthCol>
        <AuthDescription>
          Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp
          dẫn
        </AuthDescription>
        <FormAuth>
          <Input placeholder="Email hoặc tên đăng nhập" />
          <Input placeholder="Mật khẩu" />
          <TextLink>Bạn quên mật khẩu?</TextLink>
          <Button>Đăng nhập</Button>
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
