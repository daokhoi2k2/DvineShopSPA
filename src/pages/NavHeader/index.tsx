import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const NavHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default NavHeader;
