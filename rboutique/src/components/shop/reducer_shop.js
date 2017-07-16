const CART = 'CART';

export default (state = [], action) => {
    console.log('Reducer action: ', action)
    switch (action.type) {
        case CART:
            console.log('Cart: ', action.payload);
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state;
    }
}