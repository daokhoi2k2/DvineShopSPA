import styled from '@emotion/styled';
import tw from 'twin.macro';

export const MultiSelectBoxWrapper = tw.div`
    absolute shadow top-[100%]  bg-white z-40 w-full rounded max-h-[300px] overflow-y-auto
`;

export const SelectList = tw.div`flex flex-col w-full`;

export const TagItem = tw.div`cursor-pointer w-full border-gray-100 border-b hover:bg-[#e6fffa]`;

export const TagItemInner = styled("div")<{selected?: boolean}>(({selected}) => [
    tw`flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative`,
    selected && tw`border-[#319795]`
    
])