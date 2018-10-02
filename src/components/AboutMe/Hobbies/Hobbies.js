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

const Hobbies = props => {
    return (
        <div className={d.container} style={{ flexBasis: props.flexBasis }}>
            <ul>


                <Hobby logo={robot} description={'Machine Learning'} />


                <Parallax styleInner={{position:'absolute'}} className={d.parallax} offsetYMax={-0} offsetYMin={0} tag="figure">
                    <Hobby logo={book} description={'Science & Literature'} />
                </Parallax>


                <Hobby logo={brain} description={'Cognitive Psychology'} />
                <Hobby logo={videogame} description={'Video Games'} />
                <Hobby logo={art} description={'Drawing & Painting'} />


                {/* <Parallax className={d.parallax} offsetYMax={-50} offsetYMin={50} slowerScrollRate tag="figure">
                </Parallax> */}

            </ul>
        </div>
    )
}

export default Hobbies;