import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;
import { newpage } from '/Pages/newpage';
import { NotfoundPage } from '/Pages/notfoundpage';

export const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <newpage/>
                </Route>
                <Route path='/pages/:pagesId'>
                </Route>
                <Route>
                    <NotfoundPage/>
                </Route>
            </Switch>
        </Router>
    );
}

