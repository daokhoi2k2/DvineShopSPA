import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img from "../../designs/Img";

type Props = {};

const Banner = (props: Props) => {
  const settings = {
    autoplay: true,
  };

  return (
    <div className="menu-catalog">
      <div className="grid wide">
        <div className="row">
          <div className="col l-2-4 m-0 c-0">
            <div className="menu-catalog__list">
              <div className="menu-catalog__item">
                <i className="fab fa-steam-symbol" />
                <span className="menu-catalog__item-name">Game trên Steam</span>
              </div>
              <div className="menu-catalog__item">
                <i className="fas fa-trophy" />
                <span className="menu-catalog__item-name">PUBG</span>
              </div>
              <div className="menu-catalog__item">
                <i className="icon icon-origin-svg" />
                <span className="menu-catalog__item-name">Game trên Origin</span>
              </div>
              <div className="menu-catalog__item">
                <i className="icon icon-battle-svg" />
                <span className="menu-catalog__item-name">Game trên Battle.net</span>
              </div>
              <div className="menu-catalog__item">
                <i className="fas fa-wallet" />
                <span className="menu-catalog__item-name">Steam Wallet</span>
              </div>
              <div className="menu-catalog__item">
                <i className="fas fa-mobile-alt" />
                <span className="menu-catalog__item-name">Nạp Game Mobile</span>
              </div>
              <div className="menu-catalog__item">
                <i className="fas fa-broadcast-tower" />
                <span className="menu-catalog__item-name">Gói Data Mobile</span>
              </div>
              <div className="menu-catalog__item">
                <i className="fab fa-google-play" />
                <span className="menu-catalog__item-name">Google Play, iTunes</span>
              </div>
              <div className="menu-catalog__item">
                <i className="fas fa-magic" />
                <span className="menu-catalog__item-name">Tiện ích</span>
              </div>
              <div className="menu-catalog__item">
                <i className="fas fa-wallet" />
                <span className="menu-catalog__item-name">Nintendo Eshop Card</span>
              </div>
              <div className="menu-catalog__item">
                <i className="fab fa-xbox" />
                <span className="menu-catalog__item-name">Xbox Gift Card</span>
              </div>
            </div>
          </div>
          <div className="col l-9-6 m-12 c-12">
            <div className="row">
              <div className="col l-8 m-12 c-12">
                <div className="home-page-carousel slick-initialized slick-slider">
                  <Slider {...settings}>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-1}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 501 }}
                    >
                      <Img name="ung dung giai tri.png" width="100%" />
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={0}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 501 }}
                    >
                      <Img name="Netflix Share.png" width="100%" />
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={1}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 501 }}
                    >
                      <Img name="banner big.png" width="100%"/>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="col l-4 m-12 c-12 no-gutters no-padding">
                <div className="banner-list">
                  <div className="banner-list__item">
                    <Img name="garena1406.png" width="100%"></Img>
                  </div>
                  <div className="banner-list__item">
                    <Img name="youtube1406.png" width="100%"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "15px" }}>
              <div className="col-l-4 m-4 c-4">
                <div className="banner__item">
                  <Link to="#">
                    <Img name="steam1406.png" width="100%"/>
                  </Link>
                </div>
              </div>
              <div className="col-l-4 m-4 c-4">
                <div className="banner__item">
                  <Link to="#">
                    <Img name="app1406.png" width="100%"/>
                  </Link>
                </div>
              </div>
              <div className="col-l-4 m-4 c-4">
                <div className="banner__item">
                  <Link to="#">
                    <Img name="viettel1406.png" width="100%"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
