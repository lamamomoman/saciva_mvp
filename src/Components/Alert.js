import React, { useState,useEffect } from "react";
import { useTrail, animated } from "react-spring";

import '../Style/alert.css';

export const Alert = ({ Title, Message, Delay }) => {

    const [showAlert, showAlertUpdate] = useState(true);
    return <div className = {`alert-wrapper ${showAlert ? 'alert-pop': ''}`}>
        <AlertPop showAlert={showAlert} showAlertUpdate={showAlertUpdate} Message={Message} Title={Title} Delay={Delay} />
    </div>
}

function AlertPop(props) {

    useEffect(() => {
        props.showAlertUpdate(true);
        const timer = setInterval(() => props.showAlertUpdate(false), props.Delay);

        return () => clearTimeout(timer);
    }, []);

    const trail = useTrail(1, {
        config: { tension: 800, friction: 100 },
        y: props.showAlert ? 0 : 200,
        opacity: props.showAlert ? 1 : 0,
        from: {
            y: props.showAlert ? 200 : 0,
            opacity: props.showAlert ? 0 : 1
        },
    });


    return <div id="alert-content">
        {trail.map(({ opacity, y }, index) => {
            return <animated.div key={index} style={{opacity: opacity, y: y}} id="alert">
                <h1>{props.Title}</h1>
                <p>{props.Message}</p>
            </animated.div>
        })}
    </div>
}