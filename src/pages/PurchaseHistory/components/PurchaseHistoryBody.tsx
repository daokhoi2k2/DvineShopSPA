import React from "react";
import NavProfile from "../../../components/NavProfile";

const PurchaseHistoryBody: React.FC = () => {
  return (
    <div className="account__body">
      <div className="row">
        <div className="col l-3 m-12 c-12">
          <NavProfile active={1} />
        </div>
        <div className="col l-9 m-12 c-12">
          <div className="account__body-primary-content">
            <h4 className="account__body-primary-title">LỊCH SỬ ĐƠN HÀNG</h4>
            <div className="purchase__history-wrapper">
              <div className="purchase__history-title">
                Hiện thi 1 đến 10 trong tổng số 21 (3 Trang)
              </div>
              <div className="purchase__history-body">
                <form className="purchase__history-form">
                  <div className="row js-around">
                    <div className="col l-3 m-3 c-3">
                      <p className="bold">Mã đơn hàng</p>
                      <p>
                        <input
                          type="text"
                          placeholder="Số đơn hàng"
                          className="purchase__history-input"
                        />
                      </p>
                    </div>
                    <div className="col l-3 m-3 c-3">
                      <p className="bold">Mã đơn hàng</p>
                      <p>
                        <input
                          type="text"
                          placeholder="Số tiền từ"
                          className="purchase__history-input"
                        />
                      </p>
                    </div>
                    <div className="col l-3 m-3 c-3">
                      <p className="bold">Mã đơn hàng</p>
                      <p>
                        <input
                          type="text"
                          placeholder="Số tiền đến"
                          className="purchase__history-input"
                        />
                      </p>
                    </div>
                  </div>
                  <div className="row col l-12 m-12 c-12">
                    <button className="btn btn--success">Tìm Kiếm</button>
                  </div>
                </form>
                <p className="bold right mt-30">Tổng Tiền: 5,245,550 đ</p>
                <div className="purchase__history-table">
                  <div className="purchase__history-table-row row">
                    <div className="purchase__history-table-col tb-header col l-3">Ngày tạo</div>
                    <div className="purchase__history-table-col tb-header col l-2">Đơn hàng</div>
                    <div className="purchase__history-table-col tb-header col l-3">
                      Tên sản phẩm
                    </div>
                    <div className="purchase__history-table-col tb-header col l-2">Tổng cộng</div>
                    <div className="purchase__history-table-col tb-header col l-2">Hành động</div>
                  </div>
                  <div className="purchase__history-table-row row">
                    <div className="purchase__history-table-col col l-3">12:11:00 - 10/06/2020</div>
                    <div className="purchase__history-table-col col l-2">3561607</div>
                    <div className="purchase__history-table-col col l-3">Sea of Thieves</div>
                    <div className="purchase__history-table-col js-r col l-2">308.000đ</div>
                    <div className="purchase__history-table-col col l-2">
                      <button className="btn btn--primary">Xem chi tiết</button>
                    </div>
                  </div>
                  <div className="purchase__history-table-row row">
                    <div className="purchase__history-table-col col l-3">19:38:00 - 12/11/2020</div>
                    <div className="purchase__history-table-col col l-2">3993758</div>
                    <div className="purchase__history-table-col col l-3">
                      Steam Wallet Code 200,000 VND
                    </div>
                    <div className="purchase__history-table-col js-r col l-2">218.000đ</div>
                    <div className="purchase__history-table-col col l-2">
                      <button className="btn btn--primary">Xem chi tiết</button>
                    </div>
                  </div>
                  <div className="purchase__history-table-row row">
                    <div className="purchase__history-table-col col l-3">17:23:49 - 06/06/2020</div>
                    <div className="purchase__history-table-col col l-2">3553945</div>
                    <div className="purchase__history-table-col col l-3">
                      <span className="br">Steam Wallet Code 236k VNĐ (&gt;10$)</span>
                      <span className="br">Steam Wallet Code 77,000 VND</span>
                    </div>
                    <div className="purchase__history-table-col js-r col l-2">338.000đ</div>
                    <div className="purchase__history-table-col col l-2">
                      <button className="btn btn--primary">Xem chi tiết</button>
                    </div>
                  </div>
                  <div className="purchase__history-table-row row">
                    <div className="purchase__history-table-col col l-3">16:59:55 - 14/05/2020</div>
                    <div className="purchase__history-table-col col l-2">3505852</div>
                    <div className="purchase__history-table-col col l-3">
                      <span className="br">
                        Garena - Gói nạp 200 sò <span className="bold">x2</span>
                      </span>
                    </div>
                    <div className="purchase__history-table-col js-r col l-2">338.000đ</div>
                    <div className="purchase__history-table-col col l-2">
                      <button className="btn btn--primary">Xem chi tiết</button>
                    </div>
                  </div>
                  <div className="purchase__history-table-row row">
                    <div className="purchase__history-table-col col l-3">16:59:55 - 14/05/2020</div>
                    <div className="purchase__history-table-col col l-2">3505852</div>
                    <div className="purchase__history-table-col col l-3">
                      <span className="br">
                        Garena - Gói nạp 200 sò <span className="bold">x2</span>
                      </span>
                    </div>
                    <div className="purchase__history-table-col js-r col l-2">338.000đ</div>
                    <div className="purchase__history-table-col col l-2">
                      <button className="btn btn--primary">Xem chi tiết</button>
                    </div>
                  </div>
                  <div className="purchase__history-table-row row">
                    <div className="purchase__history-table-col col l-3">16:59:55 - 14/05/2020</div>
                    <div className="purchase__history-table-col col l-2">3505852</div>
                    <div className="purchase__history-table-col col l-3">
                      <span className="br">
                        Garena - Gói nạp 200 sò <span className="bold">x2</span>
                      </span>
                    </div>
                    <div className="purchase__history-table-col js-r col l-2">338.000đ</div>
                    <div className="purchase__history-table-col col l-2">
                      <button className="btn btn--primary">Xem chi tiết</button>
                    </div>
                  </div>
                  <div className="purchase__history-table-row row">
                    <div className="purchase__history-table-col col l-3">16:59:55 - 14/05/2020</div>
                    <div className="purchase__history-table-col col l-2">3505852</div>
                    <div className="purchase__history-table-col col l-3">
                      <span className="br">
                        Garena - Gói nạp 200 sò <span className="bold">x2</span>
                      </span>
                    </div>
                    <div className="purchase__history-table-col js-r col l-2">338.000đ</div>
                    <div className="purchase__history-table-col col l-2">
                      <button className="btn btn--primary">Xem chi tiết</button>
                    </div>
                  </div>
                  <div className="purchase__history-table-row row">
                    <div className="purchase__history-table-col col l-3">16:59:55 - 14/05/2020</div>
                    <div className="purchase__history-table-col col l-2">3505852</div>
                    <div className="purchase__history-table-col col l-3">
                      <span className="br">
                        Garena - Gói nạp 200 sò <span className="bold">x2</span>
                      </span>
                    </div>
                    <div className="purchase__history-table-col js-r col l-2">338.000đ</div>
                    <div className="purchase__history-table-col col l-2">
                      <button className="btn btn--primary">Xem chi tiết</button>
                    </div>
                  </div>
                  <div className="purchase__history-table-row row">
                    <div className="purchase__history-table-col col l-3">16:59:55 - 14/05/2020</div>
                    <div className="purchase__history-table-col col l-2">3505852</div>
                    <div className="purchase__history-table-col col l-3">
                      <span className="br">
                        Garena - Gói nạp 200 sò <span className="bold">x2</span>
                      </span>
                    </div>
                    <div className="purchase__history-table-col js-r col l-2">338.000đ</div>
                    <div className="purchase__history-table-col col l-2">
                      <button className="btn btn--primary">Xem chi tiết</button>
                    </div>
                  </div>
                  <div className="purchase__history-table-row row">
                    <div className="purchase__history-table-col col l-3">16:59:55 - 14/05/2020</div>
                    <div className="purchase__history-table-col col l-2">3505852</div>
                    <div className="purchase__history-table-col col l-3">
                      <span className="br">
                        Garena - Gói nạp 200 sò <span className="bold">x2</span>
                      </span>
                    </div>
                    <div className="purchase__history-table-col js-r col l-2">338.000đ</div>
                    <div className="purchase__history-table-col col l-2">
                      <button className="btn btn--primary">Xem chi tiết</button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="purchase-history__pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistoryBody;
