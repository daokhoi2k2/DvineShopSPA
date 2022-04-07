import styled from '@emotion/styled';
import tw from 'twin.macro';

export const AuthModalBodyWrapper = tw.div`
    flex
`;

export const AuthCol = tw.div`
    flex-basis[50%]

    sm:flex-basis[100%]
    sm:last:hidden
`;

export const AuthDescription = tw.div`
    text-sm
    mb-3
`;

export const FormAuth = tw.form``;

export const Input = styled.input<{ error?: boolean }>(({ error }) => [
  tw`
    rounded-md
    w-full
    py-2
    px-3
    border
    outline-none
    my-1.5
    placeholder:text-gray-400
    placeholder:text-sm
`,
    error ? tw`border-red-500 placeholder:text-red-500` : ''
]);

export const ImgWrapper = tw.div`
    flex
    justify-center
    items-center
    h-full
    ml-3
`;

export const TextLink = tw.div`text-[#2579f2] text-sm my-3`;

export const Button = tw.button`text-white w-full p-2 font-bold mt-2 text-sm rounded-md bg-[#2579f2]`;
