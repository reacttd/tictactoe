
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
margin: 10px;
    border: none;
      background: #9370DB;
      color: #f2f2f2;
      font-size: 22px;
    // padding: 16px;
    width: 225px;
    height: 70px;
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
      width: 225px;
      height: 70px;
    //   padding: 16px 0;
      position: absolute;
      background: #f2f2f2;
      color: #f2f2f2;
      border: 6px solid #9370DB;
      border-radius: 5px;
      // text-align: center;
      content: 'Flipped';
      margin-top: 10px;
      transform-origin: left bottom;
      transform: rotateX(90deg);
  }
  
  &:hover {
      transform-origin: center bottom;
      transform: rotateX(-90deg) translateY(100%);
  
  }
`