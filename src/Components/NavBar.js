import React from "react";
import "../Style/NavBar.css";
import logo from '../Assets/logo.png';

export default function NavBar() {
    return (
        <div id="nav-bar-wrapper">
            <div id="nav-bar">
                <div id="nav-logo">
                    <div id="nav-logo-wrapper">
                        <img src={logo} />
                    </div>
                    <h1 style={{fontSize: "500"}}>SACIVA</h1>
                </div>
                <div id="links">
                    <h1>Our Story</h1>
                    <div id="login-button-wrapper">
                        <div id="login">
                            <h1>Login</h1>
                            <div id="login-bg">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}