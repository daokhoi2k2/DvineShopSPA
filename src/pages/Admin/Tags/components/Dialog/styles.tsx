import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Title = tw.div`text-3xl font-semibold`;

export const DialogWrapper = styled.div<{ isOpen: boolean }>(({ isOpen }) => [
  tw`
    fixed
    top-0
    left-0
    right-0
    bottom-0
    bg-[rgba(0, 0, 0, 0.7)]
    z-40
    flex
    justify-center
    items-center
    
`,
  !isOpen ? tw`hidden` : '',
]);

export const Layout = tw.div`
    bg-white
    rounded
    p-5
    max-w-[860px]
    max-h-[80%]
    overflow-y-auto
    w-full
    relative
`;

export const GroupRow = tw.div`
    flex
    gap-x-3
    mt-3
    md:flex-wrap
    md:gap-y-3
`;

export const DialogHeader = tw.div`
    flex
    items-center
    justify-between
    pb-3
    border-b
`;

export const CloseDialog = tw.div`
    cursor-pointer
`;

export const DialogBody = tw.div``;

export const SubmitBtn = tw.button`
    bg-blue-700 hover:bg-blue-800
    py-2
    px-3
    rounded-md
    text-white
    text-sm
    font-semibold
    // ml-auto
    disabled:bg-gray-500
`;

export const ResetBtn = tw.button`
    py-2
    px-3
    rounded-md
    text-white
    font-semibold
    bg-gray-500
`;

export const CheckBox = tw.input``;
