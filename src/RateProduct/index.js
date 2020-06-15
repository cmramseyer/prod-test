import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function RateProduct(props) {

    const [rating, setRating] = useState(5);
    const [isRated, setIsRated] = useState(false)
    const [isRatedError, setIsRatedError] = useState(false)

    function handleRateChange(e){
        setRating(e.target.value);
    }

    function handleRating(){
        
        const params = {product_id: props.selectedProductId, rating: rating}
        
        axios.post(`${process.env.REACT_APP_API_HOST}/api/v1/rate/`, params)
        .then(result => {
            console.log(result)
            setRating(result.data.rating)
            setIsRated(true);
        })
        .catch(error => {
            setIsRatedError(true)
        })
   

    }

    return (

            <div>
                { !isRated &&
                    <div className="rate-product">
                        <input type="number" className="input" onChange={handleRateChange} />
                        <Button variant="secondary" onClick={handleRating}>
                            Rate
                        </Button>
                    </div>
                }
                {
                    isRated && <p>Rated {rating}</p>
                }
                {
                    isRatedError && <p>Error!</p>
                }

            </div>
            

    );
}

export default RateProduct;
