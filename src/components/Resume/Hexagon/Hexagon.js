import React from 'react';
import d from './Hexagon.css';
import hexagon from '../../../images/hexagon.png';

const Hexagon = (props) => {
    return (
        <div className={d.container}>
            <div className={d.titleContainer}>
                <p>{props.title}</p>
            </div>
            <div style={landingBanner} className={d.hexagon}>
                <img src={props.icon}></img>
            </div>
            <div className={d.text}>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

const landingBanner = {
    backgroundImage: `url(${hexagon})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',


}

export default Hexagon;