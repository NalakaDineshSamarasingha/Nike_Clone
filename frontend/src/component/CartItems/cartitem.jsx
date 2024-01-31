import React, { useContext } from "react";
import "./cartitem.css"
import { ShopContext } from "../../content/shopcontent";


const CartItem = () => {
    const {all_product,cartItem,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
    return(
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e)=>{
                if(cartItem[e.id]>0){
                    return <div>
                                <div className="cartitems-format cartitems-format-main">
                                    <img src={e.image} alt="aio mokakda dnne na" className="carticon"/>
                                    <p>{e.name}</p>
                                    <p>${e.price}</p>
                                    <button className="cartitems-quantity">{cartItem[e.id]}</button>
                                    <p>{e.price*cartItem[e.id]}</p>
                                    <span className="remove-icon " onClick={()=>{removeFromCart(e.id)}}>&#128465;</span>
                                    
                                </div>
                                <hr/>
                            </div>
                            
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
                

            </div>
        </div>
    )
}

export default CartItem