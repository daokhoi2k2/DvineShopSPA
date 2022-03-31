import tw from "twin.macro";

export const TopHeaderWrapper = tw.div`
    bg-white
    w-full
    h-[60px]
`;

export const ShowMoreBtn = tw.div`
    flex
    justify-center
    items-center
    h-full
    cursor-pointer
`;

export const UIControl = tw.div`
    flex
    h-full
    gap-x-3
    ml-3
`;

export const BreadCumb = tw.div`
    flex
    h-full
    items-center
    gap-x-3
`;

export const SubBreadCumb = tw.div`text-sm opacity-50`;

export const MainBreadCumb = tw.div`text-sm`;