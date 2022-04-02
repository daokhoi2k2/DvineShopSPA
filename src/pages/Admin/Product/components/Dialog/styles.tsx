import styled from "@emotion/styled";
import tw from "twin.macro";

export const Title = tw.div`text-3xl font-semibold`;

export const DialogWrapper = styled.div<{isOpen: boolean}>(({isOpen}) => [
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
    !isOpen ?  tw`hidden`: ""
]);

export const Layout = tw.div`
    bg-white
    rounded
    p-5
    max-w-[860px]
    w-full
`;

export const GroupRow = tw.div`
    flex
    gap-x-3
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
