import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <img src="images/logo.svg" alt="" />
                <div className="footer_list">
                    <h4>Features</h4>
                    <ul className="footer_item">
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>
                <div className="footer_list">
                    <h4>Resources</h4>
                    <ul className="footer_item">
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="footer_list">
                    <h4>Company</h4>
                    <ul className="footer_item">
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="social_icons">
                    <img src="images/icon-facebook.svg" alt="" />
                    <img src="images/icon-twitter.svg" alt="" />
                    <img src="images/icon-pinterest.svg" alt="" />
                    <img src="images/icon-instagram.svg" alt="" />
                </div>
            </div>
            <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/walemust">Mustapha Olawale</a>.
            </div>
        </div>
    )
}

export default Footer
