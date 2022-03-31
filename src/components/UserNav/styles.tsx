import styled from "@emotion/styled";
import tw from "twin.macro";
import { Link, NavLink } from "react-router-dom";

export const UserNavWrapper = tw.div`
    flex-basis[20.83333333%]
    w-[20.83333333%]
    lg:flex-basis[100%]
`;

export const UserNavInner = tw.div`
    bg-white
    rounded-md
    border

    lg:rounded-none
    lg:border-b-0
`;

export const ListAnchor = tw.div`
    lg:flex
    lg:justify-center
`;


export const Anchor = styled(Link)<{ active: string }>(({ active }) => {
  return [
    tw`
        p-5 
        flex 
        gap-x-2 
        items-center 
        text-[#6b7280] 
        hover:text-black
        not-first-of-type:border-t
        border-l-[6px]
        border-l-transparent

        lg:border-l-0
        lg:not-first-of-type:border-t-0
        lg:border-b-[6px]
        lg:border-b-transparent
        `,
    active === "true"
      ? tw`border-l-[#2579f2] first-of-type:rounded-tl-md last-of-type:rounded-bl-md lg:first-of-type:rounded-none lg:last-of-type:rounded-none lg:border-b-[#2579f2]`
      : "",
  ];
});

// export const Anchor =
//     return [
//         tw`
//         p-5
//         flex
//         gap-x-2
//         items-center
//         text-[#6b7280]
//         hover:text-black
//         not-first-of-type:border-t
//         border-l-[6px]
//         border-l-transparent
//         text-overflow[ellipsis]
//         `,
//         // active && tw`border-l-[#2579f2] first-of-type:rounded-tl-md last-of-type:rounded-bl-md`,
//     ]
// })

export const AnchorText = tw.h6`font-bold text-sm w-full truncate lg:hidden`;

export const AnchorIcon = tw.div``;
