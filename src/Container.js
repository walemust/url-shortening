import React from 'react';
import "./Container.css";
function Container() {
    return (
        <div className="container">
            <div className="container_info">
                <div className= "container_info_word">
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>
                <button className="button">
                    <span>
                    Get Started
                    </span>
                </button>
                </div>
                <img className="info_img" src="/images/illustration-working.svg" alt="working logo" />
            </div>
        </div>
    )
}

export default Container
