import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem";

const ProductList = () => {
  return (
    <div className="grid wide">
      <div className="hot-product__title-wrapper">
        <div className="hot-product__title">Sản phẩm nổi bật</div>
        <button className="btn--details">Xem chi tiết</button>
      </div>
      <div className="row">
        <ProductItem name="Tài khoản Netflix Premium for 1 User (1 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
        <ProductItem name="Tài khoản Netflix Premium for 1 User (2 Tháng)" cost={79000} promotionalPrice={89000} image="" />
      </div>
    </div>
  );
};

export default ProductList;
