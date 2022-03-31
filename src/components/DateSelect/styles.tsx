import tw from 'twin.macro';

export const SelectWrapper = tw.div`
    relative
`;

export const DateSelectionTag = tw.input`
    border
    px-3
    pt-4
    h-[42px]
    rounded-md
    text-sm
    w-full
    appearance-none

    relative
   
    outline-offset[2px]
    outline-color[#2579f2]
    outline-width[2px]
    hover:border-[#2579f2]

    hover:shadow-2w
`;

export const LabelTag = tw.label`
    absolute
    text-[#9ca3af]
    top-[1px]
    left-[1px]
    text-sm  
    scale-[0.85]
    px-3
    pointer-events-none
    
`;