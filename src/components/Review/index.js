import React, { Component } from 'react';

import styled from 'styled-components';

const ProductDiv = styled.div`
  font-size: 0.9em;
  text-align: center;
  color: blue;
  border: 1px solid;
`;

const review = (props) => {

        return (

                <div key={"review-" + props.item.id}
                    className={"col-sm-12" + props.itemType}
                    onClick={() => props.handleSelectedItem("review", props.item.id)}>
                    <h2>Review</h2>
                    <h3>Title: {props.item.title}</h3>
                    <p>Content: {props.item.content}</p>
                </div>

        )
}

export default review;