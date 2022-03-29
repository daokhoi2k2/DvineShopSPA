import styled from "@emotion/styled";
import tw from "twin.macro";
import { Link, NavLink } from "react-router-dom"

export const UserNavWrapper = tw.div`
    flex-basis[20.83333333%]
`;

export const UserNavInner = tw.div`
    bg-white
    rounded-md
    border
`;

export const ListAnchor = tw.div`

`;

export const Anchor = styled(Link)<{active: string}>(({active}) => {
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
        text-overflow[ellipsis]
        `,
        active === "true" ? tw`border-l-[#2579f2] first-of-type:rounded-tl-md last-of-type:rounded-bl-md` : '',
    ];
})
console.log(Anchor)

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

export const AnchorText = tw.h6`font-bold text-sm`;

export const AnchorIcon = tw.div``;