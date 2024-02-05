import React from "react";
import '../Style/404.css';

import { useEffect } from "react";
import { useNavigate } from  'react-router-dom';



import arrow from '../Assets/arrow1.png';
import { useTrail, animated, config} from "react-spring";
export const PageNotFound = () => {


    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/', {replace: true});
    }

    return (
        <section id="page-wrapper">
            <div id="page-content">
                <h1>Looks like you lost your way,<span style={{ fontWeight: 600 }}>Wanderer!</span></h1>
                <p>The page you are looking for, doesnt seem to exist or has ceased to exist.</p>
                <div id="home-button-wrapper">
                    <div onClick={handleClick} id="home-button">
                        <h1>Go Home</h1>
                        <img src={arrow} />
                        <div id="home-button-bg"></div>
                    </div>
                </div>
            </div>
            <div id="numbers-wrapper">
                <NumberDopper id="num">
                    <span>404</span>
                    <span>404</span>
                    <span>404</span>
                    <span>404</span>
                    <span>404</span>
                    <span>404</span>
                </NumberDopper>
            </div>
        </section>
    )
}

function NumberDopper({ children }) {
    const items = React.Children.toArray(children);

    const opa = 1/items.length;

    const trail = useTrail(items.length, {
        config: {friction: 40, tension: 500, frequency: 0.5, velocity: 20, clamp: true},
        duration: 10,
        y: 0,
        from: {y: 1000, opacity: 0}
    });

    return(
        <div id="num">
            {trail.map(({y}, index) => {
                var opacity = index * opa;
                return <animated.h1  style={{y: y, opacity: opacity, zIndex:-index}}>{items[index]}</animated.h1>
            })}
        </div>
    )
}