import * as Constans from '../constants/constant';

const initialState = {
    pageIndex: 1,
    data: [],
    favourites: []
};

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
                data: [...state.data, ...payload.response],
                pageIndex: payload.pageIndex
            }

        case Constans.FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoader: false
            }

        case Constans.NAVIGATE_TO_DASHBOARD:
            return {
                ...state,
                selectedProduct: payload
            }

        case Constans.ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [...state.favourites, payload]
            }

        case Constans.REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                favourites: state.favourites.filter((item) => item !== payload)
            }

        case Constans.LIST_FAVOURITES:
            return {
                ...state,
                isFavouritesEnabled: true
            }

        default:
            return state;
    }
}

export default appState;