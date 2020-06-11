import React, { useState, useEffect } from 'react';
import Product from '../Product'
import axios from 'axios';

function SelectedProduct(props) {

    const [productData, setProductData] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            console.log("useEffect!!");
            console.log(props.selectedProductId);
            console.log("useEffect!!");

            if(props.selectedProductId != null) {
                const result = await axios(
                `${process.env.REACT_APP_API_HOST}/api/v1/products/${props.selectedProductId}.json`,
                );
    
                setProductData(result.data);
            
                
            }
        }

        fetchData();
        
        // useEffect is reloaded/rerendered when selectedProductId changes
        // awesome!!
    }, [props.selectedProductId]);
    
    
    return (
        <div className="App-product">
            <p>{productData.name}</p>
            <p>{productData.description}</p>
            
        </div>
    )
}

export default SelectedProduct;
