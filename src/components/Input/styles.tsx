import styled from '@emotion/styled';
import tw from 'twin.macro';
export const InputWrapper = tw.div`
    relative
`;

export const InputTag = styled.input<{ isInvalid?: any }>(({ isInvalid }) => [
  tw`    border
    px-3
    pt-4
    h-[42px]
    rounded-md
    text-sm
    w-full
   
    outline-offset[2px]
    outline-color[#2579f2]
    outline-width[2px]
    hover:border-[#2579f2]

    hover:shadow-2w

    text-overflow[ellipsis]
    // placeholder-shown:text-overflow[ellipsis]
    placeholder-shown:bg-black`,
  isInvalid &&
    tw`border-red-500 outline-none hover:shadow-none hover:border-red-500`,
]);

export const LabelTag = styled.label<{ isInvalid?: any }>(({ isInvalid }) => [
  tw`  absolute
    text-[#9ca3af]
    top-[1px]
    left-[1px]
    text-sm
    px-4
    py-3    
    pointer-events-none
    whitespace-nowrap`,
  isInvalid && tw`text-red-500`,
]);

export const ErrorMsg = tw.div``;

export const Tooltip = styled.div<{ isError: boolean }>(({ isError }) => [
  tw`
    absolute 
    z-[100]
    py-2 
    px-3 
    text-sm
    font-medium 
    text-white 
    bg-gray-900 
    rounded-lg 
    shadow-sm 
    transition-opacity 
    duration-300
    dark:bg-gray-700 
    
    whitespace-nowrap
    top-[-40px]
    left-[50%]
    translate-x-[-50%]
    hidden
    `,
  isError && tw`group-hover:inline-block`,
]);
