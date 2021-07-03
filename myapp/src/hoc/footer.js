import React from 'react';
import '../components/1.css'
import '../components/7.css'
import {Link} from 'react-router-dom'
import logo from "../components/images/logo.png"

const Footer = () => {
    return (
<div>
             <footer id="contact">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-4 col-12">
                <div className="footer_box">
                    <div className="footer_header">
                        <div className="footer_logo" style={{marginLeft:'80px'}}>
                           <a href="https://spicmacay.org/"> <img src={logo} alt="evento" loading="lazy"/> </a>
                        </div>
                    </div>
                    <div className="footer_box_body">
                        <p>
                            <div className="address">
                            <p style={{fontSize:"25px", fontFamily: "Arial", fontWeight:"800",color:"white"}}>Address</p> <br/>
                            <p style={{fontSize:"16px",color:"white",fontStyle:'normal !important'}}>National Institute of Technology Durgapur <br/> राष्ट्रीय प्रौद्योगिकी संस्थान दुर्गापुर </p>
                            <p style={{fontSize:"14px",color:"white"}}>(An Institute of National Importance under Government of India, <br/>Ministry of Human Resource Development)
                            <br/>Mahatma Gandhi Avenue, Durgapur 713209, West Bengal, INDIA</p>
                        </div>
                        <div className="address" style={{paddingTop: "10px"}}>
                            <p style={{fontSize:"25px", fontFamily:" Arial",color:"white"}}>Email</p>
                            <p><i className="fa fa-envelope">&nbsp;<a href="mailto:spicmacay.nitd@gmail.com" style={{fontSize: "18px",color:"white"}}> spicmacay.nitd@gmail.com </a></i></p>
                        </div>
                        </p>
                        <ul className="footer_social">
                            <li className="face">
                                <a href="https://www.facebook.com/spicmacaynitd/"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li className="utube">
                                <a href="https://www.youtube.com/channel/UCJP84NlZI4fTP20cHPLo7Lw/featured"><i className="fa fa-youtube"></i></a>
                            </li>
                            <li className="insta">
                                <a href="https://www.instagram.com/spic.macay_nitd"><i className="fa fa-instagram"></i></a>
                            </li>
                            <li className="din">
                                <a href="https://www.instagram.com/spic.macay_nitd"><i className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12">
                <div className="footer_box">
                    <div className="footer_header">
                        <div className="footer_logo" style={{marginLeft:'80px'}}>
                            <img src={logo} alt="evento" loading="lazy"/>
                        </div>
                    </div>
                    <div className="footer_box_body">
                        <p>
                            <p style={{fontSize:"16px",color:"white",fontStyle:'normal !important'}}><b>President:</b>Rik Dasgupta</p>
                            <p><i className="fa fa-phone">&nbsp;<a href="tel:+8004937056"> +91 8004937056</a></i><br/><i className="fa fa-envelope">&nbsp;<a href="mailto:akshat7321.aj@gmail.com">  aritra240@gmail.com</a></i></p>
                            <p></p>
                            <p style={{fontSize:"16px",color:"white",fontStyle:'normal !important'}}><b>Vice President:</b>Adrija Biswas</p>
                            <p><i className="fa fa-phone"><a href="tel:+">&nbsp; +91 9123077107 </a></i><br/><i className="fa fa-envelope">&nbsp;<a href="mailto:sohommukherjee.1998@gmail.com@gmail.com"> tiasha.biswas@gmail.com</a></i></p>
                            <p></p>
                            <p style={{fontSize:"16px",color:"white",fontStyle:'normal !important'}}><b>General Secretary :</b>Annasha Dey</p>
                            <p><i className="fa fa-phone"><a href="tel:+8788981871">&nbsp; +91 8788981871</a></i><br/><i className="fa fa-envelope">&nbsp;<a href="mailto:sankalpchoubey10@gmail.com">rajdeepgolder@gmail.com</a></i></p>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <div className="footer_box">
                    <div className="footer_header">
                        <h4 className="footer_title">
                            locate us
                        </h4>
                    </div>
                    <div className="footer_box_body">
                        <div><iframe defer loading="lazy"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.577948545365!2d87.29095021453448!3d23.547677702408144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f772081cede5e9%3A0x33fb9ccb243dfa5!2sNational+Institute+of+Technology!5e0!3m2!1sen!2sin!4v1541686389902" height="300px" style={{border:"0"}} allowfullscreen></iframe></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<div className="copyright_footer">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 col-12">
                <p></p>
            </div>
            <div className="col-12 col-md-6 ">
                <ul className="footer_menu">
                    <li>
                       <Link to='/'>Events</Link>
                    </li>
                    <li>
                    <Link to='/o'>Team Members</Link>
                    </li>
                    <li>
                    <Link to='/g'>Gallery</Link>
                    </li>
                    <li>
                    <Link to='/virasat'>Virasat</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>    
        </div>
    );
};

export default Footer;