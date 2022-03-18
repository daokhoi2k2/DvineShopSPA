import React from "react";
import { Link } from "react-router-dom";
enum navActive {
    "accountInfo",
    "purchaseHistory",
} 
interface INavProfile {
    active: navActive
}

const NavProfile: React.FC<INavProfile> = (props) => {
    const { active, ...rest } = props;
  return (
    <div className="account__body-nav">
      <Link to="/account" className={"account__body-nav-item " + ((active === 0) ? " account__body-nav-item--active" : "") }>
        <div className="account__body-nav-item-icon">
          <i className="fas fa-info" />
        </div>
        <div className="account__body-nav-item-content">
          <div className="nav-item-title">Thông tin tài khoản</div>
          <div className="nav-item-content">Quản lí thông tin cá nhân</div>
        </div>
      </Link>
      <Link to="/purchase-history" className={"account__body-nav-item " + ((active === 1) ? " account__body-nav-item--active" : "") }>
        <div className="account__body-nav-item-icon">
          <i className="fas fa-shopping-cart" style={{ color: "#f4b844" }} />
        </div>
        <div className="account__body-nav-item-content">
          <div className="nav-item-title">Lịch sử đơn hàng</div>
          <div className="nav-item-content">Thông tin sản phẩm đã mua</div>
        </div>
      </Link>
      <Link to="#" className="account__body-nav-item">
        <div className="account__body-nav-item-icon">
          <i className="fas fa-dollar-sign" style={{ color: "#48a163" }} />
        </div>
        <div className="account__body-nav-item-content">
          <div className="nav-item-title">Lịch sử giao dịch</div>
          <div className="nav-item-content">Thông tin thanh toán</div>
        </div>
      </Link>
      <Link to="#" className="account__body-nav-item">
        <div className="account__body-nav-item-icon">
          <i className="fas fa-heart" style={{ color: "#ea3a4b" }} />
        </div>
        <div className="account__body-nav-item-content">
          <div className="nav-item-title">Sản phẩm yêu thích</div>
          <div className="nav-item-content">Thông tin thanh toán</div>
        </div>
      </Link>
      <Link to="#" className="account__body-nav-item">
        <div className="account__body-nav-item-icon">
          <i className="fas fa-key" style={{ color: "#ad4025" }} />
        </div>
        <div className="account__body-nav-item-content">
          <div className="nav-item-title">Thay đổi mật khẩu</div>
          <div className="nav-item-content">Cập nhật mật khẩu mới</div>
        </div>
      </Link>
      <Link to="#" className="account__body-nav-item">
        <div className="account__body-nav-item-icon">
          <i className="fas fa-user-shield" style={{ color: "#ad4025" }} />
        </div>
        <div className="account__body-nav-item-content">
          <div className="nav-item-title">Bật bảo mật cấp 2</div>
          <div className="nav-item-content">Bảo vệ tài khoản khỏi kẻ xấu</div>
        </div>
      </Link>
      <Link to="#" className="account__body-nav-item">
        <div className="account__body-nav-item-icon">
          <i className="fas fa-comment" style={{ color: "#757c94" }} />
        </div>
        <div className="account__body-nav-item-content">
          <div className="nav-item-title">Bình luận của tôi</div>
          <div className="nav-item-content">Lịch sử các bình luận của tôi</div>
        </div>
      </Link>
    </div>
  );
};

export default NavProfile;
