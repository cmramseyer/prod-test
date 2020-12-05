import React, { Component } from 'react';

import styled from 'styled-components';

const ProductDiv = styled.div`
  font-size: 0.9em;
  text-align: center;
  color: blue;
  border: 1px solid;
`;

class Product extends Component {

    constructor(props) {
        super(props);
    }

    render(){

        return (

                <div key={this.props.id}
                    className={this.props.colsm3 ? "col-sm-3" : ""}
                    onClick={() => this.props.handleSelectedProductId(this.props.id)}>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.description}</p>
                    <p>{this.props.price}</p>
                </div>

        )
    };
}

export default Product;
