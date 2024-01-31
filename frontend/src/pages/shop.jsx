import React from "react";
import Header from "../component/Header/header";
import Popular from "../component/popular/popular";
import New from "../component/new_collection/newCollection";
import NewsLetter from "../component/NewsLetter/newsLetter";

const Shop = () => {
    return(
        <div>
            <Header/>
            <Popular/>
            <New/>
            <NewsLetter/>
        </div>
    )
}

export default Shop