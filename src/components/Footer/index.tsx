import SVG from "designs/SVG";
import React from "react";
import { useDispatch } from "react-redux";
import { setAuthModalBox } from "redux/actions/config";
import {
  Anchor,
  AnchorText,
  Col,
  FooterBody,
  FooterBox,
  FooterHeader,
  FooterInner,
  FooterWrapper,
  ItemIcon,
  ListIcon,
  PaymentInner,
  PaymentWrapper,
  Row,
  Title,
} from "./styles";

const Footer: React.FC = () => {
    const dispatch = useDispatch();
  const handleShowAuthModalLogin = () => {
    dispatch(
      setAuthModalBox({
        isShow: true,
        boxName: "login",
      })
    );
  };

  const handleShowAuthModalRegister = () => {
    dispatch(
      setAuthModalBox({
        isShow: true,
        boxName: "register",
      })
    );
  };

  return (
    <FooterWrapper>
      <PaymentWrapper>
        <PaymentInner>
          <ListIcon>
            <ItemIcon>
              <SVG name="momo" className="h-[24.5px]" />
            </ItemIcon>
            <ItemIcon>
              <SVG name="vnpay" className="h-[24.5px]" />
            </ItemIcon>
            <ItemIcon>
              <SVG name="visa" className="h-[24.5px]" />
            </ItemIcon>
            <ItemIcon>
              <SVG name="mastercard" className="h-[24.5px]" />
            </ItemIcon>
            <ItemIcon>
              <small className="text-[12px]  select-none">và nhiều hình thức thanh toán khác</small>
            </ItemIcon>
          </ListIcon>
        </PaymentInner>
      </PaymentWrapper>
      <FooterInner>
        <FooterBox>
          <FooterHeader>
            <ListIcon>
              <ItemIcon>
                <SVG name="facebook" className="h-[24.5px]" />
              </ItemIcon>
              <ItemIcon>
                <SVG name="youtube" className="h-[24.5px]" />
              </ItemIcon>
              <ItemIcon>
                <SVG name="instagram" className="h-[24.5px]" />
              </ItemIcon>
            </ListIcon>
          </FooterHeader>
          <FooterBody>
            <Row>
              <Col>
                <Title>Giới thiệu</Title>
                <Anchor to="/">Game bản quyền là gì ?</Anchor>
                <Anchor to="/">Giới thiệu Divine Shop</Anchor>
                <Anchor to="/">Điều khoản dịch vụ</Anchor>
                <Anchor to="/">Chính sách bảo mật</Anchor>
              </Col>
              <Col>
                <Title>Tài khoản</Title>
                <AnchorText onClick={handleShowAuthModalLogin} className="hover:underline cursor-pointer">Đăng nhập</AnchorText>
                <AnchorText onClick={handleShowAuthModalRegister} className="hover:underline cursor-pointer">Đăng ký</AnchorText>
              </Col>
              <Col>
                <Title>Liên hệ</Title>
                <AnchorText>
                  Hotline:{" "}
                  <a className="text-[#dc3545] hover:underline" href="tel:0979 375 204">
                    1900 633 305
                  </a>
                  <p className="text-[#374151] mt-0.5 text-[13px]">
                    (Các ngày trong tuần từ 8h đến 24h)
                  </p>
                </AnchorText>
                <AnchorText>
                  Email hỗ trợ:{" "}
                  <a className="font-bold hover:underline" href="mailto:daoducminhkhoi@gmail.com">
                    daoducminhkhoi@gmail.com
                  </a>
                </AnchorText>
                <AnchorText>Địa chỉ giao dịch trực tiếp:</AnchorText>
                <AnchorText>Fanpage CSKH</AnchorText>
              </Col>
            </Row>
          </FooterBody>
        </FooterBox>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
