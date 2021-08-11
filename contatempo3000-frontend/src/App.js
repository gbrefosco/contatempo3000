import React, { useState } from "react";
import SideNavMenu from "./components/global/sideNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Graphics from "./pages/Graphics";
import Profile from "./pages/Profile";
import SignUp from "./components/singIn/signup";
import Login from "./components/singIn/login";
//<SideNavMenu />
function App() {
    const [logar,setLogar]=useState(false)
    const paginas = 
        (
            <>
                <Router>
                    
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/graphics" component={Graphics}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/login" component={Login}/>
                    </Switch>       
                </Router>
            </>
        );
    

    return (
        <>
            {paginas}
        </>
    );
}

export default App;