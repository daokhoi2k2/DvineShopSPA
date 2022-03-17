import React from "react";
import { Link } from "react-router-dom";
import Img from "../../../designs/Img";
import NoteProduct from "./NoteProduct";

const ProductInfo = () => {
  return (
    <div className="product-details__content">
      <div className="grid wide">
        <div className="product-details">
          <h3 className="pd-title">Tài khoản Netflix Premium for 1 User (1 Tháng)</h3>
        </div>
        <div className="row">
          <div className="col l-6 m-12 c-12">
            <Img name="NETFLIX1406.png" width="100%" />
          </div>
          <div className="col l-6 m-12 c-12">
            <div className="sp-info-top">
              <div className="row">
                <div className="col l-4 m-4 c-4">
                  <div className="sp__info-wrapper">
                    <div className="icon">
                      <Img name="item-icon-1.png" width="20" />
                    </div>
                    <div className="sp-info__details">
                      <div className="sp-info__details-title">Mã sản phẩm</div>
                      <div className="sp-info__details-content">acc netflix</div>
                    </div>
                  </div>
                </div>
                <div className="col l-4 m-4 c-4">
                  <div className="sp__info-wrapper">
                    <div className="icon">
                      <Img name="item-icon-2.png" width="20" />
                    </div>
                    <div className="sp-info__details">
                      <div className="sp-info__details-title">Tình trạng</div>
                      <div className="sp-info__details-content">
                        <span style={{ color: "#53af2e", fontWeight: "bold" }}>Còn hàng</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col l-4 m-4 c-4">
                  <div className="sp__info-wrapper">
                    <div className="icon">
                      <Img name="item-icon-3.png" width="35" />
                    </div>
                    <div className="sp-info__details">
                      <div className="sp-info__details-title">Link gốc</div>
                      <div className="sp-info__details-content">sản phẩm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sp-price-text">Giá sản phẩm</div>
            <div className="sp-price-old">89.000 VNĐ</div>
            <div className="sp-price-new">
              79.000 VNĐ
              <span className="sp-discount">- 11%</span>
              <Link className="sp-link" to="#" title="Thông báo cho tôi khi có giá tốt hơn">
                <i className="fas fa-bell" />
                <b> Chuông báo giảm giá </b>
              </Link>
            </div>
            <hr style={{ borderTop: "1px solid #CCCCCC" }} />
            <div className="product-affiliate">
              <div className="product-affiliate__text">Chọn hạn sử dụng</div>
              <Link to="" className="btn-details btn--success" style={{height: "21px"}}>
                1 Tháng
              </Link>
              <Link to="" className="btn-details btn--light">
                Sản phẩm Netflix khác
              </Link>
            </div>
            <hr style={{ borderTop: "1px solid #CCCCCC" }} />
            <div className="row">
              <div className="col l-4 m-4 c-4">
                <div className="amount__wrapper">
                  <h3 className="amount-title">Số lượng</h3>
                  <div className="amount__input-wrapper">
                    <button className="amount-btn mines">-</button>
                    <input type="text" className="amount" defaultValue={1} />
                    <button className="amount-btn plus">+</button>
                  </div>
                </div>
              </div>
              <div className="col l-8 m-8 c-8">
                <div className="btn__list">
                  <Link to="#" className="btn-cart-redirect">
                    Mua ngay
                  </Link>
                  <Link to="#" className="btn-cart">
                    Thêm vào giỏ
                  </Link>
                </div>
              </div>
            </div>
            <hr style={{ borderTop: "1px solid #CCCCCC" }} />
            <div className="sale-info">
              <h3>Khuyến mãi liên quan</h3>
              <p>
                Ưu đãi khi thanh toán bằng <b>VNPAY-QR</b> hoặc mua siêu tốc qua{" "}
                <b>Mobile Banking</b>
              </p>
              <ul>
                <li>
                  Mã <b>VI25K</b> giảm <span className="text-red">25K</span> khi thanh toán bằng ví
                  VNPAY.{" "}
                  <Link className="look-details" to="#">
                    Xem chi tiết
                  </Link>
                </li>
                <li>
                  Nhận <b>50K</b> khi đăng kí với Ví VNPAY.{" "}
                  <Link className="look-details" to="#">
                    Xem chi tiết
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <NoteProduct />
      </div>
    </div>
  );
};

export default ProductInfo;
