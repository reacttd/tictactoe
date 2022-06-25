import '../App.css';
// import { Nav, NavbarContainer, NavLogo } from './components/NavbarElements';
import {  ThemeProvider} from 'styled-components';
import { Container } from '../components/Containter.styled';
import Header from '../components/Header';
import GlobalStyle from '../components/styles/Global.styled';
// import ScrollButton from '../components/ScrollButton';
import content from '../content';
import Card from '../components/Card';


// import Navbar from '../components/Navbar';
// import AvatarIcon from './images/tsbam.png';
const theme = {
    colors: {
        header: '#4B0082',
        body: 'fff',
        footer: '#003333',
        top: 0,
    },
    dark: {
        primary: '#000',
        text: '#fff'
    },
    light: {
        primary: '#fff',
        text: '#000'
    },
    mobile: '768px',
    
}

const Landing = props => {

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Header>
                    <h1>Hubble</h1>
                </Header>
                {/* <ScrollButton /> */}
                {/* <Nav /> */}
                {/* <NavbarContainer /> */}
                {/* <NavLogo /> */}
                <div style={styles.div}>
                <Container>
                    {content.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </Container>
            </div>
            </>
        </ThemeProvider>
    )
}
export default Landing;

const styles ={
    div:{
        overflow: 'scroll'
    }
}