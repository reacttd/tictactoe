import styled from 'styled-components';

// Dummy Components
const MetallicPink = props => {

    return(
        <Metallic>
            {props.btnText}
        </Metallic>
    )
};
export default MetallicPink ; 

const Metallic = styled.button`
margin:5px;
width: 130px;
height: 40px;
color: #fff;
border-radius: 5px;
padding: 10px 25px;
font-family: 'Lato', sans-serif;
font-weight: 500;
text-align:center;
background: transparent;
cursor: pointer;
transition: all 0.3s ease;
position: relative;
display: inline-block;
 box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
 7px 7px 20px 0px rgba(0,0,0,.1),
 4px 4px 5px 0px rgba(0,0,0,.1);
outline: none;
&{
	border: solid .25rem var(--c-bd, #ff76ec);
	width: $button-w; height: $button-h;
	border-radius: .625em;
	box-shadow: inset 0 2px 2px -1px #ffeefd;
	background: linear-gradient(#ffeefd, var(--c-bg, #f11096));
	font: 900 1em/ #{$button-h} Calligraffitti, times new roman, serif;
	filter: grayscale(.75);
	transition: .3s;
	cursor: pointer;
	
	&:hover, &:focus {
		outline: none;
		filter: none
	}
	
	&:active { transform: translatey(2px); }
	
	&:nth-child(2) { --c-bd: #ab10d2; --c-bg: #6b0c86 }
`