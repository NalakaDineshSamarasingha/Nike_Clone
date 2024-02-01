import React, { useEffect, useState } from "react";
import './listproduct.css';

const ListProduct = ()=>{

    const [allproducts,setAllproducts] = useState([]);

    const fetchInfo = async ()=>{
        await fetch('https://nike-clone-app.onrender.com/allproduct')
        .then((res)=>res.json())
        .then((data)=>{setAllproducts(data)});
    }

    useEffect(()=>{
        fetchInfo();
    },[])

    const removeProduct = async (id)=>{
        await fetch('https://nike-clone-app.onrender.com/removeproduct',{
            method:"POST",
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }

    return(
        <div className="listproduct">
            <h1>All Product List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allproducts.map((product,index)=>{
                    return <>
                        <div key={index} className="listproduct-format-main listproduct-format">
                            <img className="listproduct-product-icon" src={product.image}/>
                            <p>{product.name}</p>
                            <p>${product.price}</p>
                            <p>{product.category}</p>
                            <p className="remove-icon" onClick={()=>{removeProduct(product.id)}}>&#128465;</p>
                        </div>
                        <hr/>
                    </>

                })}
            </div>
        </div>
    )
}

export default ListProduct