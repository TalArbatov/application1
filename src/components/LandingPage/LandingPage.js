import React from 'react';
import d from './LandingPage.css';
import background from '../../images/background.jpg';
import Banner from './Banner/Banner';
import Provide from './Provide/Provide';

const LandingPage = () => {
    return (
      <div className={d.container}>
          <Banner />
          <Provide />
      </div>
    );
};



export default LandingPage;