import React from "react";
import './footer.css'
import footer_image from "../assest/logo2.png"
import intergram from "../assest/instagram.png";
import facebook from "../assest/facebook.png"
import twitter from "../assest/twitter.png"
import pinterest from "../assest/pinterest.png"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_image} alt="footer pi thama eka" />
                <p>NIKE</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="social-link">
                <div className="social-logo">
                    <img src={intergram} alt="instergram loo eka"/>
                </div>
                <div className="social-logo">
                    <img src={facebook} alt="facebook loo eka"/>
                </div>
                <div className="social-logo">
                    <img src={twitter} alt="twitter loo eka"/>
                </div>
                <div className="social-logo">
                    <img src={pinterest} alt="Pinterest loo eka"/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright &copy;2024 - designed by nalaka</p>
            </div>
        </div>
    )
}
export default Footer