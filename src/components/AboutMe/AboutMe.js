import React, { Component } from 'react';
import d from './AboutMe.css';
import patternBackground from './../../images/about_me/pattern.png';
import AboutMeText from './AboutMeText/AboutMeText';

export default class AboutMe extends Component {
    render() {
        return (
            <div style={styles.background}>
                <AboutMeText />
            </div>
        );
    }
}

const styles = {
    background: {
        backgroundImage: `url(${patternBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        width: '100vw',
        height: '100vh',
        
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

