import React from "react";
import d from "./Skills.css";
import ChartList from "./ChartList/ChartList";
import MediaQuery from 'react-responsive';

const Skills = props => {
  return (
    <div className={" " + d.container}>
    {/* <div className={d.titleContainer}><p>MY SKILLS</p></div> */}
    <MediaQuery minWidth={850}>
    <div className={" " + d.flexContainer}>
    <ChartList />
        <div className={d.text}>
            <p className={d.title}>MY SKILLS</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim praesent elementum facilisis leo. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Augue ut lectus arcu bibendum at varius vel pharetra. Lacus</p>
            <p>Pellentesque id nibh tortor id. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Massa placerat duis ultricies lacus sed turpis tincidunt id. Auctor augue mauris augue neque gravida. Ultricies lacus sed turpis tincidunt. Condimentum</p>
        </div>
      </div>
    </MediaQuery>
    <MediaQuery maxWidth={850}>
    <div className={" " + d.flexContainer}>
        
        <div className={d.text}>
            <p className={d.title}>MY SKILLS</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim praesent elementum facilisis leo. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Augue ut lectus arcu bibendum at varius vel pharetra. Lacus</p>
            <p>Pellentesque id nibh tortor id. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Massa placerat duis ultricies lacus sed turpis tincidunt id. Auctor augue mauris augue neque gravida. Ultricies lacus sed turpis tincidunt. Condimentum</p>
        </div>
        <ChartList />
      </div>
    </MediaQuery>
      
    </div>
  );
};

export default Skills;
