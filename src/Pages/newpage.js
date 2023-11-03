import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./homepage";
import NotFoundPage from "./notfoundpage";


function Routes() {
    return (
        <Router>

                <Route path="/newpage">
                    <newpage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>

        </Router>
    );
}

export default Routes;
