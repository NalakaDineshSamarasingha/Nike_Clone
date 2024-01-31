import React from "react";
import "./Breadcum.css";


const Breadcums = (props) => {
    const {product} = props;
    return(
        <div className="breadcum">
            Home &#62; Shop &#62; {product.category} &#62; {product.name}
        </div>
    )
}

export default Breadcums