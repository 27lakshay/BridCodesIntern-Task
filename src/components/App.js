import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "../styles/app.css";
import history from "../history";

import LandingPage from "./landingPage";
import GlobalStyle from "../globalStyle";
import Navbar from "./navbar";
import MobileNav from "./mobileNav";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router history={history}>
            <GlobalStyle />
            <Navbar toggle={toggle} />
            <MobileNav isOpen={isOpen} toggle={toggle} />
            <Switch>
                <Route path="/" exact component={LandingPage} />
            </Switch>
        </Router>
    );
}

export default App;
