import React from "react";
import "./popular.css";
import Item from "../Item/item";
import { useState } from "react";
import { useEffect } from "react";

const Popular = () => {

    const [popularProducts,setPopularProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/popularinmen')
        .then((response)=>response.json())
        .then((data)=>setPopularProducts(data))
    },[])

    return(
        <div className="popular">
            <h1>Popular In Men</h1>
            <hr/>
            <div className="popular-item">
                {popularProducts.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price = {item.price}/>
                })}
            </div>
        </div>
    )
}

export default Popular