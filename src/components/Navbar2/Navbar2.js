import { StyledNavbar2, NavItemLink } from './styles';

function Navbar2({ children }) {
    return (
        <StyledNavbar2>
            <NavItemLink to="/login">Log in</NavItemLink>
            <NavItemLink to="/signup" fill>Sign Up</NavItemLink>
        </StyledNavbar2>
    );
}

export default Navbar2;