import tw from 'twin.macro';

export const TableOrderWrapper = tw.table`
    w-full
    table
    rounded-md
    border-collapse
    border-style[hidden]
    text-sm
    mt-3
    box-shadow[inset 0 0 0 1px #e4e4e7]

    md:flex
    md:box-shadow[none]
`;

export const THead = tw.thead`
    md:hidden
`;

export const Row = tw.tr`
    md:flex-basis[100%]
    md:overflow-hidden

    md:flex
    md:flex-wrap
    md:border-b
`;

export const ColHead = tw.th`
    p-2
    border-width[1px]
    table-cell
`;

export const TBody = tw.tbody`
    md:flex
    md:flex-wrap
`;

export const Col = tw.td`
    border
    p-2

    md:border-none
    // whitespace-nowrap
`;
