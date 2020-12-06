import React, { Component } from 'react';

import styled from 'styled-components';

const ProductDiv = styled.div`
  font-size: 0.9em;
  text-align: center;
  color: blue;
  border: 1px solid;
`;

const productComment = (props) => {

    
        return (

                <div key={"product_comment-" + props.id}
                    className="col-sm-12"
                    onClick={() => props.handleSelectedItem("product_comment", props.item.id)}>
                    <h2>Comment</h2>
                    <h3>Comment: {props.item.text}</h3>
                    <p>Likes: {props.item.likes}</p>
                </div>

        )
}

export default productComment;
