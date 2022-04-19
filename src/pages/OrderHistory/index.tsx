import DateSelect from 'components/DateSelect';
import Input from 'components/Input';
import VND from 'components/VND';
import { FilterIcon } from 'designs/icons/Drawer';
import { useFormik } from 'formik';
import { Link } from "react-router-dom";
import moment from 'moment';
import React, {
  BaseSyntheticEvent,
  SyntheticEvent,
  useEffect,
  useMemo,
} from 'react';
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
  Subtitle,
  Title,
} from './styles';
import TableOrder, { IColmunsAccount } from './TableOrder';

const UserOrder: React.FC = () => {
  const dispatch = useDispatch();
  const userOrder = useSelector(
    (state: RootState) => state.order.userOrder.list
  );
  // const renderTable = useMemo(() => {
  //   return [
  //     {
  //       render:
  //     }
  //   ]
  // }, [userOrder])

  // console.log(renderTable)
  // const auth = useAuth();
  const formik = useFormik({
    initialValues: {
      madh: '',
      minMoney: '',
      maxMoney: '',
      startDay: '',
      endDay: '',
    },
    onSubmit: (values) => {
      console.log(values);
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
    if(userOrder.length <= 0) {
      dispatch(
        getUserOder({
          page: 1,
          limit: 20,
        })
      );
    }
  }, []);

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
            name="madh"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="madh"
            value={formik.values.madh}
          />
        </ItemWrapper>
        <ItemWrapper>
          <Input
            title="Số tiền từ"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="minMoney"
            name="minMoney"
            value={formik.values.minMoney}
          />
        </ItemWrapper>
        <ItemWrapper>
          <Input
            title="Số tiền đến"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="maxMoney"
            name="maxMoney"
            value={formik.values.maxMoney}
          />
        </ItemWrapper>
        <DateItemWrapper>
          <DateSelect
            title="Từ ngày"
            name="startDay"
            id="startDay"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </DateItemWrapper>
        <DateItemWrapper>
          <DateSelect
            title="Đến ngày"
            name="endDay"
            id="endDay"
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
                  className="cursor-pointer whitespace-nowrap max-w-[100px] truncate"
                >
                  {item._id}
                </div>
              ),
            },
            {
              name: 'name',
              render: item.entries.map((entry: any) => {
                return (
                  <div
                    key={entry.product._id}
                    className="flex justify-between gap-x-3"
                  >
                    {entry.product.name} <div>x{entry.quantity}</div>
                  </div>
                );
              }),
            },
            {
              name: 'total',
              render: <VND value={item.totals[1].value} />,
            },
            {
              name: 'status',
              render: 'Đã hủy',
            },
            {
              name: 'control',
              render: <Link to={`/user/order/${item._id}`}>Chi tiết</Link>,
            },
          ];
        }}
      </TableOrder>
    </>
  );
};

export default UserOrder;
