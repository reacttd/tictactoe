import React, { useState } from 'react';

const Contact = () => {
    const [contactpage, setContactPage] = useState(false);

    const toggle = () => {
        setContactPage(!contactpage);
    }
    return (
        <>
        <Contact contactpage={contactpage} toggle={toggle} />
        </>
    )
}
export default Contact;

//   return (
//     <>
//     <Sidebar isOpen={isOpen} toggle={toggle} />
//     <Navbar toggle={toggle} />
//     <HeroSection />
    
//     </>