import React, { Component } from 'react';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";
import NotMain from './components/NotMain/NotMain';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import {createStore } from 'redux';
import rootReducer from './store/rootReducer';

const store = createStore(rootReducer)

export default class App extends Component {
    render() {
        return (
            <LocalizeProvider>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/skills" component={NotMain} />
                    </Switch>
                </Router>
                </Provider>
            </LocalizeProvider>
        );
    }
}