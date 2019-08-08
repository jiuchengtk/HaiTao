import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';
import '@/main.scss';
import App from '@/layout/App';
import DetailApp from '@/layout/DetailApp';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Router>
        <Switch>
            <Route path = '/detail' component = { DetailApp } />
            <Route path = '/' component = { App } />
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
