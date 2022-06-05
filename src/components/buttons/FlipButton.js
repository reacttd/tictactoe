
import styled from 'styled-components';


// // Dummy Components

const FlipButton = props => {

    return(
        <Flip className='button'>
            {props.btnText}
        </Flip>
    )
};
export default FlipButton; 

const Flip = styled.button`
    border: none;
    background: #7d49fc;
    color: #f2f2f2;
    font-size: 22px;
    // padding: 16px;
    width: 100%;
    height: 70px;
    border-radius: 5px;
    // position: relative;
    box-sizing: border-box;
    // margin:36px;
    cursor: pointer;
    transition: all 500ms ease;
    transform-style: preserve-3d;
    textAlign: center;
  &:after {
    top: -100%;
    left: 0px;
    width: 100%;
    padding: 16px 0;
    position: absolute;
    background: #3a9999;
    border-radius: 5px;
    content: 'Flipped';
    transform-origin: left bottom;
    transform: rotateX(90deg);
}
  
  &:hover {
      transform-origin: center bottom;
      transform: rotateX(-90deg); translateY(100%);
  
  }
`