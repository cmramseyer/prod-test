import React, { useState } from 'react';
import ProductList from '../ProductList';


function Body({counter, setCounter}) {

    

  return (
    <div className="App-body">
        <p>
            Body
        </p>
        <a
            className="App-link"
            href="#"
            onClick={() => setCounter(counter + 1)}
            rel="noopener noreferrer"
        >
            Click here
        </a>
        <p>clicked {counter} times</p>
        <ProductList></ProductList>
    </div>
  );
}

export default Body;
