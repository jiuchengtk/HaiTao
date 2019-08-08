import React, { Component } from 'react';
import Detail from '@/views/Detail';
import { Switch, Route } from 'react-router-dom';

class DetailApp extends Component {
    render () {
        return (
            <Switch>
                <Route path = "/detail/:id" component = { Detail } />
            </Switch>
        )
    }
}
export default DetailApp
