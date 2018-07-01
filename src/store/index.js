import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducesrs';
import promiseMiddleware from '../middleware/promises';

const createdStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

const store = createdStoreWithMiddleware(reducer, {
    'counter': 0
});

export default store;