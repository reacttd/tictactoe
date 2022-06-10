import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*:: after,
*:: before {
    box - sizing: border - box;
}

body {
    background: ${({ theme }) => theme.bodyBackGroundColor} !important;
    color: ${({ theme }) => theme.textColor} !important;
}
`;
