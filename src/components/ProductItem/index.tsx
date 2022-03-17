import React from "react";
import { Link } from "react-router-dom";
import Img from "../../designs/Img";
import NumberFormat from "react-number-format";

interface Product {
  name: string;
  cost: number;
  promotionalPrice?: number;
  image: string;
}

const ProductItem: React.FC<Product> = (product) => {
  const { name, cost, promotionalPrice } = product;
  return (
    <div className="col l-3 m-6 c-6">
      <Link to="/product-detail/5" className="product__item-link">
        <div className="product__item">
          <div className="product__item-link">
            <div className="product__img">
              <Img name="NETFLIX1406.png" width="100%"></Img>
            </div>
            <div className="product__name">{name}</div>
            <div className="product__price">
              <span className="product__current-price">
                {
                  <NumberFormat
                    value={cost}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    suffix={"đ"}
                  />
                }
                đ
              </span>
              <span className="product__promotion-price">
                {
                  <NumberFormat
                    value={promotionalPrice}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    suffix={"đ"}
                  />
                }
              </span>
              <span className="product__percent-sale">
                {promotionalPrice
                  ? Math.floor(Math.abs((1 - promotionalPrice / cost) * 100)) + "%"
                  : ""}
              </span>
            </div>
          </div>
          <div className="product__cart">
            <div className="product__cart-link">
              <i className="fas fa-shopping-cart" />
            </div>
          </div>
          <div className="product__buy">
            <button className="product__buy-btn">Mua ngay</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
