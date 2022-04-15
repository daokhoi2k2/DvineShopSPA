import tw from "twin.macro";
import { Link } from "react-router-dom"
import styled from "@emotion/styled";

export const NavDrawerWrapper = styled.div<{isNavDrawer: boolean}>(({isNavDrawer}) => [
    tw`
    fixed
    top-0
    bottom-0
    left-0
    right-0
    bg-[rgba(0, 0, 0, 0.7)]

    hidden
    z-20
    `,
    isNavDrawer ? tw`flex` : tw`hidden`
])

export const NavDrawerInner = tw.div`
    bg-white
    min-w-[18rem]
    z-30
`;

export const RestFixed = tw.div`
    flex-grow
`;

export const NavItem = tw(Link)`
    mb-4
    flex
    items-center
`

export const NavText = tw.span`
    font-semibold
    ml-2
    text-sm
`;

export const NavDrawerHeader = tw.div`
    bg-[#2579F2]
    w-full
`;

export const NavDrawerBody = tw.div`
    px-5
    py-4
`;

export const GroupNav = tw.div`
    border-b-[1px]
    mb-3
`;

export const ControlAuthWrapper = tw.div`
    flex
    text-white
    text-[14px]
    font-semibold
    items-center
    gap-x-1
    cursor-pointer
`;

export const ControlAuthItem = tw.div`

`;

export const AuthWrapper = tw.div`
    flex
    gap-x-2.5
    p-4
    justify-around
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

export const CloseDrawer = tw.div`
    flex
    items-center
    justify-center
    cursor-pointer
`;

export const UserInfo = tw.div`
    flex
    gap-x-3
    items-center
`;