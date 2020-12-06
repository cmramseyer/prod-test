import React from 'react';

import styled from 'styled-components';

const ProductDiv = styled.div`
  font-size: 0.9em;
  text-align: center;
  color: blue;
  border: 1px solid;
`;

const product = (props) => {

        return (

                <div key={"product-" + props.id}
                    className="col-sm-12"
                    onClick={() => props.handleSelectedItem("product", props.item.id)}>
                    <h2>Product</h2>
                    <h3>{props.item.name}</h3>
                    <p>{props.item.description}</p>
                    <p>{props.item.price}</p>
                </div>

        )
}

export default product;
