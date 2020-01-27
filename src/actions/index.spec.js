import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import * as Constants from '../constants/constant';

describe('Actions unit test coverage', () => {
    const dispatch = jest.fn().mockImplementation(() => Promise.resolve());
    const middlewares = [ thunk ]
    const mockStore = configureMockStore(middlewares)

    it('should create a NAVIGATE_TO_DASHBOARD action', () => {
        const data = {
            id: 1,
            product: 'Red wine'
        }
        expect(actions.navigateToDashboard(data)).toEqual({
            type: Constants.NAVIGATE_TO_DASHBOARD,
            payload: data
        })
    })

    // it(' hould create FETCH_DATA_BEGINS when the async action begins' , () => {
    //     actions.fetchData('1')(dispatch)
    //     expect(dispatch).toHaveBeenCalledWith(actions.fetchDataBegins());
    // })

    it('should create the FETCH_DATA_SUCCESS when the api call is success', () => {
        //const store = mock
    })
})