import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/home';
import Welcome from './containers/welcome';
import UserList from './containers/userList';

export default (
    <Router>
        <div>
            <Route exact path="/" name="Login" component={Home} />
            <Route exact path="/welcome" name="welcome" component={Welcome} />
            <Route exact path="/userList" name="welcome" component={UserList} />
        </div>
    </Router>
);