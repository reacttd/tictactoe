import styled, { keyframes } from 'styled-components';

    export const StyledButton=styled(button)`
    border: 2px solid #ffb6c1;
    background-color: ${(props) => 
        props.variant === 'outline' ? '#000' : '#ffb6c1'};
    color: ${(props) => (props.variant === 'outline' ? '#ffb6c1' : '#000')};

    margin:5px;
    width: 130px;
    height: 40px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s all ease-out;
    &:hover {
        background-color: ${(props) => 
            props.variant !== 'outline' ? '#000' : '#ffb6c1'};
        color: ${(props) => (props.variant !== 'outline' ? '#ffb6c1' : '#000')};
    }
    `

    export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
    `
    export const SubmitButton = styled(StyledButton).attrs((props) => ({
        type: 'submit',
    }))`
    box-shadow: 0 9px #999;
    &:active {
        background-color: ${(props) =>
        props.variant !== 'outline' ? 'FFF' : '#4caf50'};
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
    `
    export const ButtonThemed = styled(StyledButton)`
    background-image: linear-gradient(to right, #A6B1F7  0%, #A6DAF7 100%);
    border: none;
    &:hover {
        background-image: ${(props) => 
            props.variant !== 'outline' ? '#F7A6C4' : '#A6F7C3'};
        color: ${(props) => (props.variant !== 'outline' ? '#F7A6C4' : '#A6F7C3')};
        box-shadow: 0 9px #999;
    &:active {
        background-color: ${(props) =>
        props.variant !== 'outline' ? 'FFF' : '#F7A6C4'};
        box-shadow: 0 5px #A6B1F7;
        transform: translateY(4px);
    }
    // Color the border and text with theme.main
    // color: ${props => props.theme.main};
    // border: 2px solid ${props => props.theme.main};
}
    `
    
    
    const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    `

    export const AnimatedLogo = styled.img`
        height: 40 vmin;
        pointer-events: none;
        animation: ${rotate} infinite 2s linear;
    `

    export const DarkButton = styled(StyledButton)`
        border: 2px solid ${(props) => props.theme.dark.primary};
        background-color: ${(props) => props.theme.dark.primary};
        color: ${(props) => props.theme.dark.text};
    `
    export const LightButton = styled(StyledButton)`
    border: 2px solid ${(props) => props.theme.light.primary};
    background-color: ${(props) => props.theme.light.primary};
    color: ${(props) => props.theme.light.text};        
    `
    export const ColorButton = styled(StyledButton)`
    border: 2px solid ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.text};  
    ` 
    export const Button = styled.button`
        color: ${props => props.theme.fg};
        border: 2px solid ${props => props.theme.fg};
        background: ${props => props.theme.bg};

        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 3px;
    `;
    const theme = {
        fg: "palevioletred",
        bg: "white"
    };

    const invertTheme = ({ fg, bg }) => ({
        fg: bg,
        bg: fg
    });