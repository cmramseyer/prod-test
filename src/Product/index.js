import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const ProductDiv = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class Product extends React.Component  {

    constructor(props) {
        console.log(props);
        console.log(props.product);
        super(props);
    }

    render(){
        return (
            <ProductDiv>
                <div className="App-product">
                    <p>
                        Product
                    </p>

                    <div className="product-wrapper">
                        <div key={this.props.product.id}>
                            <h3>{this.props.product.name}</h3>
                            <p>{this.props.product.description}</p>
                        
                        </div>
                    </div>
                    
                </div>
            </ProductDiv>
        )
    };
}

export default Product;
