import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <nav>
            <img src="/images/logo.svg" alt="shortify logo" />
            <ul className="nav-left">
                <li className="nav-link"><a href="#features">Features</a></li>
                <li className="nav-link"><a href="#pricing">Pricing</a></li>
                <li className="nav-link"><a href="#resource">Resources</a></li>
            </ul>
            <ul className="nav-right">
                <li className="nav-link-right"><a href="login">Login</a></li>
                <li className="nav-link-right"><a href="signup">Sign Up</a></li>
            </ul>
            </nav>

            </div>
            
    )
}

export default Header
