import React, { useState } from 'react';

const Main = () => {
    const [main, setMain] = useState(false);

    const toggle = () => {
        setMain(!main);
    }
    return (
        <>
        <Main main={main} toggle={toggle} />
        </>
    )
}
export default Main;

//   return (
//     <>
//     <Sidebar isOpen={isOpen} toggle={toggle} />
//     <Navbar toggle={toggle} />
//     <HeroSection />
    
//     </>