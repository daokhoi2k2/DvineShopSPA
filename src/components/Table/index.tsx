import React, { Component, memo } from 'react';
import {
  Icolumn,
  RowItem,
  TableWrapper,
  Tbody,
  Theader,
  TheaderItem,
  Wrapper,
} from './styles';
import LazyLoad from 'react-lazyload';

export interface IColumns {
  text: any;
  dataField: string;
  formatter?: (record: any) => React.FC;
}

export interface ITable {
  //   data: Array<any>;
  columns: IColumns[];
  sizePer?: number;
  page: number;
  onPageChange?: (page: number) => void;

  totalSize: number;
  onClickRow?: (rowIndex: number) => void;
  onTableChange?: (page: number) => void;
  children?: Array<any>;
}

const Table: React.FC<ITable> = (props) => {
  const { columns, children } = props;
  return (
    <Wrapper>
      <TableWrapper>
        <Theader>
          <RowItem>
            {columns?.map((item) => (
              <TheaderItem
                key={item.dataField}
              >
                {item.text}
              </TheaderItem>
            ))}
          </RowItem>
        </Theader>
        <Tbody>
          {children &&
            children?.map((item: any, index: any) => (
              <RowItem key={index}>
                {columns?.map((column, index) => (
                  <Icolumn key={index}>{item[0][column.dataField]}</Icolumn>
                ))}
              </RowItem>
            ))}
        </Tbody>
      </TableWrapper>
    </Wrapper>
  );
};

export default memo(Table);
