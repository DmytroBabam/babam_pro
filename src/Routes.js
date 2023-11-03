import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NewPage from "./NewPage";
import NotFoundPage from "./NotFoundPage"; // Импортируйте компонент NotFoundPage

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/newpage">
                    <NewPage />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route>
                    <NotFoundPage /> {/* Этот маршрут будет срабатывать, если не совпадает ни один другой маршрут */}
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;
