import React, { useEffect } from "react";
import { DNA } from 'react-loader-spinner'

import '../Style/loading.css';

export const Loading = ({ isLoading }) => {
    useEffect(() => {
        console.log("is Loading", isLoading);
    }, [isLoading]);

    return <div id="loading-wrapper">
        {isLoading ?
            <div id="loading"><DNA
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            /></div> : <span></span>}
    </div>

}