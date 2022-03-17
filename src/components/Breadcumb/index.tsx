import React from "react";

interface IBreadcumbAddress {
    address: string;
}

const Breadcumb: React.FC<IBreadcumbAddress> = (props) => {
    const {address, ...rest} = props;

  return (
    <div className="breadcrumb">
      <div className="grid wide">
        <span className="breadcrumb__controller">
          <i className="fa fa-home" /> /
        </span>
        <span className="breadcrumb__action"></span>
        <span className="breadcrumb__params">{address}</span>
      </div>
    </div>
  );
};

export default Breadcumb;
