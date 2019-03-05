import React from 'react';
import ReactDOM from 'react-dom';
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
//import App from './App';
import Photos from './Photos';
//import Albums from './Albums';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Photos />, document.getElementById('root'));


//const routing = (
//  <Router>
//    <div>
//      <Route path="/albums" component={Albums} />
//      <Route path="/photos" component={Photos} />
//    </div>
//  </Router>
//)
//ReactDOM.render(routing, document.getElementById('root'))




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
