import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

function RateProduct(props) {

    const [userRating, setUserRating] = useState(null);
    const [isRated, setIsRated] = useState(false)
    const [isRatedError, setIsRatedError] = useState(false)

    function handleOnRate(rating){
        console.log("lala")
        console.log(props)
        console.log(rating)
        const params = {product_id: props.selectedProductId, rating: rating.rating}
        
        axios.post(`${process.env.REACT_APP_API_HOST}/api/v1/rate/`, params)
        .then(result => {
            console.log(result)
            setUserRating(result.data.rating)
            setIsRated(true);
        })
        .catch(error => {
            setIsRatedError(true)
        })
   

    }

    return (

            <div>
                
                <div className="rate-product">
                    { !isRated && <Rater total={5} rating={3} onRate={handleOnRate} /> }
                    { isRated && <Rater total={5} rating={userRating} interactive={false} /> }
                </div>
                
            </div>
            

    );
}

export default RateProduct;
