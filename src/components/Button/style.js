import styled from "styled-components";

export const StyledButton = styled.button`
    width: ${props => props.full ? '100%': null};
    min-width: 64px;
    border: 0;
    border-radius: 4px;
    padding: 8px 16px;
    outline: none;
    font-size: 0.875rem;
    background-color: #258bfd;
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.02857rem;
    cursor: pointer;
    transition: all 0.2s;
    line-height: 1.5;
    &:hover { background-color: #0072ff; };
    
`