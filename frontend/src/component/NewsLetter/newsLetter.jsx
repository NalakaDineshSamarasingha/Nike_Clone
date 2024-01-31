import React from "react";
import './newsLetter.css';

const NewsLetter = () =>{
    return(
        <div className="newsLetter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subcribe to our newsletter and stay updated </p>
            <div>
                <input type="email" placeholder="Your Email"/>
                <button>Subcribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;