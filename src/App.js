import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/font-awesome.min.css';
import Header from './layout/Header';
import Home from './page/Home';


const About = () => (
  <div>
    <Header />
    <h1>About</h1>
  </div>
);
const Topics = () => (
  <div>
    <Header />
    <h1>fuck u</h1>
  </div>
);

const NotFoundPage = () => (
  <div>
    <Header />
    <div>
      <h3>No match for <code>{window.location.pathname}</code></h3>
    </div>
  </div>
);

//前端路由
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
