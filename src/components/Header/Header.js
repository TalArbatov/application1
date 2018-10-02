import React from 'react';
import d from './Header.css';

const Header = () => {
    return (
       <div className={d.navbar}>
           <ul>
               <li><a href='#'>About Me</a></li>
               <li><a href='#'>Skills</a></li>
               <li><a href='#'>Resume</a></li>
               <li><a href='#'>Contact</a></li>
           </ul>
       </div>

    );
};

export default Header;