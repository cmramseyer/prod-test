import React, { useState, useContext } from 'react';
import UserContext from '../UserContext'
import { connect } from 'react-redux'

function Cart(props) {

    const [user, toggle, setToggle] = useContext(UserContext)
  
    return (
      <div className="App-cart">

          <p>
              {props.productsInCart}
          </p>
          
      </div>
    );
}

function mapStateToProps(state){
    console.log("state")
    console.log(state)
    return { productsInCart: state.productsInCart }
}
  

export default connect(mapStateToProps)(Cart);
