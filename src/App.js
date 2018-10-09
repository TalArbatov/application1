import React, { Component } from "react";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";
import NotMain from "./components/NotMain/NotMain";

import { ConnectedRouter } from "react-router-redux";

export default class App extends Component {
  render() {
    return (
         <Router>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/skills" component={NotMain} />
                    </Switch>
                </Router> 
        
    );
  }
}
