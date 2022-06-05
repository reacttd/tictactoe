import styled from 'styled-components';

const ButtonTwirl=props=>{
    return(
        <Twirl>
            {props.btnText}
        </Twirl>
    )
};
export default ButtonTwirl;

const Twirl = styled.button`
margin:5px;
width: 130px;
  height: 40px;
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
    background: rgb(247,150,192);
  background: radial-gradient(circle, rgba(247,150,192,1) 0%, rgba(118,174,241,1) 100%);
    line-height: 42px;
    padding: 0;
    border: none;
  
  &span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:before,
  &:after {
    position: absolute;
    content: "";
    height: 0%;
    width: 1px;
   box-shadow:
     -1px -1px 20px 0px rgba(255,255,255,1),
     -4px -4px 5px 0px rgba(255,255,255,1),
     7px 7px 20px 0px rgba(0,0,0,.4),
     4px 4px 5px 0px rgba(0,0,0,.3);
  }
  &:before {
    right: 0;
    top: 0;
    transition: all 500ms ease;
  }
  &:after {
    left: 0;
    bottom: 0;
    transition: all 500ms ease;
  }
  &:hover{
    background: transparent;
    color: pink;
    box-shadow: none;
  }
  &:hover:before {
    transition: all 500ms ease;
    height: 100%;
  }
  &:hover:after {
    transition: all 500ms ease;
    height: 100%;
  }
  & span:before,
  & span:after {
    position: absolute;
    content: "";
    box-shadow:
     -1px -1px 20px 0px rgba(255,255,255,1),
     -4px -4px 5px 0px rgba(255,255,255,1),
     7px 7px 20px 0px rgba(0,0,0,.4),
     4px 4px 5px 0px rgba(0,0,0,.3);
  }
  & span:before {
    left: 0;
    top: 0;
    width: 0%;
    height: .5px;
    transition: all 500ms ease;
  }
  & span:after {
    right: 0;
    bottom: 0;
    width: 0%;
    height: .5px;
    transition: all 500ms ease;
  }
  & span:hover:before {
    width: 100%;
  }
  & span:hover:after {
    width: 100%;
  }

`
