import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Wrapper = tw.div`
`;

export const Container = tw.div`
    w-full
`;

export const Layout = tw.div`
    grid
    grid-template-columns[auto 1fr]

    lg:flex
`;

export const Content = tw.div`
    p-14
    sm:p-3
`;

export const ControlUIWrapper = tw.div`
    flex
    justify-between
    md:gap-x-3
`;

export const SearchInput = tw.div`
    flex-basis[25%]

    md:flex-grow
`;

export const AddBtnWrapper = tw.div`

`;

export const AddButton = tw.button`
    py-2
    px-4
    rounded-md
    bg-[#00296B]
    text-white
    font-bold
`;

export const BtnItem = tw.button`
    p-3
    rounded-md
    hover:bg-gray-200
`;

export const ControlWrapper = tw.div`
    flex
    justify-end
    px-4
`;

export const StatusButton = styled('button')<{ status: boolean }>(
  ({ status }) => [
    tw` h-9 px-2 text-white transition-colors duration-150  rounded-lg focus:shadow-md w-[110px] text-sm`,
    status
      ? tw`bg-green-700 hover:bg-green-800`
      : tw`bg-red-700 hover:bg-red-800`,
  ]
);
