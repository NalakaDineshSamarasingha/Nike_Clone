import React, { useContext } from "react";
import "./css/product.css"
import { ShopContext } from "../content/shopcontent";
import { useParams } from "react-router-dom";
import Breadcums from "../component/Breadcums/Breadcum";
import ProductDisplay from "../component/ProductDisplay/productdisplay";

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id === Number(productId))
    return(
        <div>
            <Breadcums product ={product}/>
            <ProductDisplay product={product} />
        </div>
    )
}

export default Product