import appReducer from './appReducer';
import createStore from 'redux';
import * as actions from '../actions';
import { JestEnvironment } from '@jest/environment';

JestEnvironment.mock('../constants/constant', () => ({
    FETCH_DATA_BEGINS: 'FETCH_DATA_BEGINS',
    FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILRE: 'FETCH_DATA_FAILRE',
    NAVIGATE_TO_DASHBOARD: 'NAVIGATE_TO_DASHBOARD'
}))