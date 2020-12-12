import React from 'react';
import './app.component.css';

import Header from '../header/header.component';
import Client from '../../page/client/client.page';
import Home from '../../page/home/home.page';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../common/style';



const App: React.FC = () =>{
    return(
        <Router>
            <Header />
            <Switch>
                <Route path="/client">
                    <Client />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;