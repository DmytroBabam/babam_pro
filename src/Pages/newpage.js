import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./homepage";

function Routes() {
    return (
        <Router>

            <Route path="/newpage">
                <newpage/>
            </Route>
            <Route path="/">
                <HomePage/>
            </Route>
        </Router>
    );
}

export default Routes;
