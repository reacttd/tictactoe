// import styled from 'styled-components';

// const PillFlipper = props => {
//     return (
//         <Flip className="box">
//             <button className='box1'>Click</button>
//             <button className='box2'>Boom!</button>
//             {props.btnText}
//         </Flip>
//     )
// }
// export default PillFlipper;

// const Flip=styled.button`
//     position: absolute;
//     top: 50%;  left: 50%;
//     transform: translate(-50%,-50%);
// &{
//     text-decoration: none;  text-transform: uppercase;
//    color: transparent; 
//     display: inline-block;
//     padding: 20px 150px;
//     border-radius: 50px;
//     font-size: 50px;
//     transition: .9s;
// }
// &:nth-child(1){
//     position: relative;
//     background: linear-gradient(90deg , #8e44ad , #e67e22);
//     transform: perspective(1000px) rotateX(0deg); 
//     transition-delay: .5s;
// }
// &:hover a:nth-child(1){
//     transform: perspective(1000px) rotateX(90deg);
//     transition-delay: 0s;
// }
// &:nth-child(2){
//     position: absolute;
//     top: 0;  left: 0;
//     background: linear-gradient(90deg , #e74c3c , #e67e22 , #f1c40f);
//     transform: perspective(1000px) rotateX(-90deg);
//     transition-delay: 0s; 
// }
// &:hover a:nth-child(2){
//     transform: perspective(1000px) rotateX(0deg);
//     transition-delay: .5s;
// }

// &::before{
//     content: attr(data-text);
//     position: absolute;
//     top: 0; left: 0;
//     padding: 20px 150px;
//     background: rgba(255,255,255,.1);    color: #fff;
//     border-radius: 50px;
//     transition: .9s;
// }
// &:nth-child(1)::before{
//     transform: translateY(0px);
//     transition-delay: .5s;
// }
// &:hover a:nth-child(1)::before{
//     transform: translateY(-200px);
//     transition-delay: 0s;
// }
// &:nth-child(2)::before{
//     transform: translateY(200px);
//     transition-delay: 0s;
// }
// &:hover a:nth-child(2)::before{
//     transform: translateY(0px);
//     transition-delay: .5s;
// }
// `
/* 


.box a:nth-child(2){
    position: absolute;
    top: 0;  left: 0;
    background: linear-gradient(90deg , #e74c3c , #e67e22 , #f1c40f);
    transform: perspective(1000px) rotateX(-90deg);
    transition-delay: 0s; 
}
.box:hover a:nth-child(2){
    transform: perspective(1000px) rotateX(0deg);
    transition-delay: .5s;
}

.box a::before{
    content: attr(data-text);
    position: absolute;
    top: 0; left: 0;
    padding: 20px 150px;
    background: rgba(255,255,255,.1);    color: #fff;
    border-radius: 50px;
    transition: .9s;
}
.box a:nth-child(1)::before{
    transform: translateY(0px);
    transition-delay: .5s;
}
.box:hover a:nth-child(1)::before{
    transform: translateY(-200px);
    transition-delay: 0s;
}
.box a:nth-child(2)::before{
    transform: translateY(200px);
    transition-delay: 0s;
}
.box:hover a:nth-child(2)::before{
    transform: translateY(0px);
    transition-delay: .5s;
} */ 