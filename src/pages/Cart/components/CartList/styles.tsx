import tw from 'twin.macro';

export const CartListWrapper = tw.div`
    w-full
    flex-basis[70%]
    lg:flex-basis[100%]
`;

export const CartEmpty = tw.div`
    w-full
`;

export const CartEmptyTitle = tw.h2`
    text-xl
    font-semibold
    text-center
`;

export const CartEmptySubTitle = tw.h4`
    text-sm
    text-center
`;

export const CartEmptyImg = tw.img`
    mx-auto
    mt-7
`;

export const CartTableWrapper = tw.div`
`;

export const CartTableTitle = tw.h2`
    text-2xl
    font-semibold
`;

export const CartTable = tw.div``;

export const CartItem = tw.div`
    w-full
    rounded-md
    border
    p-3.5
    my-3
    flex
    sm:flex-wrap
`;

export const CartItemThumbNailWrapper = tw.div`
    rounded-md
    flex-basis[37.5%]
    sm:flex-basis[100%]
`;

export const CartItemThumbNail = tw.img`
    rounded-md
    w-full
`;

export const CartItemInfo = tw.div`
    px-3.5
    flex-basis[62.5%]
    sm:flex-basis[100%]
    sm:px-0
    sm:mt-3
`;

export const MainInfo = tw.div`
    flex
    gap-x-3
    sm:flex-col
`;

export const SubInfo = tw.div`
    
`;

export const ProductInfo = tw.div`
    flex-basis[45.83333333%]
    w-[45.83333333%]
    sm:flex-basis[100%]
    sm:w-full
`;

export const ProductAmount = tw.div`
    flex
    flex-nowrap
    sm:order-3
`;

export const ChangeAmountBtn = tw.button`
    w-[26px]
    h-[26px]
    border
`;

export const AmountInput = tw.input`
    w-[26px]
    h-[26px]
    border-t
    border-b
    text-center
    text-sm
    text-[#2579f2]
    font-semibold
    whitespace-nowrap
    outline-none
`;

export const ProductPrice = tw.div`
    flex
    flex-col
    items-end
    flex-grow
    my-2
    sm:items-end
    sm:flex-row
    
`;

export const Hr = tw.div`
    border-t
    my-4
`;

export const ProductInfoStatus = tw.div`
    flex
    justify-between
`;

export const ProductStatus = tw.div`
    flex
    items-center
    gap-x-1
    text-sm
`;
