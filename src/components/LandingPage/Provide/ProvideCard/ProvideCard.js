import React from 'react';
import d from './ProvideCard.css';
import { checkPropTypes } from 'prop-types';

const ProvideCard = (props) => {
    return (
        <div className={d.container}>
            <div className={d.topLine}></div>
            <div className={d.card}>
                <div className={d.cardInfo}>
                    <img src={props.icon} alt="web"/>
                    <p>{props.info}</p>
                </div>
                <div className={d.cardLogos}>
                    {props.logos.map((logo) => {
                        return (
                            <img src={logo.src} style={{height:logo.size}} alt='web'/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProvideCard;