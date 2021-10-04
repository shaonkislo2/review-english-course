import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer ">
            <h5 className="footerHeading">Our Course</h5>         
        
            <div >
                <a className="courseTitle" href="/">Listening</a>
                <a className="courseTitle" href="/">Speaking</a>
                <a className="courseTitle" href="/">Reading</a>
                <a className="courseTitle" href="/">Writing</a>
           
            </div>
            
            <h5 style={{color:"green"}}>Contact With Us</h5>
           {/* icon */}
            <div > 
            <small className="iconStyle"><i class="fab fa-facebook-square"></i></small>
            <small className="iconStyle"><i class="fab fa-twitter-square"></i></small>
            <small className="iconStyle"><i class="fas fa-envelope-square"></i></small>
            <small className="iconStyle"><i class="fab fa-instagram-square"></i></small>
            </div>

            <h6>All <i class="fas fa-copyright"></i> Copyright Reserved 2021 - British Council </h6>
        </div>
    );
};

export default Footer;