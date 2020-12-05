import React, { Component } from 'react';
import Product from '../Product'
import axios from 'axios';
import Spinner from '../Spinner'


class ProductList extends Component {

    
    handleSearchKeyword = (event) => {
      
      


    }

    
  render () {

    let productList = <Spinner></Spinner>

    if (this.props.products.length > 0) {
      productList = this.props.products.map(product => {
        return (
          <Product
            colsm3
            key={product.id}
            handleSelectedProductId={this.props.handleSelectedProductId}
            id={product.id}
            name={product.name}
            description={product.description.substring(0, 90)}
            addProductsInCart={this.props.addProductsInCart}
            >      
          </Product>
        )

      });
                      
    }
    

    return (
      <div className="App-product-list">
          
  
          <div className="product-wrapper">
            <div className="container">
              <div className="row">
                {productList}
              </div>
            </div>
          </div>
                  
      </div>
    )
  }
}

export default ProductList;
