import tw from 'twin.macro';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const TitleListWrapper = tw.div``;

export const Title = tw.div`
    text-[21px]
    font-semibold
`;

export const Discover = styled(Link)(() => [
  tw`    
    text-white
    bg-[#2579F2]
    text-sm
    rounded-md
    px-2.5
    py-1.5
    font-semibold
    block
    select-none

    active:scale-[0.97]
    hover:bg-[#2985FF]`,
]);

export const Main = tw.div`
    flex
    justify-between
`;

export const Sub = tw.div``;

export const Subtitle = tw.div`
    text-[#374151]
    text-sm
`;
