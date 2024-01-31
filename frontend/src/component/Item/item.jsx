import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
    return(
        <div className="item">
            <Link to={`/product/${props.id}`}><img src={props.image} alt="product image"/></Link>
            <p>{props.name}</p>
            <div className="item-prices">
                ${props.price}
            </div>
        </div>
    )
}


export default Item