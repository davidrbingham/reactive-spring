import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import Home from '../page/Home.jsx'

export default class Application extends React.Component {
    render() {
        const history = syncHistoryWithStore(hashHistory, this.props.store);
        return (
            <Router history={ history }>
                <Route path="/">
                    <IndexRedirect to="webflux/home"/>
                </Route>
                <Route path="webflux">
                    <Route path="home" component={ Home }/>
                </Route>
            </Router>
        );
    }
}