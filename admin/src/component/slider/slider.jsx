import React from "react";
import './slider.css'
import {Link} from "react-router-dom";

const Slider = () => {
    return(
        <div className="slider">
            <Link to={'/addproduct'} style={{textDecoration:"none"}}>
                <div className="slider-item">
                    <p>	&#128722; Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{textDecoration:"none"}}>
                <div className="slider-item">
                    <p>&#128193; Product List</p>
                </div>
            </Link>
        </div>
    )
}
export default Slider