import styled from 'styled-components';

// Dummy Components
const DiagStripes=props=>{
    return(
        <Diagonal>
            {props.btnText}
        </Diagonal>
    )
};
export default DiagStripes;

const Diagonal = styled.button`
margin:5px;
  width: 180px;
  height: 70px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  
  & {
    background:
    
        repeating-linear-gradient(90deg, transparent, transparent 50px,
          rgba(189, 142, 183, .7) 5px, rgba(189, 142, 183, .7) 10px),
          transparent 56px, transparent 63px,
          rgba(189, 142, 183, .7) 5px, rgba(189, 142, 183, .7) 10px),
          transparent 69px, transparent 116px,
          rgba(0,0,0,0.7) 116px, rgba(0,0,0,0.7) 166px),
        repeating-linear-gradient(0deg, transparent, transparent 50px,
          rgba(255, 192, 203) 50px, rgba(255, 192, 203) 56px,
          transparent 56px, transparent 63px,
          rgba(255, 192, 203,0.8) 63px, rgba(255, 192, 203, 0.8) 69px,
          transparent 69px, transparent 116px,
          rgba(0,0,0,0.7) 116px, rgba(0,0,0,0.7) 166px),
        repeating-linear-gradient(-45deg, transparent, transparent 5px,
          rgba(189, 142, 183, .7) 5px, rgba(189, 142, 183, .7) 10px),
        repeating-linear-gradient(45deg, transparent, transparent 5px,
          rgba(189, 142, 183, .7) 5px, rgba(189, 142, 183, .7) 10px);
  
    background:
        repeating-linear-gradient(90deg, transparent 0 50px,
          rgba(255, 192, 203, 0.8) 50px 56px,
          transparent 56px 63px,
          rgba(255, 192, 203, 0.8) 63px 69px,
          transparent 69px 116px,
          rgba(0,0,0,0.7) 116px 166px),
        repeating-linear-gradient(0deg, transparent 0 50px,
          rgba(255, 192, 203, 0.8) 50px 56px,
          transparent 56px 63px,
          rgba(255, 192, 203, 0.8) 63px 69px,
          transparent 69px 116px,
          rgba(0,0,0,0.7) 116px 166px),
        repeating-linear-gradient(-45deg, transparent 0 5px,
          rgba(189, 142, 183, .7) 5px 10px),
        repeating-linear-gradient(45deg, transparent 0 5px,
          rgba(0, 255, 255, 0.5) 5px 10px);
          
  }
  `