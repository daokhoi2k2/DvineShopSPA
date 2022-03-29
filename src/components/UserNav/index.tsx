import {
  CardIcon,
  CartIcon,
  HeartIcon,
  PersonIcon,
  ShareIcon,
  UserLockIcon,
} from "designs/icons/Drawer";
import React from "react";
import { Anchor, AnchorIcon, AnchorText, ListAnchor, UserNavInner, UserNavWrapper } from "./styles";
import { NavLink, useLocation } from "react-router-dom";

const UserNav: React.FC = () => {
  const navList = [
    {
      id: 1,
      name: "Tài khoản",
      icon: <PersonIcon className="h-[17.5px]"></PersonIcon>,
      href: "/user/profile",
    },
    {
      id: 2,
      name: "Lịch sử đơn hàng",
      icon: <CartIcon className="h-[17.5px]"></CartIcon>,
      href: "/user/orders",
    },
    {
      id: 3,
      name: "Lịch sử giao dịch",
      icon: <CardIcon className="h-[17.5px]"></CardIcon>,
      href: "/user/transactions",
    },
    {
      id: 4,
      name: "Mật khẩu và bảo mật",
      icon: <UserLockIcon className="h-[17.5px]"></UserLockIcon>,
      href: "/user/security",
    },
    {
      id: 5,
      name: "Sản phẩm yêu thích",
      icon: <HeartIcon className="h-[17.5px]"></HeartIcon>,
      href: "/user/wishlist",
    },
    {
      id: 6,
      name: "Giới thiệu bạn bè",
      icon: <ShareIcon className="h-[17.5px]"></ShareIcon>,
      href: "/user/affiliate",
    },
  ];
  const { pathname } = useLocation();
  return (
    <UserNavWrapper>
      <UserNavInner>
        <ListAnchor>
          {navList.map((navItem) => (
            <Anchor key={navItem.id} active={navItem.href === pathname ? "true" : "false" } to={navItem.href}>
              <AnchorIcon>{navItem.icon}</AnchorIcon>
              <AnchorText>{navItem.name}</AnchorText>
            </Anchor>
          ))}
        </ListAnchor>
      </UserNavInner>
    </UserNavWrapper>
  );
};

export default UserNav;
