import tw from 'twin.macro';
export const InputWrapper = tw.div`
    relative
`;

export const InputTag = tw.input`
    border
    px-3
    pt-4
    h-[42px]
    rounded-md
    // absolute
    // outline-none
    text-sm
    w-full

   
    // hover:border-[#2579f2]
    outline-offset[2px]
    outline-color[#2579f2]
    outline-width[2px]
    hover:border-[#2579f2]

    hover:shadow-2w
    placeholder-shown:bg-black
`;

export const LabelTag = tw.label`
    absolute
    text-[#9ca3af]
    top-[1px]
    left-[1px]
    text-sm
    px-4
    py-3    
    pointer-events-none
    
`;