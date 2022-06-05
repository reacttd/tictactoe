
import styled from 'styled-components';


// // Dummy Components

const FlipButtonHoriz = props => {

    return(
        <Flip className='button'>
            {props.btnText}
        </Flip>
    )
};
export default FlipButtonHoriz; 

const Flip = styled.button`
    border: none;
      background: #AFDCEC;
      color: #f2f2f2;
      font-size: 22px;
    // padding: 16px;
    width: 130px;
    height: 40px;
      border-radius: 5px;
      position: relative;
      box-sizing: border-box;
      align-items: center;
    //   margin:36px;
      cursor: pointer;
      transition: all 500ms ease;
      transform-style: preserve-3d;
  &:after {
      top: -100%;
      left: 0px;
      width: 100%;
    //   padding: 16px 0;
      position: absolute;
      background: whitesmoke;
      color: #AFDCEC;
      border: 6px solid #AFDCEC;
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