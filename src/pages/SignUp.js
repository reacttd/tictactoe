import { Link } from 'react-router-dom';
import { EntryPage, PageHeader } from './styles';
import InputGroup from '../components/InputGroup/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';
import EntryCard from '../components/EntryCard/EntryCard';
import { FaHome } from 'react-icons/fa';

function Signup() {
    return (
        <EntryPage>
            <PageHeader to="/">{<FaHome />}</PageHeader>
            <EntryCard>
                <h2>Sign Up</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="signup-name">Full Name</label>
                        <Input type="text" placeholder="John Doe" id="signup-name" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="signup-email">Email Address</label>
                        <Input type="text" placeholder="name@email.com" id="signup-email" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="signup-password">Password</label>
                        <Input type="password" placeholder="Password" id="signup-password" />
                    </InputGroup>
                    <Button type="submit" full="true">Sign Up</Button>
                </form>
                <span>
                    Already have an account?
                    <Link to="/login">Log In</Link>
                </span>
            </EntryCard>
        </EntryPage>
    );
}

export default Signup;