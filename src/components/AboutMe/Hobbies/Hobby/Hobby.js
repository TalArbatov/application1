import React from 'react';
import d from './Hobby.css';

const Hobby = props => {
    return (
        // <tr className={' ' + d.row}>
        //     <td>
        //         <img src={props.logo} alt={props.description} />
        //     </td>
        //     <td>
        //         <p>{props.description}</p>
        //     </td>
        // </tr>
        <div className={' ' + d.hobby}>
            <img src={props.logo} alt={props.description} />
            <p>{props.description}</p>
        </div>
    );
};

export default Hobby;