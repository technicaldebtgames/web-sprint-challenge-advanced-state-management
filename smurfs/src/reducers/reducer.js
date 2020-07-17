import {FETCH_SMURFS_START, 
        FETCH_SMURFS_SUCCESS, 
        FETCH_SMURFS_FAILURE,
        ADD_SMURF_START,
        ADD_SMURF_SUCCESS,
        ADD_SMURF_FAILURE} from '../actions/actions';

const initialState = {
    counter: 1,
    isLoading: false,
    smurfs: [],
    error: ''
};

export const reducer = (state = initialState, action) => {

    switch(action.type) {

        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ''
            }
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_SMURF_START:
            return {
                ...state,
                isLoading: true
            }
        case ADD_SMURF_SUCCESS:
            console.log('Smurf add success payload:')
            console.log(action.payload)
            return {
                ...state,
                counter: state.counter + 1,
                isLoading: false
            }
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;

    };

};

export default reducer;