import React from "react";
import { Route, Switch } from 'react-router-dom';

import { BrowserRouter } from "react-router-dom";

import SignUp from '../src/components/singIn/signup';
import Login from '../src/components/singIn/login';
import Home from '../src/pages/Home';
import Graphics from '../src/pages/Graphics';
import Profile from '../src/pages/Profile';
import Project from '../src/pages/Project';
import Client from '../src/pages/Client';

function App() {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/singup" component={SignUp} />
                    <Route path="/home" component={Home} />
                    <Route path="/graphics" component={Graphics} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/project" component={Project} />
                    <Route path="/client" component={Client} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;