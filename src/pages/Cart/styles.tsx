import tw from 'twin.macro';

export const CartWrapper = tw.div`
    max-w-[1200px]
    mx-auto   
`;

export const CartLayout = tw.div`
    p-2.5
    lg:p-0
`;

export const CartStatusBar = tw.div`
    flex
    justify-between
    px-5
    my-4
    items-center
`;

export const CartStatusItem = tw.div`
    text-[14px]
    text-[#9ca3af]
    whitespace-nowrap
    px-2
    flex
    items-center
`;

export const CartStroke = tw.div`
    h-[1px]
    w-full
    border-t
`;

export const CartStatusCircle = tw.div`
    w-[17.5px]
    h-[17.5px]
    rounded-full
    bg-[#9ca3af]
    mx-2
`;

export const CartContainer = tw.div`
    bg-white
    rounded-md
    lg:rounded-none
    lg:border-none
    border
    min-h-[348px]
`;

export const CartContainerLayout = tw.div`
    flex
    p-10

    lg:p-5
    lg:flex-wrap
`;
