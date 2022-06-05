import styled from 'styled-components';

// Dummy Components
const ButtonTurqoise=props=>{
    return(
        <Turqoise>
            {props.btnText}
        </Turqoise>
    )
};
export default ButtonTurqoise;

const Turqoise = styled.button`
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size:16px;
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
    background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
    line-height: 42px;
    padding: 0;
    border: none;
  }
  &:hover{
    background-color: #89d8d3;
  background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
  }
  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:before,
  &:after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
     box-shadow:  4px 4px 6px 0 rgba(255,255,255,.9),
                -4px -4px 6px 0 rgba(116, 125, 136, .2), 
      inset -4px -4px 6px 0 rgba(255,255,255,.9),
      inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
    transition: all 0.3s ease;
  }
  &:before {
    height: 0%;
    width: .1px;
  }
  &:after {
    width: 0%;
    height: .1px;
  }
  &:hover:before {
    height: 100%;
  }
  &:hover:after {
    width: 100%;
  }
  & span:before,
  & span:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.9),
                -4px -4px 6px 0 rgba(116, 125, 136, .2), 
      inset -4px -4px 6px 0 rgba(255,255,255,.9),
      inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
    transition: all 0.3s ease;
  }
  & span:before {
    width: .1px;
    height: 0%;
  }
  & span:after {
    width: 0%;
    height: .1px;
  }
  & span:hover:before {
    height: 100%;
  }
  & span:hover:after {
    width: 100%;
  }
`