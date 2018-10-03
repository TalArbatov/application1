import React, { Component } from 'react';
import d from './AboutMe.css';
import patternBackground from './../../images/about_me/pattern.png';
import AboutMeText from './AboutMeText/AboutMeText';
import Hobbies from './Hobbies/Hobbies';

export default class AboutMe extends Component {
    render() {
        return (
            
            <div ref="hello" className={d.flexContainer} style={styles.background}>
                <AboutMeText flexBasis='75%'/>
                <Hobbies flexBasis='15%'/>
            </div>
        );
    }
}

const styles = {
    background: {
        // backgroundImage: `url(${patternBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        width: '100vw',
        
    },
    bannerTitle: {
        color: '#EFEFEF',
        fontFamily: 'Gisha',
        margin: 0,
        fontSize: '100px',
    },
    bannerSubtitle: {
        color: '#EFEFEF',
        fontFamily: 'Gisha',
        margin: 0,
        fontSize: '32px',
    }
}

