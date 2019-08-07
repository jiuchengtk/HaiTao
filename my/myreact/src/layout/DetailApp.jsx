import React from 'react';
import Detail from '@/views/Detail';
import {Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className = "container">
    <Switch>
      <Route path = "/detail/:iid" component = {
        Detail } />
    </Switch>
    </div>
  )
}

export default App