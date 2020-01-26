import * as Constans from '../constants/constant';

const initialState = {};

const appState = ( state = initialState, action ) => {
    const { type, payload } = action;

    switch (type) {
        case Constans.FETCH_DATA_BEGINS:
            return {
                ...state,
                isLoader: true
            }

        case Constans.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoader: false,
                data: (state.data || []).concat([action.payload.data])
            }

        case Constans.FETCH_DATA_FAILRE:
            return {
                ...state,
                isLoader: false
            }

        default:
            return state;
    }
}

export default appState;