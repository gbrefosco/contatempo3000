import React from "react";

import SideNavMenu from "./components/global/sideNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Graphics from "./pages/Graphics";
import Profile from "./pages/Profile";
import SignUp from "./components/singIn/signup"

function App() {
    return (
        <>
            <Router>
                <SideNavMenu />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/graphics" component={Graphics}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/signup" component={SignUp}/>
                </Switch>       
            </Router>
        </>
    );
}

export default App;