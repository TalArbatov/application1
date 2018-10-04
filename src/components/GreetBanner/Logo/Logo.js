import React from "react";
import d from "./Logo.css";

const Logo = props => {
  return (
    <div className={d.container}>
      <a href={props.link}>
        <img src={props.logo} />
      </a>
    </div>
  );
};

export default Logo;
