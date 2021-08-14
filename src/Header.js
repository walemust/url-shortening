import React from 'react';
import "./Header.css";
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
    
    
    return (
        
        <div className="header">
            <Navbar className="header-content" expand="md" justify-content="space-around" sticky="top">
                <Navbar.Brand>
                <img src="/images/logo.svg" alt="shortify logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse>
                <Nav className="nav-left"> 
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#resource">Resources</Nav.Link>
                </Nav>
                <Nav className="nav-right" >
                    <Nav.Link href="login">Login</Nav.Link>
                    <Nav.Link href="signup">Sign Up</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>

            </div>
            
    );
}

export default Header
