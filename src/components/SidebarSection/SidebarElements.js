import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
color: #fff;
&:hover {
    color: #e1affd;
    transition: 0.2s ease-in-out;
}
`;

export const Icon = styled.div`
// position: absolute;
display: flex;
flex-direction: column;
// justify-content: flex-end;
align-items: flex-end;
top: 1.5 rem;
right: 1.5rem;
margin-right: 10px;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
&:hover {
    color: #e1affd;
    transition: 0.2s ease-in-out;
}
`;

export const SidebarWrapper = styled.div`
color: #fff;
`;

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 10fr;
grid-template-rows: repeat(8, 80px);
text-align: center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #e1affd;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`;
export const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background: #e1affd;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    border: 2px solid #e1affd;
    background: #000;
    color: #e1affd;
}
`;


