import React, { Component } from 'react'; 
import { Helmet } from 'react-helmet';

class Header extends Component {
    render() {        
        return (
        <>
         <header id="header" className="fixed-top d-flex align-items-center  header-transparent ">
            <div className="container d-flex align-items-center justify-content-between">

            <div className="logo">
                <h1><a href="index.html">Risewave <span className='italictxt'>Technologies</span></a></h1>
            </div>

            <nav id="navbar" className="navbar">
                <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto" href="#team">Team</a></li>              
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

            </div>
        </header>
        <Helmet>
            <script src="assets/js/main.js" ></script> 
        </Helmet>
        </>
        )
    }
}

export default Header;