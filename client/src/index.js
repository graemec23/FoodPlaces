import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Store from './store';
import Landing from './Landing';

const FourOhFour = () => <h1>404</h1>

const App = () =>
    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>
    </Provider>

render(React.createElement(App), document.getElementById('root'));