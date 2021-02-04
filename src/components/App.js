import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "../styles/app.css";
import history from "../history";

import LandingPage from "./landingPage";
import GlobalStyle from "../globalStyle";

function App() {
    return (
        <Router history={history}>
            <GlobalStyle />
            <Switch>
                <Route path="/" exact component={LandingPage} />
            </Switch>
        </Router>
    );
}

export default App;
