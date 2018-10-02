import React from 'react';
import d from './Hero2.css';
import { Parallax , ParallaxBanner} from 'react-scroll-parallax';

const Hero2 = () => {
    return (
        <ParallaxBanner
    className="your-class"
    layers={[
        {
            image: '../../images/background.jpg',
            amount: 0.1,
            slowerScrollRate: false,
        },
        {
            image: '../../images/background.jpg',
            amount: 0.2,
            slowerScrollRate: false,
        },
    ]}
    style={{
        height: '500px',
    }}
>
    <h1>Banner Children</h1>
</ParallaxBanner>

    );
};

export default Hero2;