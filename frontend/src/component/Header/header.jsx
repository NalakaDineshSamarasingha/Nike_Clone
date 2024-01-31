import React from "react";
import './header.css';
import header_img from "../assest/maint.png"
const Header = () => {
    return(
        <div className="main">
            <div className="left">
                <p className="header01">Nike Shoes & Sneakers</p>
                <p className="header02">New Collection <br/> For Everyone... </p>
                <button>Buy Now&#128095;</button>
            </div>
            <div className="right">
                <img src={header_img} alt="Header Image eka"/>
            </div>
        </div>
    )
}

export default Header 