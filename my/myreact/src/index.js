import React from 'react';
import ReactDOM from 'react-dom';

import App from './layout/App';
import DetailApp from '@/layout/DetailApp'
import * as serviceWorker from './serviceWorker';

import './main.scss';
import {HashRouter as Router, Switch,Route} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';



ReactDOM.render(
  <Router>
    <Switch>
      <Route path = "/detail" component = { DetailApp }/>
      <Route path = "/" component = {App}/>
    </Switch>
  </Router>,
  document.getElementById('root')
  )
  
  
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  // ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
