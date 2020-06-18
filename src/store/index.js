import { createStore } from 'redux'
import { ADD_TO_CART
} from "../Actions/actionTypes";


const initialState = {
  productsInCart: []
}

function cartReducer(state = initialState, action)
{
    console.log(action.payload)
    switch(action.type){
        
        case ADD_TO_CART:
            return {
                productsInCart: ([...state.productsInCart, action.payload])
            }
        default:
            return state
    }
}

//const reducer = (state = initialState, action) => {
//  return state
//}

const store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store