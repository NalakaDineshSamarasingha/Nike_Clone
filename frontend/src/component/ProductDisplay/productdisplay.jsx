import React, { useContext } from "react";
import "./productdisplay.css";
import star from "../assest/start.png"
import star_non from "../assest/start_non.png"
import { ShopContext } from "../../content/shopcontent";


const ProductDisplay = (props) =>{
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src= {product.image} alt="product fffvv 001"/>
                    <img src= {product.image} alt="product rrtt 002"/>
                    <img src= {product.image} alt="product rrff 003"/>
                    <img src= {product.image} alt="product hgdd 004"/>
                </div>
                <div className="productdisplay-image">
                    <img src={product.image} alt="thaf hsga hasda d" className="productdisplay-main-img"/>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star} alt="star uehd 01"/>
                    <img src={star} alt="star trysh 02"/>
                    <img src={star} alt="star trtgd 03"/>
                    <img src={star} alt="star qwbd 04"/>
                    <img src={star_non} alt="star jdj 05"/>
                    <p>(100)</p>
                </div>
                <div className="productdisplay-right-prices">
                <div className="productdisplay-right-old-price">$400</div>
                <div className="productdisplay-right-new-price">${product.price }</div>
            </div>
            <div className="productdisplay-right-discription">
                The Air Jordan 1 Retro High remakes the classic sneaker, 
                giving you a fresh look with a familiar feel. Premium 
                materials with new colors and textures give modern 
                expression to an all-time favorite.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div className="size">40</div>
                    <div className="size">41</div>
                    <div className="size">42</div>
                    <div className="size">43</div>
                    <div className="size">44</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
            <p className="productdisplay-right-category"><span>Category :</span>Mens , Shoes</p>
            <p className="productdisplay-right-category"><span>Tags :</span>Modern, Letest</p>
            </div>
        </div>
    )
}

export default ProductDisplay