import React from "react";
import './nav.css'
import profile from "../../assets/profile.jpg"

const Navbar = ()=>{
    return(
        <div className="navbar">
            <h1 className="nav-logo">Admin🛡️</h1>
            <img src={profile} alt="" className="profile" />
        </div>
    )
}

export default Navbar