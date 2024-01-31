import React from "react";
import "./admin.css"
import Slider from "../../component/slider/slider";
import {Routes,Route} from "react-router-dom"
import AddProduct from "../../component/addProduct/addproduct";
import ListProduct from "../../component/listProduct/listproduct";

const Admin = () => {
    return(
        <div className="admin">
            <Slider/>
            <Routes>
                <Route path="/addproduct" element={<AddProduct/>}/>
                <Route path="/listproduct" element={<ListProduct/>}/>
            </Routes>
        </div>
    )
}
export default Admin