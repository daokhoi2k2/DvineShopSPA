import tw from "twin.macro";

export const Wrapper = tw.div`
overflow-x-auto
`;

export const TableWrapper = tw.table`
    bg-white
    rounded-md

    mt-4
    w-full
    overflow-x-auto
`;

export const RowItem = tw.tr`
    w-full
    overflow-hidden
`;

export const Icolumn = tw.td`
    // py-4
    // px-4
    whitespace-nowrap
`;

export const Theader = tw.thead`
    font-bold
    text-sm
    text-left
    whitespace-nowrap
`;

export const TheaderItem = tw.th`
    // px-4
    // py-4
`;

export const Tbody = tw.tbody`
    overflow-x-scroll
`;
