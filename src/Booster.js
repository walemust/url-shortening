import React from 'react'
import "./Booster.css"

function Booster() {
    return (
        <div className="booster">
            <section className="booster_sect">
                <picture>
                    <source media="(376)" srcset="images/bg-boost-mobile.svg" />
                    <img className="booster_img" src="images/bg-boost-desktop.svg" alt="" />
                </picture>
                <div className="booster_word">
                <h1>Boost your links today</h1>
                <button className="booster_btn">
                    <span>
                    Get Started
                    </span>
                </button>
                </div>
            </section>
        </div>
    )
}

export default Booster
