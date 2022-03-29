import tw from "twin.macro";

export const UserProfileWrapper = tw.div`
    flex-basis[79.16666667%]
    ml-6
    bg-white
    rounded-md
    border
`;

export const InfoUserWrapper = tw.div`
    p-10
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
    mt-2
    // min-width[170px]
`;

export const InfoTitle = tw.div`
    text-sm
    text-[#374151]
`;

export const InfoValue = tw.div`
    text-sm
    font-bold
    truncate
    mt-2
`;
