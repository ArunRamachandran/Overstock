import * as Constants from '../constants/constant';
import request from 'superagent';

export const fetchData = (pageIndex) => {
    return dispatch => {
        dispatch(fetchDataBegins());
        return request
            .get(Constants.URL)
            .query({ page: pageIndex ? pageIndex : 1, per_page: 20})
            .then(res => {
                console.log("----> data: ", res.body);
                const index = pageIndex ? pageIndex : 1;
                dispatch(fetchDataSuccess(res.body, index));
                return res.body;
            })
            .catch( error => {
                dispatch(fetchDataFailure())
            })
    }
}

export const navigateToDashboard = (productData) => ({
    type: Constants.NAVIGATE_TO_DASHBOARD,
    payload: productData
})

export const fetchDataBegins = () => ({
    type: Constants.FETCH_DATA_BEGINS
})

const fetchDataSuccess = (response, pageIndex) => ({
    type: Constants.FETCH_DATA_SUCCESS,
    payload: {
        response,
        pageIndex
    }
})

const fetchDataFailure = () => ({
    type: Constants.FETCH_DATA_FAILURE
})
