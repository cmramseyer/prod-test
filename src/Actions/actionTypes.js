export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


export function addToCart(selectedProductId) {
    return {
      type: ADD_TO_CART,
      selectedProductId
    }
  }