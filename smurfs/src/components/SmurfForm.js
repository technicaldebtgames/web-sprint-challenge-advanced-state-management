import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions/actions';

const initialFormState = {
    name: '',
    age: '',
    height: ''
}

const SmurfForm = props => {

    // sets form state to empty strings and adds current id to use
    const [formState, setFormState] = useState({...initialFormState,
                                                   id: props.counter});

    // when form changes, adjusts form state
    const handleChanges = event => {

        event.preventDefault();

        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });

    };

    // on submit, call addSmurf and pass form state, and then reset form state
    const handleSubmit = event => {

        event.preventDefault();

        if(formState.name !== '' && formState.age !== '' && formState.height !== '') {
            props.addSmurf(formState);
            setFormState(initialFormState);
        }

    };

    return (
        
        <form className='smurf-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: </label>
            <input className='smurf-input' type='text' name='name' value={formState.name} onChange={handleChanges} />
            <br />
            <label htmlFor='age'>Age: </label>
            <input className='smurf-input' type='text' name='age' value={formState.age} onChange={handleChanges} />
            <br />
            <label htmlFor='height'>Height: </label>
            <input className='smurf-input' type='text' name='height' value={formState.height} onChange={handleChanges} />
            <br />
            <button className='smurf-submit' type='submit' onClick={handleSubmit}>Submit</button>
            {props.error && <h4>{props.error}</h4>}
        </form>
    );

};

const mapStateToProps = state => {

    return {

        counter: state.counter,
        error: state.error

    };

};

export default connect(

    mapStateToProps,
    {addSmurf}

)(SmurfForm);