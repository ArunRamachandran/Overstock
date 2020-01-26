import { combineReducers } from 'redux';
import appState from './appReducer';

const rootReducer = combineReducers({ 
    appState
});

export default rootReducer;