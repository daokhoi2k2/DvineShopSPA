import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import tw from "twin.macro";

export const FooterWrapper = tw.div`
  
`;

export const FooterInner = tw.div`
    p-2.5
`;

export const PaymentWrapper = tw.div`
    bg-white
`;

export const PaymentInner = tw.div`
    max-w-[1200px]
    mx-auto
    py-1
`;

export const ListIcon = tw.div`
    flex
    gap-x-3
    p-2.5
`;

export const ItemIcon = tw.div`
    cursor-pointer
    select-none
`;

export const FooterHeader = tw.div`
    border-b
`;

export const FooterBody = tw.div`
    p-2.5
`;

export const FooterBox = tw.div`
    max-w-[1200px]
    mx-auto
`;

export const Row = tw.div`
    flex
    gap-x-20
    flex-wrap
`;

export const Col = tw.div`
    sm:flex-basis[100%]
`;

export const Title = tw.div`
    font-semibold
    text-sm
    my-3
    uppercase
`;

export const Anchor = styled(Link)(() => [
    tw`text-sm block my-1.5 hover:underline`
])

export const AnchorText = tw.span`text-sm block my-1.5`;