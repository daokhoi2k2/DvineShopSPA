import tw from 'twin.macro';

export const Container = tw.div``;

export const AccountWrapper = tw.div`
    max-w-[1200px]
    mx-auto
    mt-5

`;

export const AccountInner = tw.div`
    flex
    px-3

    lg:px-0
    lg:flex-wrap
`;

export const AccountLayout = tw.div`
    flex-basis[79.16666667%]
    ml-6
    bg-white
    rounded-md
    border

    lg:flex-basis[100%]
    lg:ml-0
    lg:rounded-none 
`;

export const AccountLayoutInner = tw.div`
    p-10

    lg:p-5
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
