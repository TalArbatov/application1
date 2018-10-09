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

import { withNamespaces, NamespacesConsumer, Trans } from "react-i18next";


const Hobbies = props => {
    return [
        //pc
        <MediaQuery minWidth={800}>

            <div className={d.container} >
                <ul>
                    <div className={d.expFlex}>
                    <li className={d.titleContainer}><p className={d.title}><Trans i18nKey="AboutMe.Hobbies.title" /></p></li>

                        <Fade right>
                            <Hobby logo={robot} description={<Trans i18nKey="AboutMe.Hobbies.Hobby1" />} />
                            <Hobby logo={book} description={<Trans i18nKey="AboutMe.Hobbies.Hobby2" />} />
                            <Hobby logo={brain} description={<Trans i18nKey="AboutMe.Hobbies.Hobby3" />} />
                            <Hobby logo={videogame} description={<Trans i18nKey="AboutMe.Hobbies.Hobby4" />} />
                            <Hobby logo={art} description={<Trans i18nKey="AboutMe.Hobbies.Hobby5" />} />
                        </Fade>
                    </div>
                </ul>
            </div>
        </MediaQuery>,
        //phone
        <MediaQuery maxWidth={800}>

            <div className={d.container2} >
                <ul>
                    <div className={d.expFlex}>
                    <li className={d.titleContainer}><p className={d.title}><Trans i18nKey="AboutMe.Hobbies.title" /></p></li>

                        <Fade right>
                            <Hobby logo={robot} description={<Trans i18nKey="AboutMe.Hobbies.Hobby1" />} />
                            <Hobby logo={book} description={<Trans i18nKey="AboutMe.Hobbies.Hobby2" />} />
                            <Hobby logo={brain} description={<Trans i18nKey="AboutMe.Hobbies.Hobby3" />} />
                            <Hobby logo={videogame} description={<Trans i18nKey="AboutMe.Hobbies.Hobby4" />} />
                            <Hobby logo={art} description={<Trans i18nKey="AboutMe.Hobbies.Hobby5" />} />
                        </Fade>
                    </div>
                </ul>
            </div>
        </MediaQuery>
    ]
}

export default withNamespaces("translation")(Hobbies);
