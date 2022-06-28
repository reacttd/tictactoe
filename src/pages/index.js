import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import SidebarSection from '../components/SidebarSection';
import Footer from '../components/Footer'
import { 
  homeObjOne, 
  homeObjTwo, 
  homeObjThree,
  // homeObjFour 
} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />  
        <InfoSection {...homeObjOne}/>  
        <InfoSection {...homeObjTwo}/>
        <Services />  
        <InfoSection {...homeObjThree}/>
        <Footer />
        {/* <InfoSection {...homeObjFour}/>   */}
    </>
  );
};

export default Home;