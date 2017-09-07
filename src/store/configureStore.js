import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function ConfigureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(logger,thunk));
}