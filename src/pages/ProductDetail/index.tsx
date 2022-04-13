import Header from 'components/Header';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByHashNameServices } from 'services/product';
import MoreThumbNail from './components/MoreThumbNail';
import ProductMainInfo from './components/ProductMainInfo';
import ProductSubInfo from './components/ProductSubInfo';
import ReactQuill from 'react-quill'; // ES6
import {
  Container,
  DescriptionContent,
  DescriptionInner,
  DescriptionTitle,
  ProductDetailDescription,
  ProductDetailInner,
  ProductDetailWrapper,
} from './styles';

const ProductDetail = () => {
  const { hash_name } = useParams();
  const [productInfo, setProductInfo]: any = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getProductByHashNameServices(hash_name);

      setProductInfo(response?.data);
    })();
  }, [hash_name]);

  console.log(productInfo);

  return (
    <Container>
      <ProductDetailWrapper>
        <ProductDetailInner>
          <MoreThumbNail thumb_nail={productInfo?.thumb_nail}></MoreThumbNail>
          <ProductMainInfo
            name={productInfo?.name}
            status={productInfo?.status}
            categoryId={productInfo?.categoryId}
            price={productInfo?.price}
            price_promotion={productInfo?.price_promotion}
          ></ProductMainInfo>
          <ProductSubInfo></ProductSubInfo>
        </ProductDetailInner>
      </ProductDetailWrapper>
      <ProductDetailDescription>
        <DescriptionInner>
          <DescriptionTitle>Chi tiết sản phẩm</DescriptionTitle>
          <DescriptionContent>
            <ReactQuill 
              value={productInfo?.description}
              readOnly={true}
              theme="bubble"
            />
          </DescriptionContent>
        </DescriptionInner>
      </ProductDetailDescription>
    </Container>
  );
};

export default ProductDetail;
