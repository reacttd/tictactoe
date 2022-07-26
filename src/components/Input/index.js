import { StyledInput } from './styles';

function Input({ ...props }) {
    return (
        <StyledInput { ...props } />
    );
}

export default Input;