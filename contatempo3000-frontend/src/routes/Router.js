import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import Graphics from '../pages/Graphics';
import Profile from '../pages/Profile';
import Project from '../pages/Project';
import Client from '../pages/Client';
import SignUp from '../components/singIn/signup';
import Login from '../components/singIn/login';

export default function Routes() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/graphics" component={Graphics} />
                <Route path="/profile" component={Profile} />
                <Route path="/project" component={Project} />
                <Route path="/client" component={Client} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
            </Switch>
        </>
    );
}