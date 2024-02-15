import React, { Children, useEffect, useRef, useState } from 'react';
import { ReactComponent as ReactLogo } from '../Assets/Vector.svg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useTrail, animated, useScroll, config, a } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { useAuth } from '../AuthContext';
import { primary_card_info, secondary_card_info } from '../CardInfo.js';

import CloseIcon from '../Assets/close.png';
import '../Style/Home.css';
import '../Style/login.css';
import { isRouteErrorResponse, useNavigate } from 'react-router-dom';

const Home = () => {

    const { isLoggedIn, handleLoginClick } = useAuth();

    return (
        <div>
            {isLoggedIn ? <Login /> : <></>}
            <Parallax pages={3.7}>
                <section id="home-page">
                    <div id="main-page">
                        <div id="background-wrapper">
                            <ParallaxLayer offset={0} speed={0.2}>
                                <div id="background">
                                    <div id="background-cover"></div>
                                    <img src="https://images.unsplash.com/photo-1583339522870-0d9f28cef33f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer sticky={true} offset={0} speed={0.2}>
                                <div id="logo-svg">
                                    <ReactLogo />
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer speed={0.1} offset={0.2}>
                                <div id="page-content-wrapper">
                                    <div id="page-content">
                                        <h1>For Students, By Students</h1>
                                        <p>The only "package" you'll ever need,<br />till you graduate and beyond.</p>
                                    </div>
                                    <div id="join-button-wrapper">
                                        <div id="join-button">
                                            <p>Join the network</p>
                                            <div id="join-bg">

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </ParallaxLayer>

                        </div>
                    </div>
                    <ParallaxLayer sticky={true} speed={0.5} offset={1}>
                        <div id="info-section">
                            <ParallaxLayer speed={-0.05} offset={0} id="info-heading">
                                < div id="info-heading-wrapper">
                                    <h1>Why Choose Saciva</h1>
                                </div>
                            </ParallaxLayer>
                            <PrimaryCards primary_card_info={primary_card_info} />
                            <div id="info-section-content">
                                <p>Embark on a transformative academic journey tailored just for you with Saciva! As fellow international students, we intimately understand the unique challenges you encounter. Saciva isn't just a platform; it's your comprehensive, personalized solution designed to empower your success. Imagine a one-stop hub that anticipates your needs and guides you seamlessly through every academic endeavor. Join us today and redefine your path to success with Saciva – where your journey becomes an inspiring story of triumph! 🚀🎓 #SucceedWithSaciva.
                                </p>
                            </div>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={0.2} id="secondary-page-wrapper">
                        <div id="secondary-info-wrapper">
                            <div id="secondary-info-content">
                                <h1>What we offer</h1>
                            </div>

                            <SecondaryCards secondary_card_info={secondary_card_info} />

                            <div id="support-section-wrapper">
                                <div id="support-section">
                                    <div className="support-content" id="support-1">
                                        <p>We are You. We are international students. Visit our blog to know more about how our journey with Saciva started. At Saciva, we believe in the power of community, we appreciate your Feedback and Suggestions</p>
                                        <a link="">^ Our Story ^</a>
                                    </div>

                                    <div id="support-button-wrapper">
                                        <p>While we are offering the platform for free for now, it costs us our money, time and effort to keep this running. We highly appreciate your generous support to make this platform more robust and featuresome!</p>
                                        <div id="support-button">
                                            <h1>Support Us</h1>
                                            <div id="support-bg">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="support-content" id="support-2">
                                        <p>You can also support us through spreading a word about Saciva, amongst your friends, neighbors, colleagues,  classmates and roommates or anyone who is a student, especially international students. Thanks :)</p>
                                        <a href="https://abhishikth174.wixsite.com/saciva">^ Share with Friends ^</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </ParallaxLayer>

                </section>
            </Parallax>
        </div>


    );
};

