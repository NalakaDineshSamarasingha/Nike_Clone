import React from "react";
import "./newCollection.css";
import Item from "../Item/item";
import { useState } from "react";
import { useEffect } from "react";

const New = () => {

    const[new_collection,setNew_collection] = useState([]);

    useEffect(()=>{
        fetch('https://nike-clone-app.onrender.com/newcollection')
        .then((response)=>response.json())
        .then((data)=>setNew_collection(data))
    },[])

    return(
        <div className="new-collection">
             <h1>New Collection</h1>
            <hr/>
            <div className="popular-item">
                {new_collection.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price = {item.price}/>
                })}
            </div>
        </div>
    )
}
export default New