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
`;

export const THead = tw.thead`

`;

export const Row = tw.tr``;

export const ColHead = tw.th`
    p-2
    border-width[1px]
    table-cell
`;

export const TBody = tw.tbody``;

export const Col = tw.td`
    border
    p-2
    // whitespace-nowrap
`;
