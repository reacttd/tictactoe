import React, { useState } from 'react';
// import {
//   Nav,
//   NavUl,
//   NavLi,
//   Main,
//   About,
//   Contact,
//   NavLinks
// } from './NAVbarElements'

const NAVbar = ({ toggle }) => {
    const [navtags, setNavTags] = useState(false)

    const toggle = () => {
        setNavTags(!navtags);
    }
  return (
    <>
        <ul>
            <li>Main</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </>
  );
}

export default NAVbar;

// const Navbar = ({ toggle }) => {
//   return (
//     <>
//         <Nav>
//             <NavbarContainer>
//                 <NavLogo to='/'>dolla</NavLogo>
//                 <MobileIcon onClick={toggle}>
//                   <FaBars />
//                 </MobileIcon>
//                 <NavMenu>
//                   <NavItem>
//                     <NavLinks to='about'>About</NavLinks>
//                   </NavItem>
//                   <NavItem>
//                     <NavLinks to='discover'>Discover</NavLinks>
//                   </NavItem>
//                   <NavItem>
//                     <NavLinks to='services'>Services</NavLinks>
//                   </NavItem>
//                   <NavItem>
//                     <NavLinks to='signup'>Sign Up</NavLinks>
//                   </NavItem>
//                 </NavMenu>
//                 <NavBtn>
//                   <NavBtnLink to='/signin'>Sign In</NavBtnLink>
//                 </NavBtn> 
//             </NavbarContainer>
//         </Nav>
//     </>
//   );
// };

// export default Navbar;

// import React from 'react';

// import { 
//     SidebarContainer, 
//     Icon, 
//     CloseIcon, 
//     SidebarWrapper, 
//     SidebarMenu, 
//     SidebarLink, 
//     SideBtnWrap, 
//     SidebarRoute } from './SidebarElements';

// const Sidebar = ({ isOpen, toggle }) => {
//     return (
//         <SidebarContainer isOpen={isOpen} onClick={toggle}>
//             <Icon onClick={toggle}>
//                 <CloseIcon />
//             </Icon>
//             <SidebarWrapper>
//                 <SidebarMenu>
//                     <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
//                     <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
//                     <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
//                     <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
//                 </SidebarMenu>
//                     <SideBtnWrap>
//                         <SidebarRoute to="/signin" onClick={toggle}>Sign In</SidebarRoute>
//                     </SideBtnWrap>
//             </SidebarWrapper>
//         </SidebarContainer>
//     );
// };

// export default Sidebar;
// const Home = () => {
//     const [isOpen, setIsOpen] = useState(false)

//     const toggle = () => {
//         setIsOpen(!isOpen);
//     };
    
//   return (
//     <>
//     <Sidebar isOpen={isOpen} toggle={toggle} />
//     <Navbar toggle={toggle} />
//     <HeroSection />
    
//     </>
//   );
// };

// export default Home