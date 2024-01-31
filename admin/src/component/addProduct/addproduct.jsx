import React, { useState } from "react";
import './addproduct.css';
import im from "../../assets/upload.jpg";
import { json } from "react-router-dom";
const AddProduct = ()=>{
    const [image,setImage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name:"",
        price:"",
        image:"",
        category:"women"
    })

    const changeHandler = (e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const imageHandler = (e)=>{
        setImage(e.target.files[0]);
    }

    const addProduct = async () => {
        let responseData;
        let product = productDetails;
        let formData = new FormData();
        formData.append('product', image);
    
        try {
            const resp = await fetch('http://localhost:4000/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });
    
            responseData = await resp.json();
            console.log(responseData);  // Log the response data for debugging
    
            if (responseData.success) {
                product.image = responseData.image_url;
                await fetch('http://localhost:4000/addproduct',{
                    method:'POST',
                    headers:{
                        Accept:'application/json',
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(product),
                }).then((resp)=>resp.json()).then((data)=>{
                    data.success?alert("product added"):alert("failed")
                })
            }
        } catch (error) {
            console.error('Error during fetch operation:', error);
        }
    };
    

    return(
        <div className="addproduct">
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here" />
            </div>
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.price} onChange={changeHandler} type="text" name="price" placeholder="Type here" />
            </div>
            <div className="addproduct-itemfield">
                <p>Product category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className="addproduct-selector">
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):im} alt="" style={{width:"100px"}} className="add-image"/>
                </label>
                <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
            </div>
            <div className="addproduct-itemfield">
                <button onClick={()=>{addProduct()}} className="addproduct-btn">ADD</button>
            </div>
        </div>
    )
}

export default AddProduct