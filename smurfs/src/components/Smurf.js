import React from 'react';

const Smurf = props => {

    return (
        <div className='smurf'>
            <h2>{props.name}</h2>
            <h3>Age: {props.age}</h3>
            <h3>Height: {props.height}</h3>
        </div>
    );

};

export default Smurf;