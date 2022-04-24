import styled from '@emotion/styled';
import tw from 'twin.macro';

export const ProductCardWrapper = tw.div`
    py-3
    cursor-pointer
`;

export const CardImg = styled('div')<{ status?: boolean }>(({ status }) => [
  tw`   
    rounded-md
    w-full
    `,
    status && tw`relative`
]);

export const CardInfo = tw.div``;

export const Name = tw.div`
    text-sm
    text-black
    mt-3
`;

export const PricePromotion = tw.div`
    text-black
    text-sm
    font-semibold
    p-0.5
`;

export const Price = styled.div<{ haveSale?: any }>(({ haveSale }) => [
  tw`
    text-black
    text-sm
    font-semibold
    p-0.5
    `,
  haveSale && tw`line-through text-[#9ca3af]`,
]);

export const SalePercent = tw.div`
    bg-[#DC3545]
    p-1
    rounded-md
    text-[12px]
    text-white
    font-semibold
    mx-1.5
`;

export const PriceWrapper = tw.div`
    flex
`;
