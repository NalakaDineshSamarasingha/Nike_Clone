import React, { useContext } from "react";
import './nav.css';
import logo from '../assest/logo2.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../content/shopcontent";

const Navbar = () => {

    const [menu,setMenu] = React.useState("shop");

    const {getTotalCartItems} = useContext(ShopContext)

    return (
        <div className="navbar">
           <div className="nav-logo">
                <img src={logo} alt="navbar econ eka" />
           </div> 
           <ul className="nav-menu">
                <li className={menu==="shop"?"active":""} onClick={()=>{setMenu("shop")}}><Link className="Link" style={{textDecoration:'none'}} to='/'>Shop</Link></li>
                <li className={menu==="men"?"active":""} onClick={()=>{setMenu("men")}}><Link to='/mens' style={{textDecoration:'none'}} className="Link">Men</Link></li>
                <li className={menu==="women"?"active":""} onClick={()=>{setMenu("women")}}><Link to='/womens' style={{textDecoration:'none'}} className="Link">Women</Link></li>
           </ul>
           <div className="login-cart">
               {localStorage.getItem('auth-token')?<button onClick={()=> {localStorage.removeItem('auth-token');window.location.replace('/')}} className="btn">Logout</button>:<Link to='/login' style={{textDecoration:'none'}}><button onClick={()=>{setMenu("login")}} className="btn">Login</button></Link>}
                <Link to='/cart' style={{textDecoration:'none'}} ><span onClick={()=>{setMenu("cart")}}>&#128722;</span></Link>
                <div className="count">{getTotalCartItems()}</div>
           </div>
        </div>
    )
}

export default Navbar;