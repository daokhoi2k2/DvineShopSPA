import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Container,
} from './styles';
import Banner from 'components/Banner';
import LazyLoad from 'react-lazyload';
import HotProductList from './components/HotProductList';
import HotKeyword from './components/HotKeyword';
import WalletProductList from './components/WalletProductList';

const Home: React.FC = () => {

  return (
    <Container>
      <Banner></Banner>
      <HotProductList />
      <HotKeyword />
      <LazyLoad offset={100} once>
        <WalletProductList />
      </LazyLoad>
    </Container>
  );
};

export default Home;
