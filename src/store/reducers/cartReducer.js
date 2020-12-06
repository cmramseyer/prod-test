const initialState = {
    productsCart: [],
    transactionId: null,
    orderError: null
}


const cartReducer = (state = initialState, action) => {
    console.log('reducer action')
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('aaaaaaaaaaaaaa')
            const product = action.payload.product
            return {
                ...state,
                productsCart: state.productsCart.concat(product)
            }
        case 'EMPTY_CART':
            return {
                ...state,
                productsCart: []
            }
        case 'ADD_KIT_TO_CART':
            const productsKitListForCart = action.payload.productsKitListForCart;
            return {
                ...state,
                productsCart: state.productsCart.concat(productsKitListForCart)
            }
        case 'SAVE_ORDER':
            const transactionId = action.payload.transactionId;
            return {
                ...state,
                productsCart: [],
                transactionId: transactionId
            }
        case 'SAVE_ORDER_FAILED':
            const error = action.payload.error;
            return {
                ...state,
                order_error: error
            }
        default:
            return state;

    }
}

export default cartReducer;