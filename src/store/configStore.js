import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {};

const configStore = () => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
};

const store = configStore();

export default store;