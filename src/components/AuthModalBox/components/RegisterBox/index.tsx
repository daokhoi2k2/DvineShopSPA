import SVG from "designs/SVG";
import React from "react";
import {
  AuthCol,
  AuthDescription,
  Button,
  FormAuth,
  ImgWrapper,
  Input,
  TextLink,
} from "../AuthModalBody/styles";
import { Tips } from "./styles";

const RegisterBox: React.FC = () => {
  return (
    <>
      <AuthCol>
        <AuthDescription>
          Đăng ký để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và nhận nhiều ưu đãi hấp
          dẫn
        </AuthDescription>
        <FormAuth>
          <Input placeholder="Email" />
          <Input placeholder="Tên đăng nhập" />
          <Input placeholder="Mật khẩu" />
          <Button>Tạo tài khoản</Button>
          <Tips>
            Khi bấm <span className="font-bold">Tạo tài khoản</span>, bạn đã đồng ý với <span className="font-bold hover:underline cursor-pointer">Điều khoản dịch vụ của Divine Shop</span>
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
