/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import { GoogleLogin } from 'react-google-login';
import * as serviceWorker from './serviceWorker';

import Menu from './Menu';

ReactDOM.render(<Menu />, document.getElementById('root')
);*/


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';
import About from './About';
import Cadastro from './Cadastro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path='/jogar' component={() => { 
     window.location.href = 'https://sgmr.herokuapp.com/'; 
     return null;}}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
