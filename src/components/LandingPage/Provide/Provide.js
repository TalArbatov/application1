import React from 'react';
import ProvideCard from './ProvideCard/ProvideCard';
import d from './Provide.css';
import { Parallax } from 'react-scroll-parallax';

// web
import web from '../../../images/provide-icons/web.svg'
// logos
import angular from '../../../images/provide-icons/web/angular.svg';
import bootstrap from '../../../images/provide-icons/web/bootstrap.svg';
import materialUi from '../../../images/provide-icons/web/material-ui.svg';
import photoshop from '../../../images/provide-icons/web/photoshop.svg';
import react from '../../../images/provide-icons/web/react.svg';
import redux from '../../../images/provide-icons/web/redux.svg';

// backend
import backend from '../../../images/provide-icons/backend.svg'
// logos
import nodejs from '../../../images/provide-icons/backend/nodejs.svg';
import asp from '../../../images/provide-icons/backend/asp.svg';
import npm from '../../../images/provide-icons/backend/npm.svg';
// import https from '../../../images/provide-icons/backend/https.svg';
import php from '../../../images/provide-icons/backend/php.svg';
import ruby from '../../../images/provide-icons/backend/ruby.svg';


//workflow
import workflow from '../../../images/provide-icons/workflow.svg'
// logos
import slack from '../../../images/provide-icons/workflow/slack.svg';
import circleci from '../../../images/provide-icons/workflow/circleci.svg';
import git from '../../../images/provide-icons/workflow/git.svg';
import github from '../../../images/provide-icons/workflow/github.svg';
import grunt from '../../../images/provide-icons/workflow/grunt.svg';
import webpack from '../../../images/provide-icons/workflow/webpack.svg';

//database
import database from '../../../images/provide-icons/database.svg'
// logos
import firebase from '../../../images/provide-icons/database/firebase.svg';
import mongodb from '../../../images/provide-icons/database/mongodb.svg';
import ssms from '../../../images/provide-icons/database/ssms.svg';
import graphql from '../../../images/provide-icons/database/graphql.svg';
import ssl from '../../../images/provide-icons/database/ssl.svg';




import MediaQuery from 'react-responsive';


const Provide = () => {
    return (
        //     <Parallax
        //     className={d.parallax}

        //     offsetXMax={50}
        //     offsetXMin={-50}
        //     slowerScrollRate
        //     tag="figure"
        // >
        <div className={d.container}>
            <div className={d.cardList}>
                <MediaQuery minWidth={1224}>

                    <Parallax className={d.parallax} offsetXMax={50} offsetXMin={-90} slowerScrollRate tag="figure">
                        <ProvideCard info={'Responsive and elegant Web & Mobile Applications'} icon={web} logos={[{ src: materialUi, size: 40 }, { src: react, size: 50 }, { src: angular, size: 50 }, { src: bootstrap, size: 50 }, { src: photoshop, size: 50 }, { src: redux, size: 50 }]} />
                    </Parallax>

                    <Parallax className={d.parallax} offsetXMax={17} offsetXMin={-30} slowerScrollRate tag="figure">
                        <ProvideCard info={'Highspeed and reliable  backend and API solutions'} icon={backend} logos={[{ src: nodejs, size: 35 }, { src: asp, size: 50 }, { src: ruby, size: 50 }, { src: npm, size: 25 }, { src: php, size: 35 }]} />
                    </Parallax>

                    <Parallax className={d.parallax} offsetXMax={-17} offsetXMin={30} slowerScrollRate tag="figure">
                        <ProvideCard info={'Clean workflow and fast team-oriented integration'} icon={workflow} logos={[{ src: slack, size: 50 }, { src: circleci, size: 50 }, { src: git, size: 50 }, { src: github, size: 50 }, { src: grunt, size: 50 }, { src: webpack, size: 60 }]} />
                    </Parallax>

                    <Parallax className={d.parallax} offsetXMax={-50} offsetXMin={90} slowerScrollRate tag="figure">
                        <ProvideCard info={'Secure database construction and administration'} icon={database} logos={[{ src: firebase, size: 50 }, { src: mongodb, size: 35 }, { src: ssl, size: 50 }, { src: ssms, size: 50 }, { src: graphql, size: 50 }]} />
                    </Parallax>
                </MediaQuery>


                <MediaQuery maxWidth={1224}>

                    <ProvideCard info={'Responsive and elegant Web & Mobile Applications'} icon={web} logos={[{ src: materialUi, size: 40 }, { src: react, size: 50 }, { src: angular, size: 50 }, { src: bootstrap, size: 50 }, { src: photoshop, size: 50 }, { src: redux, size: 50 }]} />

                    <ProvideCard info={'Highspeed and reliable  backend and API solutions'} icon={backend} logos={[{ src: nodejs, size: 35 }, { src: asp, size: 50 }, { src: ruby, size: 50 }, { src: npm, size: 25 }, { src: php, size: 35 }]} />

                    <ProvideCard info={'Clean workflow and fast team-oriented integration'} icon={workflow} logos={[{ src: slack, size: 50 }, { src: circleci, size: 50 }, { src: git, size: 50 }, { src: github, size: 50 }, { src: grunt, size: 50 }, { src: webpack, size: 60 }]} />

                    <ProvideCard info={'Secure database construction and administration'} icon={database} logos={[{ src: firebase, size: 50 }, { src: mongodb, size: 35 }, { src: ssl, size: 50 }, { src: ssms, size: 50 }, { src: graphql, size: 50 }]} />
                </MediaQuery>

            </div>
        </div>
        // </Parallax>
    );
};

export default Provide;