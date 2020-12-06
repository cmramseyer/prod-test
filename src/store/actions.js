import { 
    ADD_TO_CART,
    EMPTY_CART,
    ADD_KIT_TO_CART,
    SAVE_ORDER,
    SAVE_ORDER_FAILED,
    CREATE_ORDER,
    SET_AUTH_TOKEN,
    LOGOUT
 } from './actionTypes';

import axios from '../axios';

export const addToCart = product => ({
    type: ADD_TO_CART,
    payload: { product: product }
});

// thunk example
export const empty = () => {
    return { type: EMPTY_CART }
}

export const emptyCart = () => {
    return dispatch => {
        setTimeout( () => {
            dispatch(empty())
        }, 3000);
    }
};

export const saveOrder = (transactionId) => {
    return { type: SAVE_ORDER, payload: { transactionId: transactionId } }
}

export const saveOrderFailed = (error) => {
    return { type: SAVE_ORDER_FAILED, payload: { error: error } }
}

export const createOrder = (order) => {
    return dispatch => {
        axios.post("/orders.json", order)
            .then(response => {
                debugger;
                const transactionId = response.data.transaction_id
                dispatch(saveOrder(transactionId));
                //this.setState({showModal: true, transactionId: transactionId})

            })
            .catch(error => {
                console.log("catch error createOrder")
                debugger;
                console.log(error);
                dispatch(saveOrderFailed(error));
            });
    }
}
// end thunk example

export const addKitToCart = products => ({
    type: ADD_KIT_TO_CART,
    payload: { productsKitListForCart: products }
});



export const setAuthToken = userData => ({
    type: SET_AUTH_TOKEN,
    payload: { userData: userData }
});

export const logout = () => ({
    type: LOGOUT
});