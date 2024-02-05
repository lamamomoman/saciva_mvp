import React, { useEffect } from "react";
import { useState } from "react";

import { InputComp, FadeIn } from "./Home";

import '../Style/Home.css';
import '../Style/SignUp.css';
import '../Style/login.css';

const SignUp = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        number: '',
        country: '',
        nativeLang: '',
        university: '',
        gender: '',
        email: '',
    });

    const [passwordsMatch, setPasswordsMatch] = useState({
        value: true,
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if(passwordsMatch){
            setFormData({ ...formData, [name]: value });
        }
        else{
            console.log("passwords dont seem to match, try again.")
        }
        // Do something with the email value, such as updating state
    };

    const handlePasswordChange = (e) => {

    }

    const signUpUser = async (email, password) => {
        try {
            const response = await fetch('/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });
    
            if (!response.ok) {
                throw new Error('Sign-up request failed');
            }
    
            // If needed, handle successful sign-up response
        } catch (err) {
            console.error("Sign-up failed:", err);
            // Handle error gracefully, e.g., display error message to the user
        }
    };

    const uploadUserDetails = async (formData) => {
        try {
            const response = await fetch('/user-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.fullName,
                    contact_no: formData.number,
                    country: formData.country,
                    native_language: formData.nativeLang,
                    gender: formData.gender,
                    university: formData.university
                })
            });
            if (!response.ok) {
                throw new Error('User details upload failed');
            }
    
            // If needed, handle successful user details upload response
        } catch (err) {
            console.error("User details upload failed:", err);
            // Handle error gracefully, e.g., display error message to the user
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("form data = ", formData);

        await signUpUser(formData.email, formData.password);

        await uploadUserDetails(formData);
    }

    return <section id="sign-up-wrapper">
        <div id="sign-up-page">
            <div id="sign-up-details">
                <form onSubmit={handleSubmit}>
                    <FadeIn id={"personal-info"} >
                        <h1>Personal Information</h1>
                        <p>We need this information to ensure we create the best possible experience for you.</p>
                        <InputComp type="text" name="fullName" placeHolderText={"Full Name"} onChange={handleInputChange} />
                        <InputComp type="number" name="number" placeHolderText={"Contact Number"} onChange={handleInputChange} />
                        <InputComp type="text" name="country" placeHolderText={"Country"} onChange={handleInputChange} />
                        <InputComp type="text" name="nativeLang" placeHolderText={"Native Language"} onChange={handleInputChange} />
                        <div id="options">
                            <select onChange={handleInputChange} id="University" name="university" required>
                                <option value="" selected>Select a university</option>
                                <option value="Chicago State University">Chicago State University</option>
                                <option value="Governors State University ">Governors State University </option>
                                <option value="Northeastern Illinois University">Northeastern Illinois University</option>
                                <option value="Northern Illinois University">Northern Illinois University</option>
                                <option value="University of Illinois Chicago">University of Illinois Chicago</option>
                                <option value="Aurora University">Aurora University</option>
                                <option value="Benedictine University ">Benedictine University </option>
                                <option value="Concordia University Chicago ">Concordia University Chicago </option>
                                <option value="DePaul University">DePaul University</option>
                                <option value="Dominican University">Dominican University</option>
                                <option value="East–West University">East–West University</option>
                                <option value="Elmhurst University ">Elmhurst University </option>
                                <option value="Illinois Institute of Technology">Illinois Institute of Technology</option>
                                <option value="Judson University">Judson University</option>
                                <option value="Kendall College">Kendall College</option>
                                <option value="Lewis University">Lewis University</option>
                                <option value="Loyola University Chicago">Loyola University Chicago</option>
                                <option value="Midwestern University">Midwestern University</option>
                                <option value="National Louis University">National Louis University</option>
                                <option value="National University of Health Sciences">National University of Health Sciences</option>
                                <option value="North Park University">North Park University</option>
                                <option value="Northwestern University">Northwestern University</option>
                                <option value="Oak Point University">Oak Point University</option>
                                <option value="Roosevelt University">Roosevelt University</option>
                                <option value="Saint Xavier University">Saint Xavier University</option>
                                <option value="Trinity International University">Trinity International University</option>
                                <option value="University of Chicago">University of Chicago</option>
                                <option value="University of St. Francis">University of St. Francis</option>
                                <option value="University of Saint Mary of the Lake">University of Saint Mary of the Lake</option>
                                <option value="Others">Others</option>
                            </select>

                            <select onChange={handleInputChange} style={{ flex: 0.3, marginLeft: "20px" }} id="gender" name="gender" required>
                                <option defaultValue>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>

                        </div>
                    </FadeIn>
                    <FadeIn id="sign-in-info">
                        <h1>Login Information</h1>
                        <InputComp onChange={handleInputChange} name="email" type="email" placeHolderText={"E-mail"} />
                        <Passwords passwordsMatch={passwordsMatch} setPasswordsMatch={setPasswordsMatch} />
                    </FadeIn>
                    <div id="submit-form-button-wrapper">
                        <button className={passwordsMatch.value ? 'enabled': 'disabled'} type="submit" id="submit-form-button">
                            <h1>Create Account</h1>
                            <div id="submit-button-bg"><h1>Create Account</h1></div>
                        </button>
                    </div>
                </form>
            </div>
            <div id="sign-up-bg">
                <div id="sign-up-bg-content">
                    <h1>Lets Get you started.</h1>
                    <p>Spread the word! Share the news of this magical platform with your friends and roommates. Let's make this community vibrant and your journey, a success!</p>
                </div>
                <div id="sign-up-bg-wrapper">
                    <img src="https://images.unsplash.com/photo-1517504734587-2890819debab?q=80&w=1639&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
            </div>
        </div>
    </section >
}

const Passwords = ({ passwordsMatch, setPasswordsMatch }) => {

    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');


    const handlePasswordChange = (event) => {
        const { name, value } = event.target;

        // Update the corresponding state based on the input field name
        if (name === 'password') {
            setPassword(value);
        } else if (name === 're-password') {
            setRePassword(value);
        }
    };

    useEffect(() => {
        if (password !== '' && rePassword !== '') {
            setPasswordsMatch({
                value: password === rePassword,
                password: password
            });
        } else {
            // Reset passwordsMatch state if either field is empty
            setPasswordsMatch({
                value: false,
                password: ''
            });
        }
    }, [password, rePassword]);

    return <span>
        <InputComp passwordsMatch={passwordsMatch.value} onChange={handlePasswordChange} name="password" type="password" placeHolderText={"Password"} />
        <InputComp passwordsMatch={passwordsMatch.value} onChange={handlePasswordChange} name="re-password" type="password" placeHolderText={"Re-enter Password"} />
        {!passwordsMatch.value && (password !== '' || rePassword !== '') && <p>Passwords don't match!</p>}
    </span>
}

export default SignUp;