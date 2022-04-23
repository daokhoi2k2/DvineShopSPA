import DateSelect from 'components/DateSelect';
import Input from 'components/Input';
import VND from 'components/VND';
import { FilterIcon } from 'designs/icons/Drawer';
import { useFormik } from 'formik';
import { Link, useSearchParams } from 'react-router-dom';
import moment from 'moment';
import React, { BaseSyntheticEvent, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getUserOder } from 'redux/actions/order';
import { RootState } from 'redux/reducers';
import {
  DateItemWrapper,
  FilterButton,
  FormList,
  Hr,
  ItemWrapper,
  OrderStatus,
  ProductLayout,
  Subtitle,
  Title,
} from './styles';
import TableOrder, { IColmunsAccount } from './TableOrder';
import Loading from 'components/Loading';

const UserOrder: React.FC = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams]: any = useSearchParams();
  const userOrder = useSelector(
    (state: RootState) => state.order.userOrder.list
  );
  const searchParamsObject = useMemo(() => {
    return Object.fromEntries([...searchParams]);
  }, [searchParams]);

  const initialValuesSearch = {
    orderId: searchParamsObject?.order_id || '',
    priceFrom: searchParamsObject?.price_from || '',
    priceTo: searchParamsObject?.price_to || '',
    dateFrom: searchParamsObject?.date_from || '',
    dateTo: searchParamsObject?.date_to || '',
  };

  const formik = useFormik({
    initialValues: initialValuesSearch,
    onSubmit: (values: any) => {
      const { orderId, priceFrom, priceTo, dateFrom, dateTo } = values;

      const searchQuery: any = {};

      orderId && (searchQuery.order_id = orderId);
      priceFrom && (searchQuery.price_from = priceFrom);
      priceTo && (searchQuery.price_to = priceTo);
      dateFrom && (searchQuery.date_from = dateFrom);
      dateTo && (searchQuery.date_to = dateTo);

      setSearchParams(searchQuery);
    },
  });

  const columns: IColmunsAccount[] = [
    {
      render: 'Thời gian',
    },
    {
      render: 'Mã đơn hàng',
    },
    {
      render: 'Sản phẩm',
    },
    {
      render: 'Tổng tiền',
    },
    {
      render: 'Trạng thái',
    },
    {
      render: '',
    },
  ];

  useEffect(() => {
    // if (userOrder.length <= 0) {
    // }
    dispatch(
      getUserOder({
        page: 1,
        limit: 20,
        ...searchParamsObject,
      })
    );
  }, [searchParams]);

  const handleCoppyClipboard = (e: BaseSyntheticEvent) => {
    const element = e.currentTarget;
    navigator.clipboard.writeText(element.innerText);
    toast.success('Đã sao chép mã đơn hàng');
  };

  return (
    <>
      <Title>Lịch sử đơn hàng</Title>
      <Subtitle>
        Hiện thị thông tin các sản phẩm đã mua tại Divine Shop
      </Subtitle>
      <Hr />
      <FormList onSubmit={formik.handleSubmit}>
        <ItemWrapper>
          <Input
            title="Mã đơn hàng"
            name="orderId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="orderId"
            value={formik.values.orderId}
          />
        </ItemWrapper>
        <ItemWrapper>
          <Input
            title="Số tiền từ"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="priceFrom"
            name="priceFrom"
            value={formik.values.priceFrom}
          />
        </ItemWrapper>
        <ItemWrapper>
          <Input
            title="Số tiền đến"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="priceTo"
            name="priceTo"
            value={formik.values.priceTo}
          />
        </ItemWrapper>
        <DateItemWrapper>
          <DateSelect
            title="Từ ngày"
            name="dateFrom"
            id="dateFrom"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </DateItemWrapper>
        <DateItemWrapper>
          <DateSelect
            title="Đến ngày"
            name="dateTo"
            id="dateTo"
            onChange={formik.handleChange}
          />
        </DateItemWrapper>
        <FilterButton type="submit">
          <FilterIcon className="w-[17.5px] h-[17.5px] text-white" /> Lọc
        </FilterButton>
      </FormList>
      <TableOrder columns={columns} data={userOrder}>
        {(item: any) => {
          return [
            {
              name: 'time',
              render: (
                <div className="whitespace-nowrap">
                  {moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')}
                </div>
              ),
            },
            {
              name: 'orderId',
              render: (
                <div
                  onClick={handleCoppyClipboard}
                  className="cursor-pointer whitespace-nowrap max-w-[100px] truncate md:font-semibold md:max-w-none"
                >
                  <span className="hidden md:inline-block">#</span>
                  {item._id}
                </div>
              ),
            },
            {
              name: 'name',
              render: (
                <div className="flex gap-x-3 flex-wrap md:gap-y-3">
                  {item.entries.map((entry: any) => {
                    return (
                      <ProductLayout key={entry.product._id}>
                        <div className="hidden md:block">
                          <img
                            src={`${process.env.REACT_APP_API_URL}/${entry.product.thumb_nail}`}
                            className="rounded-md"
                            alt={entry.product.name}
                          />
                        </div>
                        <div className="flex justify-between gap-x-3 md:hidden">
                          {entry.product.name} <div>x{entry.quantity}</div>
                        </div>
                      </ProductLayout>
                    );
                  })}
                </div>
              ),
            },
            {
              name: 'total',
              render: (
                <div className="md:font-semibold">
                  <span className="hidden md:inline-block mr-1">
                    Tổng tiền:
                  </span>
                  <VND value={item.totals[1].value} />
                </div>
              ),
            },
            {
              name: 'status',
              render: (
                <OrderStatus active={item.status}>
                  {item.status === 1 ? 'Đã xử lý' : 'Đã hủy'}
                </OrderStatus>
              ),
            },
            {
              name: 'control',
              render: (
                <Link
                  className="text-[#2579f2] whitespace-nowrap"
                  to={`/user/order/${item._id}`}
                >
                  Chi tiết
                </Link>
              ),
            },
          ];
        }}
      </TableOrder>
    </>
  );
};

export default UserOrder;
