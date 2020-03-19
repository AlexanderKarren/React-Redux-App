import axios from 'axios';

export const START_FETCHING = "FETCH_DATA";
export const UPDATE_LIST = "UPDATE_LIST";
export const SET_ERROR = "SET_ERROR";
export const UPDATE_QUERY = "UPDATE_QUERY";

export const getData = () => dispatch => {
    dispatch({type: START_FETCHING});
    axios.get("https://www.breakingbadapi.com/api/characters")
    .then(response => {
        console.log(response);
        dispatch({type: UPDATE_LIST, payload: response.data});
    })
    .catch(error => {
        console.log(error);
        dispatch({type: SET_ERROR, payload: error})
    })
}

export const updateQuery = searchQuery => dispatch => {
    dispatch({type: UPDATE_QUERY, payload:searchQuery})
}