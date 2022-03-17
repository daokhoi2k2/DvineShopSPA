import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/account.css";
import Img from "../../../designs/Img";
import SVG from "../../../designs/SVG";

const AccountProfile = () => {
  return (
    <div className="account__header-wrapper">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <div className="account__header">
              <div className="account__header-banner">
                <div className="account__avatar-info">
                  <div className="account__avatar-circle">
                    <Img
                      name="avatar.jpeg"
                      width="100%"
                      className="account__avatar-circle-img"
                      alt=""
                    />
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
            <div className="account__body">
              <div className="row">
                <div className="col l-3 m-12 c-12">
                  <div className="account__body-nav">
                    <Link to="#" className="account__body-nav-item account__body-nav-item--active">
                      <div className="account__body-nav-item-icon">
                        <i className="fas fa-info" />
                      </div>
                      <div className="account__body-nav-item-content">
                        <div className="nav-item-title">Thông tin tài khoản</div>
                        <div className="nav-item-content">Quản lí thông tin cá nhân</div>
                      </div>
                    </Link>
                    <Link to="#" className="account__body-nav-item">
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
                </div>
                <div className="col l-9 m-12 c-12">
                  <div className="account__body-primary-content">
                    <h4 className="account__body-primary-title">THÔNG TIN CÁ NHÂN</h4>
                    {/* <div className="account__body-primary-info" id="account__body-default">
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Email đăng nhập:</div>
                        <div className="account__body-info-content">daoducminhkhoi@gmail.com</div>
                        <div className="account__body_custome">
                          <i className="fas fa-edit"></i>
                          Cập nhật
                        </div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Username:</div>
                        <div className="account__body-info-content">MarioKiller</div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Họ và tên</div>
                        <div className="account__body-info-content">Đào Đức Minh Khôi</div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Số điện thoại:</div>
                        <div className="account__body-info-content">0979375204</div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Số chứng minh nhân dân</div>
                        <div className="account__body-info-content">079202018025</div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Số chứng minh nhân dân</div>
                        <div className="account__body-info-content">Nam</div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Địa chỉ</div>
                        <div className="account__body-info-content">
                          256/70/19K ĐT2 - Xã Đông Thạnh- Huyện Hóc Môn - Thành phố Hồ Chí Minh
                        </div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Nghề nghiệp</div>
                        <div className="account__body-info-content">
                          <i className="no-info">(Chưa có thông tin)</i>
                        </div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Tình trạng hôn nhân:</div>
                        <div className="account__body-info-content">Độc thân</div>
                      </div>
                    </div> */}
                    <div className="account__body-primary-info" id="account__body-custom">
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Email đăng nhập:</div>
                        <div className="account__body-info-content">
                          <input
                            type="text"
                            defaultValue="daoducminhkhoi@gmail.com"
                            // disabled=""
                            className="account__body-input"
                          />
                        </div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">
                          <span style={{ color: "#FF0000" }}>*</span> Username:
                        </div>
                        <div className="account__body-info-content">
                          <input
                            type="text"
                            defaultValue="Mariokiller"
                            // disabled=""
                            className="account__body-input"
                          />
                        </div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">
                          <span style={{ color: "#FF0000" }}>*</span> Họ và tên
                        </div>
                        <div className="account__body-info-content">
                          <input
                            type="text"
                            defaultValue="Khôi Đào Đức Minh"
                            className="account__body-input"
                          />
                        </div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Số điện thoại:</div>
                        <div className="account__body-info-content">
                          <input
                            type="text"
                            defaultValue="0979375204"
                            className="account__body-input"
                          />
                        </div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Số chứng minh nhân dân</div>
                        <div className="account__body-info-content">
                          <input
                            type="text"
                            defaultValue="079202018025"
                            className="account__body-input"
                          />
                        </div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Giới tính</div>
                        <div className="account__body-info-content">
                          <input type="radio" name="gender" defaultValue={0} /> Nam
                          <input type="radio" name="gender" defaultValue={1} /> Nữ
                        </div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Nghề nghiệp</div>
                        <div className="account__body-info-content">
                          <input
                            type="text"
                            defaultValue="Lập trình viên"
                            className="account__body-input"
                          />
                        </div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name">Tình trạng hôn nhân:</div>
                        <div className="account__body-info-content">
                          <select name="marital" className="account__body-input">
                            <option value={0}>Độc thân</option>
                            <option value={1}>Đã kết hôn</option>
                            <option value={2}>---Select---</option>
                          </select>
                        </div>
                      </div>
                      <div className="account__body-info-group">
                        <div className="account__body-info-name"></div>
                        <div className="account__body-info-content account__body-btn-wrapper">
                          <input
                            className="acount__body-btn"
                            type="submit"
                            value="Cập nhật"
                          />
                          <input
                            className="acount__body-btn comeback"
                            type="submit"
                            value="Quay lại"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;
