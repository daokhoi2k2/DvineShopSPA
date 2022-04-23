import DateSelect from 'components/DateSelect';
import Input from 'components/Input';
import { FilterIcon } from 'designs/icons/Drawer';
import { useFormik } from 'formik';
import React from 'react';
import { Col, ColHead, Row, TableOrderWrapper, TBody, THead } from './styles';
import Loading from 'components/Loading';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

export interface IColmunsAccount {
  render: string | React.FC;
}

export interface ITableAccount {
  columns: IColmunsAccount[];
  data: any;
  children: any;
}

const TableOrder: React.FC<ITableAccount> = (props) => {
  const { columns, data, children } = props;
  const isLoadingOrder = useSelector(
    (state: RootState) => state.order.userOrder.pending
  );
  return (
    <>
      <TableOrderWrapper>
        <THead>
          <Row>
            {columns.map((column, index) => (
              <ColHead key={index}>{column.render}</ColHead>
            ))}
          </Row>
        </THead>
        <TBody>
          {!isLoadingOrder && data.map((item: any) => {
          return (
            <Row key={item._id}>
              {children(item).map((col: any) => {
                return <Col key={col.name}>{col.render}</Col>
              })}
            </Row>
          );
        })}
        </TBody>
      </TableOrderWrapper>
      {isLoadingOrder && (
        <div className="text-[#4C91F5] flex justify-center items-center gap-x-2">
          <h1>Đang tải</h1> <Loading />
        </div>
      )}
    </>
  );
};

export default TableOrder;
