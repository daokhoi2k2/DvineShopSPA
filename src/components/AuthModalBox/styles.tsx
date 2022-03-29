import styled from "@emotion/styled";
import tw from "twin.macro";

export const AuthModalBoxWrapper = styled.div<{isAuthModalBox: boolean}>(({isAuthModalBox}) => [
    tw`
    fixed
    top-0
    right-0
    bottom-0
    left-0

    z-30
    bg-[rgba(0, 0, 0, 0.7)]

    hidden

    justify-center
    items-center
    px-4
    py-8
    `,
    isAuthModalBox && tw`flex`
]);

export const AuthModalBoxInner = tw.div`
    min-h-[348px]
    w-[992px]
    max-w-full
    p-9

    bg-white
    rounded-md
`;

export const AuthModalHeader = tw.div`
    w-full
    flex
    justify-between
`;

export const AuthControl = tw.div``;

export const AuthTitle = styled.div<{active?: boolean}>(({active}) => [
    tw`
        text-[#6b7280]
        text-2xl
        inline-block
        font-semibold
        cursor-pointer

        hover:underline
        not-first-of-type:ml-3
    `,
    active && tw`text-black` 
]);

export const AuthClose = tw.div``;

export const AuthModalBody = tw.div``;