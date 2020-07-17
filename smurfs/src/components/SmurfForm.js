import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions/actions';

const initialFormState = {
    name: '',
    age: '',
    height: ''
}

const SmurfForm = props => {

    const [formState, setFormState] = useState(initialFormState);

    const handleChanges = event => {

        event.preventDefault();

        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });

    };

    const handleSubmit = event => {

        event.preventDefault();

        if(formState.name !== '' && formState.age !== '' && formState.height !== '') {
            props.addSmurf(formState);
            setFormState(initialFormState);
        }

    };

    return (
        <form className='smurf-form' onSubmit={handleSubmit}>
            <input className='smurf-input' type='text' name='name' value={formState.name} onChange={handleChanges} />
            <input className='smurf-input' type='text' name='age' value={formState.age} onChange={handleChanges} />
            <input className='smurf-input' type='text' name='height' value={formState.height} onChange={handleChanges} />
            <button className='smurf-submit' type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    );

};

const mapStateToProps = state => {

    return {

        isLoading: state.isLoading,
        error: state.error

    };

};

export default (

    mapStateToProps,
    addSmurf

)(SmurfForm);