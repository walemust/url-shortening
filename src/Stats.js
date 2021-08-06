import React from 'react'
import "./Stats.css";

function Stats() {
    return (
        <div className="stats">
            <div className="stats_intro">
            <h1>Advanced Statistics</h1>
            <p>Track how your links are performing across the web with our 
            advanced statistics dashboard.</p>
            </div>
            <div className="stats_info">
                <div className="stats_info1">
                    <div className="stats_info_image">
                    <img src="/images/icon-brand-recognition.svg" alt="" />
                    </div>
                    
                    <h2>Brand Recognition</h2>
                    <p>Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                <span></span>
                <div className="stats_info2">
                    <div className="stats_info_image">
                    <img src="/images/icon-detailed-records.svg" alt="" />
                    </div>
                    <h2>Detailed Records</h2>
                    <p>Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.
                    </p>
                </div>
                <span></span>
                <div className="stats_info3">
                    <div className="stats_info_image">
                    <img src="/images/icon-fully-customizable.svg" alt="" />
                    </div>
                    <h2>Fully Customizable</h2>
                    <p>Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Stats
