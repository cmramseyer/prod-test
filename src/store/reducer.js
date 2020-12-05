const initialState = {
    productsCart: [],
    token: null,
    username: null,
    userId: null,
    isAuthenticated: false
}


const reducer = (state = initialState, action) => {
    console.log('reducer action')
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_CART':
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
        case 'SET_AUTH_TOKEN':
            const userData = action.payload.userData;
            return {
                ...state,
                token: userData.auth_token,
                userId: userData.id,
                username: userData.user,
                isAuthenticated: true
            }
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                userId: null,
                username: null,
                isAuthenticated: false
            }
        default:
            return state;

    }
}

export default reducer;