import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

import SideNavMenu from "./components/global/sideNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Graphics from "./pages/Graphics";
import Profile from "./pages/Profile";
import SignUp from "./components/singIn/signup"
import Login from "./components/singIn/login"

function App() {

    const [inactive, setInactive] = useState(false);

    return (
        <>
            <Router>
                <CssBaseline />
                <SideNavMenu onCollapse={(inactive) => {
                    setInactive(inactive);
                }} />
                <Switch>
                    <div className={`body ${inactive ? 'inactive' : ''}`}>
                        <Route path="/" exact component={Home} />
                        <Route path="/graphics" component={Graphics} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/login" component={Login} />
                    </div>
                </Switch>
            </Router>
        </>
    );
}

export default App;