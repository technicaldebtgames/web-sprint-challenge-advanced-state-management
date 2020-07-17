import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions/actions';

// Component(s)
import Smurf from './Smurf';

const SmurfList = props => {

    // initial call to api to get smurf data for display
    useEffect(() => {

        props.fetchSmurfs();

    }, [props]);

    return (
        <div className='smurf-list'>
            {props.error && <h4>{props.error}</h4>}
            {props.smurfs.length > 0 && (props.smurfs.map(item => {
                return <Smurf key={item.id} name={item.name} age={item.age} height={item.name} />}))}
        </div>
    );

};

const mapStateToProps = state => {

    return {

        smurfs: state.smurfs,
        error: state.error

    };

};

export default connect(

    mapStateToProps,
    {fetchSmurfs}
    
)(SmurfList);