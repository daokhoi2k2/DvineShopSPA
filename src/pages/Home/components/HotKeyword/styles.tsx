import { Link } from 'react-router-dom';
import tw from 'twin.macro';

export const ListBox = tw.div`
    flex
    flex-nowrap

    sm:flex-wrap
    justify-around

    my-4

    mx-[-12px]
    w-full
`;

export const BoxItem = tw.div`
    p-3
    flex-basis[16.66666667%]

    sm:flex-basis[33.3333333333%]
`;

export const BoxItemLayout = tw(Link)`
    pt-[45%]
    relative
    block
    rounded-md
    text-white
    font-semibold
`;

export const BoxItemContent = tw.div`
    absolute
    w-full
    h-full
    justify-center
    flex
    top-0
    items-center
    whitespace-nowrap
    // left-0
    // right-0
    // bottom-0
`;
