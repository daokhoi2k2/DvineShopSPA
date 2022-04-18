import VND from 'components/VND';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderByIdServices } from 'services/order';
import {
  Hr,
  OrderDetailWrapper,
  OrderInfo,
  OrderTitle,
  OrderValue,
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

  // const dispatch = useDispatch();

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
              <div key={total.title} className="flex justify-between">
                <div>{total.title}</div>
                <div><VND value={total.value} /></div>
              </div>
            );
          })}
        </OrderValue>
      </OrderDetailWrapper>
    </>
  );
};

export default OrderDetail;
