import tw from "twin.macro";

export const MainControlWrapper = tw.div`
    flex
    gap-x-10
`;

export const LogoWrappep = tw.div`
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

    md:hidden
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

`;

export const ControlAuthItem = tw.div`
    hover:underline
`;

// Cart Style
export const CartWrapper = tw.div`
    flex
    items-center

    rounded-md            
    px-3.5
    py-1.5
    border

    cursor-pointer
    hover:opacity-90
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
`