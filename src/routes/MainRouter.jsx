import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import ProductDashboard from '../containers/ProductDashboard';

export default class MainRouter extends Component {
    render () {
        return (
            <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/dashboard" component={ProductDashboard}/>
            </Switch>
        )
    }
}
