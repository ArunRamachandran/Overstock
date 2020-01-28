import appReducer from './appReducer';
import createStore from 'redux';
import * as Constants from '../constants/constant';

describe('appReducer unit test coverage', () => {
    
    it('should return initial state', () => {
        const expectedState = {
            pageIndex: 1,
            data: [],
            favourites: []
        };
        expect(appReducer(undefined, {})).toEqual(expectedState);
    })

    it('should returns page loader when the api call begins', () => {
        const spyAction = {
            type: Constants.FETCH_DATA_BEGINS
        };
        expect(appReducer({}, spyAction)).toEqual({
            isLoader: true
        });
    })

    it('should handle api call success action dispatched', () => {
        const spyAction = {
            type: Constants.FETCH_DATA_SUCCESS,
            payload: {
                pageIndex: 1,
                response: [{'id': 1, 'product': 'xyz'}, {'id': 2, 'product': 'abc'}]
            }
        };
        const appState = {
            pageIndex: 1,
            data: [],
            favourites: []
        }
        expect(appReducer(appState, spyAction)).toEqual({
            isLoader: false,
            data: spyAction.payload.response,
            pageIndex: spyAction.payload.pageIndex,
            favourites: []
        })
    })

    it('should handle api call failure action dispatched', () => {
        const spyAction = {
            type: Constants.FETCH_DATA_FAILURE,
        };
        expect(appReducer({}, spyAction)).toEqual({
            isLoader: false,
        })
    })

    it('should handle when NAVIGATE_TO_DASHBOARD action dispatched', () => {
        const spyAction = {
            type: Constants.NAVIGATE_TO_DASHBOARD,
            payload: {id: 1, product: {id: 1, name: 'Red Wine'}}
        };
        expect(appReducer({}, spyAction)).toEqual({
            selectedProduct: spyAction.payload
        })
    })
})