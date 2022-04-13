import styled from "@emotion/styled";
import tw from "twin.macro";
import { Link } from "react-router-dom";

export const NavDrawerWrapper = styled.div<{ isAdminDrawerNav: any }>(({ isAdminDrawerNav }) => [
  tw`
    min-h-screen
    h-full
    w-[260px]
    overflow-y-auto
    z-30
    bg-white
    transition[width ease-in 100ms]
    lg:absolute
    shadow-md`,
  isAdminDrawerNav ? tw`` : tw`w-[64px] min-w-0 lg:w-[0]`,
]);

export const LogoWrapper = styled.div<{ isAdminDrawerNav: any }>(({ isAdminDrawerNav }) => [
  tw`
    flex
    bg-[#2579F2]
    p-3
    cursor-pointer
    justify-center
    overflow-hidden
    transition[all ease-in 100ms]
    visible
    origin-top-left
    `,
  isAdminDrawerNav ? tw`` : tw`p-0 opacity-0 scale-0 invisible absolute`,
]);

export const LogoText = tw.div`
    text-white
    flex
    items-center
    text-xl
    font-semibold
    ml-3
`;

export const Routes = tw.div`
    mt-3
    px-3
`;

export const RouteItem = styled(Link)<{ active?: string }>(({ active }) => [
  tw`
  flex
  gap-x-2
  items-center
  rounded
  cursor-pointer
  mt-2
`,
  active === "true" ? tw`bg-[#E5E9F0]` : tw`bg-white`,
]);

export const IconRoute = tw.div`
    w-10
    h-10
    p-2
`;

export const TitleRoute = styled.div<{ isAdminDrawerNav: boolean }>(({ isAdminDrawerNav }) => [
  tw`text-sm
    font-semibold
    transition[all ease-in 200ms]
    visible
    `,
  isAdminDrawerNav ? "" : tw`hidden`,
]);
