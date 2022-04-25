import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  ErrorPageWrapper,
  ProductDetailDescription,
  ProductDetailInner,
  ProductDetailWrapper,
} from './styles';
import SVG from 'designs/SVG';
import { ArrowDownIcon, ArrowIcon } from 'designs/icons/Drawer';

const ProductDetail = () => {
  const { hash_name } = useParams();
  const [productInfo, setProductInfo]: any = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getProductByHashNameServices(hash_name);

      setProductInfo(response?.data);
    })();
  }, [hash_name]);

  return (
    <Container>
      {productInfo === undefined ? (
        <ErrorPageWrapper>
          <div>
            <Link
              className="text-sm flex items-center gap-x-2 text-[#2579f2]"
              to="/"
            >
              <ArrowDownIcon className="h-[17.5px] h-[17.5px] rotate-90" />
              <span className="font-bold">Quay về Trang chủ</span>
            </Link>
          </div>
          <div className="mt-5">
            <h2 className="text-center font-bold text-xl">
              Đường dẫn không tồn tại hoặc đã bị xóa!
            </h2>
            <h4 className="text-center text-sm mt-3">
              Vui lòng liên hệ với hỗ trợ để biết thêm chi tiết.
            </h4>
            <SVG name="404" className="mx-auto" />
          </div>
        </ErrorPageWrapper>
      ) : (
        <>
          <ProductDetailWrapper>
            <ProductDetailInner>
              <MoreThumbNail
                thumb_nail={productInfo?.thumb_nail}
              ></MoreThumbNail>
              <ProductMainInfo productInfo={productInfo}></ProductMainInfo>
              <ProductSubInfo code={productInfo?.code}></ProductSubInfo>
            </ProductDetailInner>
          </ProductDetailWrapper>
          <ProductDetailDescription
            className={!productInfo ? 'min-h-[600px]' : ''}
          >
            <DescriptionInner>
              <DescriptionTitle>Chi tiết sản phẩm</DescriptionTitle>
              <DescriptionContent>
                <ReactQuill
                  value={productInfo?.description || null}
                  readOnly={true}
                  theme="bubble"
                />
              </DescriptionContent>
            </DescriptionInner>
          </ProductDetailDescription>
        </>
      )}
    </Container>
  );
};

export default ProductDetail;
