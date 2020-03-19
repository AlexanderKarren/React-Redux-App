import { START_FETCHING, UPDATE_LIST, SET_ERROR } from '../actions/characterActions'

export const initialState = {
    characters: [],
    isFetchingData: false,
    error: "",
    query: ""
}

export const characterReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                characters: [],
                isFetchingData: true,
                error: ""
            }
        case UPDATE_LIST:
            return {
                ...state,
                characters: action.payload,
                isFetchingData: false
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: `${action.payload}`
            }
        default:
            return state;
    }
}