import React, { useState, useEffect } from 'react';
import Product from '../Product'
import axios from 'axios';


function ProductList(props) {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios(
          `${process.env.REACT_APP_API_HOST}/api/v1/products.json`,
        );
     
        setData(result.data);
      }, []);
    

  return (
    <div className="App-product-list">
        <p>
            Product List
        </p>

        <div className="product-wrapper">
          <div className="container">
            <div className="row">
              {data.map(product => (
                  <Product 
                    setSelectedProductId={props.setSelectedProductId}
                    product={product}
                    setShowProductModal={props.setShowProductModal}>
                      
                  </Product>
                  
              ))}
            </div>
          </div>
        </div>
                
    </div>
  );
}

export default ProductList;
