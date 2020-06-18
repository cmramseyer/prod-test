export const cartAction = productId => {
    return {
        type: 'ADD',
        payload: productId
    }
}