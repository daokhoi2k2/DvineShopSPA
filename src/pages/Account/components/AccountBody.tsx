import React from "react";
import { Link } from "react-router-dom";
import NavProfile from "../../../components/NavProfile";

const AccountBody: React.FC = () => {
  return (
    <div className="account__body">
      <div className="row">
        <div className="col l-3 m-12 c-12">
          <NavProfile active={0} />
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
                  <input type="text" defaultValue="0979375204" className="account__body-input" />
                </div>
              </div>
              <div className="account__body-info-group">
                <div className="account__body-info-name">Số chứng minh nhân dân</div>
                <div className="account__body-info-content">
                  <input type="text" defaultValue="079202018025" className="account__body-input" />
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
                  <input className="acount__body-btn" type="submit" value="Cập nhật" />
                  <input className="acount__body-btn comeback" type="submit" value="Quay lại" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBody;
