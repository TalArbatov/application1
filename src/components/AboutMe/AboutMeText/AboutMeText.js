import React from "react";
import avatar from "../../../images/about_me/avatar.png";
import d from "./AboutMeText.css";
import { withNamespaces, NamespacesConsumer, Trans } from "react-i18next";

const AboutMeText = props => {
  return (
    <div
    className={d.parentContainer}
      style={{
        display: "inline",
        flexBasis: props.flexBasis,
        alignSelf: "flex-start"
      }}
    >
      <div className={d.container}>
        <div>
          <img className={d.avatar} src={avatar} alt="avatar" />
        </div>

        <div className={d.textTitle}>
          <Trans i18nKey="AboutMe.mainText.title" />
        </div>
      </div>

      <div className={d.text}>
        <p>
          <Trans i18nKey="AboutMe.mainText.p1" />
        </p>
        <p>
          <Trans i18nKey="AboutMe.mainText.p2" />
        </p>
        <p>
        <Trans i18nKey="AboutMe.mainText.p3" />
        </p>
        <p>
        <Trans i18nKey="AboutMe.mainText.p4" />
        </p>
        <p>
        <Trans i18nKey="AboutMe.mainText.p5" />
        </p>
      </div>
    </div>
  );
};

export default withNamespaces("translation")(AboutMeText);
