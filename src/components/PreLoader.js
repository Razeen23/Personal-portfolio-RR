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
                <span>Dream</span>
                <span>Design</span>
                <span>Develop</span>
                <span>Deploy..</span>

            </div>
            
        </div>
    )
}

export default PreLoader;