const Login = () => {
    const { handleLoginClick } = useAuth();
    const navigate = useNavigate();

    const handleCreateAccount = () => {
        // Navigate to the signUp route
        navigate('/signUp');
    }

    return <section id="login-container-wrapper">
        <FadeIn id="login-container">
            <div id="close-login">
                <img onClick={handleLoginClick} width="48" height="48" src={CloseIcon} />
            </div>
            <div id="login-container-heading">
                <h1>Welcome Back,</h1>
                <p>Please login to your account</p>
            </div>
            <div id="login-form">
                <form>
                    {/* <div ref={emailRef} className={`input ${isEmailFilled ? 'filled' : ''}`}>
                        <h1 className='placeholder'>Email Address</h1>
                        <input onChange={handleEmailChange} required type="email"></input>
                    </div> */}
                    <InputComp type={"email"} placeHolderText={"Email Address"} />
                    <InputComp type={"password"} placeHolderText={"Password"} />
                    <div id="submit-button-wrapper">
                        <div id="submit-button">
                            <h1>Log In</h1>
                        </div>
                        <div id="login-option-wrapper">
                            <div id="login-options">
                                <div id="rem-me">
                                    <h1>Remember Me</h1>
                                </div>
                                <div id="forgot-me">
                                    <h1 style={{ textDecoration: 'underline' }}>Forgot Password</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="create-account-wrapper">
                        <div id="create-account">
                            <div id="new-to">
                                <div className="line">

                                </div>
                                <h1>New To Saciva</h1>
                                <div className="line">

                                </div>
                            </div>
                            <div id="create-account-button-wrapper">
                                <div onClick={handleCreateAccount} id="create-account-button">
                                    <h1>Create Account</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="privacy-content">
                        <p>By Signing in, you agree to Saciva’s
                            <a>Terms and Conditions</a> & <a>Privacy Policy.</a></p>
                    </div>
                </form>
            </div>
        </FadeIn>

    </section >
}

function PrimaryCards({ primary_card_info }) {
    return (
        <div id="info-card-wrapper">
            {primary_card_info.map((data, index) => (
                <div className='card' key={index}>
                    <div id="card-image-wrapper">
                        <img src={data.cardIcon} />
                    </div>
                    <div id="card-content">
                        <h1>{data.cardh}</h1>
                        <p>{data.cardp}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export function InputComp({ type, placeHolderText, onChange, name, passwordsMatch }) {

    const [isInputFilled, setInputFilled] = useState(false);

    useEffect(() => {
        // const inputElement = ref.current.querySelector('input');
        // console.log(inputElement);
        // setInputFilled(!!inputElement.value.trim());
    }, [isInputFilled]);


    const handleInputChange = (event) => {
        setInputFilled(!!event.target.value);
        // Call the onChange function passed as a prop
        if (typeof onChange === 'function') {
            onChange(event);
        }
    };

    return <div id={name} className={`input ${passwordsMatch ? 'passwordsMatch' : 'passwordsDontMatch'} ${isInputFilled ? 'filled' : ''}`}>
        <div className='input-up-line'></div>
        <h1 className='placeholder'>{placeHolderText}</h1>
        <input name={name} onChange={handleInputChange} required type={type}></input>
    </div>
}

function SecondaryCards({ secondary_card_info }) {
    return (
        <div id="secondary-info">
            {secondary_card_info.map((data, index) => (
                <div key={index} className='secondary-card'>
                    <div id="card-image-wrapper">
                        <img src={data.cardIcon} />
                    </div>
                    <div id="card-content">
                        <h1>{data.cardh}</h1>
                        <p>{data.cardp}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function WordTrail({ children }) {

    const trailRef = useRef();
    const [inViewRef, inView] = useInView({
        triggerOnce: true,
    });

    const word = children.props.children;
    const letters = word.split('');

    const trail = useTrail(letters.length, {
        config: { tension: 1000, friction: 100, spring: 10 },
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 40,
        from: { opacity: 0, y: 40 },
    });

    return (
        <h1 className='word-trail' ref={(node) => { trailRef.current = node; inViewRef(node); }}>
            {trail.map(({ opacity, y }, index) => (
                <animated.span
                    key={index}
                    style={{ opacity, y }}
                    className="word-trail-letter"
                >
                    {letters[index] !== ' ' ? letters[index] : <span style={{ padding: '5px' }}></span>}
                </animated.span>
            ))}
        </h1>
    );
}

export function FadeIn({ children, id }) {

    const items = React.Children.toArray(children);

    const trail = useTrail(items.length, {
        config: { tension: 600, friction: 40 },
        opacity: 1,
        y: 0,
        from: { opacity: 0, y: 100 }
    });

    return <div id={id}>
        {trail.map(({ opacity, y }, index) => (
            <a.div key={index} style={{ opacity: opacity, y: y }}>{items[index]}</a.div>
        ))}
    </div>
}

export default Home;
