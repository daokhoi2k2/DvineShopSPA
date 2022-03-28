import { CoppyIcon } from "designs/icons/Drawer";
import React, { useEffect, useRef } from "react";
import { GiftButton, GiftCode, GiftInput, ProductSubInfoWrapper } from "./styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductSubInfo: React.FC = () => {
  const inputEle: any = useRef(null);

  const handleCoppyToClipBoard = async () => {
    await navigator.clipboard.writeText(inputEle.current.value);
    toast.success("Đã sao chép liên kết giới thiệu");
  };

  return (
    <ProductSubInfoWrapper>
      <p className="text-sm text-[#374151] my-1">Mã sản phẩm</p>
      <p className="text-sm font-semibold my-1">acc netflix1</p>
      <h3 className="text-lg font-semibold my-3">Giới thiệu bạn bè</h3>
      <p className="text-sm text-[#374151] my-1">
        Bạn bè được giảm 5% giá sản phẩm và bạn nhận hoa hồng vĩnh viễn.
      </p>
      <GiftCode>
        <GiftInput
          ref={inputEle}
          defaultValue="https://divineshop.vn/tai-khoan-netflix-1-user-1-thang"
        />
        <GiftButton onClick={handleCoppyToClipBoard}>
          <CoppyIcon className="w-[17.5px] h-[17.5px] text-white" />
        </GiftButton>
      </GiftCode>
    </ProductSubInfoWrapper>
  );
};

export default ProductSubInfo;
