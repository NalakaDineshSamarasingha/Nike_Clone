import React, { useContext } from "react";
import './css/shopCategory.css'
import { ShopContext } from "../content/shopcontent";
import Item from "../component/Item/item";
import drop from "../component/assest/dropdown.png";

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext); 
    return(
        <div className="shop-category">
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    <p>Sort by <img src={drop} alt="DropIcon"/></p>
                </div>
            </div> 
            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                    if(props.category === item.category){
                        return <Item  key={i} id={item.id} name={item.name} image={item.image} price = {item.price} />
                    }else{
                        return null;
                    }
                })}
            </div>
            <div className="loadmode">
                Explore More
            </div>
        </div>
    )
}

export default ShopCategory