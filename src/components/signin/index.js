import React from 'react';
import logo from '../../images/logo.png';
// import { IconImage } from './SigninElements';
import { 
    Container, 
    FormWrap, 
    Icon,
    FormContent, 
    Form,
    FormH1, 
    Text,
    FormButton, 
    FormInput, 
    FormLabel, 
    // IconImage
} from './SigninElements';



const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon src={logo} alt="logo" to="/">Trio Wolf</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlfor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  );
};

export default SignIn;