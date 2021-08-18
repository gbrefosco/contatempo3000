import React from "react";
//import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from "./routes/Router";

import SideNavMenu from "./components/global/sideNav";
import { BrowserRouter } from "react-router-dom";

function App() {

    return (
        <>
            <BrowserRouter>
                <SideNavMenu />
                <Routes />
            </BrowserRouter>
        </>
    );
}

export default App;