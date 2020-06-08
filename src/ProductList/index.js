import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ProductList() {

    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios(
          'http://localhost:3001/api/v1/products.json',
        );
     
        setData(result.data);
      }, []);
    

  return (
    <div className="App-product-list">
        <p>
            Product List
        </p>

        <div className="product-wrapper">
            {data.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    
                </div>
            ))}
        </div>
                
    </div>
  );
}

export default ProductList;
