import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADD_SMURF_START = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_SUCCESS';

// gets all smurfs from api
export const fetchSmurfs = () => {

    return dispatch => {

        dispatch({type: FETCH_SMURFS_START});

        axios.get('http://localhost:3333/smurfs')
            .then(response => {
                dispatch({type: FETCH_SMURFS_SUCCESS, payload: response.data});
            })
            .catch(error => {
                dispatch({type: FETCH_SMURFS_FAILURE, payload: error.message});
            });

    };

};

// adds a smurf to api
export const addSmurf = (item) => {

    return dispatch => {

        dispatch({type: ADD_SMURF_START, payload: item});

        axios.post('http://localhost:3333/smurfs', item)
            .then(response => {
                dispatch({type: ADD_SMURF_SUCCESS, payload: response.data});
            })
            .catch(error => {
                dispatch({type: ADD_SMURF_FAILURE, payload: error.message});
            });

    };

};