import styled from '@emotion/styled';
import tw from 'twin.macro';

export const CartControlWrapper = tw.div`
  flex-basis[30%]
  p-3
  lg:flex-basis[100%]
`;

export const DisclosureList = tw.div``;

export const DisclosureItem = tw.div``;

export const DisclosureTitle = tw.h4`
    font-semibold 
    text-[16px]
    whitespace-nowrap
`;

export const Input = styled.input(() => [
  tw`
    h-[42px]
    px-3.5
    border
    rounded-md
    text-[14px]
    w-full
    `,
]);

export const PaymentList = tw.div`

`;

export const PaymentTitle = tw.h4`
  font-semibold 
  text-[16px]
  whitespace-nowrap
`;

export const PaymentItem = tw.button`
  w-full
  rounded-md
  min-h-[42px]
  flex
  justify-center
  text-white
  text-sm
  font-bold
  items-center
  my-3

  active:scale-[0.97]
`;

export const PaymentSubTitle = tw.h5`
  text-[13px]
  text-[#6b7280]
  whitespace-nowrap
  text-center
`;

export const PaymentInfo = tw.div``;

export const PaymentInfoItem = tw.div`
  flex
  justify-between
  text-sm
  my-2
`;