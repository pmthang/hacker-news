import {applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const middleWareList = [thunk, createLogger()];
const middleware = compose(applyMiddleware(...middleWareList));
export default middleware;