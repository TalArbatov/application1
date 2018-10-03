import React from 'react';
import background from '../../../images/background2.jpg';
import { Parallax } from 'react-scroll-parallax';
import d from './Banner.css';
import Typed from 'typed.js';


export default class Banner extends React.Component {
    componentDidMount() {
        const typed = new Typed(".titleElement", titleOptions);
        setTimeout(() => {
            const typed2 = new Typed(".subtitleElement", subtitleOptions);
        }, 1600);
        //window.addEventListener('scroll', this.handleScroll, true);

    }


    // componentWillUnmount = () => {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }
    // handleScroll = (event) => {
    //     console.log(window.pageYOffset)
    //     // let scrollTop = event.srcElement.body.scrollTop,
    //     //     itemTranslate = Math.min(0, scrollTop/3 - 60);
    //     // console.log(itemTranslate)
    //     // this.setState({
    //     //   transform: itemTranslate
    //     // });
    // }
    

    render() {
        return (
            // <Parallax
            //     className={d.parallax}
            //     offsetYMax={20}
            //     offsetYMin={-20}
            //     slowerScrollRate
            //     tag="figure"
            // >

                <div className="container">
                    <div style={styles.landingBanner}>
                        <div style={{ padding: '40px' }}>
                            <p className='titleElement' style={styles.bannerTitle}></p>

                        </div>
                        <div style={{ padding: '0 40px 40px 40px', maxWidth: '50%' }}>
                            <p className='subtitleElement' style={styles.bannerSubtitle}></p>
                        </div>
                    </div>
                </div>

            // </Parallax>

        );
    }
}

const titleOptions = {
    strings: ["Hello, I'm Tal."],
    typeSpeed: 70,
    smartBackspace: false,
    showCursor: false,
}
const subtitleOptions = {
    strings: ["A Fullstack web developer with a passion for creating clean and elegant solutions."],
    typeSpeed: 15,
    showCursor: false,

}

const styles = {
    landingBanner: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        width: '100vw',
        height: '40vh',
        'opacity': '0.5'
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





