import * as React from "react";
import { Link } from "react-router-dom";


const Footer=()=>{
    return (
        <div className="footer-main">
            <div className="footer-left-space"></div>
            <div className="footer-card-1">
                <div>
                    <Link className="footer-card-1-link" to="/contactus">Contact Us</Link>
                </div>
                <div>
                    <Link className="footer-card-1-link" to="/tnc">Terms and Conditions</Link>
                </div>
                <div>
                    <Link className="footer-card-1-link" to="/privacypolicy">Privacy Policies</Link>
                </div>
            </div>
            <div className="footer-card-2">
                <div className="footer-card-2-content">
                    <div className="footer-card-2-logo">
                        <div>
                            <span>BusiCard</span>
                        </div>
                        <div>
                            <img src={require("../../assets/images/logo_icon.png")} alt="logo"/>
                        </div>
                    </div>
                    <div className="footer-social-media">
                        <div className="footer-social-media-text">
                            Connect with us on
                        </div>
                        <div className="footer-social-media-link">
                            <img src={require('../../assets/images/facebook_vector.png')} alt=""/>
                            <img src={require('../../assets/images/instagram_vector.png')} alt=""/>
                            <img src={require('../../assets/images/linkedin_vector.png')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-horizontal-line">
                <hr></hr>
            </div>
        </div>
    )
}

export default Footer;