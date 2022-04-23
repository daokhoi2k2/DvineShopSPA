import tw from "twin.macro";
import styled from "@emotion/styled";

export const ProudctMainInfoWrapper = tw.div`
    flex-basis[37.50000000%]
    p-3

    flex-grow
    md:flex-basis[100%]
`;

export const Title = tw.h4`
    text-[#374151]
    text-sm  
`;

export const ProductInfo = tw.div``;

export const Name = tw.div`
    mt-2
    font-semibold
    text-[26.25px]
    leading-[31.5px]
`;

export const ExtraInformation = tw.div`
    my-1.5
`;

export const Text = tw.h3`
    text-sm
    ml-1.5
    inline-block
`;

export const StatusText = styled.span<any>(({ success }) => [
  success ? tw`text-green-400` : tw`text-red-500`,
]);

export const PriceInformation = tw.div``;

export const ReducedPrice = tw.div`
    flex
`;

export const PricePromotion = tw.div`
    text-[21px]
    font-semibold
`;

export const VariantsSelect = tw.div`
    border-b-[1px]
    pb-3
    w-full
`;

export const VariantsTitle = tw.div`
    text-[15.75px]
    text-black
    font-semibold
    opacity-75
    my-2
`;

export const VariantsList = tw.div`
    flex-wrap
    flex
    gap-x-1
    gap-y-2
`;

export const VariantItem = styled.div<any>(({ selected }) => [
  tw`
    bg-white
    rounded-md
    text-sm
    text-blue-600
    font-semibold
    // opacity-70
    border
    border-gray-300
    px-3.5
    py-0.5
    cursor-pointer

    
    hover:border-blue-600
    hover:outline-[#2579F2]
    `,
  selected && tw`bg-[#2579F2] text-white`,
]);

export const Hr = tw.div`
    mt-5
    border-top-width[1px]
    w-full
`;

export const BuyControl = tw.div`
    flex
    justify-between
    mt-3
    mid:flex-wrap
    mid:gap-y-2
`;

export const Button = styled.button<any>(({ primary }) => [
  tw`bg-white 
    flex-basis[49%]
     text-[#2579f2]
    rounded-md
    border
    border-[#d1d5db] 
    px-[14px] 
    flex 
    items-center 
    justify-center 
    h-[42px] 
    text-[14px] 
    font-semibold 
    gap-x-2 
    hover:border-[#2579f2]
    mid:flex-basis[99%]
    `,
  primary && tw`text-white bg-[#2579f2]`,
]);

export const TextButton = tw.div``;
