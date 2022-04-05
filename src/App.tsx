import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import ProductDetail from 'pages/ProductDetail';
import { ToastContainer } from 'react-toastify';
import Search from 'pages/Search';
import Profile from 'pages/Profile';
import OrderHistory from 'pages/OrderHistory';
import Wishlist from 'pages/Wishlist';
import Security from 'pages/Security';
import Overview from 'pages/Admin/Overview';
import ProductAdmin from 'pages/Admin/Product';
import PrivateRoute from 'routes/components/PrivateRoute';
import NavHeader from 'pages/NavHeader';
import LayoutAdmin from 'pages/Admin/LayoutAdmin';

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<NavHeader />}>
          <Route index element={<Home />} />
          <Route path=":hash_name" element={<ProductDetail />} />
          <Route path="search" element={<Search />} />
          <Route path="user">
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<OrderHistory />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="security" element={<Security />} />
          </Route>
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Overview />} />
          <Route path="product" element={<ProductAdmin />} />
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName={'toastCustom'}
      />
    </>
  );
};

export default App;
