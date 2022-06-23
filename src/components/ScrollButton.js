import React, {useState} from 'react';
import FlipButtonHoriz from './buttons/FlipButtonHoriz';
// import {FaArrowCircleDown} from 'react-icons/fa';
// import ButtonSmallPurpleGreen from '../components/buttons/ButtonSmallPurpleGreen'
import { Button } from './Styles';
	
const ScrollButton = () =>{
	
const [visible, setVisible] = useState(true)
	
const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 0){
	setVisible(false)
	}
	else if (scrolled <= 0){
	setVisible(true)
	}
};
	
const scrollToBottom = () =>{
	window.scrollTo({
	top: document.documentElement.scrollHeight,
	behavior: 'auto',
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};
	
window.addEventListener('scroll', toggleVisible);
	
return (
	<Button>
	<FlipButtonHoriz btnText="Click to Scroll" onClick={scrollToBottom}
	style={{display: visible ? 'inline' : 'none'}} />
	</Button>
);
}
	
export default ScrollButton;

