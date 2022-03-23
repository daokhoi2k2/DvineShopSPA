import React from "react";
import { Link } from "react-router-dom";
import Img from "../../../designs/Img";

const CartWrapper = () => {
  return (
    <div className="cart__page-wrapper">
      <div className="grid wide">
        <div className="cart__page-header">
          <div className="row">
            <div className="col l-6 m-4 c-4">
              <div className="cart__page-header-text">
                <b className="cart__text">Giỏ Hàng</b> (1 sản phẩm)
              </div>
            </div>
            <div className="col l-6 m-8 c-8">
              <div className="cart__page-button-wrapper">
                <a
                  href="/FPOLY/ASM/home/deleteCart2All"
                  className="cart__page-button cart__page-button-danger"
                  id="removeAllProduct"
                >
                  Xóa hết giỏ hàng
                </a>
                <button className="cart__page-button cart__page-button-primary" id="buyContinue">
                  Tiếp tục mua hàng
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ borderTop: "1px solid #eeeeee" }} />
        <div className="cart__page-content">
          <div className="row cart-detail">
            <div className="col l-3 m-3 c-3">
              <Img name="Pubg.png" alt="" width="100%" />
            </div>
            <div className="col l-5 m-5 c-5">
              <div className="cart-detail-info">
                <Link to="#" className="cart-detail-info__name">
                  Tài khoản PlayerUnknown's Battlegrounds PUBG
                </Link>
                <div className="cart-detail-info__status">
                  Tình trạng:
                  <span className="cart__status-stocking">Còn hàng</span>
                </div>
                <Link to="/FPOLY/ASM/home/deleteCart2/100010" className="cart-detail-delete">
                  Xóa
                </Link>
              </div>
            </div>
            <div className="col l-4 m-4 c-4">
              <div className="cart-detail__price-amount">
                <div className="cart-detail__price-wrapper">
                  <div className="cart-detail__price">
                    290.000 VNĐ
                  </div>
                  <div className="cart-detail__promotional-wrapper">
                    <div className="cart-detail__promotional-price">340.000VNĐ</div>
                    <div className="cart-detail__promotional-percent">-15%</div>
                  </div>
                </div>
                <div className="cart-detail__amount">Số lượng: 1</div>
              </div>
            </div>
          </div>
          <div className="row cart-detail__info">
            <div className="col l-6 m-6 c-6">
              <div className="cart-detail__info-discount">
                <div className="discount__title">MÃ GIẢM GIÁ</div>
                <div className="discount__body">
                  <div className="discount__input-group">
                    <input
                      type="text"
                      className="discount__body-input"
                      placeholder="Nhập mã giảm giá..."
                    />
                    <span className="discount__body-btn">Sử dụng</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l-6 m-6 c-6">
              <div className="cart-detail__info-discount">
                <div className="discount__title">THÔNG TIN THANH TOÁN</div>
                <div className="discount__body">
                  <div className="discount__body-item" style={{ borderBottom: "1px dashed #ccc" }}>
                    <div className="discount__body-title">Thành tiển sản phẩm</div>
                    <div className="discount__body-text">290.000đ</div>
                  </div>
                  <div className="discount__body-item">
                    <div className="discount__body-title">
                      <b>TỔNG TIỀN</b>
                    </div>
                    <div
                      className="discount__body-text"
                      style={{ color: "#e53935", fontSize: "1.5rem" }}
                    >
                      290.000đ
                    </div>
                  </div>
                  <div
                    className="discount__body-item"
                    style={{ padding: "5px 0", borderTop: "1px dashed #ccc" }}
                  >
                    <div className="discount__body-title">Thưởng tiền (VIP ĐỒNG)</div>
                    <div className="discount__body-text" style={{ fontSize: "1.5rem" }}>
                      2.900 <i className="fas fa-money-bill" />
                    </div>
                  </div>
                  <div className="discount__body-item" style={{ paddingTop: 0 }}>
                    <div className="discount__body-title">Số dư hiện tại</div>
                    <div className="discount__body-text" style={{ fontSize: "1.5rem" }}>
                      33.382.800 <i className="fas fa-money-bill" />
                    </div>
                  </div>
                  <div className="discount__body-item" style={{ borderTop: "1px dashed #ccc" }}>
                    <div className="discount__body-title">
                      <b>SỐ TIỀN CẦN NẠP THÊM</b>
                    </div>
                    <div className="discount__body-text" id="discount4" style={{ color: "#000" }}>
                      0
                      <i className="fas fa-money-bill" />
                    </div>
                  </div>
                  <button
                    className="discount__body-button btn--danger"
                    id="discount5"
                    style={{ backgroundColor: "#21beff" }}
                  >
                    Nạp Thêm Tiền
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ borderTop: "1px solid #eee", marginTop: 30 }} />
          <div className="btn__wrapper-cart">
            <button className="buy_now">Thanh toán</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWrapper;
