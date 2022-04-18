import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import Account from 'pages/Account';
import Affiliate from 'pages/Affiliate';
import Transactions from 'pages/Transactions';
import Cart from 'pages/Cart';
import OrderDetail from 'pages/OrderDetail';

const App: React.FC = () => {
  const { pathname } = useLocation();
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<NavHeader />}>
          <Route index element={<Home />} />
          <Route path=":hash_name" element={<ProductDetail />} />
          <Route path="search" element={<Search />} />
          <Route path="cart" element={<Cart />} />
          <Route path="user" element={<Account />}>
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<OrderHistory />} />
            <Route path="order/:id" element={<OrderDetail />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="security" element={<Security />} />
            <Route path="affiliate" element={<Affiliate />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Route>
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <LayoutAdmin />
            </PrivateRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="product" element={<ProductAdmin />} />
          <Route
            path="private"
            element={
              <PrivateRoute>
                <div>Hello world</div>
              </PrivateRoute>
            }
          />
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
