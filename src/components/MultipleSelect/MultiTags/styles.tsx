import tw from "twin.macro";

export const MultiTagsWrapper = tw.div`
    w-full
`;

export const TagsContent = tw.div`
    flex flex-auto flex-wrap
`;

export const TagsIconWrapper = tw.div`
    text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200
`;

export const TagSelectedItem = tw.div`
    flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-[#0F766E] bg-[#CCFBF1] border border-[#5EEAD4]
`;