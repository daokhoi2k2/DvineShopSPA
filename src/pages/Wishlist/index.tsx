import Header from 'components/Header';
import UserNav from 'components/UserNav';
import ImgFallBack from 'designs/ImgFallback';
import React from 'react';
import { Container, UserInner, UserWrapper } from './styles';
import UserWishlist from './UserWishlist';
import UserOrder from './UserWishlist';
// import UserProfile from "./UserProfile";

const Wishlist = () => {
  return (
    <>
      <div className="text-2xl text-center font-bold">
        The system is maintenancing
      </div>
      <ImgFallBack isStaticImg={true} src="maintance.jpg" alt="maintance" />
    </>
  );
};

export default Wishlist;
