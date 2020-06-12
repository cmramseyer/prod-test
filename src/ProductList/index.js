import React, { useState, useEffect } from 'react';
import Product from '../Product'
import axios from 'axios';


function ProductList(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        console.log("yahoooo");
        console.log(props.searchKeywords)
        var result;
        if (props.searchKeywords === "") {
          result = await axios(
            `${process.env.REACT_APP_API_HOST}/api/v1/products.json`,
          );
        }
        else {
          console.log("entra acaaa locooo");
          result = await axios(
            `${process.env.REACT_APP_API_HOST}/api/v1/results/?keywords=${props.searchKeywords}`,
          );
        }
          
     
        setData(result.data);
      }
      fetchData();
    }, [props.searchKeywords]);
    

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
