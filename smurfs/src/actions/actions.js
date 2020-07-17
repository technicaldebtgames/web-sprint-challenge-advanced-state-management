import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const fetchSmurfs = () => {

    return dispatch => {

        dispatch({type: FETCH_SMURFS_START});

        axios.get('http://localhost:3333/smurfs')
            .then(response => {
                dispatch({type: FETCH_SMURFS_SUCCESS, payload: response.data});
                //console.log(response.data); // returns the array of smurfs
            })
            .catch(error => {
                dispatch({type: FETCH_SMURFS_FAILURE, payload: error.message})
            });

    };

};

export const addSmurf = (item) => {

    return dispatch => {

        dispatch({type: ADD_SMURF_START});

        axios.post('http://localhost:3333/smurf', item)
            .then(response => {
                const act = {type: ADD_SMURF_SUCCESS, payload: response.data}
            })
            .catch(error => {
                dispatch({type: ADD_SMURF_FAILURE, payload: error.message})
            });

    };

};