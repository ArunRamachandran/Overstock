import * as Constants from '../constants/constant';
import request from 'superagent';

export const fetchData = (pageIndex) => {
    return dispatch => {
        dispatch(fetchDataBegins());
        return request
            .get(Constants.URL)
            .query({ page: 2, per_page: 20})
            .then(res => {
                console.log("----> data: ", res.body);
                dispatch(fetchDataSuccess(res.body));
                return res.body;
            })
            .catch( error => {
                dispatch(fetchDataFailure())
            })
    }
}

const fetchDataBegins = () => ({
    type: Constants.FETCH_DATA_BEGINS
})

const fetchDataSuccess = response => ({
    type: Constants.FETCH_DATA_SUCCESS,
    payload: response
})

const fetchDataFailure = () => ({
    type: Constants.FETCH_DATA_FAILRE
})