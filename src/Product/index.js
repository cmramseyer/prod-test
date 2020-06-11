import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const ProductDiv = styled.div`
  font-size: 0.9em;
  text-align: center;
  color: blue;
`;

class Product extends React.Component {

    constructor(props) {
        super(props);
    }

    handle_click_product(){
        this.props.setSelectedProductId(this.props.product.id);
        this.props.setShowProductModal(true);
        return false;
        // event.preventDefault();
    }

    render(){
        return (

                <div className="col-sm-3">
                    <p>
                        Product
                    </p>
                    <a  className="App-link-focus btn btn-primary"
                        
                        onClick={() => this.handle_click_product()}
                        
                    >
                        Click here
                    </a>

                    <div className="product-wrapper">
                        <div key={this.props.product.id}>
                            <h3>{this.props.product.name}</h3>
                            <p>{this.props.product.description}</p>
                        
                        </div>
                    </div>
                    
                </div>

        )
    };
}

export default Product;
