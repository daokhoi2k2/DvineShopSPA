import React from "react";
import { Link } from "react-router-dom";

const TopCategory = () => {
  return (
    <div className="category">
      <div className="grid wide">
        <div className="row mt-20">
          <div className="col l-2-4 m-0 c-0">
            <div className="category__item category__item--primary">
              <i className="fas fa-bars" />
              <span className="category__item-name">Danh mục sản phẩm</span>
            </div>
          </div>
          <div className="col l-2-4 m-0 c-0">
            <Link to="#" className="category__item category__item--second">
              <i className="fas fa-gamepad" />
              <span className="category__item-name">Hướng dẫn mua hàng</span>
            </Link>
          </div>
          <div className="col l-2-4 m-0 c-0">
            <Link to="#" className="category__item category__item--second">
              <i className="far fa-handshake" />
              <span className="category__item-name">Liên hệ hợp tác</span>
            </Link>
          </div>
          <div className="col l-2-4 m-0 c-0">
            <Link to="#" className="category__item category__item--second">
              <i className="far fa-credit-card" />
              <span className="category__item-name">Hình thức thanh toán</span>
            </Link>
          </div>
          <div className="col l-2-4 m-0 c-0">
            <Link to="#" className="category__item category__item--second">
              <i className="fas fa-life-ring" />
              <span className="category__item-name">Hỗ trợ</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
