import tw from 'twin.macro';

export const Container = tw.div`

`;

export const ProductDetailInner = tw.div`
    max-w-[1200px]
    mx-auto
    flex
    md:flex-wrap
`;

export const ProductDetailWrapper = tw.div`
    py-6
   
    bg-white
`;

export const ProductDetailDescription = tw.div`
    max-w-[1200px]
    mx-auto
`;

export const DescriptionInner = tw.div`
    flex
    p-10
    md:flex-wrap
    lg:px-0
`;

export const DescriptionTitle = tw.h4`
    font-bold
    whitespace-nowrap
    text-xl
    p-[12px 15px]
`;

export const DescriptionContent = tw.div``;

export const ErrorPageWrapper = tw.div`
    max-w-[1200px]
    mx-auto
    flex
    flex-col
    py-6
    px-3
`;
