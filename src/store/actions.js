import { 
    ADD_TO_CART,
    EMPTY_CART,
    ADD_KIT_TO_CART,
    SET_AUTH_TOKEN,
    LOGOUT
 } from './actionTypes';

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