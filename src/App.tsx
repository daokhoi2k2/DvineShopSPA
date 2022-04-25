import React, { useEffect, useState, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from 'pages/Home';
import ProductDetail from 'pages/ProductDetail';
import { ToastContainer } from 'react-toastify';
import Tags from 'pages/Admin/Tags';

const Search = React.lazy(() => import('pages/Search'));
const Profile = React.lazy(() => import('pages/Profile'));
const OrderHistory = React.lazy(() => import('pages/OrderHistory'));
const Wishlist = React.lazy(() => import('pages/Wishlist'));
const Security = React.lazy(() => import('pages/Security'));
const Overview = React.lazy(() => import('pages/Admin/Overview'));
const ProductAdmin = React.lazy(() => import('pages/Admin/Product'));
const PrivateRoute = React.lazy(() => import('routes/components/PrivateRoute'));
const NavHeader = React.lazy(() => import('pages/NavHeader'));
const LayoutAdmin = React.lazy(() => import('pages/Admin/LayoutAdmin'));
const Account = React.lazy(() => import('pages/Account'));
const Affiliate = React.lazy(() => import('pages/Affiliate'));
const Transactions = React.lazy(() => import('pages/Transactions'));
const Cart = React.lazy(() => import('pages/Cart'));
const OrderDetail = React.lazy(() => import('pages/OrderDetail'));


const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Suspense
        fallback={
          <div className="fix-loading">
            <h2>loading</h2>
          </div>
        }
      >
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
            <Route path="product">
              <Route index element={<ProductAdmin />} />
              <Route path="tags" element={<Tags />} />
            </Route>
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
      </Suspense>
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
