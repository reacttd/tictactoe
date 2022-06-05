import styled from 'styled-components';

// Dummy Components
const PurpleIndigo = props => {

    return(
        <Plain>
            {props.btnText}
        </Plain>
    )
};
export default PurpleIndigo ; 

const Plain = styled.button`
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
position: absolute;
display: inline-block;
 box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
 7px 7px 20px 0px rgba(0,0,0,.1),
 4px 4px 5px 0px rgba(0,0,0,.1);
outline: none;
background-color: rgb(8,174,234);
background-image: linear-gradient(90deg, #00DBDE 0%, rgb(42,245,152) 100%);
&{
  background-color: #ddd;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  transition: 0.3s;
}

&:hover {
  background-color: rgba(225, 175, 253, 1.0)#;
  color: white;
}



`