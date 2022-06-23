import React, { useState } from 'react';

const About = () => {
    const [aboutpage, setAboutPage] = useState(false);

    const toggle = () => {
        setAboutPage(!aboutpage);
    }
    return (
        <>
        <About aboutpage={aboutpage} toggle={toggle} />
        </>
    )
}
export default About;

//   return (
//     <>
//     <Sidebar isOpen={isOpen} toggle={toggle} />
//     <Navbar toggle={toggle} />
//     <HeroSection />
    
//     </>