import DateSelect from "components/DateSelect";
import Input from "components/Input";
import { FilterIcon } from "designs/icons/Drawer";
import { useFormik } from "formik";
import React from "react";
import {
  DateItemWrapper,
  FilterButton,
  FormList,
  Hr,
  ItemWrapper,
  OrderHistoryWrapper,
  Subtitle,
  Title,
  UserOrderWrapper,
} from "./styles";

const UserOrder: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      madh: "",
      minMoney: "",
      maxMoney: "",
      startDay: "",
      endDay: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  
  return (
    <UserOrderWrapper>
      <OrderHistoryWrapper>
        <Title>Lịch sử đơn hàng</Title>
        <Subtitle>Hiện thị thông tin các sản phẩm đã mua tại Divine Shop</Subtitle>
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
            <DateSelect title="Đến ngày" name="endDay" id="endDay" onChange={formik.handleChange} />
          </DateItemWrapper>
          <FilterButton type="submit">
            <FilterIcon className="w-[17.5px] h-[17.5px] text-white" /> Lọc
          </FilterButton>
        </FormList>
        {/* <TableOrder>

        </TableOrder> */}
      </OrderHistoryWrapper>
    </UserOrderWrapper>
  );
};

export default UserOrder;
