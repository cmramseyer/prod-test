import React, { useState, useEffect, useContext } from 'react';
import Product from '../Product'
import UserContext from '../UserContext'
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function SelectedProduct(props) {

    const [productData, setProductData] = useState([]);
    
    const [user, toggle, setToggle] = useContext(UserContext)

    function handleSetToggle(){
        toggle == "NO" ? setToggle("YES") : setToggle("NO");
    }

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
            <Button variant="secondary" onClick={handleSetToggle}>
              toggle
            </Button>            
            
        </div>
    )
}

export default SelectedProduct;
