import React from 'react';
import avatar from '../../../images/about_me/avatar.png';
import d from './AboutMeText.css';

const AboutMeText = () => {
    return (
        <div>
            <div className={d.container}>
                <div className={d.avatar}>
                    <img src={avatar} alt="avatar" />
                </div>

                <div className={d.textTitle}>About Me</div>
            </div>
            <div className={d.text}>
                <p>I'm a 20-year-old web & mobile application developer with a great passion for my work, and currently finishing my mandatory service in the army.</p>
            </div>
        </div>
    );
};

export default AboutMeText;