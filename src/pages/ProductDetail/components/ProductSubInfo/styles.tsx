import styled from "@emotion/styled";
import tw from "twin.macro";

export const ProductSubInfoWrapper = tw.div`
    flex-basis[25%]
    p-3

    md:flex-basis[100%]
`;

export const GiftCode = tw.div`
    flex
`;

export const GiftInput: React.FC<{defaultValue: string, ref: any}> = styled.input(({defaultValue, ref}) => [
    tw`p-3 border rounded-md outline-none hover:border-[#2579f2] hover:outline-[#2579f2] w-full`
]);

export const GiftButton = tw.div`
    flex
    justify-center
    items-center
    bg-[#2579F2]
    rounded-md
    h-[50px]
    px-4
    ml-2
    cursor-pointer
    select-none
`;