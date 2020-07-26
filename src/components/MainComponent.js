import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './Home';
import HeaderComponent from './HeaderComponent';
import Build from './Build';
import Profile from './Profile';

export class MainComponent extends Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/build' component={Build}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default MainComponent
