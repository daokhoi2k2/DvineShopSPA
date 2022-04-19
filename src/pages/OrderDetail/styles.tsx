import tw from 'twin.macro';

export const OrderDetailWrapper = tw.div`
    flex
    flex-wrap
`;

export const Title = tw.h3`
    text-xl
    font-bold
`;

export const Subtitle = tw.h4`
    text-[#374151]
    text-sm
    mt-2
`;

export const Hr = tw.div`
    border-t 
    my-4`;

export const OrderTitle = tw.h4`
    font-semibold
    text-[16px]
    my-3
`;

export const OrderInfo = tw.div`
    w-96
    text-sm
    leading-6
`;

export const OrderValue = tw.div`
    text-sm
    leading-6
    w-[340px]
`;

export const OrderList = tw.div`
    gap-y-4
    flex
    flex-wrap
`;

export const OrderItem = tw.div`
    flex
    gap-x-3
`;

export const OrderThumbnail = tw.div`
    flex-basis[25%]
`;

export const OrderItemInfo = tw.div`
    flex-basis[75%]
    flex
    flex-col
    justify-between
`;

export const InfoPrimary = tw.div`
    flex
    font-semibold
    justify-between
`;

export const InfoSub = tw.div`
    text-sm
`;

export const ProductName = tw.h3`
    flex-basis[54.16666667%]
`;