import React, { Component } from 'react';
import Item from '../Item';
import axios from 'axios';
import Spinner from '../UI/Spinner'


class ItemsList extends Component {

    
    handleSearchKeyword = (event) => {
    }

    
  render () {

    let productList = <Spinner></Spinner>

    if (this.props.items.length > 0) {
      productList = this.props.items.map(item => {
        const itemType = Object.keys(item)[0];
        return (
          <Item item={item[itemType]} itemType={itemType}>      
          </Item>
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

export default ItemsList;
