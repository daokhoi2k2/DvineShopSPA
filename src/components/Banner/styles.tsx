import { Link } from "react-router-dom";
import tw from "twin.macro";

export const BannerWrapper = tw.div`
    pt-6
    max-w-[1200px]
    mx-auto
`;

export const BannerContent = tw.div`
    grid
    grid-cols-24

    lg:grid-rows-3
`

export const MiniBannerCol = tw.div`
    flex
    flex-col
    justify-around
    col-span-6

    // lg:hidden
    lg:row-span-2
    lg:flex-row
    lg:col-span-full
`;

export const MiniBannerItem = tw.div`
    p-2.5
    w-full
    cursor-pointer

`;

export const ListMiniBanner = tw.div`
    // pt-5
    grid
    grid-cols-4

    sm:grid-rows-2
    sm:grid-cols-2
    // sm:pt-0
`;

export const ImgHref = tw(Link)`
    block
    pt-[50%]
    relative
    h-0
    bg-fallback
    rounded-md
`;
