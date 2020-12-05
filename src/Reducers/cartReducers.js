import { ADD_TO_CART
} from "../Actions/actionTypes";


const initialState = {
  productsInCart: []
}

export function cartReducer(state = initialState, action)
{
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                productsInCart: action.payload
            }
        default:
            return state
    }
}


