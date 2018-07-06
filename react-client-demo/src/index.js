    import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router'
//import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import LoginPage from './component/LoginPage';
import MainPage from './component/MainPage';

//ReactDOM.render(<LoginPage />, document.getElementById('loginpage'));

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="login" component={LoginPage}/>
    <Route path="main" component={MainPage}/>

  </Router>
), document.getElementById('mainpage'))
registerServiceWorker();
