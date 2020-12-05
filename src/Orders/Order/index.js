import React, { Component } from 'react';
import Product from '../../Product';

const Order = (props) => {

        let fullDetails = null;
        if (props.showFullDetails) {
            fullDetails = props.order.products.map(prd => {
                return <Product 
                    name={prd.name}
                    price={prd.price}></Product>
            });

        }

        return (

                <div key={props.order.id}
                    onClick={() => props.handleSelectedOrder(props.order.id)}
                    className={props.colsm3 ? "col-sm-3" : ""}>
                    <h3>Order id: {props.order.id}</h3>
                    <p>Status: {props.order.order_status}</p>
                    <p>Total: {props.order.total_amount}</p>
                    {fullDetails}
                </div>
        )
};

export default Order;
