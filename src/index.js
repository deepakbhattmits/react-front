import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/main.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';   

// import App from './App';
import {BrowserRouter as Router}  from 'react-router-dom';
import ReactRouter from './router/routes'; 

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
        <Router>
          <ReactRouter/>
        </Router>, document.getElementById('root')); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
