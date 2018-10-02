import React from 'react';
import avatar from '../../../images/about_me/avatar.png';
import d from './AboutMeText.css';

const AboutMeText = (props) => {
    return (
        <div style={{display:'inline', flexBasis:props.flexBasis}}>
            <div className={d.container}>
                <div >
                    <img className={d.avatar} src={avatar} alt="avatar" />
                </div>

                <div className={d.textTitle}>About Me</div>
            </div>
            <div className={d.text}>
                <p>I'm a 20-year-old web & mobile application developer with a great passion for my work, and currently finishing my mandatory service in the army.</p>
                <p>I'm serving as a Fullstack web developer in an Information Systems department with exclusively software engineers. As the youngest developer in the department, I've provided modern and innovative technologies, doubled development output by more than twice, and embedded modern workflow protocols and advanced integration services.</p>
                <p>During my service, I received 3 certificates of excellence, developed 75% of my department's output, sent to 3 professional courses regarding development, web security and system administration, and worked on countless side-projects on my own.</p>
                <p>I'm serving as a Fullstack web developer in an Information Systems department with exclusively software engineers. As the youngest developer in the department, I've provided modern and innovative technologies, doubled development output by more than twice, and embedded modern workflow protocols and advanced integration services.</p>
                <p>During my service, I received 3 certificates of excellence, developed 75% of my department's output, sent to 3 professional courses regarding development, web security and system administration, and worked on countless side-projects on my own.</p>
            </div>
        </div>
    );
};

export default AboutMeText;