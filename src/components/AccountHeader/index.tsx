import React from "react";
import Img from "../../designs/Img";
import SVG from "../../designs/SVG";

const AccountHeader = () => {
  return (
    <div className="account__header">
      <div className="account__header-banner">
        <div className="account__avatar-info">
          <div className="account__avatar-circle">
            <Img name="avatar.jpeg" width="100%" className="account__avatar-circle-img" alt="" />
          </div>
          <div className="account__header-info-content">
            <p className="account__header-info-name">Khôi Đào Đức Minh</p>
            <p className="account__header-info-money-wrapper">
              Số dư hiện tại: <span className="info-money">7.893đ</span>
            </p>
          </div>
        </div>
      </div>
      <div className="account__header-info">
        <div className="account__header-info-list">
          <div className="account__header-info-item">
            Username: <b className="info-item-content">MarioKiller</b>
          </div>
          <div className="account__header-info-item">
            Ngày đăng kí: <b className="info-item-content">24-06-2017</b>
          </div>
          <div className="account__header-info-item">
            <SVG name="badge-gold-2-50px" width="15px" />
            <b className="info-item-content">Vip Vàng</b>
          </div>
          <div className="account__header-info-item">
            Đã tích lũy: <b className="info-item-content">5,452,550 đ</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;
