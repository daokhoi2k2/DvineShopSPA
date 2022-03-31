import styled from "@emotion/styled";
import Img from "designs/Img";
import tw from "twin.macro";

export const UserProfileWrapper = tw.div`
    flex-basis[79.16666667%]
    ml-6
    bg-white
    rounded-md
    border

    lg:flex-basis[100%]
    lg:ml-0
    lg:rounded-none
`;

export const InfoUserWrapper = tw.div`
    p-10

    md:p-5
`;

export const Title = tw.h3`
    text-xl
    font-bold
`;

export const ListInfo = tw.div`
    flex
    flex-wrap
`;

export const InfoItem = tw.div`
    flex-basis[25%]
    w-[25%]

    sm:flex-basis[100%]
    sm:w-[100%]
    sm:flex
    sm:items-center
    mt-2
    // min-width[170px]
`;

export const InfoTitle = tw.div`
    text-sm
    text-[#374151]

    sm:flex-basis[35%]
`;

export const InfoValue = tw.div`
    text-sm
    font-bold
    truncate
    mt-2

    sm:mt-0
`;

// Avatar Block
export const Hr = tw.div`border-t my-4`;
export const HrY = tw.div`border-l md:hidden ml-4`;

export const AvatarWrapper = tw.div`flex gap-x-3`;

export const AvatarContent = styled(Img)(() => [
    tw`rounded-full w-36 h-36`
])

export const AvatarButtonWrapper = tw.div`flex items-center`;

export const AvatarButton = tw.label`border bg-white text-[#2579f2] px-5 text-sm font-bold py-2 rounded-md hover:border-[#2579f2]`;

export const AvatarDescription = tw.div`flex flex-col justify-center pl-5 text-sm md:pl-0 gap-y-2`;

export const AvatarControlWrapper = tw.div`flex md:flex-col md:justify-center md:gap-y-3 md:ml-3`;

// User Profile
export const FormWrapper = tw.div``;

export const FormList = tw.div`
    mt-5
    w-80
`;

export const SubmitBtn = tw.button`
    mt-3
    bg-[#2579f2]
    border
    font-medium
    text-sm
    text-white
    h-10
    rounded-md
    px-4

    hover:opacity-90
`;