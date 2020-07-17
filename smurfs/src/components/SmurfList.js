import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions/actions';
import './SmurfList.css';

// Component(s)
import Smurf from './Smurf';

const SmurfList = props => {

    useEffect(() => {

        props.fetchSmurfs();

    }, []); // prob needs props in array, check if error when adding smurf

    return (
        <div className='smurf-list'>
            {props.smurfs.length > 0 && (props.smurfs.map(item => {
                return <Smurf key={item.id} name={item.name} age={item.age} height={item.name} />}))}
        </div>
    );

};

const mapStateToProps = state => {

    return {

        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error

    };

};

export default connect(

    mapStateToProps,
    {fetchSmurfs}
    
)(SmurfList);