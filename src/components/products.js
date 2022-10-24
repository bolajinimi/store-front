import React, { useState } from "react";
import { storeAPI } from "../api/storeAPI";
import ProductCard from "./productCard";


function Products () {
    const [products, setProducts] = useState([]);
    React.useEffect(() => {
        async function getProducts() {
            let data = await storeAPI(); 
            setProducts(data)           
        }
        getProducts();
    }, [])

    return (
        <div className="Product">
            <div className="Productdesc">
                
                {products?.map((product) => (
                    <ProductCard key={product._id} 
                    name={product?.fulhausProductName} 
                    img={product?.imageURLs[0]} 
                    price={product?.retailPrice} 
                    currency={product.orderCurrency} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Products;