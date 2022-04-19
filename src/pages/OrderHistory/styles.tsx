import styled from "@emotion/styled";
import tw from "twin.macro";

export const UserOrderWrapper = tw.div`
    flex-basis[79.16666667%]
    ml-6
    bg-white
    rounded-md
    border

    lg:flex-basis[100%]
    lg:ml-0
    lg:rounded-none
`;

export const OrderHistoryWrapper = tw.div`
    p-10

    md:p-5
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

export const FormList = tw.form`
    flex
    ml-[-8px]
    mr-[-8px]

    xl:flex-wrap
    xl:gap-y-4
`;

export const FilterButton = tw.button`
    bg-[#2579f2]
    flex
    items-center
    justify-center
    text-white
    px-4
    rounded-md
    gap-x-1
    m-2
    lg:px-3
    lg:py-2   
    sm:mx-2
    sm:my-0
`;

export const ItemWrapper = tw.div`
    p-2

    first-of-type:flex-basis[30%]
    // w-full
    xl:flex-basis[33.3333333333333333%]
    xl:first-of-type:flex-basis[33%]
    sm:flex-basis[50%]
    sm:first-of-type:flex-basis[100%]
`;

export const DateItemWrapper = tw.div`
    p-2
    // flex-basis[20%]
    w-[20%]
    xl:w-[33%]
    sm:w-[50%]
`;

export const ProductLayout = tw.div`
    flex-basis[100%]
    md:flex-basis[40%]
`;

export const OrderStatus = styled.h4<{active?: boolean}>(({active}) => [
    tw`text-[#dc3545]
        whitespace-nowrap
    `,
    active && tw`text-[#29b474]`
])