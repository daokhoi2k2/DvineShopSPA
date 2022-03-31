import tw from "twin.macro";

export const NavDrawerWrapper = tw.div`
    h-screen
    w-[260px]
    overflow-y-auto
    z-30
    bg-white
    shadow-md
`;

export const LogoWrapper = tw.div`
    flex
    bg-[#2579F2]
    p-3
    cursor-pointer
    justify-center
`;

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

export const RouteItem = tw.div`
    flex
    gap-x-2
    items-center
    rounded
    bg-[#E5E9F0]
    cursor-pointer
`;

export const IconRoute = tw.div`
    w-10
    h-10
    p-2
`;

export const TitleRoute = tw.div`
    text-sm
    font-semibold
`;