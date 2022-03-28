import tw from "twin.macro";

export const Nav = tw.div`
    py-2
    bg-white
    border-b-[1px]

    lg:hidden
`;

export const NavContent = tw.div`
    max-w-[1200px]
    px-3
    mx-auto
    flex
    items-center
    justify-between
`;

export const NavPrimary = tw.div`
    flex
    items-center
    cursor-pointer

    select-none
`

export const NavText = tw.h4`
    text-[14px]
    font-bold
    ml-2
    text-[#333]
`;

export const NavButton = tw.div`
`;

export const TopHeader = tw.div`
    py-[10.5px]
    bg-[#0a59cc]

    lg:hidden
`;

export const Content = tw.div`
    max-w-[1200px]
    px-6
    mx-auto
    flex
    justify-between
`;


export const MainHeader = tw.div`
    py-5  
    bg-[#2579f2]
`;

export const HeaderContent = tw.div`
    max-w-[1200px]
    mx-auto
    px-4
`

