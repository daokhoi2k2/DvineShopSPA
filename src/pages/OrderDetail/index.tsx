import VND from 'components/VND';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderByIdServices } from 'services/order';
import { IProductInfo } from 'typings/Product';
import {
  Hr,
  InfoPrimary,
  InfoSub,
  OrderDetailWrapper,
  OrderInfo,
  OrderItem,
  OrderItemInfo,
  OrderList,
  OrderThumbnail,
  OrderTitle,
  OrderValue,
  ProductName,
  Subtitle,
  Title,
} from './styles';

const OrderDetail: React.FC = () => {
  const { id } = useParams();
  const [orderDetail, setOrderDetail]: any = useState({});

  useEffect(() => {
    (async () => {
      const response = await getOrderByIdServices(id);
      setOrderDetail(response?.data);
    })();
  }, [id]);

  return (
    <>
      <Title>Chi tiết đơn hàng #{id}</Title>
      <Subtitle>
        Hiện thị thông tin các sản phẩm đã mua tại Divine Shop
      </Subtitle>
      <Hr />
      <OrderDetailWrapper>
        <OrderInfo>
          <OrderTitle>Thông tin đơn hàng</OrderTitle>
          <div>Mã đơn hàng: #{id}</div>
          <div>
            Ngày tạo:{' '}
            {moment(orderDetail?.createdAt).format('YYYY-MM-DD HH:mm:ss')}
          </div>
          <div>Trạng thái đơn hàng: Đã hủy</div>
          <div>Người nhận: {orderDetail?.email}</div>
        </OrderInfo>
        <OrderValue>
          <OrderTitle>Giá trị đơn hàng</OrderTitle>
          {orderDetail?.totals?.map((total: any) => {
            return (
              <div key={total.title} className="flex gap-x-5 justify-between">
                <div>{total.title}</div>
                <div>
                  <VND value={total.value} />
                </div>
              </div>
            );
          })}
        </OrderValue>
      </OrderDetailWrapper>
      <Hr />
      <OrderList>
        {orderDetail?.entries?.map(
          ({
            product,
            quantity,
          }: {
            product: IProductInfo;
            quantity: number;
          }) => {
            return (
              <OrderItem key={product._id}>
                <OrderThumbnail>
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${product.thumb_nail}`}
                    alt="asd"
                    className="w-full rounded-md"
                  />
                </OrderThumbnail>
                <OrderItemInfo>
                  <InfoPrimary>
                    <ProductName>{product.name}</ProductName>
                    <h3>Số lượng: {quantity}</h3>
                    <h3>
                      <VND value={product.price_promotion} />
                    </h3>
                  </InfoPrimary>
                  <InfoSub>
                    <h4 className="text-[#374151]">Key game</h4>
                    <h4>ZRAPQ-WIGXY-L7HPG</h4>
                  </InfoSub>
                </OrderItemInfo>
              </OrderItem>
            );
          }
        )}
      </OrderList>
    </>
  );
};

export default OrderDetail;
