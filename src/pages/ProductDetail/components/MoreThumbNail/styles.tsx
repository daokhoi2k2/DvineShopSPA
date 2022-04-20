import tw from 'twin.macro';

export const MoreThumbNailWrapper = tw.div`
  p-3  
  flex-basis[37.50000000%]

  md:flex-basis[100%]
`;

export const ThumbNailInner = tw.div`
`;

export const ThumbNailPrimary = tw.div`
  relative pt-[50%] bg-fallback rounded-md
`;

export const ThumNailMoreButton = tw.div`
    text-center
    text-sm
    text-[#2579f2]
    font-semibold
    mt-4
    cursor-pointer
`;
