import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0% { transform: translateX(0) }
  50% { transform: translateX(100%) }
  100% { transform: translateX(0) }
`;

const MovingButton = styled.button`
  // padding: 10px 20px;
  background: none;
  border: none;
  // border-radius: 50%;
  display: flex;
  justify-content: center;
  animation: ${slide} 2s ease-in-out infinite;
  // display: inline-block;
  // postion: relative;
  // width: 100px;
  // height: 100px;
  postion: absolute;
`;
const Moving = () => {
  return <Moving>
    I'm moving
    </Moving>;
};

export default MovingButton;