import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

export const RouteItemWrapper = styled('div')<{ active?: string }>(
  ({ active }) => [
    tw`
    cursor-pointer
    mt-2
  
    flex-wrap
  `,
    active === 'true' ? tw`bg-[#E5E9F0]` : tw`bg-white`,
  ]
);

export const RouteLink = styled(Link)<{ active?: string }>(({ active }) => [
  tw`
    flex
    gap-x-2
    items-center
    rounded
  
    flex-nowrap
    overflow-hidden
  `,
  active === 'true' ? tw`bg-[#E5E9F0] text-black` : tw`bg-white text-gray-400`,
]);

export const ShowMoreRoutes = styled('div')<{ isAdminDrawerNav: boolean, isOpenChildRoute: boolean }>(
  ({ isAdminDrawerNav, isOpenChildRoute }) => [
    tw`ml-auto
      p-2
      hidden
      transition-transform
    `,
    isAdminDrawerNav && tw`block`,
    isOpenChildRoute && tw`rotate-180`
  ]
);

export const RouteItemChild = tw(Link)`flex items-center gap-x-2`;

export const RouteItemChildWrapper = styled('li')<{ active?: boolean }>(
  ({ active }) => [tw`text-gray-400 marker:text-[#ddd] w-full`, active && tw`marker:text-black text-black`]
);

export const ChildRoutes = tw.ul`
    flex-basis[100%]
    list-disc
    flex
    py-4
    pl-8
    bg-white
  `;

export const IconRoute = tw.div`
    w-10
    h-10
    p-2
  `;

export const TitleRoute = styled.div<{ isAdminDrawerNav: boolean }>(
  ({ isAdminDrawerNav }) => [
    tw`text-sm
      font-semibold
      transition[all ease-in 200ms]
      visible
      whitespace-nowrap
      `,
    isAdminDrawerNav ? '' : tw`hidden`,
  ]
);
