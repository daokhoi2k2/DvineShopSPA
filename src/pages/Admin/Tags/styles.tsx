import tw from "twin.macro";

export const Wrapper = tw.div`
`;

export const Container = tw.div`
    w-full
`;

export const Layout = tw.div`
    grid
    grid-template-columns[auto 1fr]

    lg:flex
`

export const Content = tw.div`
    p-14
    sm:p-3
`;

export const ControlUIWrapper = tw.div`
    flex
    justify-between
    md:gap-x-3
`;

export const SearchInput = tw.div`
    flex-basis[25%]

    md:flex-grow
`;

export const AddBtnWrapper = tw.div`

`;

export const AddButton = tw.button`
    py-2
    px-4
    rounded-md
    bg-[#00296B]
    text-white
    font-bold
`;

export const TagCol = tw.div`
    px-6
`;