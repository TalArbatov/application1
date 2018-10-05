import React from "react";
import d from "./GreetBanner.css";
import Logo from './Logo/Logo';

import contact_github from '../../images/contact/contact_github.svg';
import contact_facebook from '../../images/contact/contact_facebook.svg';
import contact_gmail from '../../images/contact/contact_gmail.svg';
import contact_linkedin from '../../images/contact/contact_linkedin.svg';
import phone from '../../images/phone.svg';

const GreetBanner = props => {
  return (
    <div className={d.banner}>
      <div className={d.flexContainer}>
        <p>Interested in hiring or collaborating? </p>
        <p>
          I am available during the entire week through LinkedIn, GitHub, Facebook and Gmail.
        </p>
        <div className={d.mediaContainer}>
            <Logo logo={contact_linkedin} text='LinkedIn' link='https://www.linkedin.com/in/tal-arbatov-303a68164/'/>
            <Logo logo={contact_github} text='GitHub' link='https://github.com/TalArbatov'/>
            <Logo logo={contact_facebook} text='Facebook' link='https://www.facebook.com/tal.arbatovnew.9'/>
            <Logo logo={contact_gmail} text='Gmail' link='mailto:talarbatov98@gmail.com'/>
        </div>
        <div className={d.phone}>
        <img src={phone} alt='phone'></img>
        <p>+972-50-399-3701</p>
        </div>
        
      </div>
    </div>
  );
};
export default GreetBanner;
