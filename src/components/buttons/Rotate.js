import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`
const Rotate = props => {
    return (
        <Rotater>
            {props.btnText}
        </Rotater>
    )
}

export default Rotate;

const Rotater = styled.div`
display: inline-block;
animation:${rotate} 2s linear infinite;
padding: 2rem 1rem;
font-size: 1.2rem;
`;