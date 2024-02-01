import React, { useEffect } from "react";
import { useActionData } from "react-router-dom";


function Login({loginClick}){

    useEffect(() => {
        console.log("updated login page");
    }, [loginClick]);

    return <section id="login">
        <h1>login</h1>
    </section>
}

export default Login;