import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, HotProductInner, HotProductWrapper } from "./styles";
import Header from "components/Header";
import Banner from "components/Banner";
import TitleList from "components/TitleList";
import ProductList from "components/ProductList";
import Footer from "components/Footer";

const Home = () => {
  const fakeData = [
    {
      name: "Elding Ring (CD Key Steam) 1 ",
      price: 800000,
      promotional_price: 790000,
      thumb_nail: "https://steamcdn-a.akamaihd.net/steam/apps/1245620/header.jpg"
    },
    {
      name: "Tài khoản Netflix Premium for 1 User(1 Tháng) 2",
      price: 260000,
      promotional_price: 79000,
      thumb_nail: "https://cdn.divineshop.vn/image/catalog/Anh/Banner/NETFLIX1406.png?hash=1623646686",
    },
    {
      name: "Elding Ring (CD Key Steam) 3",
      price: 800000,
      promotional_price: 790000,
      thumb_nail: "https://steamcdn-a.akamaihd.net/steam/apps/1245620/header.jpg"
    },
    {
      name: "Tài khoản Netflix Premium for 1 User(1 Tháng) 4",
      price: 260000,
      promotional_price: 79000,
      thumb_nail: "https://cdn.divineshop.vn/image/catalog/Anh/Banner/NETFLIX1406.png?hash=1623646686",
    },
    {
      name: "Elding Ring (CD Key Steam) 5",
      price: 800000,
      promotional_price: 790000,
      thumb_nail: "https://steamcdn-a.akamaihd.net/steam/apps/1245620/header.jpg"
    },
    {
      name: "Tài khoản Netflix Premium for 1 User(1 Tháng) 6",
      price: 260000,
      thumb_nail: "https://cdn.divineshop.vn/image/catalog/Anh/Banner/NETFLIX1406.png?hash=1623646686",
    },
    {
      name: "Elding Ring (CD Key Steam) 7",
      price: 800000,
      promotional_price: 790000,
      thumb_nail: "https://steamcdn-a.akamaihd.net/steam/apps/1245620/header.jpg"
    },
    {
      name: "Tài khoản Netflix Premium for 1 User(1 Tháng)",
      price: 260000,
      promotional_price: 79000,
      thumb_nail: "https://cdn.divineshop.vn/image/catalog/Anh/Banner/NETFLIX1406.png?hash=1623646686",
    },
    {
      name: "Elding Ring (CD Key Steam) 8",
      price: 800000,
      promotional_price: 790000,
      thumb_nail: "https://steamcdn-a.akamaihd.net/steam/apps/1245620/header.jpg"
    },
    {
      name: "Tài khoản Netflix Premium for 1 User(1 Tháng) 9",
      price: 260000,
      promotional_price: 79000,
      thumb_nail: "https://cdn.divineshop.vn/image/catalog/Anh/Banner/NETFLIX1406.png?hash=1623646686",
    },
  ]

  return (
    <Container>
      <Banner>
      </Banner>
      <HotProductWrapper>
          <HotProductInner>
            <TitleList title="Sản phẩm nổi bật" discover subTitle="Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích" />
            <ProductList data={fakeData}>
              
            </ProductList>
          </HotProductInner>
      </HotProductWrapper>
      <Footer>

      </Footer>
    </Container>
  );
};

export default Home;
