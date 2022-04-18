import React from 'react';
import NumberFormat from 'react-number-format';

interface IVND {
    value: number | string;
    className?: any
}

const VND: React.FC<IVND> = ({ value, className }) => {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      decimalSeparator=","
      thousandSeparator="."
      suffix={'đ'}
      className={className}
    />
  );
};

export default VND;
