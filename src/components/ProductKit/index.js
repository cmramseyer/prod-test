import React, { Component } from 'react';

import styled from 'styled-components';

const ProductDiv = styled.div`
  font-size: 0.9em;
  text-align: center;
  color: blue;
  border: 1px solid;
`;

class ProductKit extends Component {

    constructor(props) {
        super(props);
    }

    render(){

        
        return (

                <div className="col-sm-3">
                    <div className="product-wrapper">
                        <div key={this.props.id}>
                            <h3>{this.props.name}</h3>
                            <p>{this.props.price}</p>
                            <input type="number" value={this.props.qty} onChange={(ev) => this.props.quantityChanged(ev.target.value, this.props.id)}></input>
                        </div>
                    </div>
                    
                </div>

        )
    };
}

export default ProductKit;
