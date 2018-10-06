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
import MediaQuery from 'react-responsive';


const Hobbies = props => {
    return [
        //pc
        <MediaQuery minWidth={700}>

            <div className={d.container} >
                <ul>
                    <div className={d.expFlex}>
                    <li className={d.titleContainer}><p className={d.title}>My Hobbies</p></li>

                        <Fade right>
                            <Hobby logo={robot} description={'Machine Learning'} />
                            <Hobby logo={book} description={'Science & Literature'} />
                            <Hobby logo={brain} description={'Cognitive Psychology'} />
                            <Hobby logo={videogame} description={'Video Games'} />
                            <Hobby logo={art} description={'Drawing & Painting'} />
                        </Fade>
                    </div>
                </ul>
            </div>
        </MediaQuery>,
        //phone
        <MediaQuery maxWidth={700}>

            <div className={d.container2} >
                <ul>
                    <div className={d.expFlex}>
                    <li className={d.titleContainer}><p className={d.title}>My Hobbies</p></li>

                        <Fade right>
                            <Hobby logo={robot} description={'Machine Learning'} />
                            <Hobby logo={book} description={'Science & Literature'} />
                            <Hobby logo={brain} description={'Cognitive Psychology'} />
                            <Hobby logo={videogame} description={'Video Games'} />
                            <Hobby logo={art} description={'Drawing & Painting'} />
                        </Fade>
                    </div>
                </ul>
            </div>
        </MediaQuery>
    ]
}

export default Hobbies;