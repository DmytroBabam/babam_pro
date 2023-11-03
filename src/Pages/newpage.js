import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NewPage from "./NewPage"; // Импортируйте компонент для новой страницы

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/newpage">
                    <NewPage /> {/* Свяжите компонент NewPage с путем '/newpage' */}
                </Route>
                <Route path="/">
                    <HomePage /> {/* Свяжите компонент HomePage с корневым путем '/' */}
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;
