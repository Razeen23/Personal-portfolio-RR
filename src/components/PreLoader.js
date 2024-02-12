 import React, {useEffect} from "react";
 import { preLoaderAnim } from "../animations";
 import './preloader.css';

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()
    },[]);

    return (
        <div className="preloader">
            <div className="texts-container flex flex-wrap">
                <span>Imagine,</span>
                <span>Design,</span>
                <span>Develop,</span>
                <span>Vibe..</span>

            </div>
            
        </div>
    )
}

export default PreLoader;






