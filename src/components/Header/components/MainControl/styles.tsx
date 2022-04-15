import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import tw from "twin.macro";

export const MainControlWrapper = tw.div`
    flex
    gap-x-10
`;

export const AuthControlWrapper = tw.div`
    w-52
    flex
    items-center

    md:hidden
`;

export const LogoWrapper = tw.div`
    flex
    items-center
    cursor-pointer

    lg:hidden
`;

export const LogoText = tw.h4`
    text-white
    text-[21px]
    ml-3
    font-semibold
`;

// Search Style
export const SearchWrapper = tw.div`
    flex
    flex-grow
`;

export const InputSearch = tw.input`
    px-[14px]
    rounded-l-md
    w-[100%]
    placeholder:text-gray-400
    placeholder:text-[14px]
    focus:outline-none

`;

export const ButtonSearch = tw.button`
    px-3.5
    bg-[#0a59cc]
    rounded-r-md
    text-white
`;

// Auth Style
export const AuthWrapper = tw.div`
    flex
    gap-x-2.5


`;

export const IconAuthWrapper = tw.div`
    flex
    items-center
`;

export const IconAuth = tw.div`
    border 
    p-2
    rounded-full 
    cursor-pointer

    hover:bg-[rgb(59 130 246/0.7)]
`;

export const ControlAuthWrapper = tw.div`
    flex
    text-white
    text-[14px]
    font-semibold
    items-center
    gap-x-1
    cursor-pointer

    min-w-[185px]
`;

export const ControlAuthItem = tw.div`
    hover:underline
`;

// Cart Style
export const CartWrapper = tw(Link)`
    flex
    items-center

    rounded-md            
    px-3.5
    py-1.5
    border

    cursor-pointer
    min-w-[141px]
    hover:opacity-90
    sm:min-w-0

`;

export const CartTitle = tw.div`
    text-white
    font-bold
    ml-1.5
    text-[14px]

    sm:hidden
`;

export const CartAmount = tw.div`
    py-0.5
    px-1
    m-1
    text-[14px]
    text-gray-700
    font-bold
    rounded-md
    bg-white
`;

// Show More Button
export const ShowMore = tw.div`
    hidden
    items-center
    cursor-pointer

    lg:flex
`;
// User control
export const UserControlWrapper = tw.div`
    flex
    items-center
    gap-x-2
    justify-center
    w-full
    cursor-pointer
    relative
`;

export const UserAvatar = tw.div`
    
`;

export const ImgAvatar = tw.img`
    rounded-full
`;

export const UserText = tw.div`
    text-white
    font-bold
    text-sm
`;

export const UserInfoWrapper = tw.div`
    absolute
    w-[168px]
    bg-white
    rounded-md
    top-12
    p-3
    z-30
    hidden
    shadow-xl
    group-hover:block

    before:block
    before:w-full
    before:h-5
    before:absolute
    before:left-0
    before:top-[-20px]
`;

// Balance
export const Balance = tw.div`
    p-2
`;

export const BalanceTitle = tw.div`
    text-sm
`;

export const BalanceInfo = tw.div`
    flex
    items-center
    gap-x-2
`;

export const BalanceMoney = tw.h3`
    font-semibold
    text-black
`;

export const BalanceIcon = tw.div``;

export const NavList = tw.div``;

export const NavItem = styled(Link)(() => [
  tw`
    text-sm
    p-2
    max-w-full
    block
    hover:bg-[#F3F4F6]
    rounded-md
`,
]);
