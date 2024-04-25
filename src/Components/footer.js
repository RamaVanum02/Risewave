import React, { Component } from 'react';



class Footer extends Component {
    render() {
        return (
        <>
        <div id="footer">
        <div class="container">
            <h3>Risewave Technologies</h3>
            <p>Empowering organisations by enabling technology solutions</p>
            <div class="social-links">
            <a href="www.google.com" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="www.google.com" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="www.google.com" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="www.google.com" class="google-plus"><i class="bx bxl-skype"></i></a>
            <a href="www.google.com" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
            <div class="copyright">
            &copy; Copyright <strong><span>Risewave</span></strong>. All Rights Reserved
            </div>
        </div>
        </div>
        <a href="www.google.com" id="iconbacktotop" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
        </>
        )
    }
}

export default Footer;