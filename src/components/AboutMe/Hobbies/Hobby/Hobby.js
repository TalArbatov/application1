import React from 'react';
import d from './Hobby.css';

const Hobby = props => {
    return (
        <div className={' ' + d.hobby}>
            <img src={props.logo} alt={props.description} />
            <p>{props.description}</p>
        </div>
    );
};

export default Hobby;