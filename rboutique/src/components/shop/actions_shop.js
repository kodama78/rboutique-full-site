const CART = 'CART';

export const cart = items => {
    console.log('Shop');
    return (dispatch) => {
        dispatch({
            type: CART,
            payload: items
        });
    }
}