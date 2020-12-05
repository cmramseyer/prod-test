import React, { useState, useEffect, useContext } from 'react';
import Product from '../Product'
import UserContext from '../../UserContext'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import RateProduct from '../../containers/RateProduct';

function SelectedProduct(props) {

    console.log('--------------')
    console.log(props)
    
    return (
        <div className="App-product">
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>Average Rating: {props.average_rating}</p>            
            <RateProduct selectedProductId={props.id}></RateProduct>
        </div>
    )
}

export default SelectedProduct;
