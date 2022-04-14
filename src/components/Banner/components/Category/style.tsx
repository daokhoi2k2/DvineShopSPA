import tw from "twin.macro";
import { Link } from "react-router-dom";

export const CategoryWrapper = tw.div`
    col-span-5
    p-2.5
    
    lg:hidden
`;

export const CategoryList = tw.div`
    flex
    flex-col
    justify-around
    bg-white
    rounded-md
    border
    h-full
    p-1.5
`;

export const CategoryItem = tw(Link)`
    flex
    items-center
    w-full
    cursor-pointer
    px-2
    rounded-md
    hover:bg-[#F3F4F6]
`;

export const CateIco = tw.div`
    text-[#808080]
`;

export const CateText = tw.div`
    ml-2
    text-[15.75px]
`;
