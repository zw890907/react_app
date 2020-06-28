import React, { Fragment } from 'react';
import defaultRoutes from './routes.js';
import { HashRouter, Switch } from 'react-router-dom'

function App() {
    return (
        <Fragment>
            <HashRouter>
                <Switch>
                    {defaultRoutes}
                </Switch>
            </HashRouter>
        </Fragment> 
    );
}

export default App;
