import tw from "twin.macro";

export const CarouselWrapper = tw.div`
    col-[6/19]
    p-2.5
    rounded-md
    cursor-pointer

    lg:col-span-full
    lg:row-span-2
`;

export const SliderItem = tw.div`
    w-full

    h-auto
`;

export const NextArrowWrapper = tw.div`
    absolute
    right-0
    top-0
    bottom-[6px]
    h-auto
    transform-none
    w-24
    
    
    rounded-r-md
    group-hover:bg-[rgba(0, 0, 0, 0.2)]

    before:hidden
`;

export const NextArrowIcon = tw.div`
    h-full
    flex
    justify-center
    items-center
    opacity-0
    group-hover:opacity-100

`;

export const PrevArrowWrapper = tw.div`
    absolute
    left-0
    top-0
    bottom-[6px]
    h-auto
    transform-none
    w-24
    
    
    rounded-l-md
    group-hover:bg-[rgba(0, 0, 0, 0.2)]

    before:hidden
    z-10
`;

export const PrevArrowIcon = tw.div`
    h-full
    flex
    opacity-0

    justify-center
    items-center

    group-hover:opacity-100
`;
