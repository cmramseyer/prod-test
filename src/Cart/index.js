import React, { useState, useContext } from 'react';
import UserContext from '../UserContext'

function Cart(props) {

    const [user, toggle, setToggle, productsInCart, setProductsInCart] = useContext(UserContext)
  
    return (
      <div className="App-cart">

        
          <p>
              {productsInCart.length}
          </p>
              
          
      </div>
    );
}

export default Cart;
