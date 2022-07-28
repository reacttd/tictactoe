import { Link } from 'react-router-dom';
import { EntryPage, PageHeader } from './styles';
import InputGroup from '../components/InputGroup/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';
import EntryCard from '../components/EntryCard/EntryCard';


function Login() {
    return (
        <EntryPage>
            <PageHeader to="/">Awesome Logo</PageHeader>
            <EntryCard>
                <h2>Log In</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="login-email">Email Address</label>
                        <Input type="text" placeholder="name@email.com" id="login-email" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="login-password">Password</label>
                        <Input type="password" placeholder="Password" id="login-password" />
                    </InputGroup>
                    <Button type="submit" full>Log In</Button>
                </form>
                <span>
                    Don't have an account?
                    <Link to="/signup">Sign Up</Link>
                </span>
            </EntryCard>
        </EntryPage>
    );
}

export default Login;