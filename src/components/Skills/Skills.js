import React from "react";
import d from "./Skills.css";
import ChartList from "./ChartList/ChartList";
import MediaQuery from "react-responsive";
import { connect } from "react-redux";
import { withNamespaces, NamespacesConsumer, Trans } from "react-i18next";

class Skills extends React.Component {

  render() {
    
    let style;
    if(this.props.rootReducer.language === 'en')
      style = {direction:'ltr'}
    else if (this.props.rootReducer.language === 'he')
      style = {direction: 'rtl'}
    
    return (
      <div className={" " + d.container}>
        {/* <div className={d.titleContainer}><p>MY SKILLS</p></div> */}
        {/* <button onClick={() => console.log(this.props)}>debug</button> */}
        <MediaQuery minWidth={850}>
          <div className={" " + d.flexContainer}>
            <ChartList />
            <div style={style} className={d.text}>
              <p className={d.title}><Trans i18nKey="Skills.title" /></p>
              <p>
              <Trans i18nKey="Skills.p1" />
              </p>
              <p>
              <Trans i18nKey="Skills.p2" />

              </p>
              <p>
              <Trans i18nKey="Skills.p3" />

              </p>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={850}>
          <div className={" " + d.flexContainer}>
            <div className={d.text}>
              <p className={d.title}><Trans i18nKey="Skills.title" /></p>
              <p>
              <Trans i18nKey="Skills.p1" />

              </p>
              <p>
              <Trans i18nKey="Skills.p2" />

              </p>
              <p>
              <Trans i18nKey="Skills.p3" />

              </p>
            </div>
            <ChartList />
          </div>
        </MediaQuery>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rootReducer: state
  };
};
export default connect(mapStateToProps)(withNamespaces("translation")(Skills));
