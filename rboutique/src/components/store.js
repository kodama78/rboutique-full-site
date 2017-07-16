import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import Shop from './shop/reducer_shop';

const middleware = applyMiddleware(reduxPromise, reduxThunk);

export default (data = {}) => {
    const rootReducer = combineReducers({
        //every modules reducer should be define here
        shop: Shop
    })

    return createStore(rootReducer, data, middleware)
}