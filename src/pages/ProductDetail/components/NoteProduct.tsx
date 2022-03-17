import React from "react";
import { Link } from "react-router-dom";

const NoteProduct = () => {
  return (
    <>
      <div className="row">
        <div className="col l-12 c-12 m-12">
          <div className="tutorial">
            <p>
              <strong>
                Quan trọng: Vui lòng KHÔNG THAY ĐỔI thông tin tài khoản, Divine sẽ không thể bảo
                hành nếu bạn thay đổi thông tin
              </strong>
            </p>
            <p>
              - Hệ thống có thể sẽ thay đổi mât khẩu của bạn vì lý do bảo mật. Trong trường hợp này,
              xin vui lòng nhắn tin đến CSKH để nhận mật khẩu mới theo đường dẫn này:&nbsp;
              <Link className="look-details" to="/">
                http://m.me/divineshop.vn
              </Link>
            </p>
            <p>
              - Hạn sử dụng của sản phẩm&nbsp;KHÔNG cộng dồn&nbsp;khi mua số lượng nhiều sản phẩm.
            </p>
            <p>
              -&nbsp;Vui lòng không thay đổi mật khẩu và thông tin tài khoản, chỉ sử dụng đúng User
              được cung cấp. Divine Shop có quyền thu hồi tài khoản trong trường hợp khách hàng sử
              dụng vi phạm chính sách trên.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col l-12 m-12 c-12">
          <h1 className="product-details-text">Chi tiết sản phẩm</h1>
          <div className="product-details__content">
            <h2 style={{ fontSize: 20, fontWeight: 700, lineHeight: "1.5" }}>
              THÔNG TIN SẢN PHẨM:
            </h2>
            <ul>
              <li>
                Shop sẽ gom 5&nbsp;người vào sử dụng chung 1 tài khoản, mỗi người sẽ được cấp 1 user
                riêng trong tài khoản để sử dụng
              </li>
              <li>
                Lưu ý chỉ sử dụng đúng user mang tiên mình và không được đổi pass trong quá trình sử
                dụng.
              </li>
              <li>Hạn sử dụng 30 ngày tính từ khi mua hàng.</li>
              <li>Cho phép 1 người sử dụng cùng một thời điểm</li>
              <li>
                Đăng nhập và xem phim tại:
                <Link to="https://www.netflix.com/vn/login" target="_blank">
                  <span style={{ color: "#2980b9" }}>https://www.netflix.com/vn/login</span>
                </Link>
              </li>
            </ul>
            <p>
              <strong>* LƯU Ý: </strong>Khách hàng không thay đổi mật khẩu và thông tin tài khoản,
              chỉ sử dụng đúng User được cung cấp trên 1 thiết bị. Divine Shop có quyền thu hồi tài
              khoản trong trường hợp khách hàng sử dụng vi phạm chính sách trên.
            </p>
          </div>
          <h1 style={{ paddingTop: 30, borderTop: "1px solid #ccc" }}>Chính sách bảo hành</h1>
          <p />
          <h2 style={{ fontSize: 20, fontWeight: 700, lineHeight: "1.5" }}>Thời gian bảo hành</h2>
          <p>30 ngày</p>
          <h2 style={{ fontSize: 20, fontWeight: 700, lineHeight: "1.5" }}>Chính sách bảo hành</h2>
          <p>
            <Link to="#" className="look-details">
              Chi tiết
            </Link>
          </p>
          <h2 style={{ fontSize: 20, fontWeight: 700, lineHeight: "1.5" }}>Miễn trừ trách nhiệm</h2>
          <p>Shop có thể từ chối bảo hành trong các trường hợp</p>
          <ul>
            <li>
              Khách hàng tự ý thay đổi thông tin tài khoản bao gồm email đăng nhập và mật khẩu
            </li>
            <li>Khách hàng tự ý thay đổi thông tin thanh toán/gói cước của tài khoản.</li>
            <li>Khách hàng chia sẻ tài khoản, sử dụng nhiều hơn 1 thiết bị tại 1 thời điểm</li>
          </ul>
          <p />
        </div>
      </div>
    </>
  );
};

export default NoteProduct;
