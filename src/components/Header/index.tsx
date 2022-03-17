import React, { Component } from "react";
import { Link } from "react-router-dom";
import SVG from "../../designs/SVG";

type Props = {};

type State = {};

export default class Header extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div className="top-header">
          <div className="grid wide">
            <div className="row">
              <div className="col l-7 m-8 c-0">
                <div className="carousel">
                  <div className="carousel-control">
                    <span className="btn__control btn__control-left">
                      <i className="fas fa-angle-left" />
                    </span>
                    <span className="btn__control btn__control-right">
                      <i className="fas fa-angle-right" />
                    </span>
                  </div>
                  <div className="marquee__wrapper">
                    Top những tựa game sinh tồn không thể bỏ qua dành cho game thủ PC
                  </div>
                </div>
              </div>
              <div className="col l-5 m-4 c-0">
                <div className="hotline">Hỗ trợ: 1900 633 305</div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page">
          <div className="grid wide">
            <div className="row">
              <div className="col l-3 m-4 c-4">
                <div className="home-page__logo">
                  <Link to="/">
                    <SVG
                      name="logo_divine_pure_white"
                      alt="logo-divineshop"
                      width="60px"
                      className="logo__img"
                      height="60px"
                    />
                  </Link>
                  <Link to="/">
                    <SVG
                      name="logo-divineshop"
                      alt="logo-divineshop"
                      width="100px"
                      className="logo__img"
                      height="60px"
                    />
                  </Link>
                </div>
              </div>
              <div className="col l-5 m-6 c-6">
                <div className="home-page__search-wrapper">
                  <div className="home-page__search">
                    <input
                      className="home-page__search-input"
                      placeholder="Nhập sản phẩm cần tìm..."
                    />
                    <div className="home-page__search-btn">
                      <i className="fas fa-search home-page__search-ico" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-4 m-2 c-2">
                <div className="login_cart_wrapper">
                  {/* <div class="login__wrapper">
                                <div class="login__ico">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="login__text">
                                    Đăng nhập
                                </div>
                                <div class="login__dropdown-menu">
                                    <div class="btn btn--yellow" data-href="login">
                                        Đăng nhập
                                    </div>
                                    <div class="btn btn--yellow" data-href="register">
                                        Tạo tài khoản
                                    </div>
                                    <div class="btn btn-social  btn-social--facebook">
                                        <span class="btn-social__icon">
                                            <i class="fab fa-facebook-f"></i>
                                        </span>
                                        <span class="btn-social__text">
                                            Đăng nhập Facebook
                                        </span>
                                    </div>
                                    <div class="btn btn-social btn-social--google">
                                        <span class="btn-social__icon">
                                            <i class="fab fa-google"></i>
                                        </span>
                                        <span class="btn-social__text">
                                            Đăng nhập Google
                                        </span>
                                    </div>
                                </div>
                            </div> */}
                  <div className="logged">
                    <div className="logged__bell">
                      <Link to="#" className="anchor">
                        <i className="fa fa-bell" style={{ fontSize: "25px", color: "#fff" }} />
                      </Link>
                    </div>
                    <div className="logged__avatar">
                      <Link to="#" className="anchor">
                        <SVG className="logged__avatar-img" name="avatar" alt="Avatar" />
                      </Link>
                    </div>
                    <div className="logged__username">
                      <Link to="#" className="anchor" style={{ color: "#fff" }}>
                        Đào Khôi
                      </Link>
                    </div>
                    <div className="logged_vip">
                      <SVG name="badge-gold-2-50px" height="15px" alt="" />
                    </div>
                    <div className="logged-dropdown">
                      <div className="logged-dropdown__header">
                        <div className="account-balance">SỐ DƯ TÀI KHOẢN</div>
                        <div className="balance__charging">
                          <div className="balance">
                            <i className="fas fa-wallet" />{" "}
                            <span className="logged-money">Số dư: 7.893</span>{" "}
                            <i
                              className="fas fa-dollar-sign"
                              style={{ color: "#000", fontSize: "1.3rem" }}
                            />
                          </div>
                          <Link to="#" className="logged-btn">
                            NẠP THÊM
                          </Link>
                        </div>
                      </div>
                      <div className="logged-dropdown__body">
                        <ul className="logged-dropdown__list">
                          <Link to="/account" className="logged-dropdown__list-item-wrapper">
                            <li className="logged-dropdown__list-item">Lịch sử mua hàng</li>
                          </Link>
                          <Link to="#" className="logged-dropdown__list-item-wrapper">
                            <li className="logged-dropdown__list-item">Thông tin sản phẩm</li>
                          </Link>
                          <Link to="#" className="logged-dropdown__list-item-wrapper">
                            <li className="logged-dropdown__list-item">Sản phẩm yêu thích</li>
                          </Link>
                          <Link to="#" className="logged-dropdown__list-item-wrapper">
                            <li className="logged-dropdown__list-item">Giới thiệu bạn bè</li>
                          </Link>
                          <Link to="#" className="logged-dropdown__list-item-wrapper">
                            <li className="logged-dropdown__list-item">
                              Liên hệ Fanpage{" "}
                              <i
                                className="fab fa-facebook-square"
                                style={{ fontSize: "1.8rem" }}
                              />
                            </li>
                          </Link>
                          <Link to="#" className="logged-dropdown__list-item-wrapper">
                            <li className="logged-dropdown__list-item--logout">Đăng xuất</li>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="cart__wrapper">
                    <div className="cart-ico">
                      <i className="fas fa-shopping-cart" />
                    </div>
                    <div className="cart-text">Giỏ hàng</div>
                    <div className="cart-amount">0</div>
                    <div className="cart__dropdown-wrapper">
                      <div className="cart__list--wrapper">
                        <div className="cart__title-wrapper">
                          <div className="cart__title">Giỏ hàng hiện tại</div>
                        </div>
                        {/* <div class="cart__item no-cart">
                                            Không có sản phẩm trong giỏ hàng!
                                        </div> */}
                        <div className="cart__list">
                          <div className="cart__item">
                            <div className="cart__item-col">Tài khoản nghe nhạc...</div>
                            <div className="cart__item-col text-right">
                              <i>Số lượng: 3</i>
                            </div>
                            <div className="cart__item-col text-right">19,000 VNĐ</div>
                            <div className="cart__item-col text-center item-right">
                              <i className="far fa-times-circle  cart__item-ico" />
                            </div>
                          </div>
                          <div className="cart__item">
                            <div className="cart__item-col">Tài khoản nghe nhạc...</div>
                            <div className="cart__item-col text-right">
                              <i>Số lượng: 3</i>
                            </div>
                            <div className="cart__item-col text-right">19,000 VNĐ</div>
                            <div className="cart__item-col text-center item-right">
                              <i className="far fa-times-circle  cart__item-ico" />
                            </div>
                          </div>
                          <div className="cart__item">
                            <div className="cart__item-col">Tài khoản nghe nhạc...</div>
                            <div className="cart__item-col text-right">
                              <i>Số lượng: 3</i>
                            </div>
                            <div className="cart__item-col text-right">19,000 VNĐ</div>
                            <div className="cart__item-col text-center item-right">
                              <i className="far fa-times-circle  cart__item-ico" />
                            </div>
                          </div>
                        </div>
                        <table className="cart__pay-wrapper">
                          <tbody>
                            <tr className="cart__pay-item">
                              <td className="cart__pay-item-title">Thành tiền</td>
                              <td className="cart__pay-item-content">57,000 VNĐ</td>
                            </tr>
                            <tr className="cart__pay-item">
                              <td className="cart__pay-item-title">Tổng đơn hàng</td>
                              <td className="cart__pay-item-content">57,000 VNĐ</td>
                            </tr>
                            <tr className="cart__pay-item">
                              <td className="cart__pay-item-title">Tổng tiền phải nạp thêm</td>
                              <td className="cart__pay-item-content">
                                57,000 <i className="fas fa-money-bill" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="cart__check-wrapper">
                          <div className="cart__check-btn">
                            <i className="fas fa-eye" /> Xem chi tiết giỏ hàng
                          </div>
                          <div className="cart__charging-btn">
                            <i className="fas fa-wallet" /> Nạp tiền
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-mobile">
                  <div className="cart-ico-mobile">
                    <i className="fas fa-shopping-cart" />
                    <div className="cart-amount-mobile">7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
