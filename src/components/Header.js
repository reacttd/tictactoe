import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Container } from './Containter.styled';
import { Flex } from './styles/Flex.styled';
import Concert from '../images/concert.jpg'
// import ButtonHover from './buttons/ButtonHover';
import IconImg from '../images/LOGO.png';
import { Button } from './styles/Button.styled';
// import FlipButtonHoriz from './buttons/FlipButtonHoriz';
// import MyAvatar from '../images/tsbam.png';
// import TrapstarM from '../images/tsbamMamba.png';


export default function Header() {
    return (
        <>
        <StyledHeader margin='0'>
            <Logo style={styles.logo} img src={IconImg} />
            <h1 style={styles.hubble}>Hubble</h1>
            
            <Container>
            <Nav>
                
                {/* <FlipButtonHoriz btnText="Trapstar" /> */}
                <Button style={styles.Btn}>Try It Free</Button>
            </Nav>
            <Flex>
                <div>
                    <h1>"We all meet someone along the way who inspires us. I want to be that someone for my fans."      -Trapstar Bam</h1>
                    <p style={styles.p}>Trapstar Bam re-imagines the way his music can reach people and inspire them. 
                        {/* Create connections with your
                        users as
                        you engage in genuie discussion. */}
                    </p>
                    <Button bg='#ff0099' color='#fff'>
                        Get Started For Free
                    </Button>                
                </div>
                <Image src={Concert} alt="Trapstar Bam" />
            </Flex>
            </Container>
            </StyledHeader>
        </>
    )
}
const styles = {
    hubble: {
        display: 'inline-flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignContent: 'flex-start',
        // alignItems: 'flex-start',
        marginLeft: '40px',
        // background: 'lightpurple'
        // color: 'red',
        fontFamily: ''
    },
    Btn:{
        display: 'inline-flex',
        alignItems: 'right'
    },
    logo: {
        margin: '40px'
    },
    p: {
        fontSize: '26px',
        color: '#fff',
        // display: "flex",
        // color: 'black',
        // margin: '40px',


    }
}