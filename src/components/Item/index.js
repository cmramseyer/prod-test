import React from 'react';
import Product from '../Product';
import ProductComment from '../ProductComment';
import Review from '../Review';

const item = (props) => {
    
    let item_element = null;
    console.log('item!!')
    console.log(props.item)

    switch(props.itemType) {
        case ('product'):
            item_element = <Product item={props.item}></Product>
            break;
        case ('product_comment'):
            item_element = <ProductComment item={props.item}></ProductComment>
            break;
        case ('review'):
            item_element = <Review item={props.item}></Review>
            break;
        default:
            break;
    }


    return (
        item_element
    )
        

}

export default item;