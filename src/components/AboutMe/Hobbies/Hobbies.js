import React from 'react';
import d from './Hobbies.css';
import Hobby from './Hobby/Hobby';
// import logos
import robot from '../../../images/about_me/hobbies/robot.png';
import book from '../../../images/about_me/hobbies/book.png';
import brain from '../../../images/about_me/hobbies/brain.png';
import videogame from '../../../images/about_me/hobbies/videogame.png';
import art from '../../../images/about_me/hobbies/art.png';
import { Parallax } from 'react-scroll-parallax';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';


const Hobbies = props => {
    return (
        <div className={d.container} style={{ flexBasis: props.flexBasis }}>
            <ul>
                <li><p className={d.title}>My Hobbies</p></li>
                <Fade right>
                    <Hobby logo={robot} description={'Machine Learning'} />
                <Hobby logo={book} description={'Science & Literature'} />
                <Hobby logo={brain} description={'Cognitive Psychology'} />
                <Hobby logo={videogame} description={'Video Games'} />
                <Hobby logo={art} description={'Drawing & Painting'} />
                </Fade>

              


                {/*

                <Hobby logo={robot} description={'Machine Learning'} />
                <Parallax className={d.parallax} offsetYMax={60} offsetYMin={-140} slowerScrollRate tag="figure">
                    <Hobby logo={book} description={'Science & Literature'} />
                </Parallax>
                <Parallax className={d.parallax} offsetYMax={200} offsetYMin={-240} slowerScrollRate tag="figure">
                    <Hobby logo={brain} description={'Cognitive Psychology'} />
                </Parallax>
                <Parallax className={d.parallax} offsetYMax={600} offsetYMin={-380} slowerScrollRate tag="figure">
                    <Hobby logo={videogame} description={'Video Games'} />
                </Parallax>
                <Parallax className={d.parallax} offsetYMax={'1450px'} offsetYMin={'-480px'} slowerScrollRate tag="figure">
                    <Hobby logo={art} description={'Drawing & Painting'} />
                </Parallax>

*/}







            </ul>
        </div>
    )
}

export default Hobbies;