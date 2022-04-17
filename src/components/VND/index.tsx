import React from 'react';
import NumberFormat from 'react-number-format';

interface IVND {
    value: number | string;
}

const VND: React.FC<IVND> = ({ value }) => {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      decimalSeparator=","
      thousandSeparator="."
      suffix={'đ'}
    />
  );
};

export default VND;
