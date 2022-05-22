import { useState, useEffect } from "react";
import React from "react";
import Header from "../components/ui/Header";


function LoginSignup() {
    const [pageTitle] = ['LoginSignup'];
    const [userData, setuserData] = useState("");

    useEffect
    
    return (
        <section>
            <Header />

            <div>
                {pageTitle}
                
            </div>
        </section>
    )
}
export default LoginSignup;